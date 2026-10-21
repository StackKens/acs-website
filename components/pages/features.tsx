import { cn } from '@/lib/utils'
import { Container, Cta, Eyebrow, PageHero, Section, Split } from '@/components/ui/primitives'

/**
 * Features page.
 *
 * Follows the reference: a tinted page hero, a split statement ("Not a school
 * website builder."), then three top-rule columns (Records / Attendance /
 * Academics). Closing CTA links to contact.
 */

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

function ResultCard({
  title,
  meta,
  children,
}: {
  title: string
  meta: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-result border border-line bg-white p-[clamp(18px,3vw,24px)]">
      <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">{title}</h3>
      <p className="mb-[22px] mt-2.5 text-[13px] text-copy">{meta}</p>
      {children}
    </div>
  )
}

function Closer({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div
      className={cn(
        'mb-6 grid items-center gap-[clamp(24px,4vw,40px)] rounded-panel bg-surface p-[clamp(24px,4vw,30px)]',
      )}
    >
      <div>
        <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        <h2 className="text-ink">{title}</h2>
        <p className="max-w-[520px] text-[16px] leading-[1.65] text-copy">{body}</p>
      </div>
    </div>
  )
}

export function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title="Everyday school work, in one place."
        lead="ACS is being built around the school day: pupil records, daily attendance and academic results, with an AI assistant to support teachers."
      />

      <Section>
        <Container>
          <Split
            eyebrow="The school day, connected"
            title="Less scattered information. More room to focus."
          >
            From the morning register to end-of-term reports, ACS is being built to bring
            everyday academic work into one organized place.
          </Split>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <div>
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

            <div>
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

            <div>
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
        </Container>
      </Section>

      <Section>
        <Container>
          <Cta title="A more organized school starts with a conversation." href="/contact" label="Get Started" />
        </Container>
      </Section>
    </main>
  )
}