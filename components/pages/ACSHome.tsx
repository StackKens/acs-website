"use client";
import { useEffect, useState } from "react";

/* ---------- Brand tokens as reusable Tailwind class strings (VexelLabs palette) ---------- */
const C = {
  text: "text-[#101C35] dark:text-[#F7F8FA]",
  body: "text-[#667085] dark:text-[#A9B3C7]",
  surf: "bg-white dark:bg-[#16254A]",
  tint: "bg-[#EAF0FF] dark:bg-[#1B2D5A]",
  line: "border-[#E1E6F0] dark:border-[#243560]",
  blue: "text-[#3867F5] dark:text-[#5B84FF]",
};
const btn =
  "inline-flex h-12 items-center justify-center rounded-xl px-6 text-[15px] font-semibold transition active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3867F5]";
const primary = `${btn} bg-[#3867F5] text-white hover:bg-[#2852D9] dark:bg-[#5B84FF] dark:hover:bg-[#7A9BFF]`;
const ghost = `${btn} border ${C.line} ${C.surf} ${C.text} hover:border-[#3867F5]`;
const h2 = `${C.text} max-w-[17ch] text-[length:clamp(30px,4.4vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em]`;
const lead = `${C.body} mt-5 max-w-[54ch]`;
const wrap = "mx-auto max-w-[1160px] px-6";
const shadow =
  "shadow-[0_1px_2px_rgba(16,28,53,.06),0_12px_24px_-8px_rgba(16,28,53,.10),0_40px_80px_-24px_rgba(16,28,53,.18)]";

const WA = (msg: string) => `https://wa.me/256775506426?text=${encodeURIComponent(msg)}`;
const SITE = "https://acs-website.onrender.com";

/* ---------- Content ---------- */
const NAMES = ["Aisha Nakato", "Brian Okello", "Grace Namutebi", "David Ssemakula", "Esther Achieng", "Isaac Mugisha", "Joan Apio", "Moses Kato"];
const BOOKS = [
  ["The register", "Who came in, class by class, every single day."],
  ["The marks book", "Every test and exam, copied again before each report card."],
  ["The fees ledger", "Who has paid, who owes, and how much is left to collect."],
];
const ROLES = [
  ["Headteacher", "The whole school at a glance: enrolment, attendance and results."],
  ["Bursar", "Fees collected, balances outstanding and the class-by-class picture."],
  ["Secretary", "Pupil records and class lists, kept accurate and easy to find."],
  ["Class teacher", "Their own register and marks, without wading through the rest."],
];
const STEPS = [
  ["Talk to us", "Tell us how your school works and what you want to organize."],
  ["Check the fit", "We go through features, pricing and onboarding together."],
  ["Prepare", "Agree the school information and staff accounts needed for setup."],
  ["Go live", "Start with the modules you chose and grow from there."],
];
const FAQS = [
  ["Who can see pupil information?", "Only staff you give an account to, and only what their role needs. Please don’t send sensitive pupil details in a first enquiry."],
  ["Do we have to switch everything at once?", "No. You agree the modules at the start and begin with those."],
  ["What do we need to get started?", "A list of your classes and staff, plus the pupil information you want in the system. We agree the rest during setup."],
  ["Can we see it before deciding?", "Yes. Request a walkthrough and we’ll show ACS with sample data for a school like yours."],
];

/* ---------- Hooks / small pieces ---------- */
function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setM(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return m;
}

function Reveal({ show, delay = 0, className = "", children }: { show: boolean; delay?: number; className?: string; children: React.ReactNode }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${show ? "translate-y-0 opacity-100" : "translate-y-3.5 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Live demo 1: attendance register ---------- */
function Register() {
  const [present, setPresent] = useState<boolean[]>(NAMES.map((_, i) => i !== 3 && i !== 6));
  const [saved, setSaved] = useState(false);
  const n = present.filter(Boolean).length;
  const pct = Math.round((n / NAMES.length) * 100);
  const toggle = (i: number) => {
    setPresent((p) => p.map((v, j) => (j === i ? !v : v)));
    setSaved(false);
  };

  return (
    <div className={`rounded-[22px] border p-5 ${C.line} ${C.surf} ${shadow}`}>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <b className={`text-[17px] tracking-tight ${C.text}`}>Primary 5 register</b>
        <span className={`text-[13px] ${C.body}`}>Sample data</span>
      </div>
      <p className={`mb-3.5 text-[13px] ${C.body}`}>Try it: tap a pupil to mark them absent.</p>

      <div className="grid gap-1.5">
        {NAMES.map((name, i) => (
          <button
            key={name}
            type="button"
            aria-pressed={present[i]}
            onClick={() => toggle(i)}
            className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2 text-left transition ${C.text} hover:border-[#3867F5] ${
              present[i] ? `border-transparent ${C.tint}` : `bg-transparent opacity-70 ${C.line}`
            }`}
          >
            <span className={`grid size-8 flex-none place-items-center rounded-full text-xs font-semibold ${C.surf}`}>
              {name.split(" ").map((p) => p[0]).join("")}
            </span>
            <span className={`flex-1 text-[15px] font-medium ${present[i] ? "" : "line-through"}`}>{name}</span>
            <span className={`text-[13px] font-semibold ${present[i] ? C.blue : C.body}`}>{present[i] ? "Present" : "Absent"}</span>
          </button>
        ))}
      </div>

      <div className="mx-0.5 mb-2.5 mt-4 flex items-end justify-between gap-4">
        <div>
          <strong className={`text-[44px] font-bold leading-none tabular-nums tracking-[-0.04em] ${C.text}`}>{n} of {NAMES.length}</strong>
          <div className={`text-sm ${C.body}`}>pupils present</div>
        </div>
        <span className={`text-sm tabular-nums ${C.body}`}>{pct}%</span>
      </div>
      <div className={`h-2 overflow-hidden rounded-full ${C.tint}`}>
        <div className="h-full rounded-full bg-[#3867F5] transition-[width] duration-500 ease-out dark:bg-[#5B84FF]" style={{ width: `${pct}%` }} />
      </div>
      <button
        type="button"
        onClick={() => setSaved(true)}
        className={`mt-4 w-full ${saved ? `${btn} ${C.tint} ${C.text}` : primary}`}
      >
        {saved ? "Register saved for today" : "Save register"}
      </button>
    </div>
  );
}

/* ---------- Live demo 2: report card ---------- */
type Marks = { e: number; m: number; c: number };
const SUBJECTS: [keyof Marks, string][] = [["e", "English"], ["m", "Maths"], ["c", "Science"]];

function comment(avg: number) {
  if (avg >= 80) return "An outstanding term. Keep challenging yourself with harder problems.";
  if (avg >= 65) return "A very good term with strong results. Steady effort will lift it further.";
  if (avg >= 50) return "A good term. Focus on the weaker subject to build confidence.";
  return "A difficult term. Extra support and practice will help you improve.";
}

function ReportCard() {
  const [v, setV] = useState<Marks>({ e: 78, m: 84, c: 81 });
  const total = v.e + v.m + v.c;
  const avg = Math.round(total / 3);

  return (
    <div className="grid items-center gap-12 md:grid-cols-[.9fr_1.1fr] md:gap-[72px]">
      <div>
        <h2 className={h2}>Enter marks once. The report card follows.</h2>
        <p className={lead}>Totals, averages and a first-draft comment are worked out for you, so teachers spend their time on the pupil, not the arithmetic.</p>
        <div className="mt-9 grid max-w-[360px] gap-3.5" aria-label="Adjust Aisha’s marks">
          {SUBJECTS.map(([k, label]) => (
            <label key={k} className={`grid grid-cols-[90px_1fr_44px] items-center gap-3.5 text-[15px] font-medium ${C.text}`}>
              {label}
              <input
                type="range"
                min={0}
                max={100}
                value={v[k]}
                onChange={(e) => setV({ ...v, [k]: +e.target.value })}
                className="h-7 w-full accent-[#3867F5]"
              />
              <output className="text-right font-semibold tabular-nums">{v[k]}</output>
            </label>
          ))}
        </div>
      </div>

      <div>
        <div aria-live="polite" className={`rounded-md border px-6 py-8 md:rotate-[1.2deg] md:px-10 md:py-9 ${C.line} ${C.surf} ${C.body} ${shadow}`}>
          <div className={`flex justify-between gap-4 border-b-2 pb-3.5 ${C.text} border-current`}>
            <div>
              <b className="block text-lg tracking-tight">Bright Future Primary</b>
              <span className={`text-[13px] font-normal ${C.body}`}>End of Term II, 2026</span>
            </div>
            <span className={`text-[13px] ${C.body}`}>Primary 5</span>
          </div>
          <dl className="mt-5">
            {SUBJECTS.map(([k, label]) => (
              <div key={k} className={`flex justify-between border-b py-2.5 text-base ${C.line}`}>
                <dt className={`font-medium ${C.text}`}>{label === "Maths" ? "Mathematics" : label}</dt>
                <dd className={`font-semibold tabular-nums ${C.text}`}>{v[k]}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex items-baseline justify-between">
            <div>
              <div className={`font-medium ${C.text}`}>Aisha Nakato</div>
              <span className="text-sm tabular-nums">Total {total} of 300</span>
            </div>
            <strong className={`text-[40px] font-bold leading-none tabular-nums tracking-[-0.04em] ${C.blue}`}>{avg}%</strong>
          </div>
          <p className="mt-4 min-h-[46px] text-[15px] italic">{comment(avg)}</p>
        </div>
        <p className={`mt-5 text-center text-[13px] ${C.body}`}>Illustrative report card. Sample pupil and marks.</p>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function AcsHome() {
  const mounted = useMounted();

  return (
    <div className={`min-h-screen bg-[#F7F8FA] pt-[env(safe-area-inset-top)] font-[family-name:var(--font-inter),system-ui,-apple-system,'Segoe_UI',sans-serif] text-[17px] leading-relaxed antialiased dark:bg-[#101C35] ${C.body}`}>
      <div id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pb-24 pt-12 md:pb-28 md:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C9D5F5_1.2px,transparent_1.3px)] bg-[length:26px_26px] [mask-image:radial-gradient(70%_80%_at_75%_35%,#000,transparent)] dark:bg-[radial-gradient(#24386B_1.2px,transparent_1.3px)]"
          />
          <div className={`${wrap} relative grid items-center gap-12 md:grid-cols-[1.05fr_.95fr] md:gap-16`}>
            <div>
              <Reveal show={mounted}>
                <h1 className={`${C.text} text-[length:clamp(44px,6.6vw,88px)] font-bold leading-[.98] tracking-[-0.05em]`}>Run your school from one screen.</h1>
              </Reveal>
              <Reveal show={mounted} delay={120}>
                <p className={`${C.body} mt-7 max-w-[54ch] text-xl`}>Academic Cloud System brings pupil records, daily attendance and term results together, built for primary schools in Uganda.</p>
              </Reveal>
              <Reveal show={mounted} delay={240} className="mt-9 flex flex-wrap gap-3">
                <a href={WA("Hello ACS, I'd like a walkthrough")} className={primary}>Chat on WhatsApp</a>
                <a href={`${SITE}/contact`} className={ghost}>Request a walkthrough</a>
              </Reveal>
              <Reveal show={mounted} delay={320}>
                <p className="mt-5 text-sm">Designed with pupil privacy in mind.</p>
              </Reveal>
            </div>
            <Reveal show={mounted} delay={200}>
              <Register />
            </Reveal>
          </div>
        </section>

        {/* Three books */}
        <section className="bg-[#101C35] py-20 text-[#B7C2DA] md:py-28">
          <div className={wrap}>
            <h2 className="max-w-[20ch] text-[length:clamp(30px,4.4vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#F7F8FA]">Every school keeps three books.</h2>
            <div className="mt-16 grid border-t border-[#2A3A63] md:grid-cols-3">
              {BOOKS.map(([t, d]) => (
                <div key={t} className="border-b border-[#2A3A63] py-6 md:border-b-0 md:border-l md:py-7 md:pl-8 md:pr-8 md:first:border-l-0 md:first:pl-0">
                  <h3 className="mb-2.5 text-2xl font-semibold tracking-[-0.02em] text-[#F7F8FA]">{t}</h3>
                  <p className="text-base">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-14 max-w-[26ch] text-[length:clamp(22px,3vw,32px)] font-semibold leading-[1.15] tracking-[-0.03em] text-[#F7F8FA]">
              ACS keeps all three <span className="text-[#7A9BFF]">in one place, in step with each other.</span>
            </p>
          </div>
        </section>

        {/* Report card demo */}
        <section id="report" className="py-20 md:py-28">
          <div className={wrap}><ReportCard /></div>
        </section>

        {/* Roles */}
        <section id="roles" className="pb-20 md:pb-28">
          <div className={wrap}>
            <h2 className={h2}>Everyone sees what their job needs.</h2>
            <p className={lead}>Staff get their own accounts, and each role opens onto its own view of the school.</p>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ROLES.map(([t, d]) => (
                <div key={t} className={`rounded-[18px] px-6 pb-7 pt-6 ${C.tint}`}>
                  <h3 className={`mb-2 text-[19px] font-semibold tracking-[-0.02em] ${C.text}`}>{t}</h3>
                  <p className="text-[15px]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="pb-20 md:pb-28">
          <div className={wrap}>
            <h2 className={h2}>From first chat to first register.</h2>
            <ol className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="border-t-2 border-[#3867F5] pt-[18px]">
                  <span className={`text-[15px] font-bold ${C.blue}`}>{i + 1}</span>
                  <h3 className={`mb-2 mt-1.5 text-xl font-semibold tracking-[-0.02em] ${C.text}`}>{t}</h3>
                  <p className="text-[15px]">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="pb-20 md:pb-28">
          <div className={wrap}>
            <div className={`grid items-center gap-12 rounded-[28px] px-7 py-10 md:grid-cols-[1.2fr_1fr] md:p-16 ${C.tint}`}>
              <div>
                <h2 className={h2}>Priced per pupil, billed per term.</h2>
                <p className={lead}>Your quote depends on your pupil numbers and the modules you need. Message us and we’ll send a clear figure for your school.</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href={WA("Hello ACS, please send a quote")} className={primary}>Ask for a quote</a>
                  <a href={`${SITE}/pricing`} className={ghost}>Pricing details</a>
                </div>
              </div>
              <ul className={`grid gap-3.5 font-medium ${C.text}`}>
                {["Pupil records and class lists", "Daily attendance", "Assessment marks and report cards", "Staff accounts with role-based access"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="size-2 flex-none rounded-full bg-[#3867F5] dark:bg-[#5B84FF]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="pb-20 md:pb-28">
          <div className={wrap}>
            <h2 className={h2}>Questions schools ask first.</h2>
            <div className={`mt-10 border-t ${C.line}`}>
              {FAQS.map(([q, a]) => (
                <details key={q} className={`group border-b py-5 ${C.line}`}>
                  <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 text-[19px] font-semibold tracking-tight [&::-webkit-details-marker]:hidden ${C.text}`}>
                    {q}
                    <span className={`text-2xl leading-none transition-transform group-open:rotate-45 ${C.blue}`}>+</span>
                  </summary>
                  <p className="mt-3 max-w-[62ch]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20 md:pb-28">
          <div className={wrap}>
            <h2 className={`${h2} max-w-[18ch]`}>See ACS with your school in mind.</h2>
            <p className={lead}>A short walkthrough is the quickest way to know if it fits.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={WA("Hello ACS, I'd like a walkthrough")} className={primary}>Chat on WhatsApp</a>
              <a href={`${SITE}/contact`} className={ghost}>Request a walkthrough</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}