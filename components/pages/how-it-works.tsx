import { cn } from '@/lib/utils'
import { Container, Cta, PageHero, Section } from '@/components/ui/primitives'

/**
 * How it works page.
 *
 * Follows the reference: a tinted page hero, the four onboarding steps (conversation,
 * explore, prepare, begin), and the closing call to action.
 */

const steps = [
  {
    n: '01',
    title: 'Let’s talk.',
    body: 'Share how your school works and what you want to organize. A walkthrough is the easiest way to see whether ACS fits.',
  },
  {
    n: '02',
    title: 'Explore the fit.',
    body: 'Discuss available features, pricing and onboarding needs, so you know the total cost before deciding.',
  },
  {
    n: '03',
    title: 'Get prepared.',
    body: 'Agree on the school information and users needed for setup.',
  },
  {
    n: '04',
    title: 'Bring work together.',
    body: 'Begin using the agreed modules for your school’s daily work.',
  },
]

export function HowItWorksPage() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="A thoughtful start for your school."
        lead="Getting started is a conversation first. Nothing is set up until we have agreed what your school needs."
      />

      <Section>
        <Container>
          <div className="grid gap-x-12 gap-y-10 grid-cols-2 sm:grid-cols-1">
            {steps.map((step) => (
              <article key={step.n} className="border-t-2 border-brand pt-[18px]">
                <p className="mb-3.5 text-[10.5px] font-semibold uppercase tracking-[0.13em] text-brand">
                  {step.n}
                </p>
                <h3 className="t-item mb-2.5 text-ink">{step.title}</h3>
                <p className="max-w-[460px] text-[15.5px] text-copy">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Cta
            title="A more organized school starts with a conversation."
            href="/contact"
            label="Get Started"
          />
        </Container>
      </Section>
    </main>
  )
}