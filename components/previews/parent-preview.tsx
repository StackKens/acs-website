import { ACSMark } from '@/components/acs-mark'

/**
 * ACS parent portal.
 *
 * Reproduces the parent-facing screen: each linked child, the child's
 * attendance, released results and fee balance, plus school and class
 * announcements. Results only appear once the school releases them, and
 * payments are made at the school's accounts office — ACS does not take
 * online payments.
 */
export function ParentPreview() {
  return (
    <figure className="preview-frame">
      <div className="preview-panel">
        <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
          <ACSMark size={22} className="shrink-0" title={null} />
          <div className="min-w-0">
            <p className="text-[13px] font-semibold leading-tight text-ink">Parent portal</p>
            <p className="text-[11px] leading-tight text-copy">Sunrise Primary School</p>
          </div>
        </div>

        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-copy">My children</p>
          <div className="mt-2 flex gap-2">
            {['Achieng O.', 'Brian O.'].map((child, i) => (
              <div
                key={child}
                className={`flex-1 rounded-[7px] border px-3 py-2 ${
                  i === 0 ? 'border-brand bg-surface' : 'border-line bg-white'
                }`}
              >
                <p className="truncate text-[12px] font-semibold text-ink">{child}</p>
                <p className="mt-0.5 text-[10px] text-copy">{i === 0 ? 'P6B' : 'P2A'}</p>
              </div>
            ))}
          </div>

          <div className="mt-3.5 grid grid-cols-3 gap-2">
            {[
              { label: 'Attendance', value: '95%' },
              { label: 'Average', value: '76%' },
              { label: 'Balance', value: 'Paid' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[7px] border border-line px-2.5 py-2">
                <p className="text-[10px] leading-tight text-copy">{stat.label}</p>
                <p className="mt-1 text-[15px] font-semibold leading-none text-ink">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3.5 rounded-[8px] border border-line p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-copy">
              Announcements
            </p>
            <ul className="mt-2 space-y-1.5">
              {['P6B end of term report is available', 'Fee balance for Term 1 is cleared'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-1.5 text-[11px] leading-tight text-copy">
                    <span aria-hidden="true" className="mt-1 size-1 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 px-1 text-[12px] leading-5 text-copy">
        Parent portal — one place for attendance, released results and fees
      </figcaption>
    </figure>
  )
}
