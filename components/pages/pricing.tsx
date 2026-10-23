import { Fragment } from 'react'
import { Check } from 'lucide-react'
import {
  Button,
  Column,
  Container,
  Cta,
  Eyebrow,
  PageHero,
  Section,
} from '@/components/ui/primitives'
import { Reveal } from '@/components/ui/reveal'
import { Faq } from '@/components/ui/faq'
import { Stagger, StaggerItem } from '@/components/ui/stagger'
import {
  billingSteps,
  comparisonTable,
  faqs,
  formatUGX,
  largeSchoolsPlan,
  pricingConsiderations,
  pricingPlans,
} from '@/lib/pricing'
import { cn } from '@/lib/utils'

/**
 * Pricing page.
 *
 * The three plan cards, the feature comparison, the billing steps, the
 * considerations and the FAQ are all rendered from lib/pricing.ts, so the
 * prices and inclusions can only ever be stated once.
 */
export function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing for your school"
        title="A clear conversation. No guesswork."
        lead="Ask about the modules your school needs, onboarding and the total cost before making a decision."
      />

      {/* Plans */}
      <Section aria-labelledby="plans-title">
        <Container>
          <Reveal>
            <Eyebrow className="mb-5">Plans</Eyebrow>
            <h2 id="plans-title" className="t-title mb-4 text-ink">
              A plan shaped around your school.
            </h2>
            <p className="mb-10 max-w-[560px] text-copy">
              Three plans, priced by school size and billed per academic term. Tell us your pupil
              count and we will confirm the plan that fits.
            </p>
          </Reveal>

          <Stagger className="grid gap-5 pt-3 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.id} className="h-full">
                <article
                  className={cn(
                    'flex h-full flex-col rounded-hero border p-6 transition-colors',
                    plan.emphasis
                      ? 'border-2 border-brand bg-surface md:-translate-y-3'
                      : 'border-line bg-white',
                  )}
                >
                  {plan.emphasis && (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-brand px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="t-item text-ink">{plan.name}</h3>
                  <p className="mt-1 text-[13px] text-copy">{plan.pupilLimit}</p>

                  <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <strong className="text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink tabular-nums">
                      {formatUGX(plan.price ?? 0)}
                    </strong>
                    <span className="text-[13px] text-copy">{plan.billing}</span>
                  </p>

                  <p className="mt-3 text-[15px] text-copy">{plan.description}</p>

                  <ul className="mt-6 mb-6 grid list-none gap-2.5 pl-0 text-[14.5px] text-copy">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          aria-hidden="true"
                          className="mt-[0.2em] shrink-0 text-brand"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/get-started"
                    variant={plan.emphasis ? 'primary' : 'ghost'}
                    className="mt-auto w-full"
                  >
                    {plan.cta}
                  </Button>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-6 flex flex-col items-start gap-5 rounded-hero border border-line-soft bg-white p-[clamp(22px,3vw,32px)] md:flex-row md:items-center md:justify-between">
            <div>
              <p className="t-eyebrow mb-2">{largeSchoolsPlan.pupilLimit}</p>
              <p className="max-w-[620px] text-copy">{largeSchoolsPlan.description}</p>
            </div>
            <Button href="/contact" variant="ghost">
              {largeSchoolsPlan.cta}
            </Button>
          </Reveal>

          <p className="mt-5 text-[12px] text-copy">
            The first 20 schools receive 2 months free on their selected plan, then continue at the
            normal per-term price.
          </p>
        </Container>
      </Section>

      {/* Comparison */}
      <Section tone="tint" aria-labelledby="compare-title">
        <Container>
          <Reveal>
            <Eyebrow className="mb-5">Compare plans</Eyebrow>
            <h2 id="compare-title" className="t-title mb-8 text-ink">
              The same details, side by side.
            </h2>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-[14px]">
                <caption className="sr-only">
                  Feature comparison for the Starter, Growth and Professional plans
                </caption>
                <thead>
                  <tr className="border-b border-line">
                    <th scope="col" className="px-3 py-3.5 text-left font-normal text-copy">
                      Feature
                    </th>
                    {pricingPlans.map((plan) => (
                      <th
                        key={plan.id}
                        scope="col"
                        className="px-3 py-3.5 text-center font-normal text-copy"
                      >
                        <span className="block text-[13.5px] font-semibold text-ink">
                          {plan.name}
                        </span>
                        <span className="block text-[11.5px]">{plan.pupilLimit}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((group) => (
                    <Fragment key={group.category}>
                      <tr>
                        <th
                          colSpan={pricingPlans.length + 1}
                          scope="colgroup"
                          className="bg-surface px-3 py-3 text-left text-[10.5px] font-semibold uppercase tracking-[0.13em] text-brand"
                        >
                          {group.category}
                        </th>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={row.feature} className="border-b border-line last:border-b-0">
                          <th
                            scope="row"
                            className="px-3 py-[15px] text-left font-normal text-copy"
                          >
                            {row.feature}
                          </th>
                          {row.included.map((included, index) => (
                            <td key={index} className="px-3 py-[15px] text-center">
                              {included ? (
                                <Check
                                  size={16}
                                  aria-hidden="true"
                                  className="mx-auto text-brand"
                                />
                              ) : (
                                <span aria-hidden="true" className="text-copy">
                                  —
                                </span>
                              )}
                              <span className="sr-only">
                                {included ? 'Included' : 'Not included'}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Considerations */}
      <Section aria-labelledby="considerations-title">
        <Container>
          <Reveal>
            <Eyebrow className="mb-5">Good to know</Eyebrow>
            <h2 id="considerations-title" className="t-title mb-8 text-ink">
              What shapes the cost.
            </h2>
          </Reveal>
          <Stagger className="grid gap-9 md:grid-cols-2 md:gap-8">
            {pricingConsiderations.map((item, index) => (
              <StaggerItem key={item.title}>
                <Column label={String(index + 1).padStart(2, '0')} title={item.title}>
                  {item.text}
                </Column>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Billing steps */}
      <Section tone="tint" aria-labelledby="billing-title">
        <Container>
          <Reveal>
            <Eyebrow className="mb-5">How billing works</Eyebrow>
            <h2 id="billing-title" className="t-title mb-10 text-ink">
              From choosing a plan to your first term.
            </h2>
          </Reveal>
          <Stagger className="grid gap-8 step:grid-cols-2 wide:grid-cols-4">
            {billingSteps.map((step) => (
              <StaggerItem key={step.number}>
                <small className="mb-4 block text-[10.5px] font-semibold tracking-[0.13em] text-brand">
                  {String(step.number).padStart(2, '0')}
                </small>
                <h3 className="t-item mb-2.5 text-ink">{step.title}</h3>
                <p className="text-[15px] text-copy">{step.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* FAQ */}
      <Section aria-labelledby="pricing-faq-title">
        <Container>
          <Reveal>
            <Eyebrow className="mb-5">Questions</Eyebrow>
            <h2 id="pricing-faq-title" className="t-title mb-7 text-ink">
              Pricing questions, answered.
            </h2>
          </Reveal>
          <Faq items={faqs} />
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <Cta
              title="Not sure which plan fits your school?"
              href="/contact"
              label="Talk to us"
            />
          </Reveal>
        </Container>
      </Section>
    </main>
  )
}
