import type { Metadata } from 'next';
import { TermsPage } from '@/components/LegalPages';

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'Terms of service for Time Tracker.',
  alternates: { canonical: '/en/terms', languages: { vi: '/terms', en: '/en/terms', 'x-default': '/terms' } },
};

export default function Page() {
  return <TermsPage lang="en" />;
}
