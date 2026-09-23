import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

// Realistic Interface Previews for each feature area
//
// Palette (kept deliberately narrow for a professional look):
//   Panel border / dividers : #dfe3e7 / #e9ecef
//   Panel chrome bg         : #f8f9fa
//   Zebra row bg            : #fafbfc
//   Text primary            : #1c2733
//   Text secondary          : #5b6b78
//   Text tertiary / labels  : #8a97a3
//   Accent (links, actions) : #2c4a73   <-- the only "color" used, sparingly
//   Attention / needs-action: #6b3b3b text on #f4efef bg, border #e4d8d8
// Status is communicated primarily through label + weight, not a rainbow of badges.

function PupilRegistryPreview() {
  return (
    <div className="overflow-hidden rounded-md border border-[#dfe3e7] bg-white shadow-[0_1px_2px_rgba(20,35,55,0.03)]">
      {/* Panel Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9ecef] bg-[#f8f9fa] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#1c2733]">Pupil Registry</span>
          <span className="text-xs text-[#8a97a3]">/</span>
          <span className="text-xs text-[#5b6b78]">Primary 5 East</span>
        </div>
        <span className="rounded border border-[#dfe3e7] bg-white px-2 py-0.5 text-[10px] font-medium text-[#5b6b78]">
          64 Enrolled
        </span>
      </div>

      {/* Filter / Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#edf0f2] px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2 text-[#8a97a3]">
          <span className="text-[11px]">Filter:</span>
          <span className="rounded bg-[#f1f3f5] px-2 py-0.5 text-[11px] font-medium text-[#3a4753]">Class: P.5</span>
          <span className="rounded bg-[#f1f3f5] px-2 py-0.5 text-[11px] font-medium text-[#3a4753]">Stream: East</span>
        </div>
        <span className="text-[11px] text-[#8a97a3]">Term 2, 2026</span>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#edf0f2] bg-[#fafbfc] text-[10px] font-semibold uppercase tracking-wider text-[#8a97a3]">
              <th scope="col" className="px-4 py-2.5 font-medium">Adm No</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Pupil Name</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Gender</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Guardian Contact</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Fee Ledger</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f2f4f6] text-[#3a4753]">
            <tr>
              <td className="px-4 py-2.5 font-mono text-[11px] text-[#8a97a3]">ACS-2024-0082</td>
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Nakato Grace</td>
              <td className="px-4 py-2.5 text-[#5b6b78]">Female</td>
              <td className="px-4 py-2.5 text-[#5b6b78]">S. Namubiru · 0772 458 190</td>
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Clear</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Active</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2.5 font-mono text-[11px] text-[#8a97a3]">ACS-2024-0095</td>
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Kigozi Kevin</td>
              <td className="px-4 py-2.5 text-[#5b6b78]">Male</td>
              <td className="px-4 py-2.5 text-[#5b6b78]">J. Kigozi · 0751 220 844</td>
              <td className="px-4 py-2.5 font-medium text-[#6b3b3b]">Partial</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Active</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 font-mono text-[11px] text-[#8a97a3]">ACS-2024-0114</td>
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Okello Brian</td>
              <td className="px-4 py-2.5 text-[#5b6b78]">Male</td>
              <td className="px-4 py-2.5 text-[#5b6b78]">D. Okello · 0782 901 341</td>
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Clear</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Active</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2.5 font-mono text-[11px] text-[#8a97a3]">ACS-2024-0140</td>
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Atuhaire Brenda</td>
              <td className="px-4 py-2.5 text-[#5b6b78]">Female</td>
              <td className="px-4 py-2.5 text-[#5b6b78]">A. Kemigisha · 0703 118 765</td>
              <td className="px-4 py-2.5 font-medium text-[#6b3b3b]">Due</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Active</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Strip */}
      <div className="flex items-center justify-between border-t border-[#edf0f2] bg-[#f8f9fa] px-4 py-2.5 text-[11px] text-[#8a97a3]">
        <span>Showing 4 of 64 learners in Primary 5 East</span>
        <span className="font-medium text-[#2c4a73]">Export CSV</span>
      </div>
    </div>
  )
}

function FeesAccountsPreview() {
  return (
    <div className="overflow-hidden rounded-md border border-[#dfe3e7] bg-white shadow-[0_1px_2px_rgba(20,35,55,0.03)]">
      {/* Panel Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9ecef] bg-[#f8f9fa] px-4 py-3">
        <div>
          <p className="text-xs font-semibold text-[#1c2733]">Pupil Fee Ledger · Term 2, 2026</p>
          <p className="text-[11px] text-[#8a97a3]">Kigozi Kevin · Primary 5 West · Adm: ACS-2024-0095</p>
        </div>
        <span className="rounded border border-[#e4d8d8] bg-[#f4efef] px-2 py-0.5 text-[10px] font-medium text-[#6b3b3b]">
          Balance Pending
        </span>
      </div>

      {/* Account Metric Summary */}
      <div className="grid grid-cols-3 divide-x divide-[#edf0f2] border-b border-[#edf0f2] bg-[#fafbfc] p-3 text-center">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#8a97a3]">Total Invoiced</p>
          <p className="mt-1 text-sm font-semibold text-[#1c2733]">UGX 480,000</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#8a97a3]">Total Paid</p>
          <p className="mt-1 text-sm font-semibold text-[#1c2733]">UGX 320,000</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#8a97a3]">Outstanding</p>
          <p className="mt-1 text-sm font-semibold text-[#6b3b3b]">UGX 160,000</p>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#edf0f2] bg-[#fafbfc] text-[10px] font-semibold uppercase tracking-wider text-[#8a97a3]">
              <th scope="col" className="px-4 py-2 font-medium">Date</th>
              <th scope="col" className="px-4 py-2 font-medium">Item / Transaction</th>
              <th scope="col" className="px-4 py-2 font-medium">Reference</th>
              <th scope="col" className="px-4 py-2 text-right font-medium">Billed</th>
              <th scope="col" className="px-4 py-2 text-right font-medium">Paid</th>
              <th scope="col" className="px-4 py-2 text-right font-medium">Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f2f4f6] text-[#3a4753]">
            <tr>
              <td className="px-4 py-2 text-[11px] text-[#5b6b78]">12 May 2026</td>
              <td className="px-4 py-2 text-[#1c2733]">Term 2 Tuition Fee</td>
              <td className="px-4 py-2 font-mono text-[10px] text-[#8a97a3]">INV-2026-T2</td>
              <td className="px-4 py-2 text-right">420,000</td>
              <td className="px-4 py-2 text-right text-[#8a97a3]">—</td>
              <td className="px-4 py-2 text-right font-medium">420,000</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2 text-[11px] text-[#5b6b78]">12 May 2026</td>
              <td className="px-4 py-2 text-[#1c2733]">Development Levy</td>
              <td className="px-4 py-2 font-mono text-[10px] text-[#8a97a3]">INV-2026-T2</td>
              <td className="px-4 py-2 text-right">60,000</td>
              <td className="px-4 py-2 text-right text-[#8a97a3]">—</td>
              <td className="px-4 py-2 text-right font-medium">480,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-[11px] text-[#5b6b78]">18 May 2026</td>
              <td className="px-4 py-2 text-[#1c2733]">Stanbic Bank Deposit</td>
              <td className="px-4 py-2 font-mono text-[10px] text-[#2c4a73]">REC-1049</td>
              <td className="px-4 py-2 text-right text-[#8a97a3]">—</td>
              <td className="px-4 py-2 text-right font-medium">200,000</td>
              <td className="px-4 py-2 text-right font-medium">280,000</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2 text-[11px] text-[#5b6b78]">04 Jul 2026</td>
              <td className="px-4 py-2 text-[#1c2733]">MTN Mobile Money Slip</td>
              <td className="px-4 py-2 font-mono text-[10px] text-[#2c4a73]">REC-1182</td>
              <td className="px-4 py-2 text-right text-[#8a97a3]">—</td>
              <td className="px-4 py-2 text-right font-medium">120,000</td>
              <td className="px-4 py-2 text-right font-medium text-[#6b3b3b]">160,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Strip */}
      <div className="flex items-center justify-between border-t border-[#edf0f2] bg-[#f8f9fa] px-4 py-2.5 text-[11px] text-[#8a97a3]">
        <span>Verified by Finance Office</span>
        <div className="flex gap-3">
          <span className="cursor-pointer font-medium text-[#2c4a73]">Print Slip</span>
          <span className="cursor-pointer font-medium text-[#2c4a73]">Record Payment</span>
        </div>
      </div>
    </div>
  )
}

function AttendancePreview() {
  return (
    <div className="overflow-hidden rounded-md border border-[#dfe3e7] bg-white shadow-[0_1px_2px_rgba(20,35,55,0.03)]">
      {/* Panel Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9ecef] bg-[#f8f9fa] px-4 py-3">
        <div>
          <p className="text-xs font-semibold text-[#1c2733]">Daily Session Roll Call</p>
          <p className="text-[11px] text-[#8a97a3]">Primary 4 East · Wednesday, 23 Sept 2026</p>
        </div>
        <span className="rounded border border-[#dfe3e7] bg-white px-2 py-0.5 text-[10px] font-medium text-[#5b6b78]">
          Morning Session · Finalized
        </span>
      </div>

      {/* Daily Stats Summary */}
      <div className="grid grid-cols-4 divide-x divide-[#edf0f2] border-b border-[#edf0f2] bg-[#fafbfc] p-3 text-center">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#8a97a3]">Enrolled</p>
          <p className="mt-1 text-sm font-semibold text-[#1c2733]">52</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#8a97a3]">Present</p>
          <p className="mt-1 text-sm font-semibold text-[#1c2733]">49 (94.2%)</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#8a97a3]">Absent</p>
          <p className="mt-1 text-sm font-semibold text-[#6b3b3b]">2</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#8a97a3]">Excused</p>
          <p className="mt-1 text-sm font-semibold text-[#5b6b78]">1</p>
        </div>
      </div>

      {/* Roster Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#edf0f2] bg-[#fafbfc] text-[10px] font-semibold uppercase tracking-wider text-[#8a97a3]">
              <th scope="col" className="px-4 py-2 font-medium">Pupil Name</th>
              <th scope="col" className="px-4 py-2 font-medium">Status</th>
              <th scope="col" className="px-4 py-2 font-medium">Session Check</th>
              <th scope="col" className="px-4 py-2 font-medium">Remark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f2f4f6] text-[#3a4753]">
            <tr>
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Babirye Faith</td>
              <td className="px-4 py-2.5 text-[11px] font-medium text-[#1c2733]">Present</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">07:42 AM · On time</td>
              <td className="px-4 py-2.5 text-[11px] text-[#8a97a3]">—</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Kato Denis</td>
              <td className="px-4 py-2.5 text-[11px] font-medium text-[#1c2733]">Present</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">07:50 AM · On time</td>
              <td className="px-4 py-2.5 text-[11px] text-[#8a97a3]">—</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Mukasa Joshua</td>
              <td className="px-4 py-2.5 text-[11px] font-medium text-[#6b3b3b]">Absent</td>
              <td className="px-4 py-2.5 text-[11px] text-[#6b3b3b]">Unrecorded</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Unnotified morning absence</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2.5 font-medium text-[#1c2733]">Nansubuga Joan</td>
              <td className="px-4 py-2.5 text-[11px] font-medium text-[#5b6b78]">Excused</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Medical leave</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Sick bay notification logged</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Strip */}
      <div className="flex items-center justify-between border-t border-[#edf0f2] bg-[#f8f9fa] px-4 py-2.5 text-[11px] text-[#8a97a3]">
        <span>Recorded by: Tr. Agnes N. at 08:15 AM</span>
        <span>Term to date average: <strong className="text-[#1c2733]">95.8%</strong></span>
      </div>
    </div>
  )
}

function ExamsPerformancePreview() {
  return (
    <div className="overflow-hidden rounded-md border border-[#dfe3e7] bg-white shadow-[0_1px_2px_rgba(20,35,55,0.03)]">
      {/* Panel Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9ecef] bg-[#f8f9fa] px-4 py-3">
        <div>
          <p className="text-xs font-semibold text-[#1c2733]">Class Assessment Sheet</p>
          <p className="text-[11px] text-[#8a97a3]">Primary 6 · Term 2 Mid-Term Examination</p>
        </div>
        <span className="rounded border border-[#dfe3e7] bg-white px-2 py-0.5 text-[10px] font-medium text-[#5b6b78]">
          4 Subjects Standard
        </span>
      </div>

      {/* Marks Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#edf0f2] bg-[#fafbfc] text-[10px] font-semibold uppercase tracking-wider text-[#8a97a3]">
              <th scope="col" className="px-4 py-2.5 font-medium">Pupil Name</th>
              <th scope="col" className="px-3 py-2.5 text-center font-medium">ENG</th>
              <th scope="col" className="px-3 py-2.5 text-center font-medium">MTC</th>
              <th scope="col" className="px-3 py-2.5 text-center font-medium">SCI</th>
              <th scope="col" className="px-3 py-2.5 text-center font-medium">SST</th>
              <th scope="col" className="px-3 py-2.5 text-center font-medium">Total</th>
              <th scope="col" className="px-3 py-2.5 text-center font-medium">Agg</th>
              <th scope="col" className="px-4 py-2.5 text-right font-medium">Division</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f2f4f6] text-[#3a4753]">
            <tr>
              <td className="px-4 py-2 font-medium text-[#1c2733]">Mugisha David</td>
              <td className="px-3 py-2 text-center text-[#1c2733]">84 <span className="text-[10px] text-[#8a97a3] font-medium">D1</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">88 <span className="text-[10px] text-[#8a97a3] font-medium">D1</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">76 <span className="text-[10px] text-[#8a97a3] font-medium">D2</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">80 <span className="text-[10px] text-[#8a97a3] font-medium">D1</span></td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">328</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">5</td>
              <td className="px-4 py-2 text-right font-semibold text-[#1c2733]">Div 1</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2 font-medium text-[#1c2733]">Akello Patricia</td>
              <td className="px-3 py-2 text-center text-[#1c2733]">78 <span className="text-[10px] text-[#8a97a3] font-medium">D2</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">82 <span className="text-[10px] text-[#8a97a3] font-medium">D1</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">84 <span className="text-[10px] text-[#8a97a3] font-medium">D1</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">74 <span className="text-[10px] text-[#8a97a3] font-medium">D2</span></td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">318</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">6</td>
              <td className="px-4 py-2 text-right font-semibold text-[#1c2733]">Div 1</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-[#1c2733]">Ssemwogerere Paul</td>
              <td className="px-3 py-2 text-center text-[#1c2733]">68 <span className="text-[10px] text-[#8a97a3] font-medium">C3</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">72 <span className="text-[10px] text-[#8a97a3] font-medium">D2</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">65 <span className="text-[10px] text-[#8a97a3] font-medium">C4</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">70 <span className="text-[10px] text-[#8a97a3] font-medium">D2</span></td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">275</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">11</td>
              <td className="px-4 py-2 text-right font-semibold text-[#5b6b78]">Div 2</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2 font-medium text-[#1c2733]">Nalubega Prossy</td>
              <td className="px-3 py-2 text-center text-[#1c2733]">58 <span className="text-[10px] text-[#8a97a3] font-medium">C5</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">64 <span className="text-[10px] text-[#8a97a3] font-medium">C4</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">62 <span className="text-[10px] text-[#8a97a3] font-medium">C4</span></td>
              <td className="px-3 py-2 text-center text-[#1c2733]">59 <span className="text-[10px] text-[#8a97a3] font-medium">C5</span></td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">243</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">18</td>
              <td className="px-4 py-2 text-right font-semibold text-[#8a97a3]">Div 3</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Aggregate Statistics Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#edf0f2] bg-[#f8f9fa] px-4 py-2.5 text-[11px] text-[#8a97a3]">
        <span>Class Average: <strong className="text-[#1c2733]">71.4%</strong></span>
        <div className="flex gap-4">
          <span>Div 1: <strong className="text-[#1c2733]">42%</strong></span>
          <span>Div 2: <strong className="text-[#1c2733]">45%</strong></span>
          <span>Div 3: <strong className="text-[#1c2733]">13%</strong></span>
        </div>
      </div>
    </div>
  )
}

function ReportCardsPreview() {
  return (
    <div className="overflow-hidden rounded-md border border-[#dfe3e7] bg-white shadow-[0_1px_2px_rgba(20,35,55,0.03)]">
      {/* Official Document Banner */}
      <div className="border-b border-[#e9ecef] bg-[#f8f9fa] p-4 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a97a3]">Official Academic Report Form</p>
        <p className="mt-1 text-sm font-semibold text-[#1c2733]">GREENHILL ACADEMY · TERM 2, 2026</p>
      </div>

      {/* Pupil Metadata Ribbon */}
      <div className="grid grid-cols-2 gap-2 border-b border-[#edf0f2] bg-[#fafbfc] p-3 text-xs sm:grid-cols-4">
        <div>
          <span className="text-[10px] text-[#8a97a3]">Learner Name:</span>
          <p className="font-semibold text-[#1c2733]">Nakato Grace</p>
        </div>
        <div>
          <span className="text-[10px] text-[#8a97a3]">Class & Stream:</span>
          <p className="font-medium text-[#3a4753]">Primary 5 East</p>
        </div>
        <div>
          <span className="text-[10px] text-[#8a97a3]">Class Position:</span>
          <p className="font-semibold text-[#1c2733]">4th of 64</p>
        </div>
        <div>
          <span className="text-[10px] text-[#8a97a3]">Division Award:</span>
          <p className="font-semibold text-[#1c2733]">Division 1 (Agg 6)</p>
        </div>
      </div>

      {/* Subjects Assessment Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#edf0f2] bg-[#fafbfc] text-[10px] font-semibold uppercase tracking-wider text-[#8a97a3]">
              <th scope="col" className="px-4 py-2 font-medium">Subject</th>
              <th scope="col" className="px-3 py-2 text-center font-medium">BOT (20%)</th>
              <th scope="col" className="px-3 py-2 text-center font-medium">MOT (30%)</th>
              <th scope="col" className="px-3 py-2 text-center font-medium">EOT (50%)</th>
              <th scope="col" className="px-3 py-2 text-center font-medium">Final</th>
              <th scope="col" className="px-3 py-2 text-center font-medium">Grade</th>
              <th scope="col" className="px-4 py-2 font-medium">Teacher Remark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f2f4f6] text-[#3a4753]">
            <tr>
              <td className="px-4 py-2 font-medium text-[#1c2733]">English Language</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">80</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">78</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">84</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">81%</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">D1</td>
              <td className="px-4 py-2 text-[11px] text-[#5b6b78]">Fluent reading, sound grammatical execution</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2 font-medium text-[#1c2733]">Mathematics</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">74</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">82</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">86</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">82%</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">D1</td>
              <td className="px-4 py-2 text-[11px] text-[#5b6b78]">Strong numerical analysis and geometry mastery</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-[#1c2733]">Integrated Science</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">82</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">76</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">78</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">78%</td>
              <td className="px-3 py-2 text-center font-semibold text-[#5b6b78]">D2</td>
              <td className="px-4 py-2 text-[11px] text-[#5b6b78]">Clear grasp of human body systems and flora</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2 font-medium text-[#1c2733]">Social Studies</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">78</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">80</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">82</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">81%</td>
              <td className="px-3 py-2 text-center font-semibold text-[#1c2733]">D1</td>
              <td className="px-4 py-2 text-[11px] text-[#5b6b78]">Very active in community and geography studies</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Remarks & Sign-off Box */}
      <div className="border-t border-[#edf0f2] bg-[#fafbfc] p-3 text-xs">
        <p className="text-[11px] text-[#5b6b78]">
          <strong>Class Teacher Remark:</strong> &ldquo;Grace is an attentive, disciplined learner who consistently excels.&rdquo;
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#edf0f2] pt-2 text-[11px]">
          <span className="font-medium text-[#1c2733]">Approved & Digitally Endorsed by Headteacher</span>
          <span className="font-medium text-[#2c4a73]">Download PDF Form</span>
        </div>
      </div>
    </div>
  )
}

function SMSCommunicationPreview() {
  return (
    <div className="overflow-hidden rounded-md border border-[#dfe3e7] bg-white shadow-[0_1px_2px_rgba(20,35,55,0.03)]">
      {/* Panel Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9ecef] bg-[#f8f9fa] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#1c2733]">SMS Broadcast Center</span>
          <span className="text-xs text-[#8a97a3]">/</span>
          <span className="text-xs text-[#5b6b78]">Sender ID: ACS-SCHOOL</span>
        </div>
        <span className="rounded border border-[#dfe3e7] bg-white px-2 py-0.5 text-[10px] font-medium text-[#5b6b78]">
          Credits: 3,450
        </span>
      </div>

      {/* Target & Compose Preview */}
      <div className="border-b border-[#edf0f2] p-4 text-xs">
        <div className="flex items-center justify-between text-[#8a97a3]">
          <span>Recipient Target:</span>
          <span className="font-medium text-[#3a4753]">All Primary 7 Guardians (118 numbers)</span>
        </div>
        <div className="mt-2.5 rounded border border-[#e9ecef] bg-[#fafbfc] p-3 text-[#3a4753]">
          <p className="font-mono text-[11px] leading-relaxed text-[#1c2733]">
            &ldquo;Dear Parent, P.7 Mock Exam report cards are ready. Term 2 balance for &#123;PupilName&#125; is UGX &#123;Balance&#125;. Please clear at school by Friday 25th Sept. Admin.&rdquo;
          </p>
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-[#8a97a3]">
          <span>Length: 146 / 160 characters (1 SMS per recipient)</span>
          <span className="text-[#5b6b78]">Dynamic tags verified</span>
        </div>
      </div>

      {/* Delivery Log Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#edf0f2] bg-[#fafbfc] text-[10px] font-semibold uppercase tracking-wider text-[#8a97a3]">
              <th scope="col" className="px-4 py-2 font-medium">Broadcast Title</th>
              <th scope="col" className="px-3 py-2 font-medium">Target</th>
              <th scope="col" className="px-3 py-2 text-center font-medium">Sent</th>
              <th scope="col" className="px-3 py-2 text-center font-medium">Delivered</th>
              <th scope="col" className="px-4 py-2 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f2f4f6] text-[#3a4753]">
            <tr>
              <td className="px-4 py-2 font-medium text-[#1c2733]">P.7 Mock Reports Notice</td>
              <td className="px-3 py-2 text-[#5b6b78]">P.7 Guardians</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">118</td>
              <td className="px-3 py-2 text-center font-medium text-[#1c2733]">116 (98.3%)</td>
              <td className="px-4 py-2 text-right text-[11px] font-medium text-[#1c2733]">Delivered</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2 font-medium text-[#1c2733]">Visitation Day Reminder</td>
              <td className="px-3 py-2 text-[#5b6b78]">Whole School</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">420</td>
              <td className="px-3 py-2 text-center font-medium text-[#1c2733]">418 (99.5%)</td>
              <td className="px-4 py-2 text-right text-[11px] font-medium text-[#1c2733]">Delivered</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-[#1c2733]">Term 2 Fee Clearance Alert</td>
              <td className="px-3 py-2 text-[#5b6b78]">Defaulters List</td>
              <td className="px-3 py-2 text-center text-[#5b6b78]">84</td>
              <td className="px-3 py-2 text-center font-medium text-[#1c2733]">84 (100%)</td>
              <td className="px-4 py-2 text-right text-[11px] font-medium text-[#1c2733]">Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Strip */}
      <div className="flex items-center justify-between border-t border-[#edf0f2] bg-[#f8f9fa] px-4 py-2.5 text-[11px] text-[#8a97a3]">
        <span>Connected to national SMS gateway</span>
        <span className="font-medium text-[#2c4a73]">Dispatch History →</span>
      </div>
    </div>
  )
}

function StaffRolesPreview() {
  return (
    <div className="overflow-hidden rounded-md border border-[#dfe3e7] bg-white shadow-[0_1px_2px_rgba(20,35,55,0.03)]">
      {/* Panel Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9ecef] bg-[#f8f9fa] px-4 py-3">
        <div>
          <p className="text-xs font-semibold text-[#1c2733]">Staff Directory & System Access</p>
          <p className="text-[11px] text-[#8a97a3]">Role-based permissions & teaching assignments</p>
        </div>
        <span className="rounded border border-[#dfe3e7] bg-white px-2 py-0.5 text-[10px] font-medium text-[#5b6b78]">
          24 Active Accounts
        </span>
      </div>

      {/* Staff Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#edf0f2] bg-[#fafbfc] text-[10px] font-semibold uppercase tracking-wider text-[#8a97a3]">
              <th scope="col" className="px-4 py-2.5 font-medium">Staff Member</th>
              <th scope="col" className="px-3 py-2.5 font-medium">System Role</th>
              <th scope="col" className="px-3 py-2.5 font-medium">Allocated Class</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Operational Scope</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f2f4f6] text-[#3a4753]">
            <tr>
              <td className="px-4 py-2.5">
                <p className="font-medium text-[#1c2733]">Richard Mpagi</p>
                <p className="text-[10px] text-[#8a97a3]">Headteacher · ID: ST-001</p>
              </td>
              <td className="px-3 py-2.5">
                <span className="rounded border border-[#dfe3e7] bg-[#f1f3f5] px-1.5 py-0.5 text-[10px] font-semibold text-[#1c2733]">
                  Administrator
                </span>
              </td>
              <td className="px-3 py-2.5 text-[#5b6b78]">School-wide</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Full administrative & report approval rights</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2.5">
                <p className="font-medium text-[#1c2733]">Rose Namaganda</p>
                <p className="text-[10px] text-[#8a97a3]">Bursar · ID: ST-004</p>
              </td>
              <td className="px-3 py-2.5">
                <span className="rounded border border-[#dfe3e7] bg-[#f1f3f5] px-1.5 py-0.5 text-[10px] font-semibold text-[#1c2733]">
                  Bursar
                </span>
              </td>
              <td className="px-3 py-2.5 text-[#5b6b78]">Finance Office</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Fee structures, ledger records, receipts only</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">
                <p className="font-medium text-[#1c2733]">Denis Kato</p>
                <p className="text-[10px] text-[#8a97a3]">Senior Teacher · ID: ST-018</p>
              </td>
              <td className="px-3 py-2.5">
                <span className="rounded border border-[#dfe3e7] bg-[#f1f3f5] px-1.5 py-0.5 text-[10px] font-semibold text-[#1c2733]">
                  Class Teacher
                </span>
              </td>
              <td className="px-3 py-2.5 text-[#5b6b78]">Primary 7 Red</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Roll call & mark compilation for assigned class</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2.5">
                <p className="font-medium text-[#1c2733]">Eric Tumusiime</p>
                <p className="text-[10px] text-[#8a97a3]">Instructor · ID: ST-022</p>
              </td>
              <td className="px-3 py-2.5">
                <span className="rounded border border-[#dfe3e7] bg-[#f1f3f5] px-1.5 py-0.5 text-[10px] font-semibold text-[#1c2733]">
                  Subject Teacher
                </span>
              </td>
              <td className="px-3 py-2.5 text-[#5b6b78]">P.5 (Science)</td>
              <td className="px-4 py-2.5 text-[11px] text-[#5b6b78]">Science mark entry only; no fee or profile edits</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Strip */}
      <div className="flex items-center justify-between border-t border-[#edf0f2] bg-[#f8f9fa] px-4 py-2.5 text-[11px] text-[#8a97a3]">
        <span>Granular role boundaries active</span>
        <span className="font-medium text-[#2c4a73]">Manage Permissions</span>
      </div>
    </div>
  )
}

function MultiSchoolWorkspacesPreview() {
  return (
    <div className="overflow-hidden rounded-md border border-[#dfe3e7] bg-white shadow-[0_1px_2px_rgba(20,35,55,0.03)]">
      {/* Panel Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9ecef] bg-[#f8f9fa] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#1c2733]">Institution Workspace</span>
          <span className="text-xs text-[#8a97a3]">/</span>
          <span className="text-xs font-medium text-[#3a4753]">St. Mary&apos;s Junior School</span>
        </div>
        <span className="rounded border border-[#dfe3e7] bg-white px-2 py-0.5 text-[10px] font-medium text-[#5b6b78]">
          Isolated Tenant Schema
        </span>
      </div>

      {/* Workspace Health Overview */}
      <div className="grid grid-cols-2 gap-3 border-b border-[#edf0f2] bg-[#fafbfc] p-3 text-xs sm:grid-cols-4">
        <div>
          <span className="text-[10px] text-[#8a97a3]">Tenant ID:</span>
          <p className="font-mono text-[11px] text-[#1c2733]">sch_smjs_042</p>
        </div>
        <div>
          <span className="text-[10px] text-[#8a97a3]">Dedicated Domain:</span>
          <p className="font-medium text-[#2c4a73]">smjs.acs.app</p>
        </div>
        <div>
          <span className="text-[10px] text-[#8a97a3]">Data Isolation:</span>
          <p className="font-medium text-[#1c2733]">Encrypted / Dedicated</p>
        </div>
        <div>
          <span className="text-[10px] text-[#8a97a3]">Daily Cloud Backup:</span>
          <p className="font-medium text-[#1c2733]">03:00 AM (Verified)</p>
        </div>
      </div>

      {/* Audit Log Activity Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#edf0f2] bg-[#fafbfc] text-[10px] font-semibold uppercase tracking-wider text-[#8a97a3]">
              <th scope="col" className="px-4 py-2 font-medium">Timestamp</th>
              <th scope="col" className="px-3 py-2 font-medium">User</th>
              <th scope="col" className="px-4 py-2 font-medium">Recorded Operation</th>
              <th scope="col" className="px-3 py-2 font-medium">Module</th>
              <th scope="col" className="px-3 py-2 text-right font-medium">Result</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f2f4f6] text-[#3a4753]">
            <tr>
              <td className="px-4 py-2 font-mono text-[11px] text-[#8a97a3]">10:14 AM</td>
              <td className="px-3 py-2 text-[#1c2733]">R. Namaganda</td>
              <td className="px-4 py-2 text-[#5b6b78]">Recorded payment UGX 200,000 (REC-1049)</td>
              <td className="px-3 py-2 text-[#5b6b78]">Finance</td>
              <td className="px-3 py-2 text-right text-[11px] font-medium text-[#1c2733]">Success</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2 font-mono text-[11px] text-[#8a97a3]">09:32 AM</td>
              <td className="px-3 py-2 text-[#1c2733]">D. Kato</td>
              <td className="px-4 py-2 text-[#5b6b78]">Finalized morning roll call (P.7 Red)</td>
              <td className="px-3 py-2 text-[#5b6b78]">Attendance</td>
              <td className="px-3 py-2 text-right text-[11px] font-medium text-[#1c2733]">Success</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono text-[11px] text-[#8a97a3]">08:45 AM</td>
              <td className="px-3 py-2 text-[#1c2733]">R. Mpagi</td>
              <td className="px-4 py-2 text-[#5b6b78]">Configured term calendar for Term 2, 2026</td>
              <td className="px-3 py-2 text-[#5b6b78]">Academic Setup</td>
              <td className="px-3 py-2 text-right text-[11px] font-medium text-[#1c2733]">Success</td>
            </tr>
            <tr className="bg-[#fafbfc]">
              <td className="px-4 py-2 font-mono text-[11px] text-[#8a97a3]">03:00 AM</td>
              <td className="px-3 py-2 text-[#8a97a3]">System Bot</td>
              <td className="px-4 py-2 text-[#5b6b78]">Completed daily cloud backup snapshot</td>
              <td className="px-3 py-2 text-[#5b6b78]">Redundancy</td>
              <td className="px-3 py-2 text-right text-[11px] font-medium text-[#1c2733]">Verified</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Strip */}
      <div className="flex items-center justify-between border-t border-[#edf0f2] bg-[#f8f9fa] px-4 py-2.5 text-[11px] text-[#8a97a3]">
        <span>Strict isolation: St. Mary&apos;s data never co-mingles with other schools</span>
        <span className="font-medium text-[#2c4a73]">Audit Logs →</span>
      </div>
    </div>
  )
}

// 8 Feature Row Definitions

interface FeatureRow {
  id: string
  number: string
  category: string
  title: string
  lead: string
  description: string
  capabilities: string[]
  preview: React.ReactNode
}

const featuresList: FeatureRow[] = [
  {
    id: 'pupil-registry',
    number: '01',
    category: 'Registry & Admissions',
    title: 'Pupil Registry & Profiles',
    lead: 'Maintain a single, authoritative student directory from enrollment to graduation.',
    description:
      'Eliminate scattered spreadsheets and missing paper files. ACS organizes complete learner records with permanent admission numbers, class and stream allocations, medical details, and linked parent or guardian contacts. When a school year concludes, bulk promotion workflows advance entire classes in seconds without manual re-entry.',
    capabilities: [
      'Fast, searchable pupil directory filtered by class, stream, or status',
      'Linked guardian profiles with verified primary and backup phone numbers',
      'Complete historical record of attendance, assessments, and fee payments',
      'Streamlined end-of-year class promotion and student transfer workflows'
    ],
    preview: <PupilRegistryPreview />
  },
  {
    id: 'fees-accounts',
    number: '02',
    category: 'Finance & Bursar',
    title: 'Fees & Pupil Accounts',
    lead: 'Clear fee structures, accurate student ledgers, and immediate payment receipts.',
    description:
      'Tracking school fees across hundreds of learners with partial payments is a critical operational task. ACS gives bursars and headteachers a double-entry ledger for every enrolled child. Define termly fee structures by class level, record bank slips, cash, and mobile transfers, and see outstanding balances instantly.',
    capabilities: [
      'Configurable term fee structures with custom itemized categories',
      'Individual student statement ledgers with date-stamped billing records',
      'Partial payment recording with automated balance recalculation',
      'Printable payment receipts and one-click defaulter lists for administrative follow-up'
    ],
    preview: <FeesAccountsPreview />
  },
  {
    id: 'attendance-tracking',
    number: '03',
    category: 'Daily Operations',
    title: 'Attendance Tracking',
    lead: 'Fast daily roll calls with real-time absentee and attendance monitoring.',
    description:
      'Paper roll-call books are slow to summarize and often leave administration unaware of chronic student absences. ACS allows teachers to mark morning and afternoon attendance in seconds from a phone, tablet, or classroom computer. The system automatically computes termly percentages and flags learners requiring pastoral attention.',
    capabilities: [
      'Rapid one-tap roll call interface tailored for mobile and desktop screens',
      'Separate morning and afternoon session recording with excused absence remarks',
      'Automated attendance percentages calculated across weeks, terms, and years',
      'Instant flags for persistent absenteeism to support student welfare'
    ],
    preview: <AttendancePreview />
  },
  {
    id: 'academic-performance',
    number: '04',
    category: 'Academics & Examinations',
    title: 'Exams & Academic Performance',
    lead: 'Structured assessment recording, automated grading, and division calculations.',
    description:
      'Compiling marks across streams manually consumes days of teacher time and invites calculation errors. ACS provides a validated mark-entry system tailored to national grading curricula. Record Beginning of Term (BOT), Mid-Term (MOT), and End of Term (EOT) assessments; the platform computes totals, aggregates, and division placements automatically.',
    capabilities: [
      'Standardized subject lists, paper weightings, and division grading rules',
      'Validation checks during mark entry to prevent out-of-range numerical errors',
      'Automatic calculation of class totals, subject averages, and division distributions',
      'Comparative subject performance breakdowns to guide academic interventions'
    ],
    preview: <ExamsPerformancePreview />
  },
  {
    id: 'report-cards',
    number: '05',
    category: 'Official Reports',
    title: 'Report Cards & Results',
    lead: 'Compile and produce branded, error-free student report cards in minutes.',
    description:
      'Handwriting hundreds of termly report forms is one of the heaviest burdens on teaching staff. ACS synthesizes assessment scores, attendance figures, teacher comments, and headteacher remarks into branded, print-ready documents. Include your school crest, motto, grading scale, and fee clearance status with zero manual transcription.',
    capabilities: [
      'One-click batch report compilation for entire streams or class levels',
      'Customized layout with school crest, motto, term dates, and fees balance display',
      'Pre-formatted entry fields for class teacher remarks and headteacher endorsements',
      'Clean PDF generation ready for bulk physical printing or digital sharing'
    ],
    preview: <ReportCardsPreview />
  },
  {
    id: 'sms-communication',
    number: '06',
    category: 'Parent Engagement',
    title: 'SMS Communication',
    lead: 'Direct, verified SMS announcements and automated fee balance notices to guardians.',
    description:
      'Paper circulars sent home in student backpacks frequently go unread. ACS links carrier-grade SMS messaging directly to your school database. Broadcast urgent notices to specific streams or the entire school, and dispatch automated, personalized fee reminder notices displaying each child’s exact balance to accelerate fee collections.',
    capabilities: [
      'Targeted broadcast selection by stream, class level, or whole school',
      'Personalized message tags automatically inserting learner name and fee balance',
      'Real-time delivery verification confirming carrier receipt for every guardian number',
      'Live character counter and credit estimator prior to every dispatch'
    ],
    preview: <SMSCommunicationPreview />
  },
  {
    id: 'staff-roles',
    number: '07',
    category: 'Governance & Security',
    title: 'Staff Roles & Permissions',
    lead: 'Role-based access control protecting pupil privacy and operational integrity.',
    description:
      'School records contain confidential personal, financial, and academic information. ACS enforces granular role-based permissions throughout the system. Subject teachers enter marks only for their allocated classes, bursars control fee ledgers without altering academic results, and headteachers maintain oversight through continuous audit logging.',
    capabilities: [
      'Pre-configured institutional roles: Administrator, Bursar, Class Teacher, Subject Teacher',
      'Teaching allocations restricting mark entry strictly to assigned classes and subjects',
      'Strict separation between financial collections and academic records',
      'Comprehensive audit trails logging user identity, timestamps, and data changes'
    ],
    preview: <StaffRolesPreview />
  },
  {
    id: 'workspaces',
    number: '08',
    category: 'Cloud Architecture',
    title: 'Multi-School Workspaces',
    lead: 'Completely isolated tenant environments ensuring strict data privacy and reliability.',
    description:
      'Institutions must trust that their records remain private, never co-mingle with other schools, and are safely backed up against hardware failure. ACS operates on a strict multi-tenant cloud architecture where every school works in its own dedicated, encrypted workspace with automated daily backups.',
    capabilities: [
      'Dedicated tenant data boundary ensuring complete separation between institutions',
      'Custom academic calendar, terms, grading scales, and class naming structures',
      'Automated daily cloud backups preventing catastrophic data loss',
      'Lightweight, responsive interface optimized for reliable mobile and desktop use'
    ],
    preview: <MultiSchoolWorkspacesPreview />
  }
]

export function FeaturesPage() {
  return (
    <>
      {/* 1. Minimal Inner-Page Hero */}
      <section className="mx-auto max-w-[1180px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <p className="eyebrow">ACS Capabilities</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.07em] text-[#152b3c] sm:text-6xl sm:leading-[0.98]">
          The essentials of school management, made clear.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#5b6b78] sm:text-lg">
          A focused, connected suite of tools engineered for the daily operations of primary and secondary schools. Manage learner records, attendance, examinations, fee accounts, and official report cards from one calm, unified platform.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-started" className="button-primary">
            Start free trial <ArrowRight className="ml-2 inline size-4" />
          </Link>
          <Link href="/contact" className="button-secondary">
            Talk to our team
          </Link>
        </div>
      </section>

      {/* 2. Feature Overview Navigation / Index Section */}
      <section className="border-t border-[#e9ecef] bg-[#f8f9fa]">
        <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Architecture</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1c2733] sm:text-3xl">
              Eight core pillars of modern school administration.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5b6b78]">
              Built around the real-world operational cycle of the school term—from admissions and fee structures to daily roll calls, assessment compilation, and end-of-term reporting.
            </p>
          </div>

          {/* Quick jump anchor index */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuresList.map((feature) => (
              <a
                key={feature.id}
                href={`#${feature.id}`}
                className="group rounded border border-[#dfe3e7] bg-white p-4 transition-colors hover:border-[#b7c2cc]"
              >
                <div className="flex items-center justify-between text-[#8a97a3]">
                  <span className="text-[10px] font-semibold tracking-wider">{feature.number}</span>
                  <span className="text-xs transition-transform group-hover:translate-x-0.5">↓</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-[#1c2733]">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs text-[#5b6b78] line-clamp-2">
                  {feature.lead}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Alternating Feature Rows */}
      <section className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {featuresList.map((feature, index) => {
          const isEven = index % 2 === 1
          return (
            <article
              id={feature.id}
              key={feature.id}
              className="py-16 sm:py-20 lg:py-24 border-t border-[#e9ecef] first:border-t-0"
            >
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Text Side */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5b6b78]">
                      {feature.number}
                    </span>
                    <span className="text-xs text-[#8a97a3]">/</span>
                    <span className="eyebrow">{feature.category}</span>
                  </div>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1c2733] sm:text-3xl lg:text-[2rem] lg:leading-[1.15]">
                    {feature.title}
                  </h2>

                  <p className="mt-3 text-sm font-medium text-[#2c4a73] sm:text-[15px]">
                    {feature.lead}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#5b6b78] sm:text-[15px]">
                    {feature.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-[#edf0f2] pt-5 text-xs text-[#3a4753] sm:text-sm">
                    {feature.capabilities.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-[#1c2733]" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interface Preview Side */}
                <div className={`min-w-0 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {feature.preview}
                </div>
              </div>
            </article>
          )
        })}
      </section>

      {/* 4. Restrained CTA Section */}
      <section className="border-y border-[#e9ecef] bg-[#152b3c] text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Ready to simplify your school management?
            </h2>
            <p className="mt-2 text-sm text-[#b4c2cc] sm:text-base">
              The first 20 schools receive 2 months free. Set up your workspace in minutes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/get-started" className="button-light">
              Start free trial
            </Link>
            <Link href="/contact" className="button-secondary border-[#405669] bg-transparent text-white hover:bg-[#1f374c] hover:border-[#526d83]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}