import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

interface Feature {
  id: string
  number: string
  category: string
  title: string
  summary: string
  highlights: string[]
}

const features: Feature[] = [
  {
    id: 'ai-assistance',
    number: '01',
    category: 'AI Assistance',
    title: 'Intelligent Academic Assistance',
    summary: 'ACS helps teachers create exercises, quizzes, revision questions, lesson-support materials, explanations and marking guides — designed around primary education from Primary 1 to Primary 7. Teachers review and edit all generated material before classroom use.',
    highlights: [
      'Exercises, quizzes and revision questions',
      'Lesson-support materials and marking guides',
      'Designed for Primary 1 to Primary 7',
      'Teacher-controlled: review and edit before use'
    ]
  },
  {
    id: 'pupil-registry',
    number: '02',
    category: 'Records',
    title: 'Pupil Registry & Profiles',
    summary: 'Keep every learner record accurate, searchable, and connected to the right guardian.',
    highlights: [
      'Admission, class, and guardian details in one profile',
      'Promotion, transfer, and historical records',
      'Fast search by name, admission number, or stream',
      'Class & stream allocations with historical tracking'
    ]
  },
  {
    id: 'fees-accounts',
    number: '03',
    category: 'Finance',
    title: 'Fees & Financial Management',
    summary: 'Manage term fees, record every payment, and see each pupil\'s balance immediately.',
    highlights: [
      'Configurable fee structures by class and term',
      'Partial payments with sequential, permanent receipts',
      'Pupil statements and finance reports',
      'Staff records with role-based access',
      'An isolated, backed-up workspace per school'
    ]
  },
  {
    id: 'attendance-tracking',
    number: '04',
    category: 'Daily Operations',
    title: 'Digital Attendance & Roll Call',
    summary: 'Record morning and afternoon attendance quickly, with clear term-level insight.',
    highlights: [
      'Fast roll calls on mobile and desktop',
      'Absence flags and attendance trends',
      'Ready-to-export summaries for Ministry and inspector visits'
    ]
  },
  {
    id: 'academic-performance',
    number: '05',
    category: 'Academics',
    title: 'Exams & Academic Performance',
    summary: 'Enter assessment marks once and let ACS calculate totals, aggregates, and divisions.',
    highlights: [
      'BOT, MOT, and EOT assessment records',
      'Class totals, averages, and performance comparisons',
      'Standardized grading schemes and subject weighting',
      'Automatic calculation of class totals, averages, and ranks'
    ]
  },
  {
    id: 'report-cards',
    number: '06',
    category: 'Reporting',
    title: 'Official Term Report Cards',
    summary: 'Produce consistent, school-branded reports without copying marks and remarks by hand.',
    highlights: [
      'One-click bulk compilation for entire streams or classes',
      'School crest, motto, term dates, and fees balance display',
      'Pre-populated teacher remarks and conduct ratings',
      'Clean PDF generation ready for printing or WhatsApp/email sharing'
    ]
  },
  {
    id: 'sms-communication',
    number: '07',
    category: 'Communication',
    title: 'Parent Engagement & SMS Alerts',
    summary: 'Send relevant announcements and personalized fee reminders to verified guardians.',
    highlights: [
      'Target messages by class, stream, or whole school',
      'Automated fee balance reminders to prevent late collections',
      'Direct link between pupils and verified guardian phone numbers',
      'Notice board for school events, visitation days, and closures'
    ]
  },
  {
    id: 'staff-roles',
    number: '08',
    category: 'Administration',
    title: 'Staff & Teaching Allocations',
    summary: 'Give each staff member the access they need—and nothing they do not.',
    highlights: [
      'Class teacher and subject instructor assignments',
      'Role-based permissions (Headteachers, Bursars, Teachers)',
      'Staff profile records and contact directory',
      'Audit log tracking which staff member entered or edited records'
    ]
  },
  {
    id: 'workspaces',
    number: '09',
    category: 'Security',
    title: 'Dedicated School Workspaces',
    summary: 'Keep every school\'s information private, separate, and protected.',
    highlights: [
      'Complete multi-tenant isolation for every registered institution',
      'Strict audit trails for all sensitive academic and financial records',
      'Fast cloud redundancy—no lost paper ledgers or corrupt spreadsheets',
      'Optimized for low-bandwidth environments on desktop and mobile'
    ]
  }
]

export function FeaturesPage() {
  return (
    <>
      <section aria-labelledby="page-title" className="mx-auto max-w-[1180px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <h1
          id="page-title"
          className="mb-6 text-4xl font-semibold tracking-[-0.07em] text-[#152b3c] sm:text-6xl sm:leading-[0.98]"
        >
          One platform for the work that runs your school.
        </h1>
        <p className="text-base leading-7 text-[#5b6b78] sm:text-lg">
          Clear, practical tools for learner records, attendance, academics, finance, communication,
          and school administration — with intelligent assistance for teachers.
        </p>
        <section className="border-y border-[#e9edef] bg-[#f8fafb] pt-8">
          <div className="mx-auto max-w-[1180px] px-5 py-6">
            <p className="text-sm text-[#647585]">
              The first 20 schools receive 2 months free.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Link href="/get-started" className="button-primary">
                Get Started <ArrowRight className="ml-2 inline size-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="button-secondary">
                Talk to our team
              </Link>
            </div>
          </div>
        </section>
      </section>

      <section className="border-y border-[#e9edef]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <ol className="mt-8 space-y-6 divide-y divide-border-border border-border-border">
            {features.map((f) => (
              <li
                key={f.id}
                className="border-b border-border border-border pb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7891a1]">{f.number}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#152b3c]">
                      {f.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#617281]">
                      {f.summary}
                    </p>
                  </div>
                  <div className="mt-6 space-y-3">
                    {f.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-3 text-sm leading-6 text-[#526676]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#2c61cc]"
                        />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}