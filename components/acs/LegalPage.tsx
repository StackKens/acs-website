import { C, PageHero, wrap } from "@/components/acs/ui";

export type LegalSection = { id: string; title: string; paras: string[] };

export default function LegalPage({
  eyebrow, title, intro, tocTitle, sections,
}: {
  eyebrow: string; title: string; intro: string; tocTitle: string; sections: LegalSection[];
}) {
  return (
    <div className={`min-h-screen bg-[#F7F8FA] pt-[env(safe-area-inset-top)] font-[family-name:var(--font-inter),system-ui,-apple-system,'Segoe_UI',sans-serif] text-[17px] font-medium leading-relaxed antialiased dark:bg-[#101C35] ${C.body}`}>
      <PageHero eyebrow={eyebrow} title={title} lead={intro} />
      <section className={`border-t pb-20 pt-12 md:pb-28 md:pt-16 ${C.line}`}>
        <div className={`${wrap} grid gap-10 md:grid-cols-[260px_1fr] md:gap-16`}>
          <aside className="md:sticky md:top-[calc(env(safe-area-inset-top)+96px)] md:self-start">
            <nav aria-label={tocTitle}>
              <h2 className={`mb-4 text-sm font-semibold ${C.text}`}>{tocTitle}</h2>
              <ul className={`grid gap-1 border-l ${C.line}`}>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[15px] transition hover:border-[#3867F5] hover:text-[#101C35] dark:hover:text-white">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <article className="max-w-[68ch]">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-[calc(env(safe-area-inset-top)+88px)] pb-12 last:pb-0">
                <h3 className={`mb-4 text-2xl font-semibold tracking-[-0.02em] ${C.text}`}>{s.title}</h3>
                <div className="grid gap-4">
                  {s.paras.map((p) => <p key={p}>{p}</p>)}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
}