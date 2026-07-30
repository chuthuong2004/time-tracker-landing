/**
 * The product mark, kept in step with the app's own `Logo`: a faint full ring
 * (time available), a weighted arc from twelve (time spent) and a solid pivot.
 * Inherits `currentColor`, so it works on the blue tile and on plain ink.
 */
export function Logo({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-label="Time Tracker"
      style={{ display: 'block', flex: '0 0 auto' }}
    >
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" opacity="0.26" />
      <path d="M12 2.75A9.25 9.25 0 0 1 20.01 16.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.9" fill="currentColor" />
    </svg>
  );
}

/** "Time" sits back, "Tracker" carries the weight and the brand colour. */
export function Wordmark() {
  return (
    <span className="wordmark">
      <span className="wordmark-time">Time</span>
      <span className="wordmark-tracker">Tracker</span>
    </span>
  );
}

export function Brand({ href = '/' }: { href?: string }) {
  return (
    <a className="brand" href={href}>
      <span className="brand-mark"><Logo size={17} /></span>
      <Wordmark />
    </a>
  );
}
