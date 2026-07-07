"use client";

// app/lib/useSiteT.ts
// İSTEMCİ bileşenleri için site çeviri hook'u (SITE_DICT). Locale, tarayıcı yolunun
// ilk segmentinden (URL) türetilir → flash yok, SSR ile tutarlı. Provider gerekmez.

import { usePathname } from "next/navigation";
import {
  SITE_DICT,
  SiteDictKey,
} from "@/app/components/site-i18n/site-dictionary";
import { isLocale, DEFAULT_LOCALE } from "./i18n-routing";

// Not: siteT.ts'ten İÇE AKTARMA — o modül next/headers çeker ve client bundle'ı bozar.
const SITE_LOCALE_TAG = { tr: "tr-TR", en: "en-US", de: "de-DE" } as const;

export function useSiteT() {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1];
  const lang = isLocale(seg) ? seg : DEFAULT_LOCALE;
  const t = (k: SiteDictKey) => SITE_DICT[lang]?.[k] ?? SITE_DICT.tr[k] ?? k;
  return { t, lang, localeTag: SITE_LOCALE_TAG[lang] };
}
