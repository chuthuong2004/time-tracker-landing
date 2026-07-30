import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

const TITLE = 'Time Tracker — Track hours, send invoices';
const DESCRIPTION =
  'One key starts the clock and the money adds up by the second. Turn uninvoiced hours into a PDF invoice, sync across devices, keep working offline. Free.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/en', languages: { vi: '/', en: '/en' } },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/en', locale: 'en_US' },
};

export default function HomeEn() {
  return <LandingPage lang="en" />;
}
