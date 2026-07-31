import type { MetadataRoute } from 'next';
import { CONTENT_UPDATED, SITE_URL } from '@/lib/site';

/** Both languages are listed, each pointing at the other via alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/privacy', '/terms'];
  return pages.flatMap((path) => {
    const alternates = {
      languages: { vi: `${SITE_URL}${path || '/'}`, en: `${SITE_URL}/en${path}` },
    };
    const changeFrequency = path ? ('yearly' as const) : ('monthly' as const);
    return [
      {
        url: `${SITE_URL}${path || '/'}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency,
        priority: path ? 0.3 : 1,
        alternates,
      },
      {
        url: `${SITE_URL}/en${path}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency,
        priority: path ? 0.3 : 0.9,
        alternates,
      },
    ];
  });
}
