import Link from 'next/link'

export interface CapabilityItem {
  id: string
  title: string
  badge: string
  category: 'Academics & Pupils' | 'Finance & Administration' | 'Communication & Records'
  tagline: string
  description: string
  highlights: string[]
}

export const coreCapabilities: CapabilityItem[] = [
  {
    id: 'pupils',
    title: 'Pupil Registry & Profiles',
    badge: 'Core Registry',
    category: 'Academics & Pupils',
    tagline: 'Organized, searchable student records from admission to graduation.',
    description: 'Maintain central pupil profiles with admission numbers, class and stream allocations, date of birth, emergency contacts, and linked guardians—all accessible in seconds.',
    highlights: [
      'Fast search by name, admission number, or stream',
      'Class & stream allocations with historical tracking',
      'Linked parent & emergency contact details',
      'Smooth year-to-year promotion and transfer workflow'
    ]
  },
  {
    id: 'finance',
    title: 'Fees & Financial Management',
    badge: 'Bursar & Revenue',
    category: 'Finance & Administration',
    tagline: 'Clear fee structures, partial payment tracking, and zero ledger confusion.',
    description: 'Configure fee structures per term and class level. Record cash, bank, and mobile payments, instantly generate receipts, and view real-time student balances without manual spreadsheets.',
    highlights: [
      'Custom fee items per class and academic term',
      'Pupil ledger accounts with live outstanding balance',
      'Partial payments with printable payment receipts',
      'Term revenue summaries and defaulters reports'
    ]
  },
  {
    id: 'attendance',
    title: 'Digital Attendance & Roll Call',
    badge: 'Daily Roll Call',
    category: 'Academics & Pupils',
    tagline: 'Fast roll calls with real-time absentee and attendance monitoring.',
    description: 'Teachers take morning and afternoon attendance in seconds from phones, tablets, or computers. Instantly spot chronic absenteeism before it impacts pupil performance.',
    highlights: [
      'One-tap roll call for morning and afternoon sessions',
      'Automated attendance percentages per pupil and class',
      'Instant flags for pupils needing pastoral follow-up',
      'Ready-to-export summaries for Ministry and inspector visits'
    ]
  },
  {
    id: 'performance',
    title: 'Exams & Academic Performance',
    badge: 'Academics & Grading',
    category: 'Academics & Pupils',
    tagline: 'Structured assessment recording with automated division ranking.',
    description: 'Record Beginning of Term (BOT), Mid-Term (MOT), and End of Term (EOT) marks across all subjects. Automatically compile totals, averages, class positions, and division grades without errors.',
    highlights: [
      'Standardized grading schemes and subject weighting',
      'Subject teacher mark entry with validation checks',
      'Automatic calculation of class totals, averages, and ranks',
      'Subject performance breakdowns to guide academic interventions'
    ]
  },
  {
    id: 'reports',
    title: 'Official Term Report Cards',
    badge: 'Report Forms',
    category: 'Communication & Records',
    tagline: 'Compile and print beautiful, professional report cards in minutes.',
    description: 'Save hundreds of hours of manual handwriting. ACS compiles marks, attendance records, class teacher remarks, and headteacher sign-offs into customized, branded report cards ready for print.',
    highlights: [
      'One-click bulk compilation for entire streams or classes',
      'School crest, motto, term dates, and fees balance display',
      'Pre-populated teacher remarks and conduct ratings',
      'Clean PDF generation ready for physical printing or WhatsApp/email sharing'
    ]
  },
  {
    id: 'parents',
    title: 'Parent Engagement & SMS Alerts',
    badge: 'Communication',
    category: 'Communication & Records',
    tagline: 'Keep parents informed with instant SMS notices and updates.',
    description: 'Send timely announcements, fee reminders, term opening dates, and emergency alerts straight to parents’ phones. Build stronger school-family partnerships with verified guardian contacts.',
    highlights: [
      'Targeted SMS alerts by class, stream, or entire school',
      'Automated fee balance reminders to prevent late collections',
      'Direct link between pupils and verified guardian phone numbers',
      'Notice board for school events, visitation days, and closures'
    ]
  },
  {
    id: 'staff',
    title: 'Staff & Teaching Allocations',
    badge: 'Administration',
    category: 'Finance & Administration',
    tagline: 'Streamlined staff directory, subject assignments, and permissions.',
    description: 'Assign class teachers and subject instructors across streams. Control who can view fees, mark attendance, or enter marks with secure role-based access for school staff.',
    highlights: [
      'Class teacher and subject instructor assignments',
      'Role-based permissions (Headteachers, Bursars, Teachers)',
      'Staff profile records and contact directory',
      'Audit log tracking which staff member entered or edited records'
    ]
  },
  {
    id: 'workspaces',
    title: 'Dedicated School Workspaces',
    badge: 'Security & Cloud',
    category: 'Finance & Administration',
    tagline: 'Your school’s data, strictly isolated, private, and continuously backed up.',
    description: 'Every school operates in its own dedicated, protected environment. Student records, financial accounts, and academic results remain private, tamper-proof, and backed up in the cloud.',
    highlights: [
      'Complete multi-tenant isolation for every registered institution',
      'Strict audit trails for all sensitive academic and financial records',
      'Fast cloud redundancy—no lost paper ledgers or corrupt spreadsheets',
      'Optimized for low-bandwidth environments on desktop and mobile'
    ]
  }
]

export const capabilities: [string, string][] = coreCapabilities.map(c => [c.title, c.description])

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="mx-auto max-w-[1180px] px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.07em] sm:text-7xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-[#617281] sm:text-lg">{description}</p>
    </section>
  )
}

export function CTA() {
  return (
    <section className="border-y border-[#e6ecef] bg-[#152b3c] text-white">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-.05em]">Ready to simplify your school management?</h2>
          <p className="mt-3 text-sm text-[#b4c2cc]">First 20 schools receive 2 months free.</p>
        </div>
        <Link href="/get-started" className="button-light">Start free trial</Link>
      </div>
    </section>
  )
}
