import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'

/**
 * Homepage — single-column professional build (Figma Frame: Desktop 1440).
 * Matches inner routes: PageShell header + max-w-[1180px] sections + Footer.
 * No invented stats, testimonials, or product claims. All copy is
 * backend-verified (see guide.tsx, features.tsx, pricing lib).
 */

const featureGroups = [
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
    a: 'Send a request through the signup form and the ACS team will review it and help set up your workspace. The first 20 schools receive 2 months free on their selected plan. Waiting on a request? Call +256 755 038100 or +256 707 764215, or email stackkens@gmail.com.',
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
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#1c2733] sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-sm leading-7 text-[#5b6b78] sm:text-[15px]">{intro}</p>}
    </div>
  )
}

export default function HomePage() {
  return (
    <main>
      {/* Announcement — Figma: top utility bar */}
      <div className="border-b border-[#d6e1e7] bg-[#e7eff3] px-5 py-2.5 text-center text-[12px] leading-6 text-[#425b6b] sm:px-8">
        Launching ACS — <strong className="font-semibold text-[#152b3c]">first 20 schools get 2 months free.</strong>{' '}
        <Link className="underline underline-offset-4" href="/get-started">
          Claim your free trial
        </Link>
      </div>

      {/* Hero — Figma Frame HERO/1440: 2-col split, 1180 container */}
      <section aria-labelledby="hero-title" className="mx-auto max-w-[1180px] px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <p className="eyebrow">Academic Cloud System</p>
            <h1
              id="hero-title"
              className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#152b3c] sm:text-6xl sm:leading-[0.98]"
            >
              A better way to manage school life.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#5b6b78] sm:text-lg">
              Bring pupil records, attendance, results, fees and parent messages into one connected
              experience — helping administrators, teachers and parents stay organised and informed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link className="button-primary" href="/get-started">
                Get Started <ArrowRight className="ml-2 inline size-4" aria-hidden="true" />
              </Link>
              <Link className="button-secondary" href="/features">
                Explore ACS
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#e9edef] pt-5 text-xs text-[#71808d]">
              {['Isolated school workspaces', 'Role-based access', 'Daily backups', 'Teacher-reviewed AI'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-3.5 text-[#315f79]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero visual: real photo + workflow proof card, no fake dashboard numbers */}
          <div className="product-frame">
            <figure className="overflow-hidden rounded-xl border border-[#e0e7eb] bg-white">
              <Image
                src="/images/classroom-hero.jpg"
                alt="Ugandan schoolchildren learning together in a bright classroom"
                width={1200}
                height={799}
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="border-t border-[#e9edef] px-4 py-3 text-xs leading-6 text-[#71808d]">
                Built around the people who make schools work. Photos illustrative.
              </figcaption>
            </figure>
            <div className="ui-snippet mt-5" aria-label="How a term flows through ACS">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7891a1]">
                A term in ACS
              </p>
              <ol className="mt-3 space-y-2.5 text-sm leading-6 text-[#526676]">
                {[
                  'Enrol pupils, link guardians, set fee structures',
                  'Daily roll call — morning and afternoon',
                  'BOT → MOT → EOT marks, totals and ranks compiled',
                  'Sequential receipts, statements, released report cards',
                ].map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#152b3c] text-[11px] font-semibold text-white">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section aria-labelledby="why-title" className="border-y border-[#e9edef]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <SectionHead
            eyebrow="Why ACS"
            title="School paperwork was never the job."
            intro="Most schools don’t struggle for lack of effort — they struggle because essential information is fragmented, routine processes take too long, and keeping everyone informed is genuinely hard."
          />
          <div className="mt-10 border-t border-[#dfe6ea]">
            {problems.map((p) => (
              <div key={p.n} className="grid gap-2 border-b border-[#e9edef] py-6 sm:grid-cols-[56px_1fr] sm:gap-6">
                <p className="text-sm font-semibold text-[#7891a1]">{p.n}</p>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#263d4f]">{p.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667787]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product — 3 disciplined panels, matches /features */}
      <section aria-labelledby="product-title" className="border-b border-[#dfe6ea] bg-[#f8fafb]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <SectionHead
            eyebrow="What ACS offers"
            title="Everything your school needs. Designed to work together."
            intro="Three groups of tools, each with a clear purpose. Nothing to assemble, nothing decorative."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {featureGroups.map((g) => (
              <article key={g.n} className="flex flex-col border border-[#dfe6ea] bg-white p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7891a1]">{g.n}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#152b3c]">{g.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#617281]">{g.body}</p>
                <ul className="mt-5 space-y-2.5 border-t border-[#e9edef] pt-5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#526676]">
                      <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#2c61cc]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 text-[13px] text-[#71808d]">
                  <span className="font-semibold text-[#526676]">Who benefits: </span>
                  {g.who}
                </p>
              </article>
            ))}
          </div>
          <Link href="/features" className="mt-8 inline-flex items-center text-sm font-semibold text-[#2c61cc] hover:underline">
            View all features in detail <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Roles — permission truth from user guide */}
      <section aria-labelledby="roles-title" className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <SectionHead
            eyebrow="Built for your team"
            title="Clearer work for every role."
            intro="Each role sees its own job — nothing more, nothing less."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {roles.map((r) => (
              <article key={r.title} className="border border-[#dfe6ea] bg-[#fbfcfd] p-6 sm:p-8">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#263d4f]">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#667787]">{r.body}</p>
                <ul className="mt-5 space-y-2.5 border-t border-[#e9edef] pt-5 text-sm leading-6 text-[#526676]">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span aria-hidden="true" className="text-[#2c61cc]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-[#e0e7eb]">
              <Image
                src="/images/classroom-teacher.jpg"
                alt="A teacher leading a lesson in front of pupils seated at desks"
                width={1200}
                height={747}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 560px"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-xl border border-[#e0e7eb]">
              <Image
                src="/images/pupil-focus.jpg"
                alt="A young pupil concentrating on classwork at a shared table"
                width={1200}
                height={798}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 560px"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-title" className="border-y border-[#dfe6ea] bg-[#f8fafb]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <SectionHead
            eyebrow="How it works"
            title="From signup to school day, in four steps."
            intro="Onboarding follows the real order schools use — and our team helps at each stage."
          />
          <ol className="mt-10 grid gap-8 border-t border-[#dfe6ea] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n}>
                <p className="text-sm font-semibold text-[#7891a1]">{s.n}</p>
                <h3 className="mt-3 text-[15px] font-semibold text-[#263d4f]">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#667787]">{s.body}</p>
              </li>
            ))}
          </ol>
          <Link href="/user-guide" className="mt-8 inline-flex items-center text-sm font-semibold text-[#2c61cc] hover:underline">
            Read the full user guide <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Difference */}
      <section aria-labelledby="diff-title" className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <SectionHead
            eyebrow="The ACS difference"
            title="Careful where it matters."
            intro="Small design decisions that protect trust in school records."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[#dfe6ea] bg-[#dfe6ea] sm:grid-cols-2">
            {differences.map((d) => (
              <div key={d.title} className="bg-[#fbfcfd] p-6 sm:p-8">
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[#263d4f]">{d.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#667787]">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="border-t border-[#e9edef]">
        <div className="mx-auto max-w-[800px] px-5 py-16 sm:px-8 sm:py-20">
          <SectionHead eyebrow="FAQ" title="Questions schools ask." intro="Answered from how the product actually works." />
          <div className="mt-10 border-t border-[#dfe6ea]">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-[#dfe6ea]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[15px] font-medium text-[#263d4f] hover:text-[#152b3c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7891a1] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="text-xl font-normal text-[#7891a1] group-open:hidden">+</span>
                  <span aria-hidden="true" className="hidden text-xl font-normal text-[#7891a1] group-open:inline">−</span>
                </summary>
                <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#667787]">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <Link href="/pricing" className="font-semibold text-[#2c61cc] hover:underline">
              See pricing
            </Link>
            <Link href="/contact" className="font-semibold text-[#2c61cc] hover:underline">
              Talk to our team
            </Link>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      {/* Final CTA */}
      <section aria-labelledby="cta-title" className="bg-[#152b3c] text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow !text-[#9fb4c2]">Get started</p>
            <h2 id="cta-title" className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              Make school work feel simpler.
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-7 text-[#b4c2cc]">
              Join with your school’s records, attendance, results and fees in one connected workspace
              — with help from our team along the way.
            </p>
            <p className="mt-4 text-xs text-[#8fa3b1]">First 20 schools receive 2 months free · Call +256 755 038100</p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <Link href="/get-started" className="button-light">
              Get Started <ArrowRight className="ml-2 inline size-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[#cdd9e1] underline underline-offset-4 hover:text-white">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

