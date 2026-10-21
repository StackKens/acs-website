import { PreviewNav, PreviewShell } from './shell'

const navItems = ['Dashboard', 'Pupils', 'Attendance', 'Performance', 'Finance', 'Reports']

type State = 'Present' | 'Absent' | 'Late' | 'Excused'

const rows: { name: string; state: State }[] = [
  { name: 'Achieng O.', state: 'Present' },
  { name: 'Baraka N.', state: 'Present' },
  { name: 'Chenulo M.', state: 'Absent' },
  { name: 'Doreen K.', state: 'Present' },
  { name: 'Ethan S.', state: 'Late' },
]

const stateClass: Record<State, string> = {
  Present: 'bg-surface text-brand',
  Absent: 'bg-danger-soft text-danger',
  Late: 'bg-surface text-copy',
  Excused: 'bg-surface text-copy',
}

/**
 * ACS attendance register.
 *
 * Reproduces the real roll call: one row per pupil with the four states
 * kept separate — present, absent, late and excused. A late arrival is
 * not a present and an excused absence is not an unexplained one.
 */
export function AttendancePreview() {
  return (
    <PreviewShell
      caption="Daily attendance register"
      note="morning session · four states kept apart"
    >
      <div className="flex">
        <PreviewNav items={navItems} active="Attendance" />
        <div className="min-w-0 flex-1 p-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[13px] font-semibold text-ink">P4A · Morning</p>
            <p className="text-[11px] text-copy">21 Jan 2026</p>
          </div>

          <ul className="mt-3 divide-y divide-line-soft">
            {rows.map((row) => (
              <li key={row.name} className="flex items-center justify-between gap-3 py-2">
                <span className="truncate text-[12px] text-ink">{row.name}</span>
                <span
                  className={`shrink-0 rounded-[5px] px-2 py-0.5 text-[10px] font-semibold ${stateClass[row.state]}`}
                >
                  {row.state}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex items-center justify-between rounded-[8px] border border-line px-3 py-2.5">
            <span className="text-[11px] text-copy">Session summary</span>
            <span className="text-[12px] font-semibold text-ink">21 present · 1 absent · 1 late</span>
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}
