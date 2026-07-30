import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/LegalPages';

export const metadata: Metadata = {
  title: 'Quyền riêng tư',
  description: 'Time Tracker lưu và dùng dữ liệu của bạn như thế nào.',
  alternates: { canonical: '/privacy', languages: { vi: '/privacy', en: '/en/privacy' } },
};

export default function Page() {
  return <PrivacyPage lang="vi" />;
}
