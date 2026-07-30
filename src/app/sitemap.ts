import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/** Both languages are listed, each pointing at the other via alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/privacy', '/terms'];
  return pages.flatMap((path) => [
    {
      url: `${SITE_URL}${path || '/'}`,
      changeFrequency: path ? ('yearly' as const) : ('monthly' as const),
      priority: path ? 0.3 : 1,
      alternates: { languages: { vi: `${SITE_URL}${path || '/'}`, en: `${SITE_URL}/en${path}` } },
    },
    {
      url: `${SITE_URL}/en${path}`,
      changeFrequency: path ? ('yearly' as const) : ('monthly' as const),
      priority: path ? 0.3 : 0.9,
      alternates: { languages: { vi: `${SITE_URL}${path || '/'}`, en: `${SITE_URL}/en${path}` } },
    },
  ]);
}
