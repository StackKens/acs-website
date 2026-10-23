import { ACSMark } from '@/components/acs-mark'
import { EnquiryForm } from '@/components/pages/enquiry-form'
import { Button, Card, Container, Eyebrow, Section } from '@/components/ui/primitives'
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
      {/* Hero — tinted band, text left, dashboard preview right. */}
      <Section tone="tint" className="py-[clamp(48px,7vw,80px)]" aria-labelledby="hero-title">
        <Container className="grid items-center gap-[clamp(32px,5vw,64px)] nav:grid-cols-2">
          <div>
            <Eyebrow>Less paperwork. More clarity.</Eyebrow>
            <h1 id="hero-title" className="t-display text-ink">
              Your school. Better organized.
            </h1>
            <p className="t-lead mt-6 max-w-[460px] text-copy">
              Bring pupil records, attendance and academic results together with Academic Cloud System.
              A practical school management platform, built around primary schools in Uganda.
            </p>
            <div className="btns flex flex-wrap items-center gap-3 mb-6">
              <a href="/contact" className="btn btn-primary">
                Request a walkthrough
              </a>
              <a href="/features" className="btn btn-ghost">
                Explore ACS
              </a>
            </div>
            <div className="trust flex flex-wrap items-center gap-2 text-[13px] text-copy">
              <span>Built for primary schools in Uganda</span>
              <span>Designed with pupil privacy in mind</span>
            </div>
            <a className="wa" href="https://wa.me/256XXXXXXXXX?text=Hello%20ACS%2C%20I%27d%20like%20a%20walkthrough">
              Or message us on WhatsApp →
            </a>
          </div>

          {/* Dashboard preview */}
          <div className="preview-frame">
            <Card className="overflow-hidden rounded-hero">
              <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5">
                <div className="flex min-w-0 items-center gap-2.5">
                  <ACSMark size={22} className="shrink-0" title={null} />
                  <span className="truncate text-[13.5px] text-copy">Demo Primary School</span>
                </div>
                <em className="shrink-0 text-[10px] font-semibold not-italic tracking-[0.12em] text-brand">
                  PREVIEW
                </em>
              </div>

              <div className="p-[clamp(16px,3vw,24px)]">
                <h2 className="t-item text-ink">School overview</h2>
                <p className="mt-3.5 mb-5 text-[13.5px] text-copy">Term II, 2026 / Academic overview</p>

                <div className="mb-6 grid grid-cols-3 gap-2.5">
                  {[
                    { label: 'Pupils', value: '428' },
                    { label: 'Present today', value: '406' },
                    { label: 'Classes', value: '14' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-result bg-surface px-3 pb-3.5 pt-3">
                      <small className="block text-[13px] text-copy">{stat.label}</small>
                      <strong className="text-[clamp(22px,3vw,28px)] font-semibold leading-[1.3] tracking-[-0.02em] text-ink">
                        {stat.value}
                      </strong>
                    </div>
                  ))}
                </div>

                <p className="mb-3 text-[13px] font-semibold text-ink">Today&apos;s attendance by class</p>
                <div
                  className="grid h-[110px] grid-cols-7 items-end gap-[clamp(8px,1.4vw,14px)] border-b border-line"
                  aria-hidden="true"
                >
                  {[
                    { h: 'h-[70%]' },
                    { h: 'h-[90%]' },
                    { h: 'h-[76%]' },
                    { h: 'h-[100%]', on: true },
                    { h: 'h-[88%]' },
                    { h: 'h-[62%]' },
                    { h: 'h-[80%]' },
                  ].map((bar, index) => (
                    <div
                      key={index}
                      className={`w-full rounded-t-[3px] ${bar.on ? 'bg-brand' : 'bg-bar'} ${bar.h}`}
                    />
                  ))}
                </div>
                <div
                  className="mt-3 mb-[18px] grid grid-cols-7 gap-[clamp(8px,1.4vw,14px)] text-center text-[12.5px] text-copy"
                  aria-hidden="true"
                >
                  {['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'].map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>

                <p className="text-[11px] text-copy">Illustrative interface · All figures are sample data</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* The school day, connected */}
      <Section id="features" aria-labelledby="connected-title">
        <Container>
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
            <div>
              <Eyebrow>The school day, connected</Eyebrow>
              <h2 id="connected-title" className="max-w-[480px] text-ink">
                Less scattered information. More room to focus.
              </h2>
            </div>
            <p className="max-w-[400px] text-copy">
              From the morning register to end-of-term reports, ACS is being built to bring everyday
              academic work into one organized place.
            </p>
          </div>

          <div className="grid gap-9 md:grid-cols-3 md:gap-8">
            {connected.map((item) => (
              <article key={item.label} className="border-t-2 border-brand pt-[18px]">
                <p className="t-eyebrow mb-3.5 text-[10.5px]">{item.label}</p>
                <h3 className="t-item mb-3 text-ink">{item.title}</h3>
                <p className="text-[15.5px] text-copy">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* A closer look at ACS */}
      <Section className="pt-0" aria-labelledby="closer-title">
        <Container>
          <div className="grid items-center gap-[clamp(24px,4vw,40px)] rounded-panel bg-surface p-[clamp(24px,4vw,30px)] nav:grid-cols-[5fr_7fr]">
            <div>
              <Eyebrow>A closer look at ACS</Eyebrow>
              <h2 id="closer-title" className="mb-5 text-ink">
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
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section tone="tint" id="how" aria-labelledby="how-title">
        <Container>
          <Eyebrow>How it works</Eyebrow>
          <h2 id="how-title" className="mb-12 text-ink">
            A thoughtful start for your school.
          </h2>
          <div className="grid gap-7 tight:grid-cols-2 wide:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n}>
                <small className="mb-4 block text-[10.5px] font-semibold tracking-[0.13em] text-brand">
                  {step.n}
                </small>
                <h3 className="t-item mb-2.5 text-ink">{step.title}</h3>
                <p className="text-[15px] text-copy">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing — one card, real per-term prices. */}
      <Section id="pricing" aria-labelledby="pricing-title">
        <Container>
          <Eyebrow>Pricing for your school</Eyebrow>
          <div className="grid items-center gap-[clamp(24px,4vw,40px)] rounded-hero border-2 border-line-soft p-[clamp(20px,4vw,40px)] md:grid-cols-2">
            <div>
              <h2 id="pricing-title" className="mb-5 text-ink">
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
          </div>
        </Container>
      </Section>

      {/* Starting with Uganda */}
      <Section tone="tint" id="about" aria-labelledby="uganda-title">
        <Container className="grid gap-5 md:grid-cols-2 md:gap-10">
          <div>
            <Eyebrow>Starting with Uganda</Eyebrow>
            <h2 id="uganda-title" className="text-ink">
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
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact" aria-labelledby="contact-title">
        <Container>
          <Eyebrow>Let’s talk about your school</Eyebrow>
          <h2 id="contact-title" className="mb-6 max-w-[760px] text-ink">
            A more organized school starts with a conversation.
          </h2>
          <p className="mb-8 max-w-[760px] text-copy">
            Request a walkthrough, ask about pricing or discuss onboarding. Prepare an enquiry below, or
            email stackkens@gmail.com directly. Your enquiry opens in your email app for you to review
            and send.
          </p>

          <EnquiryForm />

          <p className="t-small">Email ACS directly: stackkens@gmail.com</p>
          <p className="t-small mt-4">
            Please do not include sensitive pupil information in an initial enquiry.
          </p>
        </Container>
      </Section>
    </main>
  )
}
