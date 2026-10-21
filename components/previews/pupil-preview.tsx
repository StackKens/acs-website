import { PreviewNav, PreviewShell } from './shell'

const navItems = ['Dashboard', 'Pupils', 'Attendance', 'Performance', 'Finance', 'Reports']

const pupils = [
  { name: 'Achieng Omondi', admission: 'SPS/2024/0187', class: 'P6B', guardian: 'Grace O.' },
  { name: 'Brian Odongo', admission: 'SPS/2024/0192', class: 'P2A', guardian: 'Samuel O.' },
  { name: 'Chenulo Mukasa', admission: 'SPS/2023/0341', class: 'P5A', guardian: 'Sarah M.' },
  { name: 'Doreen Kato', admission: 'SPS/2024/0203', class: 'P4B', guardian: 'Robert K.' },
]

/**
 * ACS pupil registry.
 *
 * Reproduces the real pupil list: admission number, class allocation and
 * the linked guardian on each record, with the class and stream a pupil
 * sits in. Historical allocations and promotion history are retained
 * against the same profile.
 */
export function PupilPreview() {
  return (
    <PreviewShell
      active="Pupils"
      caption="Pupil registry"
      note="admission, class and linked guardian on every record"
    >
      <div className="flex">
        <PreviewNav items={navItems} active="Pupils" />
        <div className="min-w-0 flex-1 p-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[13px] font-semibold text-ink">Pupils</p>
            <p className="text-[11px] text-copy">184 enrolled</p>
          </div>

          <div className="mt-2.5 overflow-hidden rounded-[7px] border border-line">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface text-[9px] uppercase tracking-[0.08em] text-copy">
                  <th className="px-2 py-1.5 font-medium">Pupil</th>
                  <th className="px-2 py-1.5 font-medium">Class</th>
                  <th className="px-2 py-1.5 font-medium">Guardian</th>
                </tr>
              </thead>
              <tbody>
                {pupils.map((pupil) => (
                  <tr key={pupil.admission} className="border-t border-line-soft">
                    <td className="px-2 py-2">
                      <span className="block truncate text-[11px] font-medium text-ink">{pupil.name}</span>
                      <span className="block truncate text-[9px] text-copy">{pupil.admission}</span>
                    </td>
                    <td className="px-2 py-2 text-[11px] text-ink">{pupil.class}</td>
                    <td className="px-2 py-2 text-[11px] text-copy">{pupil.guardian}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-2.5 flex items-center justify-between rounded-[7px] border border-line px-2.5 py-2">
            <span className="text-[10px] text-copy">Search</span>
            <span className="text-[10px] text-copy">by name, admission no. or stream</span>
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}
