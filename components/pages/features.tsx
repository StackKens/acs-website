'use client'

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { Card, Container, Cta, Eyebrow, PageHero, Section } from '@/components/ui/primitives'
import { cn } from '@/lib/utils'

/**
 * Features page.
 *
 * Follows the approved reference (features.md / acs.md):
 * - Page hero
 * - Tabbed walkthrough (Records / Attendance / Results / AI assistant)
 * - Report card preview
 * - Who it's for, before/after comparison, FAQ and closing CTA
 *
 * The tab panels are real: state, ARIA wiring and arrow/Home/End keyboard
 * navigation. Content is styled with the design tokens in globals.css rather
 * than a second, page-scoped stylesheet.
 */

type Row = (string | number)[]

type Tab = {
  id: string
  label: string
  eyebrow: string
  title: string
  text: string
  card: {
    heading: string
    meta: string
    head?: string[]
    rows?: Row[]
    highlight?: string
    chat?: boolean
  }
}

const TABS: Tab[] = [
  {
    id: 'records',
    label: 'Records',
    eyebrow: '01 / Records',
    title: 'Know every pupil.',
    text: 'Keep pupil information structured and accessible, rather than spread across books and disconnected files.',
    card: {
      heading: 'Pupil records',
      meta: 'Primary 5 · Sample data',
      head: ['Pupil', 'Class', 'Stream'],
      rows: [
        ['Pupil 001', 'P5', 'A'],
        ['Pupil 002', 'P5', 'A'],
        ['Pupil 003', 'P5', 'B'],
      ],
    },
  },
  {
    id: 'attendance',
    label: 'Attendance',
    eyebrow: '02 / Attendance',
    title: 'A clearer daily register.',
    text: 'Bring recording and reviewing attendance into a consistent workflow for teachers and school administrators.',
    card: {
      heading: 'Morning register',
      meta: 'Primary 4 · Sample data',
      head: ['Pupil', 'Status'],
      rows: [
        ['Pupil 001', 'Present'],
        ['Pupil 002', 'Present'],
        ['Pupil 003', 'Absent'],
      ],
      highlight: 'Present',
    },
  },
  {
    id: 'results',
    label: 'Results',
    eyebrow: '03 / Academics',
    title: 'Make results easier to manage.',
    text: 'Organize assessment marks and examination results to support review and the preparation of pupil report cards.',
    card: {
      heading: 'Academic results',
      meta: 'Primary 5 · End of Term II · Sample data',
      head: ['Pupil', 'ENG', 'MTC', 'SCI'],
      rows: [
        ['Pupil 001', 78, 84, 81],
        ['Pupil 002', 85, 76, 89],
        ['Pupil 003', 72, 80, 75],
      ],
    },
  },
  {
    id: 'ai',
    label: 'AI assistant',
    eyebrow: '04 / AI assistant',
    title: 'An assistant for teachers.',
    text: 'Support everyday writing such as report card comments and lesson notes. Teachers stay in charge and review every draft before it is used.',
    card: {
      heading: 'AI assistant',
      meta: 'Sample conversation · Sample data',
      chat: true,
    },
  },
]

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
    q: 'Does ACS work on phones?',
    a: 'ACS is being designed to work well on phones as well as computers. Ask the team what is available for your school today.',
  },
  {
    q: 'How is pupil information handled?',
    a: 'We ask that sensitive pupil information is not sent in first enquiries. How data is stored and who can see it is agreed with you during setup.',
  },
  {
    q: 'Do teachers need training?',
    a: 'Onboarding is part of getting started. Tell us about your team and we will discuss the support that fits.',
  },
]

const REPORT = [
  ['English', 78],
  ['Mathematics', 84],
  ['Science', 81],
] as const

/**
 * Reveal — fades a block into view once, and does nothing when the visitor
 * prefers reduced motion.
 */
function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-[600ms] ease-out motion-reduce:transition-none',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-[14px] opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}

function DataTable({
  head,
  rows,
  highlight,
  caption,
}: {
  head: string[]
  rows: Row[]
  highlight?: string
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
                  className={cn(
                    'border-b border-line px-3 py-4 text-right text-copy tabular-nums',
                    cell === highlight && 'font-semibold text-brand',
                  )}
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

function Chat() {
  return (
    <>
      <div className="grid gap-3 text-sm leading-[1.55]">
        <div className="max-w-[92%] justify-self-end rounded-[10px] bg-surface px-3.5 py-3">
          <small className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-copy">
            Teacher
          </small>
          Suggest a report card comment for Pupil 001 based on this term’s marks.
        </div>
        <div className="max-w-[92%] rounded-[10px] border border-line-soft bg-white px-3.5 py-3 text-copy">
          <small className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
            Assistant
          </small>
          Pupil 001 has made steady progress this term, with strong results in Mathematics (84) and
          Science (81). Continued reading practice will help lift English further.
        </div>
      </div>
      <p className="mt-4 text-[12px] text-copy">
        Drafts are suggestions for the teacher to review and edit.
      </p>
    </>
  )
}

function FeatureTabs() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = TABS.length - 1
    const next =
      event.key === 'ArrowRight'
        ? index === last
          ? 0
          : index + 1
        : event.key === 'ArrowLeft'
          ? index === 0
            ? last
            : index - 1
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : -1

    if (next < 0) return

    event.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const tab = TABS[active]
  const { card } = tab
  const flipped = active % 2 === 1

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="ACS features">
        {TABS.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[index] = el
            }}
            id={`tab-${item.id}`}
            role="tab"
            type="button"
            aria-selected={index === active}
            aria-controls={`panel-${item.id}`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              'min-h-11 rounded-full border px-[18px] py-2.5 text-sm font-semibold transition-colors',
              index === active
                ? 'border-brand bg-brand text-white'
                : 'border-line bg-white text-copy hover:border-brand hover:text-brand',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        key={tab.id}
        id={`panel-${tab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${tab.id}`}
        tabIndex={0}
        className={cn(
          'grid items-center gap-[clamp(24px,4vw,40px)] rounded-panel bg-surface p-[clamp(24px,4vw,30px)]',
          flipped ? 'nav:grid-cols-[7fr_5fr]' : 'nav:grid-cols-[5fr_7fr]',
        )}
      >
        <div>
          <Eyebrow className="mb-5">{tab.eyebrow}</Eyebrow>
          <h2 className="t-title mb-5 text-ink">{tab.title}</h2>
          <p className="max-w-[460px] text-[16px] text-copy">{tab.text}</p>
        </div>

        <Card className={cn('p-[clamp(18px,3vw,24px)]', flipped && 'nav:order-first')}>
          <h3 className="t-item text-ink">{card.heading}</h3>
          <p className="mt-2.5 mb-[22px] text-[13px] text-copy">{card.meta}</p>
          {card.chat ? (
            <Chat />
          ) : (
            <DataTable
              head={card.head!}
              rows={card.rows!}
              highlight={card.highlight}
              caption={`${card.heading}, sample data`}
            />
          )}
        </Card>
      </div>

      <p className="mt-5 text-[13px] text-copy">
        Design preview only. Confirm available modules and workflows with the ACS team.
      </p>
    </>
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
                rows={REPORT.map(([subject, mark]) => [subject, mark])}
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
          <Eyebrow className="mb-5">Who it’s for</Eyebrow>
          <h2 id="who-title" className="t-title mb-8 text-ink">
            Made for the whole school team.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {WHO.map((item) => (
              <Reveal key={item.title} className="rounded-hero border border-line bg-white p-6">
                <h3 className="t-item mb-2 text-ink">{item.title}</h3>
                <p className="text-[15px] text-copy">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="difference-title">
        <Container>
          <Eyebrow className="mb-5">The difference</Eyebrow>
          <h2 id="difference-title" className="t-title mb-8 text-ink">
            From scattered to organized.
          </h2>
          <div className="grid gap-5 step:grid-cols-2">
            <Reveal className="rounded-hero border border-line bg-white p-[clamp(22px,3vw,32px)]">
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
            </Reveal>

            <Reveal className="rounded-hero border border-line-soft bg-surface p-[clamp(22px,3vw,32px)]">
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
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="faq-title">
        <Container>
          <Eyebrow className="mb-5">Questions</Eyebrow>
          <h2 id="faq-title" className="t-title mb-7 text-ink">
            Good things to ask.
          </h2>
          <Reveal className="max-w-[760px]">
            {FAQ.map((item) => (
              <details key={item.q} className="group border-t border-line py-[18px] last:border-b">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="text-[22px] leading-none text-brand group-open:hidden">
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden text-[22px] leading-none text-brand group-open:inline"
                  >
                    –
                  </span>
                </summary>
                <p className="mt-2.5 max-w-[640px] text-copy">{item.a}</p>
              </details>
            ))}
          </Reveal>
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
