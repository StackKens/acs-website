import { C, PageHero, Section, Bullets, Faq, CtaBand, primary, ghost, wrap, WA } from "@/components/acs/ui";

const STEPS: { t: string; d: string; happens: string[]; bring: string[] }[] = [
  {
    t: "Let’s talk.",
    d: "Share how your school works and what you want to organize. A walkthrough is the easiest way to see whether ACS fits.",
    happens: ["A friendly introductory conversation", "We listen to how your school runs today", "You see ACS in action with sample data"],
    bring: ["A rough idea of your school’s size", "Who would use the system", "Which part matters most first"],
  },
  {
    t: "Explore the fit.",
    d: "Discuss available features, pricing and onboarding needs, so you know the total cost before you decide.",
    happens: ["We match modules to your needs", "Pricing, billing period and inclusions are explained", "Your questions get direct answers"],
    bring: ["Questions and concerns", "A description of the books and files you use today"],
  },
  {
    t: "Get prepared.",
    d: "Agree on the school information and users needed for setup.",
    happens: ["We agree the classes, streams and terms to set up", "We agree who needs access, and what each person can see", "We plan how to bring in pupil information"],
    bring: ["Your class and staff lists", "The people who will use ACS day to day"],
  },
  {
    t: "Bring work together.",
    d: "Begin using the agreed modules for your school’s daily work.",
    happens: ["Teachers begin with the register and marks", "Administrators keep records organized", "We check in on how it is going"],
    bring: ["Teachers ready to start", "Honest feedback so ACS keeps improving"],
  },
];

const TERM: [string, string, string][] = [
  ["Start of term", "Set the term", "Confirm the term dates and class lists so everything is ready before pupils arrive."],
  ["Every day", "Take the register", "Teachers record attendance, and headteachers can see how the day is going across classes."],
  ["During the term", "Enter marks", "Assessment marks and exam results go into one organized place as they come in."],
  ["End of term", "Prepare reports", "Review results and prepare pupil report cards with better context and less copying."],
];

const ROLES: [string, string][] = [
  ["Headteacher", "Agrees the setup with us, decides who gets access, and reviews attendance and results."],
  ["Administrator", "Keeps pupil records and class lists organized and up to date."],
  ["Teachers", "Take the register, enter marks and prepare comments for their own classes."],
];

const PREP = [
  "How many classes and pupils your school has",
  "Who would use the system: headteacher, administrators, teachers",
  "Which of records, attendance and results matter most first",
  "How you keep registers and marks today",
];

const FAQS: [string, string][] = [
  ["How long does setup take?", "It depends on your school’s size and which modules you choose. We agree a plan with you during the preparation step."],
  ["Can we start with just one module?", "Ask us about starting with the part that matters most to your school, such as attendance or results, and adding more later."],
  ["Who needs to be involved?", "Usually the headteacher or an administrator agrees the setup, then the teachers who will use ACS each day."],
  ["What about our existing records?", "Tell us what you keep today. We plan how to bring in pupil information with you during the preparation step."],
  ["Will teachers need training?", "Onboarding is part of getting started. Tell us about your team and we will discuss the support that fits."],
];

export default function AcsHowItWorks() {
  return (
    <div className={`min-h-screen bg-[#F7F8FA] pt-[env(safe-area-inset-top)] font-[family-name:var(--font-inter),system-ui,-apple-system,'Segoe_UI',sans-serif] text-[17px] font-medium leading-relaxed antialiased dark:bg-[#101C35] ${C.body}`}>
      <PageHero
        eyebrow="How it works"
        title="A thoughtful start for your school."
        lead="Getting started is a conversation first. Nothing is set up until we have agreed what your school needs. Here is what to expect at each step."
      />

      {/* Steps */}
      <section className={`border-t py-16 md:py-24 ${C.line}`}>
        <div className={`${wrap} grid gap-6`}>
          {STEPS.map((s, i) => (
            <article key={s.t} className={`grid gap-8 rounded-[24px] border p-7 md:grid-cols-[1.1fr_1fr_1fr] md:gap-10 md:p-10 ${C.line} ${C.surf}`}>
              <div>
                <span className={`grid size-10 place-items-center rounded-full text-base font-bold text-white ${C.dot}`}>{i + 1}</span>
                <h2 className={`mt-5 text-[length:clamp(26px,3vw,34px)] font-semibold leading-[1.1] tracking-[-0.03em] ${C.text}`}>{s.t}</h2>
                <p className="mt-3 text-[15px]">{s.d}</p>
              </div>
              <div>
                <h3 className={`mb-3 text-sm font-semibold ${C.text}`}>What happens</h3>
                <Bullets items={s.happens} className="text-[15px]" />
              </div>
              <div className={`rounded-2xl p-5 ${C.tint}`}>
                <h3 className={`mb-3 text-sm font-semibold ${C.text}`}>What you bring</h3>
                <Bullets items={s.bring} className="text-[15px]" />
              </div>
            </article>
          ))}
          <p className="mt-2 max-w-[62ch] text-[15px]">How long each step takes depends on your school’s size and which modules you choose. We agree a plan with you, so there are no surprises.</p>
        </div>
      </section>

      {/* Typical term (navy band) */}
      <section className="bg-[#101C35] py-16 text-[#B7C2DA] md:py-24">
        <div className={wrap}>
          <p className="mb-5 text-[15px] font-semibold text-[#7A9BFF]">Day to day</p>
          <h2 className="max-w-[20ch] text-[length:clamp(30px,4.4vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#F7F8FA]">A typical term with ACS.</h2>
          <div className="mt-14 grid border-t border-[#2A3A63] md:grid-cols-4">
            {TERM.map(([when, t, d]) => (
              <div key={t} className="border-b border-[#2A3A63] py-6 md:border-b-0 md:border-l md:py-7 md:pl-7 md:pr-6 md:first:border-l-0 md:first:pl-0">
                <span className="text-[13px] font-semibold text-[#7A9BFF]">{when}</span>
                <h3 className="mb-2.5 mt-2 text-xl font-semibold tracking-[-0.02em] text-[#F7F8FA]">{t}</h3>
                <p className="text-[15px]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section title="Everyone has a clear part." lead="Who does what" border={false}>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ROLES.map(([t, d]) => (
            <div key={t} className={`rounded-[18px] px-6 pb-7 pt-6 ${C.tint}`}>
              <h3 className={`mb-2 text-xl font-semibold tracking-[-0.02em] ${C.text}`}>{t}</h3>
              <p className="text-[15px]">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What is helpful to have in mind." lead="You do not need anything formal. A rough picture of your school is enough to start.">
        <Bullets items={PREP} className={`mt-10 max-w-[60ch] font-medium ${C.text}`} />
        <p className="mt-8 text-[15px]">Please do not include sensitive pupil information in an initial enquiry.</p>
      </Section>

      <Section title="Getting started, answered." lead="Questions">
        <Faq items={FAQS} />
      </Section>

      <CtaBand title="A more organized school starts with a conversation.">
        <a href="/contact" className={primary}>Request a walkthrough</a>
        <a href={WA("Hello ACS, I'd like a walkthrough")} className={ghost}>Message on WhatsApp</a>
      </CtaBand>
    </div>
  );
}