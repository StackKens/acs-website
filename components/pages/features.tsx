import { cn } from '@/lib/utils'
import { Container, Cta, Eyebrow, PageHero, Section } from '@/components/ui/primitives'

/**
 * Features page.
 *
 * Matches acs.md design: tinted page hero, three top-rule columns
 * (Records / Attendance / Academics), closing CTA. Elements use "rv"
 * class for the reveal-on-scroll animation (CSS in globals.css).
 */

export function FeaturesPage() {
  return (
    <main>
      {/* =========================================================
       * Page Hero (matches acs.md .page-hero)
       * ========================================================= */}
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Features</p>
          <h1 className="t-display text-ink">Everyday school work, in one place.</h1>
          <p className="t-lead max-w-[460px] text-copy">
            ACS is being built around the school day: pupil records, daily attendance and
            academic results, with an AI assistant to support teachers.
          </p>
        </div>
      </section>

      {/* =========================================================
       * Three columns (matches acs.md closer sections)
       * ========================================================= */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <div className="rv">
              <Eyebrow>01 / Records</Eyebrow>
              <h2 className="text-ink mb-3">Know every pupil.</h2>
              <p className="text-[15px] text-copy">
                Keep pupil information structured and accessible, rather than spread across
                books and disconnected files.
              </p>
              <DataTable
                head={['Pupil', 'Class', 'Stream']}
                rows={[
                  ['Pupil 001', 'P5', 'A'],
                  ['Pupil 002', 'P5', 'A'],
                  ['Pupil 003', 'P5', 'B'],
                ]}
              />
            </div>

            <div className="rv">
              <Eyebrow>02 / Attendance</Eyebrow>
              <h2 className="text-ink mb-3">A clearer daily register.</h2>
              <p className="text-[15px] text-copy">
                Bring recording and reviewing attendance into a consistent workflow for
                teachers and school administrators.
              </p>
              <DataTable
                head={['Pupil', 'Status']}
                rows={[
                  ['Pupil 001', { text: 'Present', on: true }],
                  ['Pupil 002', { text: 'Present', on: true }],
                  ['Pupil 003', 'Absent'],
                ]}
              />
            </div>

            <div className="rv">
              <Eyebrow>03 / Academics</Eyebrow>
              <h2 className="text-ink mb-3">Make results easier to manage.</h2>
              <p className="text-[15px] text-copy">
                Organize assessment marks and examination results to support review and the
                preparation of pupil report cards.
              </p>
              <DataTable
                head={['Pupil', 'ENG', 'MTC', 'SCI']}
                rows={[
                  ['Pupil 001', '78', '84', '81'],
                  ['Pupil 002', '85', '76', '89'],
                  ['Pupil 003', '72', '80', '75'],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
       * Closing CTA (matches acs.md .section.tint > .wrap > .cta)
       * ========================================================= */}
      <Section>
        <Container>
          <Cta title="A more organized school starts with a conversation." href="/contact" label="Get Started" />
        </Container>
      </Section>
    </main>
  )
}

/** Data table for features feature columns. */
type Cell = string | { text: string; on?: boolean }

function DataTable({ head, rows }: { head: string[]; rows: Cell[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[300px] border-collapse text-[13.5px]">
        <thead>
          <tr>
            {head.map((label, index) => (
              <th
                key={label}
                scope="col"
                className={cn(
                  'bg-surface p-[14px_12px] font-normal text-copy',
                  index === 0 ? 'text-left' : 'text-right',
                )}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const { text, on } = typeof cell === 'string' ? { text: cell, on: false } : cell
                return (
                  <td
                    key={cellIndex}
                    className={cn(
                      'p-[16px_12px] tabular-nums',
                      cellIndex === 0 ? 'text-left' : 'text-right',
                      rowIndex === row.length - 1 ? 'border-b-0' : 'border-b border-line',
                      on ? 'font-semibold text-brand' : 'text-copy',
                    )}
                  >
                    {text}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}