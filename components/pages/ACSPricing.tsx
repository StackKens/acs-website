import { C, PageHero, Section, Bullets, Faq, CtaBand, primary, ghost, shadow, wrap } from "@/components/acs/ui";

type Plan = { name: string; size: string; price: string; blurb: string; points: string[]; popular?: boolean };
const PLANS: Plan[] = [
  {
    name: "Starter", size: "Up to 200 pupils", price: "150,000",
    blurb: "Designed for smaller primary schools that need the essential tools for managing everyday school operations.",
    points: ["Pupil management & records", "Class & stream management", "Daily attendance roll call", "Exams & performance tracking", "Basic report summaries", "Dedicated school workspace", "AI-powered academic assistance"],
  },
  {
    name: "Growth", size: "201–500 pupils", price: "250,000", popular: true,
    blurb: "Designed for growing schools that need broader management, fee tracking, and reporting capabilities.",
    points: ["Everything in Starter", "Fees & payment tracking", "Teacher & staff allocations", "Official printable report cards", "Parent contacts & records", "Expanded term analytics", "AI-powered academic assistance"],
  },
  {
    name: "Professional", size: "501–1,000 pupils", price: "400,000",
    blurb: "Designed for larger schools that need advanced management, reporting, communication, and priority support.",
    points: ["Everything in Growth", "In-app notifications to parents", "Automated SMS notifications to parents (coming soon)", "Advanced finance & ledger reporting", "Role-based permissions & audit trails", "Priority onboarding & technical support", "Higher operational limits", "AI-powered academic assistance"],
  },
];

/* [feature, Starter, Growth, Professional] */
const COMPARE: { group: string; rows: [string, boolean, boolean, boolean][] }[] = [
  { group: "School management", rows: [["Pupil management & records", true, true, true], ["Class & stream management", true, true, true], ["Daily attendance roll call", true, true, true], ["Exams & performance tracking", true, true, true]] },
  { group: "Academics & reporting", rows: [["Basic report summaries", true, true, true], ["Official printable report cards", false, true, true], ["Expanded term analytics", false, true, true]] },
  { group: "Finance", rows: [["Fees & payment tracking", false, true, true]] },
  { group: "Staff & permissions", rows: [["Teacher & staff allocations", false, true, true], ["Role-based permissions & audit trails", false, false, true]] },
  { group: "Parents & communication", rows: [["Parent contacts & records", false, true, true], ["In-app notifications to parents", false, false, true], ["Automated SMS notifications to parents (coming soon)", false, false, true]] },
  { group: "Platform", rows: [["Dedicated school workspace", true, true, true], ["Advanced finance & ledger reporting", false, false, true], ["Higher operational limits", false, false, true], ["AI-powered academic assistance", true, true, true]] },
  { group: "Support", rows: [["Priority onboarding & technical support", false, false, true]] },
];

const KNOW: [string, string][] = [
  ["What is included", "Every plan includes the school workspace, pupil records, class and stream management, daily attendance, exams and performance tracking, report summaries and AI assistance for teachers. Higher plans add fee tracking, teaching allocations, printable report cards, parent records and communication."],
  ["Onboarding", "Our team helps you set up your school workspace and get started with ACS. Priority onboarding and technical support is included on the Professional plan."],
  ["Billing period", "Pricing is per academic term — one of the three main periods in the school year. The plan and your term invoices are visible in Settings ▸ Plan & Billing, and the ACS team handles payment and plan changes."],
  ["Total cost", "The price covers the school workspace for the term, for all the users and pupils within the plan’s range. There is no separate charge per pupil beyond the plan, and no separate charge for the parent portal."],
  ["Moving between plans", "Move to a higher plan as your school grows or as you need additional capabilities. We can discuss the best time to upgrade when your pupil count increases."],
];

const BILLING: [string, string][] = [
  ["Choose your plan", "Select the package that fits your school's size and requirements."],
  ["Set up your school", "Create your ACS school workspace and configure your school."],
  ["Use ACS", "Manage your pupils, staff, attendance, academic information and other supported operations."],
  ["Continue after the free period", "After the 2-month introductory offer, your school continues according to the selected plan's normal pricing."],
];

const FAQS: [string, string][] = [
  ["How much does ACS cost?", "ACS pricing is based on your school's size. Starter plan is UGX 150,000 per term for up to 200 pupils, Growth is UGX 250,000 per term for 201–500 pupils, and Professional is UGX 400,000 per term for 501–1,000 pupils. For schools with more than 1,000 pupils, contact our team for a custom plan."],
  ["What does \"per term\" mean?", "ACS pricing is billed per academic term. A term is typically one of the three main academic periods in the school year."],
  ["How does the 2-month free offer work?", "The first 20 schools to join ACS receive 2 months free on their selected plan. Our team will confirm eligibility and the next steps with you."],
  ["What happens when the 2 months end?", "After the 2-month introductory offer, your school continues on your selected plan at the normal per-term price."],
  ["Can our school change plans?", "Yes. As your school grows or your needs change, you can move to a higher plan. We can discuss the best time to upgrade when your pupil count increases or you need additional features."],
  ["What if our school has more than 1,000 pupils?", "Contact our team to discuss a custom plan that fits your school's size and specific requirements."],
  ["Can we get help setting up our school?", "Yes. Our team will help you set up your school workspace and get started with ACS during onboarding."],
  ["What can the ACS AI assistant help with?", "The AI assistant helps teachers create exercises, quizzes, revision materials, lesson-support resources, explanations and marking guides for primary education. It is designed to assist with preparation and routine academic tasks."],
  ["Does the AI replace teachers?", "No. The AI is designed to assist teachers with preparation and routine academic tasks. Teachers remain in control of reviewing and using the generated material in the classroom."],
  ["Which primary levels does the AI support?", "The AI is designed to support academic work across Primary 1 to Primary 7, helping teachers adapt material to different class levels and difficulty requirements."],
];

const Mark = ({ on }: { on: boolean }) =>
  on ? (
    <span aria-label="Included" className={`inline-grid size-6 place-items-center rounded-full text-sm font-bold text-white ${C.dot}`}>✓</span>
  ) : (
    <span aria-label="Not included" className="text-lg">—</span>
  );

export default function AcsPricing() {
  return (
    <div className={`min-h-screen bg-[#F7F8FA] pt-[env(safe-area-inset-top)] font-[family-name:var(--font-inter),system-ui,-apple-system,'Segoe_UI',sans-serif] text-[17px] font-medium leading-relaxed antialiased dark:bg-[#101C35] ${C.body}`}>
      <PageHero
        eyebrow="Pricing for your school"
        title="A clear conversation. No guesswork."
        lead="Ask about the modules your school needs, onboarding and the total cost before making a decision."
      />

      {/* Plans */}
      <Section title="A plan shaped around your school." lead="Three plans, priced by school size and billed per academic term. Tell us your pupil count and we will confirm the plan that fits.">
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-[24px] border p-8 ${C.surf} ${
                p.popular ? `border-[#3867F5] ring-1 ring-[#3867F5] dark:border-[#5B84FF] dark:ring-[#5B84FF] ${shadow}` : C.line
              }`}
            >
              {p.popular && <span className={`absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-semibold text-white ${C.dot}`}>Most popular</span>}
              <h3 className={`text-2xl font-semibold tracking-[-0.02em] ${C.text}`}>{p.name}</h3>
              <p className="text-sm">{p.size}</p>
              <p className="mt-6">
                <span className={`text-sm font-semibold ${C.text}`}>UGX </span>
                <span className={`text-5xl font-bold tabular-nums tracking-[-0.04em] ${C.text}`}>{p.price}</span>
                <span className="ml-1.5 text-sm">per term</span>
              </p>
              <p className="mt-4 text-[15px]">{p.blurb}</p>
              <Bullets items={p.points} className={`mt-6 flex-1 text-[15px] font-medium ${C.text}`} />
              <a href="/get-started" className={`mt-8 w-full ${p.popular ? primary : ghost}`}>Get Started</a>
            </article>
          ))}
        </div>
        <div className={`mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[20px] p-6 ${C.tint}`}>
          <div>
            <b className={`block ${C.text}`}>1,001+ pupils</b>
            <span className="text-[15px]">Need ACS for a larger school? Contact our team to discuss a plan that fits your school's size and requirements.</span>
          </div>
          <a href="/contact" className={ghost}>Talk to Us</a>
        </div>
        <p className={`mt-6 text-[15px] font-medium ${C.text}`}>The first 20 schools receive 2 months free on their selected plan, then continue at the normal per-term price.</p>
      </Section>

      {/* Compare */}
      <Section title="The same details, side by side." lead="Feature comparison for the Starter, Growth and Professional plans.">
        <div className={`mt-12 overflow-x-auto rounded-[20px] border ${C.line} ${C.surf}`}>
          <table className="w-full min-w-[680px] text-[15px]">
            <thead>
              <tr className={`border-b ${C.line} ${C.text}`}>
                <th scope="col" className="p-4 text-left font-semibold">Feature</th>
                {PLANS.map((p) => (
                  <th key={p.name} scope="col" className="p-4 text-center font-semibold">
                    {p.name}
                    <span className="block text-xs font-normal">{p.size}</span>
                  </th>
                ))}
              </tr>
            </thead>
            {COMPARE.map((g) => (
              <tbody key={g.group}>
                <tr className={C.tint}>
                  <th colSpan={4} scope="colgroup" className={`px-4 py-2.5 text-left text-[13px] font-semibold ${C.text}`}>{g.group}</th>
                </tr>
                {g.rows.map(([f, ...v]) => (
                  <tr key={f} className={`border-b ${C.line}`}>
                    <th scope="row" className={`p-4 text-left font-medium ${C.text}`}>{f}</th>
                    {v.map((on, i) => <td key={i} className="p-4 text-center"><Mark on={on} /></td>)}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </Section>

      {/* Good to know */}
      <Section title="What shapes the cost." lead="Good to know">
        <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
          {KNOW.map(([t, d], i) => (
            <div key={t} className={`border-t-2 pt-5 border-[#3867F5]`}>
              <span className={`text-[15px] font-bold tabular-nums ${C.blue}`}>0{i + 1}</span>
              <h3 className={`mb-2 mt-1 text-xl font-semibold tracking-[-0.02em] ${C.text}`}>{t}</h3>
              <p className="text-[15px]">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Billing steps (navy band) */}
      <section className="bg-[#101C35] py-16 text-[#B7C2DA] md:py-24">
        <div className={wrap}>
          <p className="mb-5 text-[15px] font-semibold text-[#7A9BFF]">How billing works</p>
          <h2 className="max-w-[20ch] text-[length:clamp(30px,4.4vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#F7F8FA]">From choosing a plan to your first term.</h2>
          <ol className="mt-14 grid gap-7 border-t border-[#2A3A63] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {BILLING.map(([t, d], i) => (
              <li key={t}>
                <span className="text-[15px] font-bold text-[#7A9BFF]">0{i + 1}</span>
                <h3 className="mb-2 mt-1.5 text-xl font-semibold tracking-[-0.02em] text-[#F7F8FA]">{t}</h3>
                <p className="text-[15px]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section title="Pricing questions, answered." lead="Questions" border={false}>
        <Faq items={FAQS} />
      </Section>

      <CtaBand title="Not sure which plan fits your school?">
        <a href="/contact" className={primary}>Talk to us</a>
      </CtaBand>
    </div>
  );
}