import { Card, Container, Cta, Eyebrow, PageHero, Section } from '@/components/ui/primitives'
import { Faq } from '@/components/ui/faq'
import { Reveal } from '@/components/ui/reveal'
import { Stagger, StaggerItem } from '@/components/ui/stagger'
import { FeatureTabs } from '@/components/pages/feature-tabs'

/**
 * Features page.
 *
 * Follows the approved reference (features.md / acs.md):
 * - Page hero
 * - Tabbed walkthrough (Records / Attendance / Results / AI assistant)
 * - Report card preview
 * - Who it's for, before/after comparison, FAQ and closing CTA
 *
 * Only the tabs need client state (see feature-tabs.tsx); everything else is
 * rendered on the server.
 */

type Row = (string | number)[]

const WHO = [
  {
    title: 'Headteachers',
    body: 'See attendance and results across the school without chasing books and files.',
  },
  {
    title: 'Administrators',
    body: 'Keep pupil records organized and ready, term after term.',
  },
  {
    title: 'Teachers',
    body: 'Record the register, enter marks and prepare reports with less repeated writing.',
  },
]

const BEFORE = [
  'Registers and marks in separate books',
  'Reports compiled by hand',
  'Hard to see the whole school at once',
]

const AFTER = [
  'One organized place for records, attendance and results',
  'Results ready to support report cards',
  'A clearer picture for the whole team',
]

const FAQ = [
  {
    question: 'Does ACS work on phones?',
    answer:
      'ACS is being designed to work well on phones as well as computers. Ask the team what is available for your school today.',
  },
  {
    question: 'How is pupil information handled?',
    answer:
      'We ask that sensitive pupil information is not sent in first enquiries. How data is stored and who can see it is agreed with you during setup.',
  },
  {
    question: 'Do teachers need training?',
    answer:
      'Onboarding is part of getting started. Tell us about your team and we will discuss the support that fits.',
  },
]

const REPORT: Row[] = [
  ['English', 78],
  ['Mathematics', 84],
  ['Science', 81],
]

function DataTable({
  head,
  rows,
  caption,
}: {
  head: string[]
  rows: Row[]
  caption?: string
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[260px] border-collapse text-[13.5px] [&_td:first-child]:text-left [&_th:first-child]:text-left [&_tr:last-child_td]:border-b-0">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            {head.map((cell) => (
              <th
                key={cell}
                scope="col"
                className="bg-surface px-3 py-3.5 text-right font-normal text-copy"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={String(row[0])}>
              {row.map((cell, index) => (
                <td
                  key={index}
                  className="border-b border-line px-3 py-4 text-right text-copy tabular-nums"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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

      <Section aria-label="ACS features">
        <Container>
          <FeatureTabs />
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="reports-title">
        <Container>
          <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
            <div>
              <Eyebrow className="mb-5">Report cards</Eyebrow>
              <h2 id="reports-title" className="t-title max-w-[520px] text-ink">
                From marks to a finished report.
              </h2>
            </div>
            <p className="max-w-[420px] text-copy">
              Results and teacher comments come together in one clear layout.
            </p>
          </Reveal>

          <Reveal className="mx-auto max-w-[560px]">
            <Card className="p-[clamp(18px,3vw,24px)]">
              <div className="mb-1.5 flex flex-wrap items-center justify-between gap-3">
                <h3 className="t-item text-ink">Demo Primary School</h3>
                <span className="text-[13px] text-copy">Term II, 2026</span>
              </div>
              <p className="mb-4 text-[13px] text-copy">Pupil 001 · Primary 5 · Sample report card</p>
              <DataTable
                head={['Subject', 'Mark']}
                rows={REPORT}
                caption="Sample report card marks for Pupil 001"
              />
              <p className="mt-[18px] rounded-result bg-surface p-3.5 text-sm text-copy">
                <strong className="font-semibold text-ink">Teacher’s comment:</strong> Steady progress
                this term, with strong results in Mathematics and Science.
              </p>
            </Card>
          </Reveal>
        </Container>
      </Section>

      <Section aria-labelledby="who-title">
        <Container>
          <Reveal>
            <Eyebrow className="mb-5">Who it’s for</Eyebrow>
            <h2 id="who-title" className="t-title mb-8 text-ink">
              Made for the whole school team.
            </h2>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {WHO.map((item) => (
              <StaggerItem key={item.title} className="rounded-hero border border-line bg-white p-6">
                <h3 className="t-item mb-2 text-ink">{item.title}</h3>
                <p className="text-[15px] text-copy">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="difference-title">
        <Container>
          <Reveal>
            <Eyebrow className="mb-5">The difference</Eyebrow>
            <h2 id="difference-title" className="t-title mb-8 text-ink">
              From scattered to organized.
            </h2>
          </Reveal>
          <Stagger className="grid gap-5 step:grid-cols-2">
            <StaggerItem className="rounded-hero border border-line bg-white p-[clamp(22px,3vw,32px)]">
              <h3 className="t-item mb-3.5 text-ink">Without ACS</h3>
              <ul className="grid list-none gap-3.5 pl-0 text-copy">
                {BEFORE.map((item) => (
                  <li
                    key={item}
                    className="relative pl-[22px] before:absolute before:left-0 before:top-[0.65em] before:h-0.5 before:w-2 before:rounded-full before:bg-brand before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem className="rounded-hero border border-line-soft bg-surface p-[clamp(22px,3vw,32px)]">
              <h3 className="t-item mb-3.5 text-ink">With ACS</h3>
              <ul className="grid list-none gap-3.5 pl-0 text-copy">
                {AFTER.map((item) => (
                  <li
                    key={item}
                    className="relative pl-[22px] before:absolute before:left-0 before:top-[0.65em] before:h-0.5 before:w-2 before:rounded-full before:bg-brand before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </Stagger>
        </Container>
      </Section>

      <Section aria-labelledby="faq-title">
        <Container>
          <Reveal>
            <Eyebrow className="mb-5">Questions</Eyebrow>
            <h2 id="faq-title" className="t-title mb-7 text-ink">
              Good things to ask.
            </h2>
          </Reveal>
          <Faq items={FAQ} />
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <Cta
              title="A more organized school starts with a conversation."
              href="/contact"
              label="Request a walkthrough"
            />
          </Reveal>
        </Container>
      </Section>
    </main>
  )
}
