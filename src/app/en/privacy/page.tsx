import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/LegalPages';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Time Tracker stores and uses your data.',
  alternates: { canonical: '/en/privacy', languages: { vi: '/privacy', en: '/en/privacy', 'x-default': '/privacy' } },
};

export default function Page() {
  return <PrivacyPage lang="en" />;
}
