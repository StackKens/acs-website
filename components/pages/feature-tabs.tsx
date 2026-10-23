'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { Card, Eyebrow } from '@/components/ui/primitives'
import { motionTokens } from '@/lib/motion'
import { cn } from '@/lib/utils'

/**
 * The interactive part of the Features page: the tab list and the four
 * panels. All panels are rendered and hidden with the `hidden` attribute, as
 * in the reference, so every panel's content exists in the HTML and nothing
 * remounts when the visitor switches tabs.
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

export function FeatureTabs() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const tab = TABS[active]
  const flipped = active % 2 === 1
  const { card } = tab

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
              'relative min-h-11 overflow-hidden rounded-full border px-[18px] py-2.5 text-sm font-semibold transition-colors',
              index === active
                ? 'border-brand text-white'
                : 'border-line bg-white text-copy hover:border-brand hover:text-brand',
            )}
          >
            {index === active && (
              <m.span
                layoutId="feature-tab-pill"
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-brand"
                transition={{
                  duration: motionTokens.duration.interaction,
                  ease: motionTokens.ease,
                }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          tabIndex={0}
          initial={{ opacity: 0.001, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: motionTokens.duration.interaction, ease: motionTokens.ease }}
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
        </m.div>
      </AnimatePresence>

      <p className="mt-5 text-[13px] text-copy">
        Design preview only. Confirm available modules and workflows with the ACS team.
      </p>
    </>
  )
}
