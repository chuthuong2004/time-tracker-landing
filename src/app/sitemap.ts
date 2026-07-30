import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://timetracker.io.vn', changeFrequency: 'monthly', priority: 1 }];
}
