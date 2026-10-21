import { PreviewShell } from './shell'

const subjects = [
  { name: 'Mathematics', mark: '82', grade: 'A' },
  { name: 'English', mark: '76', grade: 'B' },
  { name: 'Science', mark: '79', grade: 'B' },
  { name: 'Social Studies', mark: '85', grade: 'A' },
]

/**
 * ACS term report card.
 *
 * Reproduces the printed report: school crest and details, the pupil's
 * subjects with marks, attendance, conduct, fees balance and the
 * signatures a school expects. Published report cards are a record for
 * the term and are not edited retroactively.
 */
export function ReportCardPreview() {
  return (
    <PreviewShell
      caption="Printable term report card"
      note="school-branded, batch compiled per class"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 border-b border-line pb-3">
          <div className="min-w-0">
            <p className="text-[13px] font-semibold leading-tight text-ink">Sunrise Primary School</p>
            <p className="mt-0.5 text-[10px] leading-tight text-copy">
              P.O. Box 42 · Plot 7, Kampala · Term 1, 2026
            </p>
          </div>
          <div className="shrink-0 rounded-[6px] border border-line px-2 py-1 text-center">
            <p className="text-[9px] uppercase tracking-[0.1em] text-copy">Report</p>
            <p className="text-[11px] font-semibold text-ink">Card</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
          {[
            { label: 'Pupil', value: 'Achieng Omondi' },
            { label: 'Class', value: 'P6B' },
            { label: 'Admission no.', value: 'SPS/2024/0187' },
            { label: 'Position', value: '4 of 28' },
          ].map((item) => (
            <div key={item.label} className="flex gap-2">
              <span className="w-[86px] shrink-0 text-[10px] leading-4 text-copy">{item.label}</span>
              <span className="text-[11px] font-medium leading-4 text-ink">{item.value}</span>
            </div>
          ))}
        </div>

        <table className="mt-4 w-full text-left">
          <thead>
            <tr className="border-b border-line text-[10px] uppercase tracking-[0.08em] text-copy">
              <th className="pb-1.5 font-medium">Subject</th>
              <th className="pb-1.5 text-right font-medium">Mark</th>
              <th className="pb-1.5 text-right font-medium">Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.name} className="border-b border-line-soft">
                <td className="py-1.5 text-[11px] text-ink">{subject.name}</td>
                <td className="py-1.5 text-right text-[11px] font-semibold text-ink">{subject.mark}</td>
                <td className="py-1.5 text-right text-[11px] font-semibold text-brand">{subject.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-3 flex items-center justify-between gap-4 border-t border-line pt-3">
          <div>
            <p className="text-[10px] text-copy">Attendance</p>
            <p className="text-[11px] font-medium text-ink">95%</p>
          </div>
          <div>
            <p className="text-[10px] text-copy">Fees balance</p>
            <p className="text-[11px] font-medium text-ink">Paid in full</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-copy">Class teacher</p>
            <p className="text-[11px] font-medium text-ink">________________</p>
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}
