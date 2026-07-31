import { ogImage, OG_SIZE } from '@/lib/og';
import { t } from '@/lib/i18n';

export const alt = t('vi', 'meta.ogAlt');
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('vi');
}
