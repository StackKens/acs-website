import { Container, Cta, Eyebrow, PageHero, Section, Split } from '@/components/ui/primitives'
import { Faq, type FaqItem } from '@/components/ui/faq'
import { Reveal } from '@/components/ui/reveal'
import { Stagger, StaggerItem } from '@/components/ui/stagger'
import { Timeline, TimelineItem } from '@/components/ui/timeline'

/**
 * How it works page.
 *
 * Mirrors the reference implementation in features.md: the four-step timeline
 * with "What happens" / "What you bring" panels, a typical term, roles, what to
 * have in mind, the onboarding FAQ and the closing CTA.
 */

const STEPS = [
  {
    title: 'Let’s talk.',
    text: 'Share how your school works and what you want to organize. A walkthrough is the easiest way to see whether ACS fits.',
    happens: [
      'A friendly introductory conversation',
      'We listen to how your school runs today',
      'You see ACS in action with sample data',
    ],
    bring: ['A rough idea of your school’s size', 'Who would use the system', 'Which part matters most first'],
  },
  {
    title: 'Explore the fit.',
    text: 'Discuss available features, pricing and onboarding needs, so you know the total cost before you decide.',
    happens: [
      'We match modules to your needs',
      'Pricing, billing period and inclusions are explained',
      'Your questions get direct answers',
    ],
    bring: ['Questions and concerns', 'A description of the books and files you use today'],
  },
  {
    title: 'Get prepared.',
    text: 'Agree on the school information and users needed for setup.',
    happens: [
      'We agree the classes, streams and terms to set up',
      'We agree who needs access, and what each person can see',
      'We plan how to bring in pupil information',
    ],
    bring: ['Your class and staff lists', 'The people who will use ACS day to day'],
  },
  {
    title: 'Bring work together.',
    text: 'Begin using the agreed modules for your school’s daily work.',
    happens: [
      'Teachers begin with the register and marks',
      'Administrators keep records organized',
      'We check in on how it is going',
    ],
    bring: ['Teachers ready to start', 'Honest feedback so ACS keeps improving'],
  },
]

const TERM = [
  [
    'Start of term',
    'Set the term',
    'Confirm the term dates and class lists so everything is ready before pupils arrive.',
  ],
  [
    'Every day',
    'Take the register',
    'Teachers record attendance, and headteachers can see how the day is going across classes.',
  ],
  [
    'During the term',
    'Enter marks',
    'Assessment marks and exam results go into one organized place as they come in.',
  ],
  [
    'End of term',
    'Prepare reports',
    'Review results and prepare pupil report cards with better context and less copying.',
  ],
]

const ROLES = [
  [
    'Headteacher',
    'Agrees the setup with us, decides who gets access, and reviews attendance and results.',
  ],
  ['Administrator', 'Keeps pupil records and class lists organized and up to date.'],
  ['Teachers', 'Take the register, enter marks and prepare comments for their own classes.'],
]

const PREP = [
  'How many classes and pupils your school has',
  'Who would use the system: headteacher, administrators, teachers',
  'Which of records, attendance and results matter most first',
  'How you keep registers and marks today',
]

const FAQ: FaqItem[] = [
  {
    question: 'How long does setup take?',
    answer:
      'It depends on your school’s size and which modules you choose. We agree a plan with you during the preparation step.',
  },
  {
    question: 'Can we start with just one module?',
    answer:
      'Ask us about starting with the part that matters most to your school, such as attendance or results, and adding more later.',
  },
  {
    question: 'Who needs to be involved?',
    answer:
      'Usually the headteacher or an administrator agrees the setup, then the teachers who will use ACS each day.',
  },
  {
    question: 'What about our existing records?',
    answer:
      'Tell us what you keep today. We plan how to bring in pupil information with you during the preparation step.',
  },
  {
    question: 'Will teachers need training?',
    answer:
      'Onboarding is part of getting started. Tell us about your team and we will discuss the support that fits.',
  },
]

function CheckList({ items, small }: { items: string[]; small?: boolean }) {
  return (
    <ul className={small ? 'grid gap-2 text-[14.5px] text-copy' : 'grid gap-3.5 text-copy'}>
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-[22px] before:absolute before:left-0 before:top-[0.65em] before:h-0.5 before:w-2 before:bg-brand before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[10px] border border-line bg-white px-[18px] py-4">
      <h4 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
        {title}
      </h4>
      <CheckList items={items} small />
    </div>
  )
}

export function HowItWorksPage() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="A thoughtful start for your school."
        lead="Getting started is a conversation first. Nothing is set up until we have agreed what your school needs. Here is what to expect at each step."
        className="py-12 md:py-16 lg:py-20"
      />

      <Section className="py-14 md:py-20 lg:py-24">
        <Container className="px-5 sm:px-8 lg:px-12">
          <Timeline>
            {STEPS.map((step, index) => (
              <TimelineItem key={step.title} n={index + 1} title={step.title} text={step.text}>
                <div className="mt-[18px] grid gap-5 md:grid-cols-2">
                  <Panel title="What happens" items={step.happens} />
                  <Panel title="What you bring" items={step.bring} />
                </div>
              </TimelineItem>
            ))}
          </Timeline>
          <Reveal>
            <p className="mt-7 max-w-[760px] rounded-r-lg border-l-[3px] border-brand bg-surface px-5 py-[18px] text-[15px] text-copy">
              How long each step takes depends on your school’s size and which modules you choose. We
              agree a plan with you, so there are no surprises.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="tint" className="py-14 md:py-20 lg:py-24">
        <Container className="px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Eyebrow className="mb-5">Day to day</Eyebrow>
            <h2 className="t-title mb-8 text-ink md:text-4xl lg:text-[2.5rem]">
              A typical term with ACS.
            </h2>
          </Reveal>
          <Stagger className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {TERM.map(([label, title, text]) => (
              <StaggerItem key={title} className="border-t-2 border-brand pt-[18px]">
                <p className="mb-3.5 text-[10.5px] font-semibold uppercase tracking-[0.13em] text-brand">
                  {label}
                </p>
                <h3 className="t-item text-ink">{title}</h3>
                <p className="mt-2.5 max-w-[460px] text-[15.5px] text-copy">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="py-14 md:py-20 lg:py-24">
        <Container className="px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Eyebrow className="mb-5">Who does what</Eyebrow>
            <h2 className="t-title mb-8 text-ink md:text-4xl lg:text-[2.5rem]">
              Everyone has a clear part.
            </h2>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {ROLES.map(([title, text]) => (
              <StaggerItem key={title} className="rounded-hero border border-line bg-white p-6">
                <h3 className="t-item text-ink">{title}</h3>
                <p className="mt-2 text-[15px] text-copy">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="tint" className="py-14 md:py-20 lg:py-24">
        <Container className="px-5 sm:px-8 lg:px-12">
          <Split eyebrow="Before we talk" title="What is helpful to have in mind.">
            You do not need anything formal. A rough picture of your school is enough to start.
          </Split>
          <Reveal>
            <CheckList items={PREP} />
            <p className="mt-6 text-[13px] text-copy">
              Please do not include sensitive pupil information in an initial enquiry.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-14 md:py-20 lg:py-24">
        <Container className="px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Eyebrow className="mb-5">Questions</Eyebrow>
            <h2 className="t-title mb-8 text-ink md:text-4xl lg:text-[2.5rem]">
              Getting started, answered.
            </h2>
          </Reveal>
          <Faq items={FAQ} />
        </Container>
      </Section>

      <Section className="py-14 md:py-20 lg:py-24">
        <Container className="px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Cta
              title="A more organized school starts with a conversation."
              href="/contact"
              label="Request a walkthrough"
            />
          </Reveal>
        </Container>
      </Section>
    </main>
  )
}
