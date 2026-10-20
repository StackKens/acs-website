import { PreviewNav, PreviewRow, PreviewShell } from './shell'

const navItems = ['Dashboard', 'Pupils', 'Attendance', 'Performance', 'Finance', 'Reports']

/**
 * ACS finance — fee structures, pupil ledger and receipts.
 *
 * Reproduces the real finance flow: a fee structure per class and term,
 * a live outstanding balance on each pupil account, and sequential
 * receipt numbers. Receipts are permanent records — a correction is an
 * audited reversal, never an edit.
 */
export function FinancePreview() {
  return (
    <PreviewShell
      active="Finance"
      caption="Fee collection and pupil ledger"
      note="sequential receipts, live balances"
    >
      <div className="flex">
        <PreviewNav items={navItems} active="Finance" />
        <div className="min-w-0 flex-1 p-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[13px] font-semibold text-ink">P6B · Term 1</p>
            <p className="text-[11px] text-copy">Fee structure</p>
          </div>

          <div className="mt-3">
            <PreviewRow label="Tuition fee" value="UGX 120,000" />
            <PreviewRow label="Registration" value="UGX 30,000" />
            <PreviewRow label="Library & materials" value="UGX 15,000" />
            <PreviewRow label="Total per term" value="UGX 165,000" emphasis />
          </div>

          <div className="mt-3 rounded-[8px] border border-line p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-copy">
              Pupil account — Achieng O.
            </p>
            <div className="mt-2">
              <PreviewRow label="Billed" value="UGX 165,000" />
              <PreviewRow label="Paid" value="UGX 165,000" />
              <PreviewRow label="Balance" value="UGX 0" emphasis />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-[8px] border border-line px-3 py-2.5">
            <span className="text-[11px] text-copy">Last receipt</span>
            <span className="text-[12px] font-semibold text-ink">RCP-2026-0418</span>
          </div>
        </div>
      </div>
    </PreviewShell>
  )
}
