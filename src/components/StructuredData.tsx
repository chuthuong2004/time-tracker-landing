import { FAQ } from '@/lib/faq';
import { pathFor, t, type Key, type Lang } from '@/lib/i18n';
import { APP_URL, CONTACT, SITE_URL } from '@/lib/site';

/**
 * The machine-readable version of the page.
 *
 * Two audiences, one payload. Search engines read it for entity facts — what
 * this is, who publishes it, what it costs. Answer engines read it because a
 * question-and-answer pair they can lift verbatim is worth more to them than
 * the same fact buried in marketing prose.
 *
 * Deliberately absent: `aggregateRating`. There are no ratings to report, and
 * inventing them is both a policy violation and a lie about the product.
 */

/** The feature claims, kept to things the app actually does. */
const FEATURES: Record<Lang, string[]> = {
  vi: [
    'Bấm giờ theo dự án với tiền cộng dồn theo từng giây',
    'Xuất hoá đơn PDF từ giờ đã log, có VAT và số hoá đơn tự tăng',
    'Làm tròn giờ theo bước 5/6/10/15/30 phút',
    'Đa tiền tệ: VND, USD, EUR, SGD, không tự quy đổi',
    'Chạy offline, đồng bộ lại khi có mạng',
    'Cài như app qua PWA trên điện thoại và máy tính',
    'Báo cáo theo dự án, theo ngày, xuất CSV',
    'Đếm Pomodoro và command palette',
    'Song ngữ tiếng Việt và English',
  ],
  en: [
    'Per-project time tracking with money accruing by the second',
    'PDF invoices generated from logged hours, with VAT and auto-incrementing numbers',
    'Hour rounding in steps of 5/6/10/15/30 minutes',
    'Multi-currency: VND, USD, EUR, SGD, with no silent conversion',
    'Works offline and syncs when the connection returns',
    'Installs as a PWA on phones and desktops',
    'Reports by project and by day, exportable as CSV',
    'Pomodoro timer and a command palette',
    'Bilingual Vietnamese and English',
  ],
};

const PUBLISHER_ID = `${SITE_URL}/#publisher`;
const SITE_ID = `${SITE_URL}/#website`;

export function StructuredData({
  lang,
  title,
  description,
}: {
  lang: Lang;
  title: string;
  description: string;
}) {
  const pageUrl = `${SITE_URL}${pathFor(lang)}`;
  const locale = lang === 'vi' ? 'vi-VN' : 'en';

  const graph = [
    {
      '@type': 'Organization',
      '@id': PUBLISHER_ID,
      name: 'Time Tracker',
      url: SITE_URL,
      email: CONTACT,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-512.png`,
        width: 512,
        height: 512,
      },
      // The product is built and run from Vietnam, and says so on every page.
      foundingLocation: { '@type': 'Country', name: 'Vietnam' },
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: SITE_URL,
      name: 'Time Tracker',
      description,
      inLanguage: locale,
      publisher: { '@id': PUBLISHER_ID },
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: locale,
      isPartOf: { '@id': SITE_ID },
      primaryImageOfPage: { '@type': 'ImageObject', url: `${pageUrl}opengraph-image` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#app`,
      name: 'Time Tracker',
      url: APP_URL,
      description,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: lang === 'vi' ? 'Bấm giờ và xuất hoá đơn' : 'Time tracking and invoicing',
      // A PWA: the browser is the requirement, not an OS.
      operatingSystem: 'Web browser (iOS, Android, Windows, macOS, Linux)',
      browserRequirements: 'Requires JavaScript',
      inLanguage: ['vi-VN', 'en'],
      isAccessibleForFree: true,
      featureList: FEATURES[lang],
      screenshot: `${SITE_URL}/shots/${lang}-dark-timer.webp`,
      publisher: { '@id': PUBLISHER_ID },
      offers: {
        '@type': 'Offer',
        price: 0,
        priceCurrency: 'VND',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      inLanguage: locale,
      isPartOf: { '@id': SITE_ID },
      mainEntity: FAQ.map(({ q, a }) => ({
        '@type': 'Question',
        name: t(lang, q as Key),
        acceptedAnswer: { '@type': 'Answer', text: t(lang, a as Key) },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Server-rendered from local strings, so there is no untrusted input to
      // escape here — but `<` would still end the script early if any copy grew
      // a tag, so it is encoded.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
          /</g,
          '\\u003c',
        ),
      }}
    />
  );
}
