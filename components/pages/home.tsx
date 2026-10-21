import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import {
  AIPreview,
  AttendancePreview,
  DashboardPreview,
  FinancePreview,
  ParentPreview,
  ReportCardPreview,
  ResultsPreview,
} from '@/components/previews'
import { pricingPlans } from '@/lib/pricing'

/**
 * Homepage.
 *
 * The narrative: what ACS is, what problem it solves, what it offers,
 * who it is for, how a school gets started, the real pricing, and how
 * to make contact. Every claim is taken from the platform's own
 * documentation — see components/pages/guide.tsx for the permission
 * model and lib/pricing.ts for prices. No invented statistics,
 * testimonials or customers appear here.
 */

const problems = [
  {
    n: '01',
    title: 'Records live in too many places',
    body: 'Admission books, scattered spreadsheets and loose mark sheets make simple questions — “who owes fees?”, “who missed this week?” — slow to answer.',
  },
  {
    n: '02',
    title: 'Routine work eats teaching time',
    body: 'Taking registers, totalling marks by hand and writing out report cards term after term pulls teachers away from the classroom.',
  },
  {
    n: '03',
    title: 'Parents hear things late',
    body: 'Fee balances, results and announcements travel by word of mouth. When information is hard to reach, trust is hard to build.',
  },
]

const capabilities = [
  {
    n: '01',
    title: 'Academics & pupils',
    body: 'The daily teaching record: who is enrolled, who is present, and how each learner is progressing.',
    items: [
      'Pupil registry with class, stream and guardian links',
      'Morning and afternoon digital roll call',
      'BOT, MOT and EOT assessments with automatic totals and ranks',
      'Print-ready term report cards with school branding',
      'AI help with exercises, quizzes and revision for Primary 1–7',
    ],
    who: 'Class teachers, head teachers and school leaders.',
  },
  {
    n: '02',
    title: 'Finance & administration',
    body: 'Money in, recorded properly: clear fee structures, live balances and an audit trail on sensitive actions.',
    items: [
      'Fee structures per class and term',
      'Partial payments with sequential, permanent receipts',
      'Pupil statements and finance reports',
      'Staff records with role-based access',
      'An isolated, backed-up workspace per school',
    ],
    who: 'Administrators, bursars and finance officers.',
  },
  {
    n: '03',
    title: 'Communication & records',
    body: 'Keep families in the loop and the school’s history intact, without retyping anything.',
    items: [
      'SMS announcements by class, stream or whole school',
      'Personalised fee-balance reminders to guardians',
      'Parent portal with attendance, released results and fees',
      'School reports for enrolment, attendance and performance',
      'Audit log of who changed what, and when',
    ],
    who: 'The school office, teachers and parents.',
  },
]

const roles = [
  {
    title: 'For administrators',
    body: 'School-wide enrolment, attendance, performance, structure and finance from one dashboard.',
    items: [
      'Academic years, terms, streams, subjects and classes',
      'Fee structures and per-pupil collection',
      'Result releases and printable report cards',
      'Audit log behind every sensitive change',
    ],
  },
  {
    title: 'For teachers',
    body: 'Scoped to your classes: your pupils, your registers, your marks.',
    items: [
      'Morning and afternoon attendance in seconds',
      'Marks entry for assigned class and subject only',
      'AI-drafted P1–P7 material — reviewed by you before use',
      'Office announcements at a glance',
    ],
  },
  {
    title: 'For parents',
    body: 'One portal per family, signed in with the phone number your school registered.',
    items: [
      'Daily attendance as the school recorded it',
      'Results only once the school releases them',
      'Fee balances recorded by the school office',
      'Class and school announcements in one inbox',
    ],
  },
]

const steps = [
  {
    n: '01',
    title: 'Request access',
    body: 'Tell us about your school through the signup form. Every request is reviewed by the ACS team — the first 20 schools start with 2 months free.',
  },
  {
    n: '02',
    title: 'Set up your school',
    body: 'With our help, an administrator creates the academic year and terms, then streams, subjects, classes and staff accounts.',
  },
  {
    n: '03',
    title: 'Bring everyone in',
    body: 'Enrol pupils, link parents and guardians, and create fee structures so pupil accounts bill correctly from day one.',
  },
  {
    n: '04',
    title: 'Run the term in ACS',
    body: 'Take attendance, enter marks, collect fees, publish reports and message parents — all from each person’s own portal.',
  },
]

const differences = [
  {
    title: 'Teachers stay in control',
    body: 'AI drafts exercises and revision material; teachers review and edit everything before it reaches a classroom.',
  },
  {
    title: 'Missing means missing',
    body: 'A mark that was never entered is shown as missing — never counted as zero — so averages reflect real work.',
  },
  {
    title: 'Released results are final',
    body: 'Once results or report cards are released, they cannot be edited. Corrections happen through new records, which is what makes them trustworthy.',
  },
  {
    title: 'Everyone sees their own job',
    body: 'Administrators, head teachers, teachers, finance officers and parents each get the tools for their role — nothing more, nothing less.',
  },
]

const faqs = [
  {
    q: 'What is ACS?',
    a: 'ACS (Academic Cloud System) keeps a school’s pupils, attendance, results, fees and communication in one connected system. Staff work in the school portal, parents and guardians use the parent portal, and every school operates in its own private workspace.',
  },
  {
    q: 'Who can use ACS?',
    a: 'Administrators, head teachers, teachers and finance officers use the school portal; parents and guardians use the parent portal. Accounts are created by the school — public registration is closed, so staff and parents get access through their school.',
  },
  {
    q: 'How does a school get started?',
    a: 'Send a request through the signup form and the ACS team will review it and help set up your workspace. The first 20 schools receive 2 months free on their selected plan. Waiting on a request? Call +256 755 038 100 or +256 707 764 215, or email stackkens@gmail.com.',
  },
  {
    q: 'Which school activities does ACS support?',
    a: 'Pupil and class management, daily attendance, assessments (BOT, MOT, EOT) with totals and ranks, printable term report cards, fee structures with payments and receipts, SMS announcements, and AI assistance for creating primary-school exercises, quizzes and revision material.',
  },
  {
    q: 'Can parents access ACS?',
    a: 'Yes. Parents sign in with the school name, the phone number the school registered, and a password. They can follow each child’s attendance, released results, fee balance and school announcements. Results only appear once released by the school, and payments are made at the school office — ACS does not take online payments.',
  },
  {
    q: 'How does ACS handle different user roles?',
    a: 'Administrators set up the school and manage records. Head teachers share most tools but cannot create staff records or the academic structure. Teachers work within their assigned classes and subjects. Finance officers own fee collection. Sensitive actions — releases, reversals, deactivations — are recorded in an audit trail.',
  },
  {
    q: 'How can a school request a demonstration or more information?',
    a: 'Use the contact page to ask about the product, pricing, onboarding or support, and the team will respond using the contact details you provide.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="t-title mt-3 text-ink">{title}</h2>
      {intro && <p className="t-body mt-4 text-copy">{intro}</p>}
    </div>
  )
}

export default function HomePage() {
  return (
    <main>
      {/* Announcement */}
      <div className="border-b border-line bg-brand-soft px-6 py-2.5 text-center text-[13px] leading-6 text-ink-soft md:px-8 lg:px-12">
        Launching ACS — <strong className="font-semibold text-ink">first 20 schools get 2 months free.</strong>{' '}
        <Link className="link-brand" href="/get-started">
          Claim your free trial
        </Link>
      </div>

      {/* Hero — split layout with a real ACS product preview */}
      <section aria-labelledby="hero-title" className="container-page pb-16 pt-12 md:pt-16 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p className="eyebrow">Academic Cloud System</p>
            <h1 id="hero-title" className="t-display mt-4 max-w-[13ch] text-ink">
              Your school. Better organized.
            </h1>
            <p className="t-body mt-6 max-w-[46ch] text-copy">
              Bring pupil records, attendance and academic results together with Academic Cloud System.
              A practical school management platform, built around primary schools in Uganda.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link className="btn-primary" href="/get-started">
                Get Started <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
              </Link>
              <Link className="btn-secondary" href="/features">
                Explore ACS
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-[13px] text-copy">
              {['Isolated school workspaces', 'Role-based access', 'Daily backups', 'Teacher-reviewed AI'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-3.5 shrink-0 text-brand" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <DashboardPreview />
        </div>
      </section>

      {/* What ACS does */}
      <section id="what-it-does" aria-labelledby="does-title" className="border-y border-line bg-surface">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:self-center">
              <p className="eyebrow">What ACS does</p>
              <h2 id="does-title" className="t-title mt-3 text-ink">
                One connected record of your school.
              </h2>
              <p className="t-body mt-4 max-w-md text-copy">
                ACS is built around the term. Pupils, staff, classes, attendance, assessments, fees,
                reports and parent communication are all recorded against your own school, and read
                back in the form your team actually needs.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'Each school works in its own isolated workspace',
                  'Administrators, head teachers, teachers, finance officers and parents each get their own view',
                  'Records that are released cannot be quietly edited afterwards',
                ].map((item) => (
                  <p key={item} className="flex items-start gap-2.5 text-[15px] leading-6 text-copy">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <AttendancePreview />
              <ResultsPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section aria-labelledby="why-title" className="border-b border-line">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <SectionHead
            eyebrow="Why ACS"
            title="School paperwork was never the job."
            intro="Most schools don’t struggle for lack of effort — they struggle because essential information is fragmented, routine processes take too long, and keeping everyone informed is genuinely hard."
          />
          <div className="mt-10 border-t border-line">
            {problems.map((p) => (
              <div
                key={p.n}
                className="grid gap-2 border-b border-line-soft py-6 sm:grid-cols-[56px_1fr] sm:gap-6"
              >
                <p className="text-[14px] font-semibold text-brand">{p.n}</p>
                <div>
                  <h3 className="t-item text-ink">{p.title}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-6 text-copy">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" aria-labelledby="product-title" className="border-b border-line bg-surface">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Core capabilities"
              title="Everything your school needs. Designed to work together."
              intro="Three groups of tools, each with a clear purpose. Nothing to assemble, nothing decorative."
            />
            <Link href="/features" className="link-brand shrink-0 text-[14px]">
              View all features <ArrowUpRight className="ml-1 inline size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {capabilities.map((g) => (
              <article key={g.n} className="card card-pad flex flex-col">
                <p className="t-eyebrow text-brand">{g.n}</p>
                <h3 className="t-item mt-3 text-ink">{g.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-copy">{g.body}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] leading-6 text-copy">
                      <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 text-[13px] text-copy">
                  <span className="font-semibold text-ink">Who benefits: </span>
                  {g.who}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic results showcase */}
      <section id="results" aria-labelledby="results-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <ResultsPreview />
            <div>
              <p className="eyebrow">Academic results</p>
              <h2 id="results-title" className="t-title mt-3 text-ink">
                Marks entered once. Results worked out for you.
              </h2>
              <p className="t-body mt-4 max-w-lg text-copy">
                ACS records Beginning of Term, Mid-Term and End of Term assessments across every
                subject, then calculates totals, averages, class positions and division grades. Teachers
                enter marks only for the class and subject they teach.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  'A mark that was never entered stays missing — it is never counted as zero',
                  'Results are held as a draft until an administrator or head teacher releases them',
                  'Released results are immutable; corrections happen through new records',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-6 text-copy">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/features" className="btn-secondary mt-8">
                How results work <ArrowUpRight className="ml-1 inline size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reports and finance */}
      <section id="reports" aria-labelledby="records-title" className="border-b border-line bg-surface">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <SectionHead
            eyebrow="Reports and records"
            title="Report cards and fee records that hold up."
            intro="The outputs a school is asked for every term — produced from the same record the school already keeps."
          />
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <ReportCardPreview />
            <FinancePreview />
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <p className="text-[15px] leading-6 text-copy">
              Report cards are compiled for a whole class at once, carrying the school&apos;s details,
              marks, attendance, remarks and fees balance, and are published once for the term.
            </p>
            <p className="text-[15px] leading-6 text-copy">
              Fee structures are set per class and term. Payments are recorded against each pupil
              account, and every payment issues the next sequential receipt number.
            </p>
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="ai-assistance" aria-labelledby="ai-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow">AI assistance</p>
              <h2 id="ai-title" className="t-title mt-3 text-ink">
                Practical AI support, under the teacher’s control.
              </h2>
              <p className="t-body mt-4 max-w-lg text-copy">
                ACS helps teachers create exercises, quizzes, revision questions, lesson-support
                materials, explanations and marking guides — designed around primary education from
                Primary 1 to Primary 7.
              </p>
              <p className="mt-4 max-w-lg text-[15px] leading-7 text-copy">
                The assistant drafts material for preparation. Teachers review and edit it before it is
                used in the classroom, and remain responsible for what is taught.
              </p>
              <Link href="/features#ai-assistance" className="btn-secondary mt-8">
                About AI assistance <ArrowUpRight className="ml-1 inline size-4" aria-hidden="true" />
              </Link>
            </div>
            <AIPreview />
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" aria-labelledby="roles-title" className="border-b border-line bg-surface">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <SectionHead
            eyebrow="Built for your team"
            title="Clearer work for every role."
            intro="Each role sees its own job — nothing more, nothing less."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {roles.map((r) => (
              <article key={r.title} className="card-surface p-6 md:p-8">
                <h3 className="t-item text-ink">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-copy">{r.body}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5 text-[15px] leading-6 text-copy">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <ParentPreview />
            <figure className="overflow-hidden rounded-[10px] border border-line">
              <Image
                src="/images/classroom-hero.jpg"
                alt="A teacher leading a lesson in front of pupils seated at desks"
                width={1280}
                height={848}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 540px"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" aria-labelledby="how-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="How it works"
              title="From signup to school day, in four steps."
              intro="Onboarding follows the real order schools use — and our team helps at each stage."
            />
            <Link href="/how-it-works" className="link-brand shrink-0 text-[14px]">
              How onboarding works <ArrowUpRight className="ml-1 inline size-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n}>
                <p className="text-[14px] font-semibold text-brand">{s.n}</p>
                <h3 className="mt-3 t-item text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-copy">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing summary */}
      <section id="pricing" aria-labelledby="pricing-title" className="border-b border-line bg-surface">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Pricing"
              title="Priced per term, by school size."
              intro="The first 20 schools to join ACS get 2 months free on their selected plan."
            />
            <Link href="/pricing" className="link-brand shrink-0 text-[14px]">
              See full pricing <ArrowUpRight className="ml-1 inline size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article key={plan.id} className="card card-pad flex flex-col">
                <p className="t-item text-ink">{plan.name}</p>
                <p className="mt-3 text-[15px] leading-6 text-copy">{plan.description}</p>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-ink">
                    UGX{' '}
                    {new Intl.NumberFormat('en-UG', { maximumFractionDigits: 0 }).format(plan.price ?? 0)}
                  </p>
                  <p className="mt-2 text-[13px] text-copy">{plan.billing}</p>
                  <p className="mt-3 text-[15px] font-medium text-ink-soft">{plan.pupilLimit}</p>
                </div>
                <Link href="/pricing" className="btn-secondary mt-6 w-full">
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section aria-labelledby="diff-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <SectionHead
            eyebrow="The ACS difference"
            title="Careful where it matters."
            intro="Small design decisions that protect trust in school records."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2">
            {differences.map((d) => (
              <div key={d.title} className="bg-white p-6 md:p-8">
                <h3 className="t-item text-ink">{d.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-copy">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-title" className="border-b border-line bg-surface">
        <div className="container-page max-w-[880px] py-14 md:py-16 lg:py-20">
          <SectionHead eyebrow="FAQ" title="Questions schools ask." intro="Answered from how the product actually works." />
          <div className="mt-10 border-t border-line">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[15px] font-medium text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="text-xl font-normal text-brand group-open:hidden">
                    +
                  </span>
                  <span aria-hidden="true" className="hidden text-xl font-normal text-brand group-open:inline">
                    −
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-8 text-[15px] leading-7 text-copy">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-[14px]">
            <Link href="/pricing" className="link-brand">
              See pricing
            </Link>
            <Link href="/contact" className="link-brand">
              Talk to our team
            </Link>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      {/* Enquiry */}
      <section id="demo" aria-labelledby="enquiry-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="grid items-center gap-8 rounded-[12px] border border-line bg-surface-raised p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <p className="eyebrow">Request a demonstration</p>
              <h2 id="enquiry-title" className="t-title mt-3 text-ink">
                See ACS with your own school in mind.
              </h2>
              <p className="t-body mt-4 max-w-lg text-copy">
                Tell us your school&apos;s size and what you are trying to fix. We will walk you through
                the platform, answer your questions and help you set up your workspace.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn-primary w-full">
                Request a demonstration
              </Link>
              <Link href="/get-started" className="btn-secondary w-full">
                Get started
              </Link>
              <p className="mt-1 text-center text-[13px] text-copy">
                Or call <a href="tel:+256755038100" className="link-brand">+256 755 038 100</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="cta-title" className="bg-ink text-white">
        <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="t-eyebrow text-white/70">Get started</p>
            <h2 id="cta-title" className="t-title mt-3 max-w-md text-white">
              Make school work feel simpler.
            </h2>
            <p className="t-body mt-3 max-w-md text-white/75">
              Join with your school’s records, attendance, results and fees in one connected workspace
              — with help from our team along the way.
            </p>
            <p className="mt-4 text-[13px] text-white/70">
              First 20 schools receive 2 months free · Call +256 755 038 100
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link href="/get-started" className="btn-on-dark">
              Get Started <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn border border-white/30 bg-transparent text-white hover:bg-white/10">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
