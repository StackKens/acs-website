import { PreviewBar, PreviewNav, PreviewShell } from './shell'

const navItems = ['Dashboard', 'Pupils', 'Attendance', 'Performance', 'Finance', 'Reports']

const subjects = [
  { name: 'Mathematics', average: '78%', width: 78 },
  { name: 'English', average: '71%', width: 71 },
  { name: 'Science', average: '74%', width: 74 },
  { name: 'Social Studies', average: '80%', width: 80 },
]

/**
 * ACS academic results.
 *
 * Mirrors the real assessment flow: an open assessment period, marks
 * entered per subject, and totals with class position and division
 * calculated automatically. A mark that has not been entered is shown as
 * missing and is never counted as zero.
 */
export function ResultsPreview() {
  return (
    <PreviewShell
      active="Performance"
      caption="End of Term assessment results"
      note="totals, averages and class position calculated automatically"
    >
      <div className="flex">
        <PreviewNav items={navItems} active="Performance" />
        <div className="min-w-0 flex-1 p-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[13px] font-semibold text-ink">P6B · EOT Results</p>
            <span className="rounded-[5px] bg-surface px-2 py-0.5 text-[10px] font-semibold text-copy">
              Draft
            </span>
          </div>

          <div className="mt-3 space-y-3">
            {subjects.map((subject) => (
              <PreviewBar
                key={subject.name}
                label={subject.name}
                value={subject.average}
                width={subject.width}
              />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { label: 'Class average', value: '76%' },
              { label: 'Top position', value: '1' },
              { label: 'Division', value: 'I' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[8px] border border-line px-3 py-2.5">
                <p className="text-[10px] leading-tight text-copy">{stat.label}</p>
                <p className="mt-1 text-[16px] font-semibold leading-none text-ink">{stat.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[11px] leading-4 text-copy">
            Results stay in draft until an administrator or head teacher releases them.
          </p>
        </div>
      </div>
    </PreviewShell>
  )
}
