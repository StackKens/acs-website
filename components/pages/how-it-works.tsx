import { Container, Cta, PageHero, Section, Split } from '@/components/ui/primitives'

/**
 * How it works page.
 *
 * Follows the reference: a tinted page hero, the four onboarding steps on
 * a 2px rule grid, a tinted "before we talk" band with a short list, and
 * the closing call to action. Nothing here promises instant setup — the
 * first step is a conversation.
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

const prep = [
  'How many classes and pupils your school has',
  'Who would use the system: headteacher, administrators, teachers',
  'Which of records, attendance and results matter most first',
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
          <div className="grid gap-x-12 gap-y-10 step:grid-cols-2">
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

      <Section tone="tint">
        <Container>
          <Split eyebrow="Before we talk" title="What is helpful to have in mind.">
            You do not need anything formal. A rough picture of your school is enough to start.
          </Split>

          <ul className="mt-6 grid gap-3.5 text-copy">
            {prep.map((item) => (
              <li
                key={item}
                className="relative pl-[22px] before:absolute before:left-0 before:top-[0.65em] before:h-0.5 before:w-2 before:bg-brand before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[13px] text-copy">
            Please do not include sensitive pupil information in an initial enquiry.
          </p>
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
