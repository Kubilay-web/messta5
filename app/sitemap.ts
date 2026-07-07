import type { MetadataRoute } from "next";
import {
  LOCALES,
  DEFAULT_LOCALE,
  siteUrl,
  localizedHref,
} from "@/app/lib/i18n-routing";

// Sitemap saatte bir yenilenir. Üretimde mutlak host için NEXT_PUBLIC_SITE_URL ayarlayın.
export const revalidate = 3600;

type Entry = MetadataRoute.Sitemap[number];

// Her yol için tek giriş + hreflang alternates (tr/en/de + x-default).
function entry(
  base: string,
  path: string,
  opts: {
    lastModified?: string | Date;
    changeFrequency?: Entry["changeFrequency"];
    priority?: number;
  }
  
): 
Entry {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${base}${localizedHref(l, path)}`;
  languages["x-default"] = `${base}${localizedHref(DEFAULT_LOCALE, path)}`;
  return {
    url: `${base}${localizedHref(DEFAULT_LOCALE, path)}`,
    lastModified: opts.lastModified ?? new Date(),
    changeFrequency: opts.changeFrequency ?? "weekly",
    priority: opts.priority ?? 0.5,
    alternates: { languages },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl();

  const staticEntries: Entry[] = [
    entry(base, "/", { changeFrequency: "daily", priority: 1 }),
  ];

  return staticEntries;
}
