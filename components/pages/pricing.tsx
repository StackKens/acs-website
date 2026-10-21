import { Button, Column, Container, Section, PageHero } from '@/components/ui/primitives'
import { pricingPlans } from '@/lib/pricing'

/**
 * Pricing page.
 *
 * Follows the reference: tinted page hero, a single bordered price card with
 * the plan panel on the right, then three short columns. Prices are the real
 * per-term figures from lib/pricing.ts rather than a placeholder.
 */

const formatUGX = (value: number) =>
  `UGX ${new Intl.NumberFormat('en-UG', { maximumFractionDigits: 0 }).format(value)}`

const considerations = [
  {
    label: 'Modules',
    title: 'What you need',
    body: 'Records, attendance and academic results. Tell us which matter first.',
  },
  {
    label: 'Onboarding',
    title: 'How setup works',
    body: 'We agree the school information and users needed before you begin.',
  },
  {
    label: 'Total cost',
    title: 'Ask before you decide',
    body: 'Ask about billing period and what is included, so there are no surprises.',
  },
]

export function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing for your school"
        title="A clear conversation. No guesswork."
        lead="Ask about the modules your school needs, onboarding and the total cost before making a decision."
      />

      <Section aria-labelledby="price-card-title">
        <Container>
          <div className="mb-[clamp(56px,8vw,96px)] grid items-center gap-[clamp(24px,4vw,40px)] rounded-hero border-2 border-line-soft p-[clamp(20px,4vw,40px)] md:grid-cols-2">
            <div>
              <h2 id="price-card-title" className="t-title mb-5 text-ink">
                A plan shaped around your school.
              </h2>
              <p className="max-w-[420px] text-copy">
                Three plans, priced by school size and billed per academic term. Tell us your pupil
                count and we will confirm the plan that fits.
              </p>
            </div>

            <div className="rounded-hero bg-surface p-[clamp(20px,3vw,26px)]">
              <p className="t-eyebrow mb-3.5 text-[10px]">School plan · Per term</p>
              <dl className="mb-5 divide-y divide-line border-y border-line">
                {pricingPlans.map((plan) => (
                  <div key={plan.id} className="flex items-baseline justify-between gap-4 py-3">
                    <dt>
                      <span className="block text-[15px] font-semibold text-ink">{plan.name}</span>
                      <span className="block text-[12px] text-copy">{plan.pupilLimit}</span>
                    </dt>
                    <dd className="shrink-0 text-right">
                      <strong className="block text-[18px] font-semibold tracking-[-0.02em] text-ink tabular-nums">
                        {formatUGX(plan.price ?? 0)}
                      </strong>
                      <span className="block text-[11px] text-copy">{plan.billing}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mb-5 text-[12px] text-copy">
                The first 20 schools receive 2 months free on their selected plan. Schools above 1,000
                pupils can ask for a custom plan.
              </p>
              <Button href="/contact" className="w-full">
                Discuss school pricing
              </Button>
            </div>
          </div>

          <div className="grid gap-9 md:grid-cols-3 md:gap-8">
            {considerations.map((item) => (
              <Column key={item.label} label={item.label} title={item.title}>
                {item.body}
              </Column>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
