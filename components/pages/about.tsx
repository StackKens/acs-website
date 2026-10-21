import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ACSMark } from '@/components/acs-mark'

export const metadata: Metadata = {
  title: 'About',
  description:
    'What ACS stands for, what the Academic Cloud System is for, and why it is being built around primary schools in Uganda.',
}

/**
 * What ACS is and where it is going.
 *
 * This page states what is verifiable: what the product does, the
 * problem it was built for, and where it is focused. It deliberately
 * contains no founding date, founder biographies, office address,
 * institutional affiliation, award, customer or partner claim, because
 * none of those are established for ACS in the project.
 */
const principles = [
  {
    n: '01',
    title: 'Clarity over features',
    body: 'A school should be able to find a pupil, a balance or a term result without knowing where they are kept. Every screen is built around a question someone actually asks.',
  },
  {
    n: '02',
    title: 'Records that hold up',
    body: 'Released results and published report cards cannot be quietly edited. Receipts are permanent. Changes are recorded. This is what makes a school record worth keeping.',
  },
  {
    n: '03',
    title: 'Each person sees their own job',
    body: 'Administrators, head teachers, teachers, finance officers and parents each get the tools their role needs — and not the ones it does not.',
  },
  {
    n: '04',
    title: 'Built for ordinary connections',
    body: 'The platform is designed to work on the devices and connections schools actually have, including low-bandwidth environments, on desktop and mobile.',
  },
  {
    n: '05',
    title: 'The teacher stays in control',
    body: 'AI drafts classroom material; teachers review and edit it. The tool assists preparation and never replaces the judgement of the person in front of the class.',
  },
]

const direction = [
  'Wider reporting for school leaders, built on the record the school already keeps.',
  'Stronger parent communication, so information reaches a family without passing through the school office first.',
  'Deeper insight into attendance and performance, so support reaches a learner before it becomes a problem.',
  'Continued refinement of the academic and finance workflows that schools use every single day.',
]

export function AboutPage() {
  return (
    <main>
      <section className="border-b border-line bg-surface">
        <div className="container-page py-14 md:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="eyebrow">About ACS</p>
              <h1 className="t-display mt-4 max-w-[18ch] text-ink">
                A clearer system for the school that actually runs the school.
              </h1>
              <p className="t-body mt-6 max-w-xl text-copy">
                ACS stands for Academic Cloud System. It is a school management platform: one
                connected place for pupil records, attendance, academic results, fees, reports and
                parent communication, built around primary schools in Uganda.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/features" className="btn-primary">
                  See what it does <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk to us
                </Link>
              </div>
            </div>

            <div className="card card-pad">
              <div className="flex items-center gap-3">
                <ACSMark size={40} className="shrink-0" title={null} />
                <div>
                  <p className="text-[18px] font-semibold tracking-[-0.03em] text-ink">ACS</p>
                  <p className="text-[12px] text-copy">Academic Cloud System</p>
                </div>
              </div>
              <dl className="mt-6 space-y-4 border-t border-line pt-5">
                {[
                  ['What it is', 'A school management platform for primary schools.'],
                  ['Who it is for', 'Administrators, head teachers, teachers, finance officers and parents.'],
                  ['Where it is focused', 'Uganda, and the wider African market.'],
                  ['Built by', 'Vexel Labs.'],
                ].map(([term, detail]) => (
                  <div key={term}>
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-copy">
                      {term}
                    </dt>
                    <dd className="mt-1 text-[15px] leading-6 text-ink">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section aria-labelledby="why-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow">Why it exists</p>
              <h2 id="why-title" className="t-title mt-3 text-ink">
                Because a school’s information is scattered, and the people who need it are not
                in the same room.
              </h2>
            </div>
            <div className="prose-acs max-w-2xl">
              <p>
                Most Ugandan primary schools keep their records in a mix of admission books, exercise
                books, mark sheets, fee ledgers and — increasingly — a spreadsheet someone maintains
                alone at the end of every term. Each one is fine on its own. Together they are slow to
                use and impossible to reconcile.
              </p>
              <p>
                The practical cost is felt in three places. The office cannot answer “who still owes
                fees?” without checking three separate records. Teachers lose preparation and marking
                time to work that a system should be doing. And parents hear about balances, results
                and closures late, because there was no single place to publish them.
              </p>
              <p>
                ACS exists to remove that translation work. Not by replacing the teacher or the
                bursar, but by giving each of them the right view of the same record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-title" className="border-b border-line bg-surface">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">How it is built</p>
            <h2 id="principles-title" className="t-title mt-3 text-ink">
              The principles behind the product.
            </h2>
            <p className="t-body mt-4 text-copy">
              These are the decisions that shape what ACS does and, just as importantly, what it
              refuses to do.
            </p>
          </div>

          <ol className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-line bg-line md:grid-cols-2">
            {principles.map((p) => (
              <li key={p.n} className="bg-white p-6 md:p-8">
                <p className="t-eyebrow text-brand">{p.n}</p>
                <h3 className="t-item mt-3 text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-copy">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Direction */}
      <section aria-labelledby="direction-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow">Where it is going</p>
              <h2 id="direction-title" className="t-title mt-3 text-ink">
                The direction of travel.
              </h2>
              <p className="t-body mt-4 max-w-md text-copy">
                ACS is a product in use, not a finished article. These are the areas the platform is
                being extended into.
              </p>
            </div>
            <ul className="space-y-4">
              {direction.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line-soft pb-4 text-[15px] leading-6 text-copy">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="lg:col-start-2">
              <p className="text-[13px] leading-6 text-copy">
                This list describes the intended direction of the product. It is not a commitment to a
                delivery date, and the capabilities available today are the ones listed on the{' '}
                <Link href="/features" className="link-brand">
                  features page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="about-cta-title" className="bg-ink text-white">
        <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <h2 id="about-cta-title" className="t-title text-white">
              Let’s talk about your school.
            </h2>
            <p className="t-body mt-3 max-w-md text-white/75">
              Tell us what you are trying to fix, and we will tell you honestly whether ACS helps.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-on-dark">
              Contact us
            </Link>
            <Link href="/features" className="btn border border-white/30 bg-transparent text-white hover:bg-white/10">
              See the features
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
