"use client";

// app/components/LocaleLink.tsx
// next/link yerine geçen, geçerli locale'i URL'den okuyup string href'leri
// otomatik /tr /en /de önekiyle üreten Link. Kullanım: sadece importu değiştir:
//   -import Link from "next/link";
//   +import Link from "@/app/components/LocaleLink";
// Harici (http...), hash (#...) ve obje href'lere dokunmaz.

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  DEFAULT_LOCALE,
  isLocale,
  localizedHref,
  type Locale,
} from "@/app/lib/i18n-routing";

// Tarayıcı yolunun ilk segmentinden geçerli locale'i türet (URL önekli olduğu için doğru).
export function useCurrentLocale(): Locale {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1];
  return isLocale(seg) ? seg : DEFAULT_LOCALE;
}

type LinkProps = React.ComponentProps<typeof Link>;

const LocaleLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function LocaleLink({ href, ...rest }, ref) {
    const locale = useCurrentLocale();
    const computed =
      typeof href === "string" ? localizedHref(locale, href) : href;
    return <Link ref={ref} href={computed} {...rest} />;
  }
);

export default LocaleLink;

// router.push/replace çağrılarını locale-önekleyen sarmalayıcı.
export function useLocaleRouter() {
  const router = useRouter();
  const locale = useCurrentLocale();
  const wrap =
    (fn: (href: string, opts?: { scroll?: boolean }) => void) =>
    (href: string, opts?: { scroll?: boolean }) =>
      fn(typeof href === "string" ? localizedHref(locale, href) : href, opts);
  return {
    ...router,
    push: wrap(router.push),
    replace: wrap(router.replace),
  };
}
