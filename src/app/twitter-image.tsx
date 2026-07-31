import { ogImage, OG_SIZE } from '@/lib/og';
import { t } from '@/lib/i18n';

/* Same card as Open Graph. It is a separate file because Next only emits
   `twitter:image` for a `twitter-image` convention — there is no fallback from
   `opengraph-image` — and X reads the Twitter tag in preference. */

export const alt = t('vi', 'meta.ogAlt');
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('vi');
}
