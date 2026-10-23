import { EnquiryForm } from '@/components/pages/enquiry-form'
import { HomeHero } from '@/components/pages/home-hero'
import { Button, Card, Container, Eyebrow, Section } from '@/components/ui/primitives'
import { Reveal } from '@/components/ui/reveal'
import { Stagger, StaggerItem } from '@/components/ui/stagger'
import { formatUGX, pricingPlans } from '@/lib/pricing'

/**
 * Homepage.
 *
 * Layout and copy follow the approved reference in acs.md section for
 * section: tinted hero, three connected-work columns, a closer look with a
 * real results table, four onboarding steps, one pricing card, the Uganda
 * note, the enquiry form and a single-line footer.
 *
 * The only departure from the reference is the pricing panel, which shows
 * the real per-term prices from lib/pricing.ts instead of a placeholder.
 */

const connected = [
  {
    label: '01 / Records',
    title: 'Know every pupil.',
    body: 'Keep pupil information structured and accessible, rather than spread across books and disconnected files.',
  },
  {
    label: '02 / Attendance',
    title: 'A clearer daily register.',
    body: 'Bring recording and reviewing attendance into a consistent workflow for teachers and school administrators.',
  },
  {
    label: '03 / Academics',
    title: 'Make results easier to manage.',
    body: 'Organize assessment marks and examination results to support review and the preparation of pupil report cards.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Let’s talk.',
    body: 'Share how your school works and what you want to organize.',
  },
  {
    n: '02',
    title: 'Explore the fit.',
    body: 'Discuss available features, pricing and onboarding needs.',
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

const results = [
  { pupil: 'Pupil 001', eng: '78', mtc: '84', sci: '81' },
  { pupil: 'Pupil 002', eng: '85', mtc: '76', sci: '89' },
  { pupil: 'Pupil 003', eng: '72', mtc: '80', sci: '75' },
]

export default function HomePage() {
  return (
    <main id="home">
      <HomeHero />

      {/* The school day, connected */}
      <Section id="features" aria-labelledby="connected-title">
        <Container>
          <Reveal className="mb-14 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
            <div>
              <Eyebrow>The school day, connected</Eyebrow>
              <h2 id="connected-title" className="t-title max-w-[480px] text-ink">
                Less scattered information. More room to focus.
              </h2>
            </div>
            <p className="max-w-[400px] text-copy">
              From the morning register to end-of-term reports, ACS is being built to bring everyday
              academic work into one organized place.
            </p>
          </Reveal>

          <Stagger className="grid gap-9 md:grid-cols-3 md:gap-8">
            {connected.map((item) => (
              <StaggerItem key={item.label} className="border-t-2 border-brand pt-[18px]">
                <p className="t-eyebrow mb-3.5 text-[10.5px]">{item.label}</p>
                <h3 className="t-item mb-3 text-ink">{item.title}</h3>
                <p className="text-[15.5px] text-copy">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* A closer look at ACS */}
      <Section className="pt-0" aria-labelledby="closer-title">
        <Container>
          <Reveal className="grid items-center gap-[clamp(24px,4vw,40px)] rounded-panel bg-surface p-[clamp(24px,4vw,30px)] nav:grid-cols-[5fr_7fr]">
            <div>
              <Eyebrow>A closer look at ACS</Eyebrow>
              <h2 id="closer-title" className="t-title mb-5 text-ink">
                One class. A clearer picture.
              </h2>
              <p className="mb-[22px] max-w-[460px] text-[16px] text-copy">
                Keep academic information together so your team can review results and prepare reports
                with better context.
              </p>
              <p className="text-[12.5px] text-copy">
                Design preview only. Confirm available modules and workflows with the ACS team.
              </p>
            </div>

            <Card className="p-[clamp(18px,3vw,24px)]">
              <h3 className="t-item text-ink">Academic results</h3>
              <p className="mt-2.5 mb-[22px] text-[13px] text-copy">
                Primary 5 · End of Term II · Sample data
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[300px] border-collapse text-[13.5px] [&_td:first-child]:text-left [&_th:first-child]:text-left [&_tr:last-child_td]:border-b-0">
                  <caption className="sr-only">
                    End of Term II results for Primary 5, sample data
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col" className="bg-surface px-3 py-3.5 text-right font-normal text-copy">
                        Pupil
                      </th>
                      <th scope="col" className="bg-surface px-3 py-3.5 text-right font-normal text-copy">
                        ENG
                      </th>
                      <th scope="col" className="bg-surface px-3 py-3.5 text-right font-normal text-copy">
                        MTC
                      </th>
                      <th scope="col" className="bg-surface px-3 py-3.5 text-right font-normal text-copy">
                        SCI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((row) => (
                      <tr key={row.pupil}>
                        <td className="border-b border-line px-3 py-[18px] text-copy">{row.pupil}</td>
                        <td className="border-b border-line px-3 py-[18px] text-right text-copy tabular-nums">
                          {row.eng}
                        </td>
                        <td className="border-b border-line px-3 py-[18px] text-right text-copy tabular-nums">
                          {row.mtc}
                        </td>
                        <td className="border-b border-line px-3 py-[18px] text-right text-copy tabular-nums">
                          {row.sci}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* How it works */}
      <Section tone="tint" id="how" aria-labelledby="how-title">
        <Container>
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 id="how-title" className="t-title mb-12 text-ink">
              A thoughtful start for your school.
            </h2>
          </Reveal>
          <Stagger className="grid gap-7 tight:grid-cols-2 wide:grid-cols-4">
            {steps.map((step) => (
              <StaggerItem key={step.n}>
                <small className="mb-4 block text-[10.5px] font-semibold tracking-[0.13em] text-brand">
                  {step.n}
                </small>
                <h3 className="t-item mb-2.5 text-ink">{step.title}</h3>
                <p className="text-[15px] text-copy">{step.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Pricing — one card, real per-term prices. */}
      <Section id="pricing" aria-labelledby="pricing-title">
        <Container>
          <Eyebrow>Pricing for your school</Eyebrow>
          <Reveal className="grid items-center gap-[clamp(24px,4vw,40px)] rounded-hero border-2 border-line-soft p-[clamp(20px,4vw,40px)] md:grid-cols-2">
            <div>
              <h2 id="pricing-title" className="t-title mb-5 text-ink">
                A clear conversation. No guesswork.
              </h2>
              <p className="max-w-[420px] text-copy">
                Ask about the modules your school needs, onboarding and the total cost before making a
                decision.
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
              <p className="t-small mb-5 text-[12px]">
                Billed per academic term. The first 20 schools receive 2 months free on their selected
                plan.
              </p>
              <Button href="/contact" className="w-full">
                Discuss school pricing
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Starting with Uganda */}
      <Section tone="tint" id="about" aria-labelledby="uganda-title">
        <Container>
          <Reveal className="grid gap-5 md:grid-cols-2 md:gap-10">
            <div>
              <Eyebrow>Starting with Uganda</Eyebrow>
              <h2 id="uganda-title" className="t-title text-ink">
                Built around the work behind learning.
              </h2>
            </div>
            <div>
              <p className="mb-5 text-copy">
                A well-run school depends on a great deal of work beyond the classroom. ACS is being
                developed to make that work more organized, starting with the practical needs of primary
                schools in Uganda.
              </p>
              <p className="text-copy">
                Not a school website builder. A working environment for the records, routines and academic
                information your team manages every day.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact" aria-labelledby="contact-title">
        <Container>
          <Reveal>
            <Eyebrow>Let’s talk about your school</Eyebrow>
            <h2 id="contact-title" className="t-title mb-6 max-w-[760px] text-ink">
              A more organized school starts with a conversation.
            </h2>
            <p className="mb-8 max-w-[760px] text-copy">
              Request a walkthrough, ask about pricing or discuss onboarding. Prepare an enquiry below,
              or email stackkens@gmail.com directly. Your enquiry opens in your email app for you to
              review and send.
            </p>
          </Reveal>

          <Reveal>
            <EnquiryForm />
          </Reveal>

          <p className="t-small">Email ACS directly: stackkens@gmail.com</p>
          <p className="t-small mt-4">
            Please do not include sensitive pupil information in an initial enquiry.
          </p>
        </Container>
      </Section>
    </main>
  )
}
