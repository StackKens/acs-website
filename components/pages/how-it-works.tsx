import type { Metadata } from 'next'
import { canonical } from '@/lib/site'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { DashboardPreview } from '@/components/previews'

export const metadata: Metadata = {
  alternates: { canonical: canonical('/how-it-works') },
  title: 'How it works',
  description:
    'How a school gets started with ACS — the onboarding journey, what administrators can prepare in advance, and answers to the questions schools ask before signing up.',
}

/**
 * The adoption journey.
 *
 * These steps follow the real onboarding order used by the platform: the
 * academic structure is set up first, then staff, then parents and
 * pupils, then fee structures, and only then does daily use begin. No
 * step here promises instant setup, automatic migration or a guaranteed
 * timeline — the work is real and the team is involved in it.
 */
const journey = [
  {
    n: '01',
    title: 'Start a conversation',
    body: 'Send a request through the signup form, or call the team directly. We review every request and get back to you with the next step and the plan that fits your school.',
    detail: 'Every request is reviewed by a person. The first 20 schools receive 2 months free on their selected plan.',
  },
  {
    n: '02',
    title: 'Agree what you need',
    body: 'We discuss your school’s size, its current setup, and which parts of ACS matter most right now — so you begin with the work that will save you the most time first.',
    detail: 'Some schools start with attendance and pupil records. Others begin with fees and fee structures. Both are legitimate starting points.',
  },
  {
    n: '03',
    title: 'Agree the setup information',
    body: 'You tell us what you have — the classes, streams, subjects, staff and pupil records — and we agree what will be created for you and what your team will enter directly.',
    detail: 'Administrators create the academic structure and staff records. Teachers and finance officers work inside their own roles.',
  },
  {
    n: '04',
    title: 'Begin using the workflows',
    body: 'Once the structure is in place, your team starts the term in ACS: roll calls, marks, fees, reports and parent messages, each from the person’s own portal.',
    detail: 'Support tickets are available from the Support section for any signed-in school member, and our team stays available through setup.',
  },
]

const prepare = [
  'Your class and stream structure for the year',
  'Subject names and the teachers assigned to each class',
  'Pupil details and the class each pupil is placed in',
  'Parent and guardian names with the phone number they will sign in with',
  'Your fee structure per class and term, if you already have one',
  'Any assessment information you already hold for the current term',
]

const questions = [
  {
    q: 'How long does setup take?',
    a: 'It depends on how much you want to bring across and how many classes you are starting with. We agree a plan with you before anything is created, and we will be honest about what fits in the time you have available. We do not promise instant setup.',
  },
  {
    q: 'Do you migrate our existing records?',
    a: 'Not automatically. Tell us what you hold in paper or spreadsheets and we will agree what is practical to enter. Your team is best placed to confirm the accuracy of its own records, so we set the structure and you confirm the data.',
  },
  {
    q: 'Do we need every staff member at once?',
    a: 'No. Staff accounts can be created as people are ready, and each person only needs the access their role requires. Teachers see their own classes; finance officers own fee collection; administrators and head teachers set up the school.',
  },
  {
    q: 'Can parents be added later?',
    a: 'Yes. Parents and guardians are recorded under Parents & Guardians and linked to their children. A parent signs in with the school name, the phone number recorded for them, and a password — so it is worth adding them as early as you can.',
  },
  {
    q: 'What support do we get while setting up?',
    a: 'Our team helps you set up your workspace and get started. Once signed in, any school member can raise a support ticket from the Support section and follow the replies there.',
  },
  {
    q: 'What happens if we outgrow our plan?',
    a: 'Move to a higher plan as your school grows. Your team can talk us through when to move and what it takes, and the plan and billing section in your settings shows the plan you are on.',
  },
]

export function HowItWorksPage() {
  return (
    <main>
      <section className="container-page pb-12 pt-14 md:pt-20">
        <p className="eyebrow">How it works</p>
        <h1 className="t-display mt-4 max-w-[18ch] text-ink">Getting your school onto ACS.</h1>
        <p className="t-body mt-6 max-w-2xl text-copy">
          Starting with a new system is real work, so here is honestly what it involves — the
          conversation, the setup, and what your team will need to bring.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn-primary">
            Start a conversation <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
          </Link>
          <Link href="/get-started" className="btn-secondary">
            Get started
          </Link>
        </div>
      </section>

      {/* Journey */}
      <section aria-labelledby="journey-title" className="border-y border-line bg-surface">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 id="journey-title" className="t-title text-ink">
                Four steps from first contact to the school day.
              </h2>
              <ol className="mt-8 border-t border-line">
                {journey.map((step) => (
                  <li key={step.n} className="border-b border-line py-6">
                    <p className="text-[14px] font-semibold text-brand">{step.n}</p>
                    <h3 className="t-item mt-2 text-ink">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-copy">{step.body}</p>
                    <p className="mt-3 border-l-2 border-brand-ring pl-3 text-[13px] leading-6 text-copy">
                      {step.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:sticky lg:top-24">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section aria-labelledby="prepare-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow">Before you start</p>
              <h2 id="prepare-title" className="t-title mt-3 text-ink">
                What an administrator can prepare in advance.
              </h2>
              <p className="t-body mt-4 max-w-md text-copy">
                Having these ready makes setup much faster. None of them need to be perfect — they
                just need to be good enough to start from.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {prepare.map((item) => (
                <li key={item} className="card card-pad flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-[15px] leading-6 text-copy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="onboarding-faq-title" className="border-b border-line bg-surface">
        <div className="container-page max-w-[880px] py-14 md:py-16 lg:py-20">
          <p className="eyebrow">Before you commit</p>
          <h2 id="onboarding-faq-title" className="t-title mt-3 text-ink">
            Questions schools ask before signing up.
          </h2>
          <div className="mt-8 border-t border-line">
            {questions.map((item) => (
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
            <Link href="/user-guide" className="link-brand">
              Read the full user guide
            </Link>
            <Link href="/contact" className="link-brand">
              Ask us something else
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="how-cta-title" className="bg-ink text-white">
        <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <h2 id="how-cta-title" className="t-title text-white">
              Ready when you are.
            </h2>
            <p className="t-body mt-3 max-w-md text-white/75">
              Tell us about your school and we will walk you through the rest.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-on-dark">
              Contact us
            </Link>
            <Link href="/pricing" className="btn border border-white/30 bg-transparent text-white hover:bg-white/10">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
