import type { Metadata } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'
import { ArrowRight, Check, Minus } from 'lucide-react'
import {
  billingSteps,
  comparisonTable,
  faqs,
  largeSchoolsPlan,
  pricingConsiderations,
  pricingPlans,
} from '@/lib/pricing'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'ACS pricing for Ugandan primary schools — Starter, Growth and Professional plans billed per academic term, by school size. The first 20 schools get 2 months free.',
}

const formatPrice = (price: number | null) =>
  price === null
    ? 'Custom pricing'
    : `UGX ${new Intl.NumberFormat('en-UG', { maximumFractionDigits: 0 }).format(price)}`

export function PricingPage() {
  return (
    <main>
      {/* Intro */}
      <section className="container-page pb-12 pt-14 md:pt-20">
        <p className="eyebrow">Pricing</p>
        <h1 className="t-display mt-4 max-w-[16ch] text-ink">
          Simple pricing for better school management.
        </h1>
        <p className="t-body mt-6 max-w-2xl text-copy">
          Choose the ACS plan that fits your school and get the tools you need to manage your
          everyday school operations in one place. Every plan is billed per academic term, and the
          price follows your school’s size.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn-primary">
            Discuss school pricing <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
          </Link>
          <Link href="/features" className="btn-secondary">
            See what each plan gives you
          </Link>
        </div>
      </section>

      {/* Launch offer */}
      <section aria-labelledby="offer-title" className="border-y border-line bg-brand-soft">
        <div className="container-page flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="t-eyebrow text-brand">Launch offer</p>
            <h2 id="offer-title" className="t-item mt-1 text-ink">
              The first 20 schools get 2 months free.
            </h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-6 text-copy">
              Use your selected plan free for 2 months, set up your school and experience ACS before
              moving to regular pricing. Our team confirms eligibility and the next steps with you.
            </p>
          </div>
          <Link href="/get-started" className="btn-primary shrink-0">
            Claim your free trial
          </Link>
        </div>
      </section>

      {/* Plans */}
      <section aria-labelledby="plans-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <h2 id="plans-title" className="sr-only">
            Plans
          </h2>
          <div className="grid items-start gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.id}
                className={`card card-pad flex flex-col ${
                  plan.emphasis ? 'border-brand ring-1 ring-brand/20' : ''
                }`}
              >
                {plan.emphasis && (
                  <p className="t-eyebrow mb-4 text-brand">For growing schools</p>
                )}
                <h3 className="t-item text-ink">{plan.name}</h3>
                <p className="mt-3 text-[15px] leading-6 text-copy">{plan.description}</p>

                <div className="mt-7 border-t border-line pt-5">
                  <p className="text-[32px] font-semibold leading-none tracking-[-0.03em] text-ink">
                    {formatPrice(plan.price)}
                  </p>
                  <p className="mt-2 text-[13px] text-copy">{plan.billing}</p>
                  <p className="mt-4 text-[15px] font-medium text-ink-soft">{plan.pupilLimit}</p>
                </div>

                <ul className="mt-6 space-y-3 border-t border-line pt-5 text-[14px] leading-6 text-copy">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/get-started" className="btn-primary mt-8 w-full">
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>

          <article className="mt-5 flex flex-col gap-6 rounded-[10px] border border-dashed border-brand-ring bg-surface-raised p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="t-item text-ink">{largeSchoolsPlan.pupilLimit}</p>
              <p className="mt-2 max-w-2xl text-[15px] leading-6 text-copy">{largeSchoolsPlan.description}</p>
            </div>
            <Link href="/contact" className="btn-secondary shrink-0">
              {largeSchoolsPlan.cta}
            </Link>
          </article>
        </div>
      </section>

      {/* Comparison */}
      <section aria-labelledby="compare-title" className="border-b border-line bg-surface">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Compare plans</p>
            <h2 id="compare-title" className="t-title mt-3 text-ink">
              Exactly what each plan includes.
            </h2>
            <p className="t-body mt-4 text-copy">
              The table below is taken directly from the plan definitions, so it always matches the
              cards above.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[10px] border border-line bg-white">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="px-5 py-4 text-[13px] font-semibold text-ink">
                    Feature
                  </th>
                  {pricingPlans.map((plan) => (
                    <th
                      key={plan.id}
                      scope="col"
                      className={`px-5 py-4 text-[13px] font-semibold ${
                        plan.emphasis ? 'text-brand' : 'text-ink'
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((group) => (
                  <Fragment key={group.category}>
                    <tr className="border-b border-line bg-surface-raised">
                      <th
                        scope="colgroup"
                        colSpan={pricingPlans.length + 1}
                        className="px-5 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.1em] text-copy"
                      >
                        {group.category}
                      </th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.feature} className="border-b border-line-soft last:border-b-0">
                        <th scope="row" className="px-5 py-3 text-left text-[14px] font-normal text-ink">
                          {row.feature}
                        </th>
                        {row.included.map((included, i) => (
                          <td key={pricingPlans[i].id} className="px-5 py-3">
                            {included ? (
                              <Check className="size-4 text-brand" aria-label="Included" />
                            ) : (
                              <Minus
                                className="size-4 text-line"
                                aria-label="Not included in this plan"
                              />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Considerations */}
      <section aria-labelledby="considerations-title" className="border-b border-line bg-white">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow">Pricing considerations</p>
              <h2 id="considerations-title" className="t-title mt-3 text-ink">
                Know what your school is paying for.
              </h2>
              <p className="t-body mt-4 max-w-md text-copy">
                ACS keeps pricing straightforward. Here is what sits behind the number.
              </p>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2">
              {pricingConsiderations.map((item) => (
                <div key={item.title} className="card-surface p-5 md:p-6">
                  <dt className="text-[15px] font-semibold text-ink">{item.title}</dt>
                  <dd className="mt-2 text-[14px] leading-6 text-copy">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Billing journey */}
      <section aria-labelledby="billing-title" className="border-b border-line bg-surface">
        <div className="container-page py-14 md:py-16 lg:py-20">
          <p className="eyebrow">How school pricing works</p>
          <h2 id="billing-title" className="t-title mt-3 text-ink">
            A clear path from setup to regular billing.
          </h2>
          <ol className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {billingSteps.map((step) => (
              <li key={step.number}>
                <p className="text-[14px] font-semibold text-brand">0{step.number}</p>
                <h3 className="t-item mt-3 text-ink">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-copy">{step.description}</p>
              </li>
            ))}
          </ol>
          <Link href="/how-it-works" className="link-brand mt-8 inline-block text-[14px]">
            How onboarding works in practice
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="pricing-faq-title" className="border-b border-line bg-white">
        <div className="container-page max-w-[880px] py-14 md:py-16 lg:py-20">
          <p className="eyebrow">Questions</p>
          <h2 id="pricing-faq-title" className="t-title mt-3 text-ink">
            A few useful answers.
          </h2>
          <div className="mt-8 border-t border-line">
            {faqs.map((item) => (
              <details key={item.question} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[15px] font-medium text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span aria-hidden="true" className="text-xl font-normal text-brand group-open:hidden">
                    +
                  </span>
                  <span aria-hidden="true" className="hidden text-xl font-normal text-brand group-open:inline">
                    −
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-8 text-[15px] leading-7 text-copy">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="pricing-cta-title" className="bg-ink text-white">
        <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <h2 id="pricing-cta-title" className="t-title text-white">
              Ready to bring your school management into one place?
            </h2>
            <p className="t-body mt-3 max-w-md text-white/75">
              Tell us your school’s size and what you need. We will tell you which plan fits.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-on-dark">
              Discuss school pricing
            </Link>
            <Link href="/get-started" className="btn border border-white/30 bg-transparent text-white hover:bg-white/10">
              Get started
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
