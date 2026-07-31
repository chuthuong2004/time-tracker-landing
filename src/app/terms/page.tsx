import type { Metadata } from 'next';
import { TermsPage } from '@/components/LegalPages';

export const metadata: Metadata = {
  title: 'Điều khoản sử dụng',
  description: 'Điều khoản sử dụng Time Tracker.',
  alternates: { canonical: '/terms', languages: { vi: '/terms', en: '/en/terms', 'x-default': '/terms' } },
};

export default function Page() {
  return <TermsPage lang="vi" />;
}
