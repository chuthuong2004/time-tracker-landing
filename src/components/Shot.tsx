import type { Lang } from '@/lib/i18n';

/**
 * A screenshot of the app that follows both the page theme and the page
 * language — an English page showing a Vietnamese time log undercuts the point
 * of having an English page, so each shot exists in four captures.
 *
 * The two theme variants ride in custom properties and only the matching rule
 * resolves, so the browser fetches one image, not two — and there is no swap
 * after paint the way a JS-driven `src` would give. Custom properties are not
 * resolved until something uses them, which is what makes that true. The
 * language is known at build time, so it just picks the filename.
 *
 * The trade for using a background is the missing `alt`, so the box carries
 * `role="img"` and a label instead.
 */
export function Shot({
  name,
  lang,
  alt,
  width,
  height,
  paper = false,
  className = 'panel',
}: {
  /** Base shot name; files are `{lang}-{theme}-{name}.webp`. */
  name: string;
  lang: Lang;
  alt: string;
  width: number;
  height: number;
  /** The invoice print view is white paper in both themes — one capture serves both. */
  paper?: boolean;
  className?: string;
}) {
  const dark = paper ? `/shots/${lang}-${name}.webp` : `/shots/${lang}-dark-${name}.webp`;
  const light = paper ? `/shots/${lang}-${name}.webp` : `/shots/${lang}-light-${name}.webp`;

  // On a phone a wide capture has to be held at a legible size and panned. A
  // narrow one already reads when it fits, and forcing it to pan — or worse,
  // blowing it up past its own pixels — would only make it harder to look at.
  const mobileMin = width > 700 ? Math.min(width, 720) : 0;

  return (
    <div className={paper ? `${className} panel-paper` : className}>
      <div
        className="panel-img"
        role="img"
        aria-label={alt}
        style={
          {
            '--shot-dark': `url(${dark})`,
            '--shot-light': `url(${light})`,
            '--shot-min': `${mobileMin}px`,
            aspectRatio: `${width} / ${height}`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

export function Caption({ items }: { items: string[] }) {
  return (
    <div className="caption">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
