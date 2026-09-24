import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

interface Feature {
  id: string
  number: string
  category: string
  title: string
  summary: string
  highlights: [string, string]
}

const features: Feature[] = [
  {
    id: 'pupil-registry',
    number: '01',
    category: 'Records',
    title: 'Pupil Registry & Profiles',
    summary: 'Keep every learner record accurate, searchable, and connected to the right guardian.',
    highlights: [
      'Admission, class, and guardian details in one profile',
      'Promotion, transfer, and historical records'
    ]
  },
  {
    id: 'fees-accounts',
    number: '02',
    category: 'Finance',
    title: 'Fees & Financial Management',
    summary: 'Manage term fees, record every payment, and see each pupil’s balance immediately.',
    highlights: [
      'Configurable fee structures by class and term',
      'Partial payments, receipts, and defaulter follow-up'
    ]
  },
  {
    id: 'attendance-tracking',
    number: '03',
    category: 'Daily Operations',
    title: 'Digital Attendance & Roll Call',
    summary: 'Record morning and afternoon attendance quickly, with clear term-level insight.',
    highlights: [
      'Fast roll calls on mobile and desktop',
      'Absence flags and attendance trends'
    ]
  },
  {
    id: 'academic-performance',
    number: '04',
    category: 'Academics',
    title: 'Exams & Academic Performance',
    summary: 'Enter assessment marks once and let ACS calculate totals, aggregates, and divisions.',
    highlights: [
      'BOT, MOT, and EOT assessment records',
      'Class totals, averages, and performance comparisons'
    ]
  },
  {
    id: 'report-cards',
    number: '05',
    category: 'Reporting',
    title: 'Official Term Report Cards',
    summary: 'Produce consistent, school-branded reports without copying marks and remarks by hand.',
    highlights: [
      'Batch compilation for complete classes',
      'Print-ready PDF reports with school details'
    ]
  },
  {
    id: 'sms-communication',
    number: '06',
    category: 'Communication',
    title: 'Parent Engagement & SMS Alerts',
    summary: 'Send relevant announcements and personalized fee reminders to verified guardians.',
    highlights: [
      'Target messages by class, stream, or whole school',
      'Delivery confirmation and personalized balances'
    ]
  },
  {
    id: 'staff-roles',
    number: '07',
    category: 'Administration',
    title: 'Staff & Teaching Allocations',
    summary: 'Give each staff member the access they need—and nothing they do not.',
    highlights: [
      'Role-based access for teachers, bursars, and leaders',
      'Teaching assignments and clear audit trails'
    ]
  },
  {
    id: 'workspaces',
    number: '08',
    category: 'Security',
    title: 'Dedicated School Workspaces',
    summary: 'Keep every school’s information private, separate, and protected.',
    highlights: [
      'Isolated school data with secure access',
      'Automated backups and responsive cloud access'
    ]
  }
]

export function FeaturesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1180px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <p className="eyebrow">Product features</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.07em] text-[#152b3c] sm:text-6xl sm:leading-[0.98]">
          One platform for the work that runs your school.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#5b6b78] sm:text-lg">
          Clear, practical tools for learner records, attendance, academics, finance, communication, and school administration.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-started" className="button-primary">
            Start free trial <ArrowRight className="ml-2 inline size-4" aria-hidden="true" />
          </Link>
          <Link href="/contact" className="button-secondary">
            Talk to our team
          </Link>
        </div>
      </section>

      <section className="border-y border-[#dfe6ea] bg-[#f8fafb]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Core capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#1c2733] sm:text-4xl">
              Built around the school term.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#5b6b78]">
              Everything essential, organized into focused tools your team can understand and use quickly.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#dfe6ea] sm:grid-cols-2">
            {features.map((feature) => (
              <article
                id={feature.id}
                key={feature.id}
                className="scroll-mt-24 border-b border-r border-[#dfe6ea] bg-white p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7891a1]">
                    {feature.number} / {feature.category}
                  </p>
                  <span className="h-px w-8 bg-[#cbd6dc]" aria-hidden="true" />
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-[#1c2733] sm:text-2xl">
                  {feature.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5b6b78]">{feature.summary}</p>
                <ul className="mt-6 space-y-3 border-t border-[#e6ecef] pt-5 text-xs leading-5 text-[#526676]">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#315f79]" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#152b3c] text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Ready to simplify your school management?
            </h2>
            <p className="mt-2 text-sm text-[#b4c2cc] sm:text-base">
              The first 20 schools receive 2 months free.
            </p>
            <p className="mt-3 text-xs text-[#8fa3b1]">
              Isolated workspaces · Role-based access · Daily backups
            </p>
          </div>
          <Link href="/get-started" className="button-light shrink-0">
            Start free trial <ArrowRight className="ml-2 inline size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
