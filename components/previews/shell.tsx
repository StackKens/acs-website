import type { ReactNode } from 'react'
import { ACSMark } from '@/components/acs-mark'

/**
 * Shared chrome for every ACS product preview.
 *
 * All previews render the real ACS interface: the sidebar sections, the
 * record and result structures, the role boundaries and the wording
 * documented in the user guide. The only invented element is the school
 * name and the pupil names in the sample data, which are clearly
 * illustrative demo records — never real pupil information.
 */

export interface PreviewProps {
  /** Caption under the preview. */
  caption?: string
  /** Optional note describing what the preview illustrates. */
  note?: string
  className?: string
}

export function PreviewShell({
  caption,
  note,
  className = '',
  children,
}: PreviewProps & { children: ReactNode }) {
  return (
    <figure className={`preview-frame @container ${className}`}>
      <div className="preview-panel">
        <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
          <ACSMark size={22} className="shrink-0" title={null} />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold leading-tight text-ink">ACS</p>
            <p className="truncate text-[11px] leading-tight text-copy">Sunrise Primary School</p>
          </div>
          <span className="ml-auto shrink-0 rounded-[5px] bg-surface px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand">
            Demo
          </span>
        </div>
        {children}
      </div>
      {(caption || note) && (
        <figcaption className="mt-3 px-1 text-[12px] leading-5 text-copy">
          {caption}
          {caption && note ? ' — ' : ''}
          {note}
        </figcaption>
      )}
    </figure>
  )
}

/** Left navigation rail inside a preview. Hidden in narrow containers. */
export function PreviewNav({ items, active }: { items: string[]; active: string }) {
  return (
    <nav
      aria-hidden="true"
      className="hidden w-[124px] shrink-0 border-r border-line bg-surface px-2.5 py-3 @min-[440px]:block"
    >
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-[5px] px-2 py-1.5 text-[11px] font-medium leading-tight ${
              item === active ? 'bg-brand text-white' : 'text-copy'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** A label/value pair used inside preview panels. */
export function PreviewRow({
  label,
  value,
  emphasis,
}: {
  label: string
  value: string
  emphasis?: boolean
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line-soft py-2.5 last:border-b-0">
      <span className="text-[12px] text-copy">{label}</span>
      <span
        className={`text-right text-[13px] font-semibold ${
          emphasis ? 'text-brand' : 'text-ink'
        }`}
      >
        {value}
      </span>
    </div>
  )
}

/** Small stat tile used on the dashboard preview. */
export function PreviewStat({
  label,
  value,
  detail,
}: {
  label: string
  value: string
  detail?: string
}) {
  return (
    <div className="rounded-[8px] border border-line bg-white px-3 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-copy">{label}</p>
      <p className="mt-1.5 text-[20px] font-semibold leading-none tracking-[-0.02em] text-ink">{value}</p>
      {detail && <p className="mt-1.5 text-[11px] leading-tight text-copy">{detail}</p>}
    </div>
  )
}

/** Horizontal bar used in the results and analytics previews. */
export function PreviewBar({ label, value, width }: { label: string; value: string; width: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[12px] text-copy">{label}</span>
        <span className="text-[12px] font-semibold text-ink">{value}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface">
        <div className="h-full rounded-full bg-brand" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}
