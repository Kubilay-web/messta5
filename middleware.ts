// middleware.ts (PROJE KÖKÜ — Next.js middleware yalnızca burada veya src/ içinde çalışır)
// Görevler:
//  1) Locale yönlendirme: /tr /en /de öneklerini iç yola rewrite eder, x-locale header'ı besler.
//  2) Öneksiz sayfa isteklerini kullanıcının diline (çerez > Accept-Language > tr) 307 ile yönlendirir.
//  3) shop/api altındaki route'lara ve statik dosyalara dokunmaz.
//  4) Çok-alan (cleververwaltet.de/.at) tespitini x-site/x-hostname ile taşır.
//
// Not: Eski `userCountry` çerez mantığı buradan çıkarıldı — Edge middleware'e prisma/
// countries.json içeren ağır utils modülünü çekiyordu (bundle'da çözülemiyor). O çerez
// zaten queries/product.ts tarafından sunucu tarafında hesaplanıp okunuyor; middleware'e
// gerek yok.

import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  isLocale,
  stripLocale,
  toInternalPath,
  localizedHref,
  type Locale,
} from "@/app/lib/i18n-routing";

const LOCALE_COOKIE = "NEXT_LOCALE";

// Kullanıcının tercih ettiği dili tespit et: çerez → Accept-Language → varsayılan.
function detectLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  const accept = req.headers.get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const code = part.trim().slice(0, 2).toLowerCase();
    if (isLocale(code)) return code;
  }
  return DEFAULT_LOCALE;
}

// Çok-alan tespiti (SEO / SSR metadata için).
function detectSite(hostname: string): string {
  if (hostname.includes("cleververwaltet.de")) return "de";
  if (hostname.includes("cleververwaltet.at")) return "at";
  return "global";
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hostname = req.nextUrl.hostname;
  const fullHost = req.headers.get("host") ?? hostname; // port dahil (mutlak URL için)
  const site = detectSite(hostname);

  const { locale: urlLocale, pathname: localizedRest } = stripLocale(pathname);

  // Görünen (çevrili) yolu DAHİLİ yola çevir. Locale yoksa varsayılanla dene
  // (API tespiti + öneksiz yönlendirme için).
  const internal = toInternalPath(urlLocale ?? DEFAULT_LOCALE, localizedRest);

  // Downstream (layout/sayfa) sunucu bileşenlerinin okuyacağı istek header'ları.
  const reqHeaders = new Headers(req.headers);
  reqHeaders.set("x-hostname", fullHost);
  reqHeaders.set("x-site", site);
  reqHeaders.set("x-pathname", pathname);

  // --- 1) API yolları: locale'e karışma, olduğu gibi geç ---
  if (internal.startsWith("/api")) {
    if (urlLocale != null) {
      const url = req.nextUrl.clone();
      url.pathname = internal;
      return NextResponse.rewrite(url, { request: { headers: reqHeaders } });
    }
    return NextResponse.next({ request: { headers: reqHeaders } });
  }

  // --- 2) Önekli sayfa (/tr/giris, /tr/magaza/sepet ...): DAHİLİ yola rewrite ---
  if (urlLocale != null) {
    reqHeaders.set("x-locale", urlLocale);
    reqHeaders.set("x-internal-path", internal);

    const url = req.nextUrl.clone();
    url.pathname = internal;
    const res = NextResponse.rewrite(url, { request: { headers: reqHeaders } });

    // Çerezi URL diliyle senkron tut (istemci yardımcıları/switcher tutarlı olsun).
    if (req.cookies.get(LOCALE_COOKIE)?.value !== urlLocale) {
      res.cookies.set(LOCALE_COOKIE, urlLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return res;
  }

  // --- 3) Öneksiz istek: tespit edilen dile + ÇEVRİLMİŞ yola 307 ile yönlendir ---
  const detected = detectLocale(req);
  const target = req.nextUrl.clone();
  target.pathname = localizedHref(detected, internal); // "/shop/cart" → "/tr/magaza/sepet"
  return NextResponse.redirect(target, 307);
}

export const config = {
  // _next, statik dosyalar (uzantılı), ve SEO dosyaları (robots/sitemap/manifest) hariç her yol.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|assets/|.*\\..*).*)",
  ],
};
