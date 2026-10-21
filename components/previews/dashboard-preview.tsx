import { PreviewNav, PreviewShell, PreviewStat } from './shell'

const navItems = ['Dashboard', 'Pupils', 'Attendance', 'Performance', 'Finance', 'Reports']

/**
 * ACS school overview dashboard.
 *
 * Mirrors the real dashboard: pupil totals, attendance for the active
 * session, items needing attention, and academic context. Figures are
 * illustrative demo data for a fictional school.
 */
export function DashboardPreview() {
  return (
    <PreviewShell
      caption="School overview dashboard"
      note="illustrative demo data"
    >
      <div className="flex">
        <PreviewNav items={navItems} active="Dashboard" />
        <div className="min-w-0 flex-1 p-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[13px] font-semibold text-ink">Dashboard</p>
            <p className="text-[11px] text-copy">Term 1 · 2026</p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            <PreviewStat label="Pupils" value="184" detail="Enrolled" />
            <PreviewStat label="Attendance" value="94%" detail="Today" />
            <PreviewStat label="Classes" value="12" detail="Across 2 streams" />
            <PreviewStat label="Staff" value="23" detail="8 teaching" />
          </div>

          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            <div className="rounded-[8px] border border-line p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-copy">
                Needs attention
              </p>
              <ul className="mt-2 space-y-1.5">
                {[
                  '3 pupils absent today',
                  '2 fee balances overdue',
                  '1 class awaiting mark entry',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-[11px] leading-tight text-copy">
                    <span aria-hidden="true" className="mt-1 size-1 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[8px] border border-line p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-copy">
                Today’s classes
              </p>
              <ul className="mt-2 space-y-1.5">
                {['P4A · Mathematics', 'P6B · English', 'P2A · Science'].map((item) => (
                  <li key={item} className="text-[11px] leading-tight text-copy">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}
