import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import {
  AIPreview,
  AttendancePreview,
  DashboardPreview,
  FinancePreview,
  ParentPreview,
  PupilPreview,
  ReportCardPreview,
  ResultsPreview,
} from '@/components/previews'
import { Button, Container, Cta, PageHero, Section } from '@/components/ui/primitives'

interface FeatureGroup {
  id: string
  number: string
  title: string
  category: string
  what: string
  roles: string
  problem: string
  workflow: string
  output: string
  availability: string
  highlights: string[]
  preview: 'dashboard' | 'pupils' | 'attendance' | 'results' | 'report' | 'finance' | 'parent' | 'ai'
}

const groups: FeatureGroup[] = [
  {
    id: 'pupil-registry',
    number: '01',
    title: 'Pupil records and profiles',
    category: 'Records',
    what: 'A central profile for every learner, carrying admission details, class and stream allocation, date of birth, emergency contacts and linked guardians.',
    roles: 'Administrators and head teachers create and correct records; teachers browse the pupils in their own classes.',
    problem: 'Admission books and spreadsheets lose track of who is in which class, who is linked to which guardian, and what changed last year.',
    workflow: 'Enrol a pupil once, place them in a class, link their guardians, and let promotion, transfer and historical tracking follow from there.',
    output: 'Searchable profiles with admission numbers, current class and stream, linked guardian contacts, and a history of allocations.',
    availability: 'Available now.',
    highlights: [
      'Fast search by name, admission number or stream',
      'Class and stream allocations with historical tracking',
      'Linked parent and emergency contact details',
      'Promotion, transfer and year-to-year workflow',
    ],
    preview: 'pupils',
  },
  {
    id: 'attendance',
    number: '02',
    title: 'Daily attendance and roll call',
    category: 'Daily operations',
    what: 'Morning and afternoon roll calls taken in seconds from a phone, tablet or computer, with the four states kept apart.',
    roles: 'Teachers mark their own classes; administrators and head teachers can correct a wrong day and review the analytics.',
    problem: 'A register written on paper at the door tells you who was present today, but not who has been missing for a fortnight.',
    workflow: 'Mark each class once per session, add a note where it matters, and let the term-level analytics build themselves.',
    output: 'Attendance percentages per pupil and class, absence flags for pastoral follow-up, and exportable summaries for Ministry and inspector visits.',
    availability: 'Available now.',
    highlights: [
      'One-tap roll call for morning and afternoon sessions',
      'Present, absent, late and excused recorded separately',
      'Attendance percentages per pupil and class',
      'Analytics by class, date range or whole term',
    ],
    preview: 'attendance',
  },
  {
    id: 'assessments',
    number: '03',
    title: 'Assessments, results and grading',
    category: 'Academics',
    what: 'Beginning of Term, Mid-Term and End of Term assessments recorded per subject, with totals, averages, class positions and divisions calculated automatically.',
    roles: 'Teachers create and enter marks for their assigned class and subject only; administrators and head teachers work across the school and release results.',
    problem: 'Totalling marks by hand across every subject and every pupil is slow, and it is where transcription errors enter school records.',
    workflow: 'Open an assessment period, create the assessment, enter marks, and let ACS calculate the rest before anything is published.',
    output: 'Class totals, averages, rankings, subject breakdowns and division grades. A mark that was never entered stays missing and is never counted as zero.',
    availability: 'Available now.',
    highlights: [
      'BOT, MOT and EOT assessment records',
      'Automatic totals, averages, class positions and divisions',
      'Marks entry scoped to the teacher’s own assignments',
      'A missing mark stays missing — never a zero',
    ],
    preview: 'results',
  },
  {
    id: 'report-cards',
    number: '04',
    title: 'Report cards and school reports',
    category: 'Reporting',
    what: 'Term report cards compiled for a whole class at once, carrying school details, marks, attendance, remarks and the fees balance, plus school-wide report summaries.',
    roles: 'Administrators and head teachers publish term reports and generate school reports; teachers and parents are redirected away from report generation.',
    problem: 'Writing report cards by hand, class by class, is the single largest piece of routine work at the end of every term.',
    workflow: 'Publish the term report for a class, which notifies the linked parents and opens a printable report card for each pupil.',
    output: 'Printable PDF report cards with the school crest, motto, term dates and fees balance, and reports for enrolment, attendance, performance, staff and finance.',
    availability: 'Available now.',
    highlights: [
      'Batch compilation for an entire class or stream',
      'School crest, motto, term dates and fees balance',
      'Pre-populated teacher remarks and conduct ratings',
      'Published reports are the record for the term',
    ],
    preview: 'report',
  },
  {
    id: 'finance',
    number: '05',
    title: 'Fees, payments and finance',
    category: 'Finance',
    what: 'Fee structures set per class and term, payments recorded against each pupil account, and a live outstanding balance on every pupil.',
    roles: 'Administrators and head teachers create fee structures; finance officers own collection, receipts, statements and finance reports.',
    problem: 'A paper ledger cannot show a live balance, and a spreadsheet receipt gets edited instead of corrected.',
    workflow: 'Set the structure for the class and term, bill against it, and record each payment as it is taken.',
    output: 'Sequential receipt numbers, printable receipts, per-pupil statements, term revenue summaries and defaulter reports.',
    availability: 'Available now.',
    highlights: [
      'Fee structures per class and academic term',
      'Partial payments with a live outstanding balance',
      'Sequential, permanent receipts — corrections are audited reversals',
      'Pupil statements and finance reports',
    ],
    preview: 'finance',
  },
  {
    id: 'parents',
    number: '06',
    title: 'Parent communication and the parent portal',
    category: 'Communication',
    what: 'SMS announcements targeted by class, stream or the whole school, personalised fee reminders, and a portal where each family follows its own children.',
    roles: 'Administrators and head teachers post announcements; every signed-in person reads them in their own inbox.',
    problem: 'Fee balances, results and closures travel by word of mouth, and by the time a parent hears, the moment has passed.',
    workflow: 'Post once to the right audience, and let the message reach the verified guardian number linked to each pupil.',
    output: 'Targeted SMS with delivery confirmation, personalised balance reminders, a notice board for school events, and a parent portal showing attendance, released results and fees.',
    availability: 'Available now. Results only appear in the parent portal once the school releases them, and payments are made at the school office.',
    highlights: [
      'Target messages by class, stream or whole school',
      'Automated fee-balance reminders to guardians',
      'Parent portal with attendance, results and fees',
      'Announcement and notification inboxes',
    ],
    preview: 'parent',
  },
  {
    id: 'administration',
    number: '07',
    title: 'School administration and staff',
    category: 'Administration',
    what: 'The academic structure — years, terms, streams, subjects and classes — plus staff records, teaching allocations and role-based access.',
    roles: 'Administrators create the structure and staff records; head teachers read it and use it everywhere else; teachers see only their own assignments.',
    problem: 'Without a defined structure, class lists, subject allocations and staff access are all maintained separately and drift apart.',
    workflow: 'Set the year and terms, add streams, subjects and classes, attach teachers, then give each person exactly the access their job needs.',
    output: 'A live school structure, a staff directory, class teacher and subject instructor assignments, and an audit log of who changed what and when.',
    availability: 'Available now.',
    highlights: [
      'Academic years, terms, streams, subjects and classes',
      'Class teacher and subject instructor assignments',
      'Role-based permissions for administrators, head teachers, teachers and finance officers',
      'Audit log and activity feed for sensitive actions',
    ],
    preview: 'dashboard',
  },
  {
    id: 'workspaces',
    number: '08',
    title: 'Dedicated school workspaces',
    category: 'Security',
    what: 'Each school operates in its own isolated environment, with its own users, pupil records, daily information and continuous cloud backup.',
    roles: 'Every school sees only its own data. The ACS platform team runs schools, billing and support from a separate portal that school accounts never enter.',
    problem: 'One shared installation means one leak exposes every school. Spreadsheets on a laptop mean one lost device loses a term of records.',
    workflow: 'Your school is set up once, and everything recorded inside it stays inside it.',
    output: 'Complete separation between schools, strict audit trails, and cloud redundancy for records that cannot be reconstructed from paper.',
    availability: 'Available now.',
    highlights: [
      'Complete isolation between schools',
      'Strict audit trails for academic and financial records',
      'Cloud backup — no lost ledgers or corrupt spreadsheets',
      'Optimised for low-bandwidth environments on desktop and mobile',
    ],
    preview: 'dashboard',
  },
  {
    id: 'ai-assistance',
    number: '09',
    title: 'AI assistance for teachers',
    category: 'AI assistance',
    what: 'Exercises, quizzes, revision questions, lesson-support materials, explanations and marking guides, designed around primary education from Primary 1 to Primary 7.',
    roles: 'Teachers use it for preparation. It does not teach, mark, or make decisions — the teacher reviews and edits everything before use.',
    problem: 'Preparing differentiated exercises for seven class levels takes time that is not spent with pupils.',
    workflow: 'Pick the class level, subject and topic, choose the type of material and the difficulty, then edit the result before it goes near a classroom.',
    output: 'Draft classroom material at the right level and difficulty, ready for the teacher to review, edit and use.',
    availability: 'Available now. It is scoped to creating material for Primary 1 to Primary 7 — it is not an autonomous tutor, a prediction engine, or a decision maker.',
    highlights: [
      'Exercises, quizzes and revision questions',
      'Lesson-support materials and marking guides',
      'Designed for Primary 1 to Primary 7',
      'Teacher-controlled: review and edit before use',
    ],
    preview: 'ai',
  },
]

const previews = {
  dashboard: DashboardPreview,
  pupils: PupilPreview,
  attendance: AttendancePreview,
  results: ResultsPreview,
  report: ReportCardPreview,
  finance: FinancePreview,
  parent: ParentPreview,
  ai: AIPreview,
}

export function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Product features"
        title="One platform for the work that runs your school."
        lead="Clear, practical tools for learner records, attendance, academics, finance, communication and school administration — with intelligent assistance for teachers."
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/get-started">
            Get Started <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button href="/contact" variant="ghost">
            Talk to our team
          </Button>
        </div>
        <p className="t-small mt-6">
          The first 20 schools receive 2 months free.{' '}
          <Link href="/pricing" className="link-brand">
            See pricing
          </Link>
        </p>
      </PageHero>

      {/* Table of contents */}
      <nav aria-label="Feature groups" className="border-y border-line bg-surface">
        <Container className="py-4">
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="flex min-h-11 items-center rounded-btn border border-line bg-white px-3 text-[13px] font-medium text-copy transition-colors hover:border-brand hover:text-ink"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* Capability groups */}
      {groups.map((group, index) => {
        const Preview = previews[group.preview]
        const reversed = index % 2 === 1
        return (
          <Section
            key={group.id}
            id={group.id}
            tone={index % 2 === 0 ? 'white' : 'tint'}
            aria-labelledby={`${group.id}-title`}
            className="scroll-mt-24"
          >
            <Container>
              <div className="grid items-start gap-10 nav:grid-cols-2 nav:gap-16">
                <div className={reversed ? 'nav:order-2' : ''}>
                  <p className="t-eyebrow text-brand">
                    {group.number} / {group.category}
                  </p>
                  <h2 id={`${group.id}-title`} className="t-title mt-3 text-ink">
                    {group.title}
                  </h2>
                  <p className="t-body mt-4 text-copy">{group.what}</p>

                  <dl className="mt-7 space-y-5 border-t border-line pt-6">
                    {[
                      { term: 'Who uses it', detail: group.roles },
                      { term: 'The problem it addresses', detail: group.problem },
                      { term: 'In the school workflow', detail: group.workflow },
                      { term: 'What it produces', detail: group.output },
                    ].map((row) => (
                      <div key={row.term}>
                        <dt className="text-[13px] font-semibold text-ink">{row.term}</dt>
                        <dd className="mt-1 text-[15px] leading-6 text-copy">{row.detail}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-7 space-y-2.5">
                    {group.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-[15px] leading-6 text-copy">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-7 border-t border-line pt-5 text-[13px] text-copy">
                    <span className="font-semibold text-ink">Availability: </span>
                    {group.availability}
                  </p>
                </div>

                <div className={reversed ? 'nav:order-1' : ''}>
                  <Preview />
                </div>
              </div>
            </Container>
          </Section>
        )
      })}

      {/* Enquiry */}
      <Section>
        <Container>
          <Cta
            title="Want to see this with your school’s data in mind?"
            href="/contact"
            label="Request a demonstration"
          />
          <p className="t-small mt-6">
            Prefer to read first?{' '}
            <Link href="/how-it-works" className="link-brand">
              See how onboarding works
            </Link>{' '}
            or{' '}
            <Link href="/user-guide" className="link-brand">
              read the user guide
            </Link>
            .
          </p>
        </Container>
      </Section>
    </main>
  )
}
