/**
 * Draft notice for the legal documents.
 *
 * The privacy policy and terms of use have not yet been reviewed by a
 * lawyer. They are published as drafts so the substance can be discussed,
 * and the notice is displayed on the page rather than buried in a
 * footnote. It must not be removed until the documents have been
 * reviewed and approved.
 */
export function DraftNotice({ document }: { document: string }) {
  return (
    <div
      role="note"
      className="mb-10 rounded-[10px] border border-brand-ring bg-brand-soft p-5"
    >
      <p className="t-eyebrow text-brand">Draft — not yet in force</p>
      <p className="mt-2 text-[14px] leading-6 text-ink">
        This {document} is a draft prepared to describe how ACS currently works. It has not yet been
        reviewed by a lawyer and is not a final, legally reviewed document. It is published here so
        the substance can be read and discussed. Do not rely on it as a statement of binding
        obligations until it has been reviewed and approved.
      </p>
    </div>
  )
}
