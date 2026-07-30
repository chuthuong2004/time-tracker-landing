import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

/* Three roles, three faces. Space Grotesk carries the headlines — technical and
   a little mechanical, like the instrument this product is. Plex Sans reads the
   prose, and Plex Mono owns every number: clock times, hours, money. All three
   ship the Vietnamese subset, so diacritics render in the real face rather than
   falling back mid-word. */

const display = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin', 'vietnamese'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  display: 'swap',
});

const SITE = 'https://timetracker.io.vn';
const TITLE = 'Time Tracker — Bấm giờ và xuất hoá đơn cho freelancer';
const DESCRIPTION =
  'Bấm một phím là đồng hồ chạy, tiền cộng dồn theo từng giây. Gộp giờ chưa xuất thành hoá đơn PDF, đồng bộ mọi thiết bị, offline vẫn dùng được. Miễn phí.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['bấm giờ', 'time tracking', 'hoá đơn', 'freelancer', 'tính tiền theo giờ', 'timesheet'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE,
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
    <html lang="vi" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
