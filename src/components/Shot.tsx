/**
 * A screenshot that follows the page theme.
 *
 * Both variants ride in custom properties and only the matching rule resolves,
 * so the browser fetches one image, not two — and there is no swap after paint
 * the way a JS-driven `src` would give. Custom properties are not resolved until
 * something uses them, which is what makes that true.
 *
 * The trade for using a background is the missing `alt`, so the box carries
 * `role="img"` and a label instead.
 */
export function Shot({
  name,
  alt,
  width,
  height,
  paper = false,
}: {
  /** Base filename; the light variant is the same name prefixed with `l`. */
  name: string;
  alt: string;
  width: number;
  height: number;
  /** The invoice print view is white paper in both themes — no variant to swap. */
  paper?: boolean;
}) {
  const style = paper
    ? ({ '--shot-dark': `url(/shots/${name}.webp)`, '--shot-light': `url(/shots/${name}.webp)` } as React.CSSProperties)
    : ({
        '--shot-dark': `url(/shots/${name}.webp)`,
        '--shot-light': `url(/shots/l${name}.webp)`,
      } as React.CSSProperties);

  return (
    <div className={paper ? 'panel panel-paper' : 'panel'}>
      <div
        className="panel-img"
        role="img"
        aria-label={alt}
        style={{ ...style, aspectRatio: `${width} / ${height}` }}
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
