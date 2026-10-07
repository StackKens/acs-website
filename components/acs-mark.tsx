/**
 * ACSMark — the ACS mark, drawn as inline SVG.
 *
 * A faithful reproduction of the platform's install identity: `app/icon.svg`,
 * `app/apple-icon.png`, `public/acs-share.png` and this component are one
 * mark — a black plate with "ACS" spelled out in 8px white squares, never a
 * text glyph. The square cells are the wordmark, so the plate must not be
 * redrawn, rounded, recoloured or "improved" on its own: drift starts the
 * moment any copy is drawn separately.
 *
 * Geometry (192-unit viewBox, cells at x/y = 4 + 8k): A = top bar, two full
 * stems and a crossbar; C = top bar, left stem, two right corners and a
 * bottom bar; S = three bars with corner cells. Same cells as the pupil
 * management system's favicon.
 */

interface ACSMarkProps {
  /** Rendered width and height in pixels. The plate is square. */
  size?: number
  className?: string
  /** Announced to assistive tech. Pass null for a purely decorative mark. */
  title?: string | null
}

const CELLS: [number, number, number, number][] = [
  // A — top bar, left stem, right stem, crossbar.
  [36, 68, 24, 8],
  [28, 76, 8, 48],
  [60, 76, 8, 48],
  [36, 92, 24, 8],
  // C — top bar, left stem, right corners, bottom bar.
  [84, 68, 24, 8],
  [76, 76, 8, 40],
  [108, 76, 8, 8],
  [108, 108, 8, 8],
  [84, 116, 24, 8],
  // S — top bar, left column, middle bar, right column, bottom bar.
  [132, 68, 24, 8],
  [124, 76, 8, 16],
  [124, 108, 8, 8],
  [132, 92, 24, 8],
  [156, 76, 8, 8],
  [156, 100, 8, 16],
  [132, 116, 24, 8],
]

export function ACSMark({ size = 32, className, title = 'ACS' }: ACSMarkProps) {
  return (
    <svg
      viewBox="0 0 192 192"
      width={size}
      height={size}
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-label={title ?? undefined}
      aria-hidden={title ? undefined : true}
    >
      <rect width="192" height="192" fill="#000000" />
      <g fill="#ffffff">
        {CELLS.map(([x, y, w, h]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} />
        ))}
      </g>
    </svg>
  )
}