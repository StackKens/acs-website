import { C, PageHero, CtaBand, primary, wrap } from "@/components/acs/ui";

/* Copy below is the current ACS About page, unchanged. */
const VALUES: [string, string, string][] = [
  ["Practical", "Made for primary schools", "Designed around how primary schools in Uganda run their day, from register to report card."],
  ["Clear", "Less to hunt for", "Information lives in one organized place instead of scattered books and files."],
  ["Careful", "Pupil information stays private", "Please keep sensitive pupil details out of first enquiries. We will agree what is needed during setup."],
];

export default function AcsAbout() {
  return (
    <div className={`min-h-screen bg-[#F7F8FA] pt-[env(safe-area-inset-top)] font-[family-name:var(--font-inter),system-ui,-apple-system,'Segoe_UI',sans-serif] text-[17px] font-medium leading-relaxed antialiased dark:bg-[#101C35] ${C.body}`}>
      <PageHero
        eyebrow="Starting with Uganda"
        title="Built around the work behind learning."
        lead="A well-run school depends on a great deal of work beyond the classroom. ACS is being developed to make that work more organized, starting with the practical needs of primary schools in Uganda."
      />

      {/* Statement band */}
      <section className="bg-[#101C35] py-20 text-[#B7C2DA] md:py-32">
        <div className={wrap}>
          <h2 className="max-w-[16ch] text-[length:clamp(36px,6vw,72px)] font-bold leading-[1] tracking-[-0.045em] text-[#F7F8FA]">
            Not a school website builder.
          </h2>
          <p className="mt-8 max-w-[34ch] text-[length:clamp(20px,2.4vw,28px)] leading-snug tracking-[-0.02em] text-[#B7C2DA]">
            A working environment for the records, routines and academic information your team manages every day.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className={`${wrap} grid gap-5 md:grid-cols-3`}>
          {VALUES.map(([tag, t, d]) => (
            <article key={tag} className={`flex flex-col rounded-[24px] border p-8 ${C.line} ${C.surf}`}>
              <span className={`text-[15px] font-semibold ${C.blue}`}>{tag}</span>
              <h3 className={`mb-3 mt-4 text-2xl font-semibold leading-[1.15] tracking-[-0.02em] ${C.text}`}>{t}</h3>
              <p className="text-[15px]">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="A more organized school starts with a conversation.">
        <a href="/contact" className={primary}>Get Started</a>
      </CtaBand>
    </div>
  );
}