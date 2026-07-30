'use client';

import { useEffect, useState } from 'react';

const RATE_PER_HOUR = 480_000;
const DAY_MS = 8 * 3_600_000;
/** Where the session already stood when you arrived — a plausible mid-afternoon. */
const BASE_MS = 2 * 3_600_000 + 14 * 60_000 + 37_000;

function hms(ms: number): string {
  const total = Math.floor(ms / 1000);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(Math.floor(total / 3600))}:${pad(Math.floor((total % 3600) / 60))}:${pad(total % 60)}`;
}

const MONEY = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

/**
 * The page's one loud element, and the product's characteristic moment: a clock
 * that is actually running and money that is actually accruing, a second at a
 * time. A screenshot of a timer is a picture of a timer; this is one.
 *
 * The first render is `BASE_MS` on both server and client so hydration matches;
 * ticking starts in the effect, and the elapsed time is derived from a mount
 * timestamp rather than accumulated, so a backgrounded tab catches up instead of
 * drifting behind.
 */
export function LiveMeter() {
  const [elapsed, setElapsed] = useState(BASE_MS);

  useEffect(() => {
    const startedAt = Date.now() - BASE_MS;
    const tick = () => setElapsed(Date.now() - startedAt);
    tick();
    const id = window.setInterval(tick, 1000);
    document.addEventListener('visibilitychange', tick);
    return () => {
      window.clearInterval(id);
      document.removeEventListener('visibilitychange', tick);
    };
  }, []);

  const earned = (elapsed / 3_600_000) * RATE_PER_HOUR;
  const progress = Math.min(100, (elapsed / DAY_MS) * 100);

  return (
    <div className="meter">
      <div className="meter-head">
        <span className="meter-chip">Koga Clothes</span>
        <span className="meter-live">
          <span className="meter-dot" aria-hidden />
          đang chạy
        </span>
      </div>

      <div className="meter-clock" aria-live="off">{hms(elapsed)}</div>
      <div className="meter-money">+ {MONEY.format(Math.round(earned))}</div>

      <div className="meter-track" role="presentation">
        <div className="meter-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="meter-foot">
        <span>480.000 ₫/giờ</span>
        <span>{progress.toFixed(0)}% của 8h</span>
      </div>
    </div>
  );
}
