import { cn } from '@/lib/utils'
import { Container, Cta, Eyebrow, PageHero, Section } from '@/components/ui/primitives'

/**
 * Features page.
 *
 * Follows the reference: a tinted page hero, four "closer" panels that pair
 * a short claim with a sample of the screen it describes, then the closing
 * call to action. The sample tables and conversation use placeholder data
 * and say so, because nothing here is a live school.
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
                      rowIndex === rows.length - 1 ? 'border-b-0' : 'border-b border-line',
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
  flip = false,
  children,
}: {
  eyebrow: string
  title: string
  body: string
  flip?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'mb-6 grid items-center gap-[clamp(24px,4vw,40px)] rounded-panel bg-surface p-[clamp(24px,4vw,30px)]',
        flip ? 'nav:grid-cols-[7fr_5fr]' : 'nav:grid-cols-[5fr_7fr]',
      )}
    >
      <div>
        <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        <h2 className="t-title mb-5 text-ink">{title}</h2>
        <p className="max-w-[520px] text-[16px] leading-[1.65] text-copy">{body}</p>
      </div>
      <div className={cn(flip && 'nav:order-first')}>{children}</div>
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
          <Closer
            eyebrow="01 / Records"
            title="Know every pupil."
            body="Keep pupil information structured and accessible, rather than spread across books and disconnected files."
          >
            <ResultCard title="Pupil records" meta="Primary 5 · Sample data">
              <DataTable
                head={['Pupil', 'Class', 'Stream']}
                rows={[
                  ['Pupil 001', 'P5', 'A'],
                  ['Pupil 002', 'P5', 'A'],
                  ['Pupil 003', 'P5', 'B'],
                ]}
              />
            </ResultCard>
          </Closer>

          <Closer
            flip
            eyebrow="02 / Attendance"
            title="A clearer daily register."
            body="Bring recording and reviewing attendance into a consistent workflow for teachers and school administrators."
          >
            <ResultCard title="Morning register" meta="Primary 4 · Sample data">
              <DataTable
                head={['Pupil', 'Status']}
                rows={[
                  ['Pupil 001', { text: 'Present', on: true }],
                  ['Pupil 002', { text: 'Present', on: true }],
                  ['Pupil 003', 'Absent'],
                ]}
              />
            </ResultCard>
          </Closer>

          <Closer
            eyebrow="03 / Academics"
            title="Make results easier to manage."
            body="Organize assessment marks and examination results to support review and the preparation of pupil report cards."
          >
            <ResultCard
              title="Academic results"
              meta="Primary 5 · End of Term II · Sample data"
            >
              <DataTable
                head={['Pupil', 'ENG', 'MTC', 'SCI']}
                rows={[
                  ['Pupil 001', '78', '84', '81'],
                  ['Pupil 002', '85', '76', '89'],
                  ['Pupil 003', '72', '80', '75'],
                ]}
              />
            </ResultCard>
          </Closer>

          <Closer
            flip
            eyebrow="04 / AI assistant"
            title="An assistant for teachers."
            body="Give teachers a helping hand with everyday writing, such as report card comments and lesson notes. Teachers stay in charge and review every draft before it is used."
          >
            <ResultCard title="AI assistant" meta="Sample conversation · Sample data">
              <div className="grid gap-3 text-[14px] leading-[1.55]">
                <div className="max-w-[92%] justify-self-end rounded-[10px] bg-surface p-[12px_14px] text-ink">
                  <small className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-copy">
                    Teacher
                  </small>
                  Suggest a report card comment for Pupil 001 based on this term’s marks.
                </div>
                <div className="max-w-[92%] rounded-[10px] border border-line-soft bg-white p-[12px_14px] text-copy">
                  <small className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
                    Assistant
                  </small>
                  Pupil 001 has made steady progress this term, with strong results in Mathematics
                  (84) and Science (81). Continued reading practice will help lift English further.
                </div>
              </div>
              <p className="mt-4 text-[12px] text-copy">
                Drafts are suggestions for the teacher to review and edit.
              </p>
            </ResultCard>
          </Closer>

          <p className="t-small">
            Design preview only. Confirm available modules and workflows with the ACS team.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Cta
            title="A more organized school starts with a conversation."
            href="/contact"
            label="Get Started"
          />
        </Container>
      </Section>
    </main>
  )
}
