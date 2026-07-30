import type { Metadata } from 'next';
import { Be_Vietnam_Pro, JetBrains_Mono } from 'next/font/google';
import { NO_FLASH_SCRIPT } from '@/components/ThemeToggle';
import { SITE_URL } from '@/lib/site';
import './globals.css';

/* Two faces, and the first one is the whole argument: Be Vietnam Pro is drawn
   for this language, so ờ, ủ, ế and Đ come out as designed glyphs rather than
   marks bolted onto Latin letters at display size. It carries both the headlines
   (700/800, tight) and the prose (400/500).

   JetBrains Mono owns every number — clock, money, timestamps — where what
   matters is that digits line up in a column. */

const sans = Be_Vietnam_Pro({
  variable: '--font-sans-vn',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono-vn',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const TITLE = 'Time Tracker — Bấm giờ và xuất hoá đơn cho freelancer';
const DESCRIPTION =
  'Bấm một phím là đồng hồ chạy, tiền cộng dồn theo từng giây. Gộp giờ chưa xuất thành hoá đơn PDF, đồng bộ mọi thiết bị, offline vẫn dùng được. Miễn phí.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s — Time Tracker' },
  description: DESCRIPTION,
  keywords: ['bấm giờ', 'time tracking', 'hoá đơn', 'freelancer', 'tính tiền theo giờ', 'timesheet'],
  alternates: { canonical: '/', languages: { vi: '/', en: '/en' } },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Time Tracker',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'vi_VN',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Sets data-theme before the first paint; see NO_FLASH_SCRIPT. */}
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
