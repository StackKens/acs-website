import type { ReactNode } from "react";
import { Reveal } from "@/components/acs/reveal";

/* ---------- Brand tokens (VexelLabs palette) as inline Tailwind class strings ---------- */
export const C = {
  text: "text-[#101C35] dark:text-[#F7F8FA]",
  body: "text-[#667085] dark:text-[#A9B3C7]",
  surf: "bg-white dark:bg-[#16254A]",
  tint: "bg-[#EAF0FF] dark:bg-[#1B2D5A]",
  line: "border-[#E1E6F0] dark:border-[#243560]",
  blue: "text-[#3867F5] dark:text-[#5B84FF]",
  dot: "bg-[#3867F5] dark:bg-[#5B84FF]",
};
export const btn =
  "inline-flex h-12 items-center justify-center rounded-xl px-6 text-[15px] font-semibold transition active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3867F5]";
export const primary = `${btn} bg-[#3867F5] text-white hover:bg-[#2852D9] dark:bg-[#5B84FF] dark:hover:bg-[#7A9BFF]`;
export const ghost = `${btn} border ${C.line} ${C.surf} ${C.text} hover:border-[#3867F5]`;
export const h2 = `${C.text} text-[length:clamp(30px,4.4vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em]`;
export const wrap = "mx-auto max-w-[1160px] px-6";
export const shadow =
  "shadow-[0_1px_2px_rgba(16,28,53,.06),0_12px_24px_-8px_rgba(16,28,53,.10),0_40px_80px_-24px_rgba(16,28,53,.18)]";

export const WA = (m: string) => `https://wa.me/256775506426?text=${encodeURIComponent(m)}`;
export const EMAIL = "stackkens@gmail.com";
export const PHONE = "+256 755 038 100";

/* ---------- Building blocks ---------- */
export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-20 md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C9D5F5_1.2px,transparent_1.3px)] bg-[length:26px_26px] [mask-image:radial-gradient(70%_90%_at_80%_20%,#000,transparent)] dark:bg-[radial-gradient(#24386B_1.2px,transparent_1.3px)]"
      />
      <div className={`${wrap} relative`}>
        <Reveal>
          <p className={`mb-5 text-[15px] font-semibold ${C.blue}`}>{eyebrow}</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className={`${C.text} max-w-[18ch] text-[length:clamp(40px,6vw,76px)] font-bold leading-[.98] tracking-[-0.05em]`}>{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={240}>
            <p className="mt-7 max-w-[58ch] text-xl">{lead}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={320}>
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Section({ id, title, lead, border = true, children }: { id?: string; title?: string; lead?: string; border?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${border ? `border-t ${C.line}` : ""}`}>
      <div className={wrap}>
        {title && <h2 className={`${h2} max-w-[20ch]`}>{title}</h2>}
        {lead && <p className="mt-5 max-w-[58ch] text-lg">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function Bullets({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((s) => (
        <li key={s} className="flex items-start gap-3">
          <span className={`mt-2.5 size-2 flex-none rounded-full ${C.dot}`} />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className={`mt-10 border-t ${C.line}`}>
      {items.map(([q, a]) => (
        <details key={q} className={`group border-b py-5 ${C.line}`}>
          <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 text-[19px] font-semibold tracking-tight [&::-webkit-details-marker]:hidden ${C.text}`}>
            {q}
            <span className={`text-2xl leading-none transition-transform group-open:rotate-45 ${C.blue}`}>+</span>
          </summary>
          <p className="mt-3 max-w-[64ch]">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={`border-t py-16 md:py-28 ${C.line}`}>
      <div className={wrap}>
        <h2 className={`${h2} max-w-[20ch]`}>{title}</h2>
        <div className="mt-9 flex flex-wrap gap-3">{children}</div>
      </div>
    </section>
  );
}