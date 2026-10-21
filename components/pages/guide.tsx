import Link from 'next/link'
import { Container, Cta, PageHero, Section } from '@/components/ui/primitives'
import { appLoginUrl } from '@/lib/site'

/**
 * The public user guide. Content mirrors the platform's src/data/guide.ts
 * public sections — every claim describes a backend-verified capability, so
 * keep the two files in step when role rules change.
 */

interface GuidePoint {
  heading: string
  body: string
}

interface GuideSection {
  id: string
  title: string
  intro: string
  points: GuidePoint[]
}

const sections: GuideSection[] = [
  {
    id: 'welcome',
    title: 'Welcome to ACS',
    intro:
      'ACS (Academic Cloud System) keeps a school’s pupils, attendance, results, fees and communication in one connected system. Everything is recorded against your own school — no other school’s data is ever visible to you.',
    points: [
      {
        heading: 'Three portals, one platform',
        body: 'School staff (administrators, head teachers, teachers, finance officers) work in the school portal. Parents and guardians use the parent portal. The ACS platform team runs schools, billing and support from a separate portal that school accounts never enter.',
      },
      {
        heading: 'Signing in',
        body: 'Staff sign in with the school name, their email address and password. Parents sign in with the school name, phone number and password. Accounts are created by your school — public registration is closed, so contact your school if you need access.',
      },
      {
        heading: 'Install it as an app',
        body: 'On Chrome, Edge or Android, accept the “Install ACS” prompt (or choose Install app in the browser menu) to keep ACS on your home screen. On iPhone or iPad, tap Share and choose Add to Home Screen.',
      },
      {
        heading: 'Where to get help',
        body: 'Signed-in staff can raise a support ticket from the Support section. Schools waiting for approval or with account questions can call +256755038100 or +256707764215, or email stackkens@gmail.com.',
      },
    ],
  },
  {
    id: 'first-steps',
    title: 'Setting up your school',
    intro:
      'The order below takes a new school from empty to running. Only administrators can create the academic structure, classes and staff accounts, so start there.',
    points: [
      {
        heading: '1. Academic year and terms',
        body: 'Create the academic year under Academic Years, then add its terms under Terms. Settings ▸ System Preferences then lets you pick which year and term are active for the whole school.',
      },
      {
        heading: '2. Streams, subjects and classes',
        body: 'Add streams and subjects under Academics, then create classes and attach a class teacher and subjects to each class.',
      },
      {
        heading: '3. Staff and their logins',
        body: 'Add staff records under Staff and create a login account for each one, with class-teaching and subject responsibilities. Head teachers can activate and deactivate accounts, but only administrators create or edit staff records.',
      },
      {
        heading: '4. Parents and guardians',
        body: 'Record parents under Parents & Guardians and link each one to their children — a parent signs in with the phone number recorded here.',
      },
      {
        heading: '5. Pupils',
        body: 'Enrol pupils under Pupils and place each one in the right class. Administrators, head teachers and teachers can add pupils; administrators and head teachers correct pupil details.',
      },
      {
        heading: '6. Fees',
        body: 'Create fee structures under Finance ▸ Fee Structures for each class and term so pupil accounts bill correctly from day one.',
      },
    ],
  },
  {
    id: 'head-teacher',
    title: 'The head teacher’s desk',
    intro: 'Head teachers share most of the administrator’s tools, with a few deliberate boundaries.',
    points: [
      {
        heading: 'People',
        body: 'Add pupils, correct pupil and parent details, and activate or deactivate staff accounts. Staff records themselves are created by administrators.',
      },
      {
        heading: 'Academic structure is read-only',
        body: 'Academic years, terms, streams, subjects and classes are created by administrators — you can read all of them and use them everywhere else.',
      },
      {
        heading: 'Teaching and results',
        body: 'Follow attendance and performance across the school, enter marks where you teach, and release results — releasing is an administrator and head-teacher action.',
      },
      {
        heading: 'Reports and announcements',
        body: 'Generate school reports, create and publish term reports under Reports ▸ Report Release, and post announcements to parents, teachers, staff or a class.',
      },
      {
        heading: 'Fees',
        body: 'Create fee structures alongside administrators, and record payments, receipts and reversals from the Finance section.',
      },
    ],
  },
  {
    id: 'teacher',
    title: 'A teacher’s day in ACS',
    intro: 'Your portal is scoped to your classes: you see your pupils, mark their attendance and enter their marks.',
    points: [
      {
        heading: 'Dashboard',
        body: 'Start at the Dashboard for today’s classes and anything that needs your attention.',
      },
      {
        heading: 'Pupils and classes',
        body: 'Browse pupils and classes across the school, and add a new pupil when someone joins mid-term.',
      },
      {
        heading: 'Attendance',
        body: 'Mark your classes daily under Attendance: present, absent, late or excused, with a note when useful.',
      },
      {
        heading: 'Marks',
        body: 'Enter marks under Performance for your assigned class and subject only — the system checks your teaching assignments, so another teacher’s subjects never appear for you. Releasing results is reserved for administrators and head teachers.',
      },
      {
        heading: 'Stay updated',
        body: 'Read announcements and notifications from the office; announcements are written by administrators and head teachers.',
      },
      {
        heading: 'What you will not see',
        body: 'The staff directory, finance section, audit log and school-wide report generation are office roles — teachers are redirected away from the Reports page by design.',
      },
    ],
  },
  {
    id: 'finance-desk',
    title: 'Finance officer’s workspace',
    intro: 'You own fee collection: charges, payments, receipts, statements and finance reports.',
    points: [
      {
        heading: 'Daily collection',
        body: 'Record charges and payments under Finance. Every payment issues a sequential receipt number, and receipts are permanent — correcting one means a reversal, which is recorded in the audit trail.',
      },
      {
        heading: 'Statements and reports',
        body: 'Give guardians a statement per pupil and term, and generate finance reports from Finance ▸ Reports.',
      },
      {
        heading: 'Fee structures',
        body: 'Fee structures are created by administrators and head teachers; you read them and bill against them.',
      },
      {
        heading: 'Directories',
        body: 'Pupils, classes, parents and staff directories are read-only for you, and attendance and performance belong to teaching roles.',
      },
      {
        heading: 'Plan and billing',
        body: 'Settings ▸ Plan & Billing shows your school’s plan and term invoices (read-only) — contact the ACS team to pay an invoice or change plans.',
      },
    ],
  },
  {
    id: 'attendance',
    title: 'Attendance that means something',
    intro: 'Mark attendance once a day per class; the analytics page turns those marks into rates and trends.',
    points: [
      {
        heading: 'Four states, kept apart',
        body: 'Present, Absent, Late and Excused are recorded separately — a late arrival is not a present, and an excused absence is not an unexplained one.',
      },
      {
        heading: 'Who can mark and correct',
        body: 'Administrators, head teachers and teachers mark attendance; administrators and head teachers can delete a wrong day. Changes are audited.',
      },
      {
        heading: 'Analytics',
        body: 'Attendance ▸ Analytics shows rates and patterns for a class, a date range or a whole term.',
      },
      {
        heading: 'Parents see it too',
        body: 'Each child’s attendance appears in the parent portal, so keep notes clear and factual.',
      },
    ],
  },
  {
    id: 'performance',
    title: 'Assessments, marks and results',
    intro:
      'The flow is: assessment types → an open assessment period → assessments per class and subject → marks → publish → release.',
    points: [
      {
        heading: 'Open a period first',
        body: 'Administrators and head teachers open an assessment period for the term (Performance ▸ Assessment Periods) before assessments can be created inside it.',
      },
      {
        heading: 'Missing marks are missing, not zero',
        body: 'A mark that has not been entered stays missing and is never counted as zero — averages and reports only reflect real marks.',
      },
      {
        heading: 'Your scope',
        body: 'Teachers create and edit assessments for their assigned class and subject only; administrators and head teachers work across the school.',
      },
      {
        heading: 'Release is a one-way door',
        body: 'Administrators and head teachers release results (Draft → Published → Released). Released marks and assessments are immutable — corrections happen through a new assessment, never by editing released data.',
      },
      {
        heading: 'Analysis',
        body: 'Performance ▸ Analysis compares subjects, classes and terms once marks are in.',
      },
    ],
  },
  {
    id: 'reports',
    title: 'Reports and report cards',
    intro: 'Report generation is school-administration work — teachers and parents are redirected away from the Reports page.',
    points: [
      {
        heading: 'Generate school reports',
        body: 'Reports gives enrollment, attendance, performance, staff and finance summaries for a chosen term and class.',
      },
      {
        heading: 'Publish term reports',
        body: 'Reports ▸ Report Release creates a term report per class, publishes it (which notifies the pupils’ linked parents), and opens printable report cards for each pupil.',
      },
      {
        heading: 'Published means published',
        body: 'Report cards are the record for that term — like released results, they are not edited retroactively.',
      },
    ],
  },
  {
    id: 'fees',
    title: 'Fees, payments and receipts',
    intro: 'Finance flows from fee structures to pupil accounts to payments — each step auditable.',
    points: [
      {
        heading: 'Fee structures',
        body: 'Administrators and head teachers create structures per class and term; finance officers bill against them.',
      },
      {
        heading: 'Recording payments',
        body: 'Record a payment against a pupil account and the system issues the next sequential receipt number. Receipts and issued invoices are permanent records — corrections are made with an audited reversal, not by editing history.',
      },
      {
        heading: 'Statements and reports',
        body: 'Open a pupil’s account for their balance and payment history, print a per-term statement, and generate finance reports under Finance ▸ Reports.',
      },
      {
        heading: 'Plan and invoices',
        body: 'Settings ▸ Plan & Billing (administrators, head teachers, finance officers) shows the school’s plan and term invoices read-only; the ACS team handles payment and plan changes.',
      },
    ],
  },
  {
    id: 'communications',
    title: 'Notifications, announcements and oversight',
    intro: 'Keep everyone informed, and keep an eye on what changed.',
    points: [
      {
        heading: 'Your notification inbox',
        body: 'Notifications ▸ shows updates addressed to you; choose which categories you want under Settings ▸ Notification preferences.',
      },
      {
        heading: 'Announcements',
        body: 'Administrators and head teachers post announcements to all parents, all teachers, all staff or a single class; everyone else reads them in the Announcements section.',
      },
      {
        heading: 'Support tickets',
        body: 'Any signed-in school member can raise a support ticket from Support and follow its replies there.',
      },
      {
        heading: 'Audit trail',
        body: 'Administrators can review the Audit Log and Activity Feed — who changed what, and when. Sensitive actions (releases, reversals, deactivations) are always recorded.',
      },
    ],
  },
  {
    id: 'parent-portal',
    title: 'The parent portal',
    intro: 'Follow your children’s school life from one place, using the phone number your school registered for you.',
    points: [
      {
        heading: 'My children',
        body: 'The home screen lists every linked child; switch between them to see each child’s attendance, results and fees.',
      },
      {
        heading: 'Attendance',
        body: 'See each child’s daily attendance and rate, exactly as the school recorded it — present, absent, late or excused.',
      },
      {
        heading: 'Results and reports',
        body: 'Results only appear once they are released by the school, so nothing draft or unpublished ever shows here. The Reports tab summarises each child’s released results and attendance.',
      },
      {
        heading: 'Fees',
        body: 'The Fees tab shows each child’s balance and the payments the school has recorded. Payments are made to your school’s accounts office — there is no online payment in ACS; the payment appears here once recorded.',
      },
      {
        heading: 'Announcements and profile',
        body: 'Read school and class announcements, manage your profile and password, and set which notifications you want under Settings.',
      },
    ],
  },
  {
    id: 'settings',
    title: 'Your account and settings',
    intro: 'Everyone manages their own account; a few settings are school-wide.',
    points: [
      {
        heading: 'Profile and password',
        body: 'Update your details under Settings ▸ Profile, and change your password under Settings ▸ Security (8 or more characters). You are signed out after a password change so the new one takes effect immediately.',
      },
      {
        heading: 'Notification preferences',
        body: 'Turn notification categories on or off under Settings ▸ Notifications — it only affects what you receive, never what the school records.',
      },
      {
        heading: 'System Preferences (administrators)',
        body: 'Administrators pick the active academic year and term for the whole school there.',
      },
      {
        heading: 'Plan & Billing',
        body: 'Administrators, head teachers and finance officers can view the school’s plan and term invoices — read-only by design; contact the ACS team for payments or plan changes.',
      },
    ],
  },
  {
    id: 'faq',
    title: 'Troubleshooting and FAQ',
    intro: 'The usual questions, answered the way the system actually behaves.',
    points: [
      {
        heading: 'I cannot sign in',
        body: 'Check you are using the right school name and the right mode (staff = email, parent = phone). Your account must be Active and your school’s status must be Active. Repeated attempts are rate-limited — wait about a minute before trying again.',
      },
      {
        heading: 'A mark is missing — why?',
        body: 'Missing marks are shown as missing, never as zero, so results are not dragged down by data that was never entered. Your school must enter the mark for it to count.',
      },
      {
        heading: 'Why can I not edit a released result?',
        body: 'Released results and published report cards are immutable by design — that is what makes them trustworthy. Corrections are made through new records, not by editing released ones.',
      },
      {
        heading: 'Who generates reports?',
        body: 'School administrators and head teachers; finance officers generate finance reports. Teachers and parents are redirected from the Reports page, and parents see released results in their portal instead.',
      },
      {
        heading: 'My school just signed up — what now?',
        body: 'Signup requests are reviewed by the ACS team. Waiting too long? Call +256755038100 or +256707764215, or email stackkens@gmail.com with your school name.',
      },
    ],
  },
]

export function GuidePage() {
  return (
    <>
      <PageHero
        eyebrow="User guide"
        title="How ACS works, step by step."
        lead="The guide ACS shows inside the platform — written for schools, teachers, parents and administrators. Every section describes what the system actually does."
      />
      <Section>
        <Container className="max-w-[880px]">
          <nav
            aria-label="Guide sections"
            className="flex flex-wrap gap-2 border-y border-line py-4"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex min-h-11 items-center rounded-btn border border-line bg-white px-3.5 text-[13px] font-medium text-copy transition-colors hover:border-brand hover:text-ink"
              >
                {section.title}
              </a>
            ))}
          </nav>
          <div className="mt-10 space-y-5">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-hero border border-line bg-white p-6 sm:p-8"
              >
                <h2 className="t-item text-ink">{section.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-copy">{section.intro}</p>
                <div className="mt-6 space-y-5 border-t border-line pt-5">
                  {section.points.map((point) => (
                    <div key={point.heading}>
                      <h3 className="text-[15px] font-semibold text-ink">{point.heading}</h3>
                      <p className="mt-1.5 text-[15px] leading-7 text-copy">{point.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-[15px] leading-7 text-copy">
            Already using ACS? The same guide lives inside the app under <strong>Guide</strong> in
            your sidebar.{' '}
            <Link href={appLoginUrl} className="link-brand">
              Sign in
            </Link>{' '}
            to open it.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <Cta
            title="Ready to simplify your school management?"
            href="/get-started"
            label="Get Started"
          />
          <p className="t-small mt-6">The first 20 schools receive 2 months free.</p>
        </Container>
      </Section>
    </>
  )
}
