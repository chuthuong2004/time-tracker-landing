import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { t, type Lang } from '@/lib/i18n';

/**
 * The share card, generated at build time.
 *
 * It shows the product's characteristic moment rather than a logo on a colour:
 * a meter mid-run with money accrued against it, which is the same thing the
 * hero and the sign-in screen lead with. The numbers agree with the rate quoted
 * on the page — 02:14:37 at 480.000 ₫/giờ — because a share card with invented
 * arithmetic on it is the kind of detail people check.
 *
 * Be Vietnam Pro is bundled as TTF rather than fetched: Satori cannot read WOFF2,
 * a build-time download is a build-time outage waiting to happen, and the default
 * font would render ấ, ờ and đ as tofu.
 */

export const OG_SIZE = { width: 1200, height: 630 };

const CLOCK = '02:14:37';
const ACCRUED: Record<Lang, string> = { vi: '1.076.933 ₫', en: '₫1,076,933' };
const FREE: Record<Lang, string> = { vi: 'Miễn phí', en: 'Free' };

async function font(file: string): Promise<Buffer> {
  return readFile(join(process.cwd(), 'assets', file));
}

export async function ogImage(lang: Lang): Promise<ImageResponse> {
  const [regular, bold] = await Promise.all([
    font('BeVietnamPro-Regular.ttf'),
    font('BeVietnamPro-Bold.ttf'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#08090c',
          // The same blue wash the meter sits in on the page, biased to the
          // right so it reads behind the clock rather than behind the wordmark.
          backgroundImage:
            'radial-gradient(1100px 560px at 76% 42%, rgba(59,123,255,0.20), rgba(8,9,12,0) 68%)',
          fontFamily: 'Be Vietnam Pro',
          color: '#f2f4f8',
        }}
      >
        {/* Wordmark, drawn the way the site draws it: "Time" sits back, and
            "Tracker" carries the weight and the brand colour. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9.25" stroke="#3b7bff" strokeWidth="1.6" opacity="0.3" />
            <path
              d="M12 2.75A9.25 9.25 0 0 1 20.01 16.6"
              stroke="#3b7bff"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="1.9" fill="#3b7bff" />
          </svg>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em' }}>
            <span style={{ color: '#98a1b0' }}>Time</span>
            <span style={{ color: '#3b7bff' }}>Tracker</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* The live row: a lit dot, the running clock, and the money it has
              earned so far sitting on the same baseline. */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
            <div
              style={{
                display: 'flex',
                width: 15,
                height: 15,
                borderRadius: 999,
                background: '#f5a524',
              }}
            />
            <div
              style={{
                display: 'flex',
                fontSize: 104,
                fontWeight: 700,
                letterSpacing: '-0.035em',
                lineHeight: 1,
              }}
            >
              {CLOCK}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 46,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#34d17a',
              }}
            >
              {ACCRUED[lang]}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 34,
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.22,
              maxWidth: 940,
            }}
          >
            {t(lang, 'og.headline')}
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 20,
              fontSize: 25,
              lineHeight: 1.45,
              color: '#98a1b0',
              maxWidth: 900,
            }}
          >
            {t(lang, 'og.sub')}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 23 }}>
          <span style={{ color: '#f2f4f8', fontWeight: 500 }}>timetracker.io.vn</span>
          <span style={{ color: '#3b4150' }}>·</span>
          <span style={{ color: '#98a1b0' }}>{FREE[lang]}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Be Vietnam Pro', data: regular, style: 'normal', weight: 400 },
        { name: 'Be Vietnam Pro', data: bold, style: 'normal', weight: 700 },
      ],
    },
  );
}
