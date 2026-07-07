// app/lib/i18n-routing.ts
// URL tabanlı locale yönlendirme + ÇEVRİLMİŞ YOL (localized slug) yardımcıları.
// Örn: /login → /tr/giris, /en/login, /de/anmelden ; /shop/cart → /tr/magaza/sepet ...
//
// Kod içinde linkler her zaman DAHİLİ (canonical) yol ile yazılır: "/shop/cart".
// - localizedHref(locale, internal) → "/tr/magaza/sepet" (görünen URL)
// - toInternalPath(locale, localized) → "/shop/cart" (middleware rewrite hedefi)
// Sunucu bileşenleri geçerli DAHİLİ yolu `x-internal-path` header'ından okur.

export const LOCALES = ["tr", "en", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "tr";

// Open Graph için BCP-47 bölge kodları (og:locale).
export const OG_LOCALE: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
};

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as readonly string[]).includes(v);
}

// --- Çevrilmiş yol tablosu ---
// internal: dahili (dosya sistemi) yolu. loc: her dildeki görünen yol.
type LocMap = Record<Locale, string>;
const ROUTE_L10N: { internal: string; loc: LocMap }[] = [
  { internal: "/login", loc: { tr: "/giris", en: "/login", de: "/anmelden" } },
  { internal: "/register", loc: { tr: "/kayit", en: "/register", de: "/registrieren" } },
];

// Dahili yolları uzunluğa göre azalan sırada eşle (en uzun önek önce).
const BY_INTERNAL_DESC = [...ROUTE_L10N].sort(
  (a, b) => b.internal.length - a.internal.length
);
// Her locale için görünen yolları uzunluğa göre azalan sırada.
const BY_LOC_DESC: Record<Locale, { internal: string; loc: LocMap }[]> = {
  tr: [...ROUTE_L10N].sort((a, b) => b.loc.tr.length - a.loc.tr.length),
  en: [...ROUTE_L10N].sort((a, b) => b.loc.en.length - a.loc.en.length),
  de: [...ROUTE_L10N].sort((a, b) => b.loc.de.length - a.loc.de.length),
};

function isSegPrefix(path: string, prefix: string): boolean {
  return path === prefix || path.startsWith(prefix + "/");
}

// Dahili yolu (canonical) verilen dilin görünen yoluna çevirir. Dinamik son ek korunur.
// "/shop/blog/my-post" (tr) → "/magaza/blog/my-post"
export function toLocalizedPath(locale: Locale, internal: string): string {
  if (internal === "/" || !internal.startsWith("/")) return internal;
  for (const r of BY_INTERNAL_DESC) {
    if (isSegPrefix(internal, r.internal)) {
      return r.loc[locale] + internal.slice(r.internal.length);
    }
  }
  return internal;
}

// Bir dilin görünen yolunu dahili (canonical) yola çevirir (middleware rewrite için).
// "/magaza/sepet" (tr) → "/shop/cart"
export function toInternalPath(locale: Locale, localized: string): string {
  if (localized === "/" || !localized.startsWith("/")) return localized;
  for (const r of BY_LOC_DESC[locale]) {
    const l = r.loc[locale];
    if (isSegPrefix(localized, l)) {
      return r.internal + localized.slice(l.length);
    }
  }
  return localized;
}

// "/tr/magaza/sepet" → { locale: "tr", pathname: "/magaza/sepet" (görünen, çevrili) }
export function stripLocale(pathname: string): {
  locale: Locale | null;
  pathname: string;
} {
  const seg = pathname.split("/")[1];
  if (isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return { locale: seg, pathname: rest === "" ? "/" : rest };
  }
  return { locale: null, pathname };
}

// (locale, DAHİLİ yol) → görünen, önekli URL. (tr, "/shop/cart") → "/tr/magaza/sepet"
// Harici / relatif / hash / query linklere dokunmaz.
export function localizedHref(locale: Locale, internalPath: string = "/"): string {
  if (
    typeof internalPath !== "string" ||
    !internalPath.startsWith("/") ||
    internalPath.startsWith("//")
  ) {
    return internalPath;
  }
  const localized = toLocalizedPath(locale, internalPath);
  return localized === "/" ? `/${locale}` : `/${locale}${localized}`;
}

// Geçerli tarayıcı yolunu (çevrili + önekli) hedef dile taşır — dil değiştirici için.
// "/tr/magaza/sepet" + "en" → "/en/shop/cart"
export function swapLocaleInPath(browserPath: string, toLocale: Locale): string {
  const { locale: from, pathname: localizedRest } = stripLocale(browserPath);
  const fromLocale = from ?? DEFAULT_LOCALE;
  const internal = toInternalPath(fromLocale, localizedRest);
  return localizedHref(toLocale, internal);
}

// Sitenin mutlak kök URL'i. Öncelik: NEXT_PUBLIC_SITE_URL > istek host'u > BASE_URL.
export function siteUrl(host?: string | null, proto: string = "https"): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) return env.replace(/\/+$/, "");
  if (host) {
    const scheme = host.startsWith("localhost") || host.startsWith("127.") ? "http" : proto;
    return `${scheme}://${host}`.replace(/\/+$/, "");
  }
  return (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/+$/, "");
}

// Bir sayfanın canonical + hreflang alternates bloğu (Next Metadata.alternates).
// internalPath: locale'siz DAHİLİ yol ("/", "/shop", "/shop/premium-urun").
export function buildAlternates(
  currentLocale: Locale,
  internalPath: string,
  base: string
): { canonical: string; languages: Record<string, string> } {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = `${base}${localizedHref(l, internalPath)}`;
  }
  languages["x-default"] = `${base}${localizedHref(DEFAULT_LOCALE, internalPath)}`;
  return {
    canonical: `${base}${localizedHref(currentLocale, internalPath)}`,
    languages,
  };
}

// robots.ts için: özel dahili yolların TÜM dillerdeki önekli görünümleri.
export function localizedDisallow(internalPaths: string[]): string[] {
  const out: string[] = [];
  for (const p of internalPaths) {
    for (const l of LOCALES) out.push(localizedHref(l, p));
  }
  return Array.from(new Set(out));
}
