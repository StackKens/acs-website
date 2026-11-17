"use client";
import { useState } from "react";

/* ---------- Brand tokens (same as AcsHome.tsx; move to a shared file if you like) ---------- */
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
const h2 = `${C.text} text-[length:clamp(30px,4.4vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em]`;
const wrap = "mx-auto max-w-[1160px] px-6";
const shadow =
  "shadow-[0_1px_2px_rgba(16,28,53,.06),0_12px_24px_-8px_rgba(16,28,53,.10),0_40px_80px_-24px_rgba(16,28,53,.18)]";

const WA = (m: string) => `https://wa.me/256775506426?text=${encodeURIComponent(m)}`;
const SITE = "https://acs-website.onrender.com";

/* ---------- Content (edit here) ----------
   Set soon: true on any module that isn't live yet. It shows a "Coming soon" badge.
   CONFIRM each module below matches what ACS ships today before publishing. */
type Mod = { id: "records" | "attendance" | "results" | "fees"; title: string; blurb: string; points: string[]; soon?: boolean };
const MODULES: Mod[] = [
  {
    id: "records",
    title: "Pupil records",
    blurb: "One organized record for every pupil, replacing files, exercise books and loose lists.",
    points: ["Pupil profiles and class lists", "Find any pupil in seconds", "Records kept consistent across the school", "Access limited to the staff who need it"],
  },
  {
    id: "attendance",
    title: "Daily attendance",
    blurb: "Teachers mark the register in class, and the office sees it straight away.",
    points: ["Mark present or absent in a few taps", "Class-by-class totals for the day", "No more tallying paper registers by hand", "A clear attendance history per pupil"],
  },
  {
    id: "results",
    title: "Marks and report cards",
    blurb: "Enter marks once and let the system do the arithmetic when reports are due.",
    points: ["Marks entered per class and subject", "Totals and averages worked out for you", "Report cards prepared from the same marks", "Less copying, fewer mistakes at term end"],
  },
  {
    id: "fees",
    title: "School fees",
    blurb: "See what has been collected and what is still owed, without digging through ledgers.",
    points: ["Collected versus outstanding at a glance", "Balances by class", "A single view for the bursar", "Built to sit alongside pupil records"],
  },
];

const ROLES: { name: string; sees: string[] }[] = [
  { name: "Headteacher", sees: ["School-wide overview of enrolment and attendance", "Results across all classes", "Fee collection summary", "Oversight of staff accounts"] },
  { name: "Bursar", sees: ["Fees collected and outstanding", "Balances by class", "Pupil fee status", "No access to marks editing"] },
  { name: "Secretary", sees: ["Add and update pupil records", "Manage class lists", "Look up pupil details quickly", "No access to fee figures"] },
  { name: "Class teacher", sees: ["Their own class register", "Marks for their own subjects and class", "Report cards for their pupils", "No view of other classes"] },
];

/* ---------- Mini product visuals (sample data) ---------- */
const NAMES = ["Aisha Nakato", "Brian Okello", "Grace Namutebi"];
const initials = (n: string) => n.split(" ").map((p) => p[0]).join("");

function Visual({ id }: { id: Mod["id"] }) {
  const cell = `rounded-xl ${C.tint}`;
  return (
    <div className={`rounded-[22px] border p-5 ${C.line} ${C.surf} ${shadow}`}>
      {id === "records" && (
        <div className="grid gap-2">
          {NAMES.map((n, i) => (
            <div key={n} className={`flex items-center gap-3 px-3 py-2.5 ${cell}`}>
              <span className={`grid size-9 place-items-center rounded-full text-xs font-semibold ${C.surf} ${C.text}`}>{initials(n)}</span>
              <span className={`flex-1 text-[15px] font-medium ${C.text}`}>{n}</span>
              <span className="text-[13px]">Primary 5</span>
              <span className="sr-only">{i}</span>
            </div>
          ))}
        </div>
      )}
      {id === "attendance" && (
        <div>
          <div className="mb-3 grid grid-cols-[1fr_repeat(5,28px)] gap-2 text-[12px]">
            <span />
            {["M", "T", "W", "T", "F"].map((d, i) => <span key={i} className="text-center">{d}</span>)}
          </div>
          {NAMES.map((n, r) => (
            <div key={n} className="mb-2 grid grid-cols-[1fr_repeat(5,28px)] items-center gap-2">
              <span className={`truncate text-[15px] font-medium ${C.text}`}>{n}</span>
              {[1, 1, r === 1 ? 0 : 1, 1, r === 2 ? 0 : 1].map((p, i) => (
                <span key={i} className={`mx-auto size-5 rounded-full ${p ? "bg-[#3867F5] dark:bg-[#5B84FF]" : `border-2 ${C.line}`}`} />
              ))}
            </div>
          ))}
        </div>
      )}
      {id === "results" && (
        <table className="w-full text-[15px]">
          <thead>
            <tr className={C.text}>
              {["Pupil", "Eng", "Math", "Sci"].map((h, i) => <th key={h} className={`pb-2.5 font-semibold ${i ? "text-right" : "text-left"}`}>{h}</th>)}
            </tr>
          </thead>
          <tbody className="tabular-nums">
            {[["Aisha", 78, 84, 81], ["Brian", 85, 76, 89], ["Grace", 72, 80, 75]].map(([n, ...m]) => (
              <tr key={n as string} className={`border-t ${C.line}`}>
                <td className={`py-2.5 font-medium ${C.text}`}>{n}</td>
                {m.map((x, i) => <td key={i} className={`py-2.5 text-right ${C.text}`}>{x}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {id === "fees" && (
        <div>
          <div className="text-sm">Collected this term</div>
          <strong className={`text-4xl font-bold tabular-nums tracking-[-0.04em] ${C.text}`}>UGX 38.4M <span className="text-base font-normal">of 52.0M</span></strong>
          <div className={`my-3 h-2.5 overflow-hidden rounded-full ${C.tint}`}>
            <div className="h-full w-[74%] rounded-full bg-[#3867F5] dark:bg-[#5B84FF]" />
          </div>
          <div className="text-sm">74% collected</div>
        </div>
      )}
      <p className="mt-4 text-[12px]">Sample data</p>
    </div>
  );
}

/* ---------- Role explorer ---------- */
function RoleExplorer() {
  const [i, setI] = useState(0);
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-[260px_1fr] md:gap-12">
      <div role="group" aria-label="Choose a role" className="flex gap-2 overflow-x-auto md:grid md:overflow-visible">
        {ROLES.map((r, k) => (
          <button
            key={r.name}
            type="button"
            aria-pressed={k === i}
            onClick={() => setI(k)}
            className={`whitespace-nowrap rounded-xl border px-4 py-3 text-left text-[15px] font-semibold transition ${
              k === i ? `border-transparent bg-[#3867F5] text-white dark:bg-[#5B84FF]` : `${C.line} ${C.surf} ${C.text} hover:border-[#3867F5]`
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>
      <div aria-live="polite" className={`rounded-[22px] p-7 md:p-9 ${C.tint}`}>
        <h3 className={`text-2xl font-semibold tracking-[-0.02em] ${C.text}`}>{ROLES[i].name}</h3>
        <p className="mt-1.5 text-[15px]">What this role sees and does</p>
        <ul className={`mt-6 grid gap-3.5 font-medium ${C.text}`}>
          {ROLES[i].sees.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="mt-2 size-2 flex-none rounded-full bg-[#3867F5] dark:bg-[#5B84FF]" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function AcsFeatures() {
  return (
    <div className={`min-h-screen bg-[#F7F8FA] pt-[env(safe-area-inset-top)] font-[family-name:var(--font-inter),system-ui,-apple-system,'Segoe_UI',sans-serif] text-[17px] leading-relaxed antialiased dark:bg-[#101C35] ${C.body}`}>
      <div>
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-14 md:pb-20 md:pt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C9D5F5_1.2px,transparent_1.3px)] bg-[length:26px_26px] [mask-image:radial-gradient(70%_90%_at_80%_20%,#000,transparent)] dark:bg-[radial-gradient(#24386B_1.2px,transparent_1.3px)]"
          />
          <div className={`${wrap} relative`}>
            <h1 className={`${C.text} max-w-[16ch] text-[length:clamp(42px,6.2vw,80px)] font-bold leading-[.98] tracking-[-0.05em]`}>
              Everything the school office runs on.
            </h1>
            <p className="mt-7 max-w-[56ch] text-xl">
              ACS covers the daily work of a primary school: who is enrolled, who came in, how they performed and what is owed. Start with what you need and add the rest when you’re ready.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={WA("Hello ACS, I'd like a walkthrough")} className={primary}>Chat on WhatsApp</a>
              <a href={`${SITE}/contact`} className={ghost}>Request a walkthrough</a>
            </div>
            <nav aria-label="Jump to a module" className="mt-12 flex flex-wrap gap-2">
              {MODULES.map((m) => (
                <a key={m.id} href={`#${m.id}`} className={`rounded-full border px-4 py-2 text-sm font-medium transition hover:border-[#3867F5] ${C.line} ${C.surf} ${C.text}`}>
                  {m.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Modules */}
        {MODULES.map((m, i) => (
          <section key={m.id} id={m.id} className={`border-t py-16 md:py-24 ${C.line}`}>
            <div className={`${wrap} grid items-center gap-10 md:grid-cols-2 md:gap-20`}>
              <div className={i % 2 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className={`text-[15px] font-bold tabular-nums ${C.blue}`}>0{i + 1}</span>
                  {m.soon && <span className={`rounded-full px-3 py-1 text-xs font-semibold ${C.tint} ${C.text}`}>Coming soon</span>}
                </div>
                <h2 className={`${h2} mt-3 max-w-[16ch]`}>{m.title}</h2>
                <p className="mt-5 max-w-[48ch] text-lg">{m.blurb}</p>
                <ul className={`mt-8 grid gap-3 font-medium ${C.text}`}>
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-2 size-2 flex-none rounded-full bg-[#3867F5] dark:bg-[#5B84FF]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 ? "md:order-1" : ""}>
                <Visual id={m.id} />
              </div>
            </div>
          </section>
        ))}

        {/* Roles */}
        <section id="roles" className={`border-t py-16 md:py-24 ${C.line}`}>
          <div className={wrap}>
            <h2 className={`${h2} max-w-[20ch]`}>The right view for every member of staff.</h2>
            <p className="mt-5 max-w-[56ch] text-lg">Each person signs in with their own account and sees only what their job needs. Pick a role to see how it works.</p>
            <RoleExplorer />
          </div>
        </section>

        {/* Privacy */}
        <section className="bg-[#101C35] py-16 text-[#B7C2DA] md:py-24">
          <div className={wrap}>
            <h2 className="max-w-[20ch] text-[length:clamp(30px,4.4vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#F7F8FA]">
              Pupil information stays with the people who should see it.
            </h2>
            <div className="mt-14 grid border-t border-[#2A3A63] md:grid-cols-3">
              {[
                ["Individual accounts", "Every staff member has their own login, so you always know who is using the system."],
                ["Role-based access", "Access follows the job, from headteacher to class teacher."],
                ["Built for schools", "Designed around primary-school records, with child privacy in mind."],
              ].map(([t, d]) => (
                <div key={t} className="border-b border-[#2A3A63] py-6 md:border-b-0 md:border-l md:py-7 md:pl-8 md:pr-8 md:first:border-l-0 md:first:pl-0">
                  <h3 className="mb-2.5 text-xl font-semibold tracking-[-0.02em] text-[#F7F8FA]">{t}</h3>
                  <p className="text-[15px]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-28">
          <div className={wrap}>
            <h2 className={`${h2} max-w-[18ch]`}>See these features with your school in mind.</h2>
            <p className="mt-5 max-w-[54ch]">A short walkthrough is the quickest way to know which modules to start with.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={WA("Hello ACS, I'd like a walkthrough")} className={primary}>Chat on WhatsApp</a>
              <a href={`${SITE}/pricing`} className={ghost}>See pricing</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}