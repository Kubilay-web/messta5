"use client";

// app/lib/useMesstaCopy.ts
// İSTEMCİ bileşenleri için Messta landing içeriği. Locale çerezden (NEXT_LOCALE)
// türetilir ve "localechange" olayıyla canlı güncellenir. Provider gerekmez.

import { getMesstaCopy, type MesstaCopy } from "@/app/components/site-i18n/messta-content";
import { useClientLocale } from "./useLocale";

export function useMesstaCopy(): { copy: MesstaCopy; lang: "tr" | "en" | "de" } {
  const lang = useClientLocale();
  return { copy: getMesstaCopy(lang), lang };
}
