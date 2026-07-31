import type { Metadata } from 'next';
import { Be_Vietnam_Pro, JetBrains_Mono } from 'next/font/google';
import { NO_FLASH_SCRIPT } from '@/components/ThemeToggle';
import { t } from '@/lib/i18n';
import { GOOGLE_SITE_VERIFICATION, SITE_URL } from '@/lib/site';
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

const TITLE = t('vi', 'meta.title');
const DESCRIPTION = t('vi', 'meta.description');

/* `x-default` points at the Vietnamese page: this is a Vietnamese product on a
   .io.vn domain, so an unmatched locale should land there rather than on /en. */
export const LANGUAGE_ALTERNATES = { vi: '/', en: '/en', 'x-default': '/' };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // The template appends the brand, so a page title must not carry it itself —
  // the home pages set `absolute` for that reason.
  title: { default: TITLE, template: '%s — Time Tracker' },
  description: DESCRIPTION,
  applicationName: 'Time Tracker',
  keywords: [
    'bấm giờ',
    'phần mềm bấm giờ',
    'time tracking',
    'phần mềm quản lý thời gian',
    'xuất hoá đơn freelancer',
    'hoá đơn',
    'freelancer',
    'tính tiền theo giờ',
    'timesheet',
    'ứng dụng chấm công freelance',
  ],
  category: 'productivity',
  authors: [{ name: 'Time Tracker', url: SITE_URL }],
  creator: 'Time Tracker',
  publisher: 'Time Tracker',
  alternates: { canonical: '/', languages: LANGUAGE_ALTERNATES },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Time Tracker',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Let Google show a full-length text snippet and a large image thumbnail
      // instead of the short defaults it falls back to for an unknown site.
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  // Unset unless a URL-prefix property is verified by HTML tag; see site.ts.
  verification: GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : undefined,
  // Vietnamese copy contains dates and long digit strings, and Safari will
  // otherwise turn them into tel: links.
  formatDetection: { telephone: false, date: false, address: false, email: false },
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
