import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { t } from '@/lib/i18n';

const TITLE = t('en', 'meta.title');
const DESCRIPTION = t('en', 'meta.description');

export const metadata: Metadata = {
  // `absolute` because the title already ends in the brand — under the root
  // template it rendered "Time Tracker — Track hours, send invoices — Time Tracker".
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/en', languages: { vi: '/', en: '/en', 'x-default': '/' } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/en',
    locale: 'en_US',
    alternateLocale: ['vi_VN'],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default function HomeEn() {
  return <LandingPage lang="en" />;
}
