"use client";

// app/lib/useLocaleSwitch.ts
// Dil değiştirmede URL'i de değiştiren istemci yardımcısı.
// Çerezi yazar (setLocaleCookie) + geçerli yolu yeni locale önekine taşır.
// Böylece /tr/shop → /en/shop olur; sunucu yeniden render ile doğru dili besler.

import { usePathname, useRouter } from "next/navigation";
import { swapLocaleInPath, type Locale } from "./i18n-routing";
import { setLocaleCookie } from "./useLocale";

export function useLocaleSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  return (l: Locale) => {
    setLocaleCookie(l);
    // Geçerli çevrili+önekli yolu hedef dilin çevrili yoluna taşı.
    // "/tr/magaza/sepet" + "en" → "/en/shop/cart"
    const target = swapLocaleInPath(pathname || "/", l);
    router.push(target);
    router.refresh();
  };
}
