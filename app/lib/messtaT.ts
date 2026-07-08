// app/lib/messtaT.ts
// SUNUCU bileşenleri için Messta landing çeviri yardımcısı.
// Locale çerezden/URL'den (getServerLocale) gelir. page.tsx gibi async server
// bileşenleri kullanır.

import { getServerLocale } from "./locale";
import { getMesstaCopy, type MesstaCopy } from "@/app/components/site-i18n/messta-content";
import type { Locale } from "./i18n-routing";

export async function getMesstaT(): Promise<{ copy: MesstaCopy; lang: Locale }> {
  const lang = (await getServerLocale()) as Locale;
  return { copy: getMesstaCopy(lang), lang };
}
