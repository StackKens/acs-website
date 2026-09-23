'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PageIntro, CTA, coreCapabilities, CapabilityItem } from './shared'
import { pricingPlans, largeSchoolsPlan, comparisonCategories, billingSteps, faqs } from '@/lib/pricing'
import { 
  Users, 
  CreditCard, 
  CalendarCheck2, 
  Award, 
  FileText, 
  MessageSquare, 
  UserCheck, 
  ShieldCheck, 
  Check, 
  ArrowRight 
} from 'lucide-react'

const formatPrice = (price: number | null) => price === null ? 'Custom pricing' : `UGX ${new Intl.NumberFormat('en-UG', { maximumFractionDigits: 0 }).format(price)}`

function PupilSnippet() {
  return (
    <div className="rounded-md border border-[#e2eaf0] bg-[#fbfcfd] p-3.5 text-left">
      <div className="flex items-center justify-between border-b border-[#edf2f6] pb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="grid size-8 place-items-center rounded-full bg-[#e8f1fc] text-xs font-semibold text-[#2c61cc]">
            KK
          </div>
          <div>
            <p className="text-xs font-semibold text-[#172638]">Kigozi Kevin</p>
            <p className="text-[10px] text-[#718292]">ACS/2026/0142 · Primary 6 Blue</p>
          </div>
        </div>
        <span className="rounded-full bg-[#e8f7f0] px-2 py-0.5 text-[9px] font-medium text-[#0f7a5b]">Enrolled</span>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px]">
        <div>
          <span className="text-[#8495a5]">Guardian:</span>
          <p className="font-medium text-[#2d4254]">Sarah Namubiru</p>
        </div>
        <div>
          <span className="text-[#8495a5]">Contact:</span>
          <p className="font-medium text-[#2d4254]">0772 458 190</p>
        </div>
      </div>
    </div>
  )
}

function FinanceSnippet() {
  return (
    <div className="rounded-md border border-[#e2eaf0] bg-[#fbfcfd] p-3.5 text-left">
      <div className="flex items-center justify-between border-b border-[#edf2f6] pb-2">
        <span className="text-[11px] font-semibold text-[#172638]">Term 2 Pupil Ledger</span>
        <span className="rounded bg-[#fef5ea] px-1.5 py-0.5 text-[9px] font-medium text-[#b46d0a]">Balance Due</span>
      </div>
      <div className="mt-2.5 flex items-baseline justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-wider text-[#8495a5]">Tuition Billed</p>
          <p className="text-xs font-semibold text-[#172638]">UGX 450,000</p>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-wider text-[#8495a5]">Paid to Date</p>
          <p className="text-xs font-semibold text-[#0f7a5b]">UGX 300,000</p>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-wider text-[#8495a5]">Balance</p>
          <p className="text-xs font-semibold text-[#b46d0a]">UGX 150,000</p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between rounded bg-[#f3f7fa] px-2.5 py-1 text-[9px] text-[#556979]">
        <span>Latest: Receipt #1084 (Bank Slip)</span>
        <span className="font-medium text-[#2c61cc]">Print Slip ✓</span>
      </div>
    </div>
  )
}

function AttendanceSnippet() {
  return (
    <div className="rounded-md border border-[#e2eaf0] bg-[#fbfcfd] p-3.5 text-left">
      <div className="flex items-center justify-between border-b border-[#edf2f6] pb-2">
        <div>
          <p className="text-[11px] font-semibold text-[#172638]">P.4 East · Daily Roll Call</p>
          <p className="text-[9px] text-[#718292]">Morning Session · Verified</p>
        </div>
        <span className="rounded-full bg-[#e8f7f0] px-2 py-0.5 text-[9px] font-semibold text-[#0f7a5b]">96.0% Present</span>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center">
        <div className="rounded bg-[#f0f9f5] p-1.5">
          <p className="text-xs font-semibold text-[#0f7a5b]">48</p>
          <p className="text-[9px] text-[#69887b]">Present</p>
        </div>
        <div className="rounded bg-[#fdf2f2] p-1.5">
          <p className="text-xs font-semibold text-[#c73b3b]">2</p>
          <p className="text-[9px] text-[#9b6666]">Absent</p>
        </div>
        <div className="rounded bg-[#f4f7fa] p-1.5">
          <p className="text-xs font-semibold text-[#2b4458]">50</p>
          <p className="text-[9px] text-[#7c8f9f]">Enrolled</p>
        </div>
      </div>
    </div>
  )
}

function PerformanceSnippet() {
  return (
    <div className="rounded-md border border-[#e2eaf0] bg-[#fbfcfd] p-3.5 text-left">
      <div className="flex items-center justify-between border-b border-[#edf2f6] pb-2">
        <span className="text-[11px] font-semibold text-[#172638]">EOT Exam Results</span>
        <span className="rounded bg-[#e8f1fc] px-1.5 py-0.5 text-[9px] font-semibold text-[#2c61cc]">Division 1</span>
      </div>
      <div className="mt-2 space-y-1 text-[10px]">
        <div className="flex items-center justify-between text-[#2d4254]">
          <span>Mathematics</span>
          <span className="font-semibold text-[#172638]">88% <span className="font-medium text-[#0f7a5b]">(D1)</span></span>
        </div>
        <div className="flex items-center justify-between text-[#2d4254]">
          <span>English Language</span>
          <span className="font-semibold text-[#172638]">82% <span className="font-medium text-[#0f7a5b]">(D1)</span></span>
        </div>
        <div className="flex items-center justify-between text-[#2d4254]">
          <span>Integrated Science</span>
          <span className="font-semibold text-[#172638]">79% <span className="font-medium text-[#2c61cc]">(D2)</span></span>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-[#edf2f6] pt-1.5 text-[9px] text-[#718292]">
        <span>Aggregates: <strong className="text-[#172638]">6</strong></span>
        <span>Class Position: <strong className="text-[#172638]">3rd of 52</strong></span>
      </div>
    </div>
  )
}

function ReportsSnippet() {
  return (
    <div className="rounded-md border border-[#e2eaf0] bg-[#fbfcfd] p-3.5 text-left">
      <div className="flex items-center gap-2 border-b border-[#edf2f6] pb-2">
        <div className="grid size-6 place-items-center rounded bg-[#152b3c] text-[8px] font-bold text-white">ACS</div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold text-[#172638]">Term 2 Official Report Card</p>
          <p className="text-[9px] text-[#718292]">Namubiru Grace · P.5 East</p>
        </div>
      </div>
      <div className="mt-2 space-y-1.5 text-[9px] text-[#3e5365]">
        <p className="rounded bg-[#f5f8fb] p-1.5 italic text-[#4d6375]">
          &ldquo;Grace demonstrates outstanding discipline, critical thinking, and consistent progress in numeracy.&rdquo;
        </p>
        <div className="flex items-center justify-between pt-0.5">
          <span className="font-medium text-[#0f7a5b]">● Signed by Headteacher</span>
          <span className="rounded border border-[#cad7df] bg-white px-2 py-0.5 font-medium text-[#172638]">Ready to Print</span>
        </div>
      </div>
    </div>
  )
}

function ParentsSnippet() {
  return (
    <div className="rounded-md border border-[#e2eaf0] bg-[#fbfcfd] p-3.5 text-left">
      <div className="flex items-center justify-between border-b border-[#edf2f6] pb-2">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#0f7a5b]" />
          <span className="text-[10px] font-semibold text-[#172638]">SMS Broadcast</span>
        </div>
        <span className="text-[9px] text-[#718292]">10:30 AM</span>
      </div>
      <div className="mt-2 rounded-md bg-[#edf4fb] p-2 text-[10px] leading-relaxed text-[#233f55]">
        <p className="mb-0.5 text-[9px] font-semibold text-[#172638]">ACS-SCHOOL</p>
        &ldquo;Dear Parent, P.7 Mock Exam results are out. Term 2 report forms can now be accessed. Visitation day is Saturday 12th.&rdquo;
      </div>
      <div className="mt-1.5 flex items-center justify-between text-[9px] text-[#718292]">
        <span>Sent to: P.7 Parents (112)</span>
        <span className="font-medium text-[#0f7a5b]">100% Delivered ✓</span>
      </div>
    </div>
  )
}

function StaffSnippet() {
  return (
    <div className="rounded-md border border-[#e2eaf0] bg-[#fbfcfd] p-3.5 text-left">
      <div className="flex items-center justify-between border-b border-[#edf2f6] pb-2">
        <div>
          <p className="text-[11px] font-semibold text-[#172638]">Mr. Kato Denis</p>
          <p className="text-[9px] text-[#718292]">Senior Teacher · ID: ST-018</p>
        </div>
        <span className="rounded bg-[#f0f4f9] px-2 py-0.5 text-[9px] font-medium text-[#2d4960]">Class Teacher</span>
      </div>
      <div className="mt-2 space-y-1 text-[10px] text-[#3b5163]">
        <div className="flex justify-between">
          <span className="text-[#8495a5]">Assigned Class:</span>
          <span className="font-semibold text-[#172638]">Primary 7 Red</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8495a5]">Teaching Subjects:</span>
          <span className="font-medium text-[#172638]">Mathematics, SST</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8495a5]">Permissions:</span>
          <span className="font-medium text-[#0f7a5b]">Marks & Roll Call Entry</span>
        </div>
      </div>
    </div>
  )
}

function WorkspacesSnippet() {
  return (
    <div className="rounded-md border border-[#e2eaf0] bg-[#fbfcfd] p-3.5 text-left">
      <div className="flex items-center justify-between border-b border-[#edf2f6] pb-2">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#2c61cc]" />
          <span className="text-[11px] font-semibold text-[#172638]">School Cloud Workspace</span>
        </div>
        <span className="rounded bg-[#f0f9f5] px-1.5 py-0.5 text-[9px] font-medium text-[#0f7a5b]">Active</span>
      </div>
      <div className="mt-2 space-y-1 text-[10px] text-[#334b5e]">
        <div className="flex justify-between">
          <span className="text-[#8495a5]">Dedicated Domain:</span>
          <span className="font-mono text-[9px] text-[#172638]">greenhill.acs.app</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8495a5]">Audit Trail:</span>
          <span className="font-medium text-[#0f7a5b]">Tamper-Proof Logs</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#8495a5]">Cloud Redundancy:</span>
          <span className="font-medium text-[#2c61cc]">Daily Automated Backup</span>
        </div>
      </div>
    </div>
  )
}

const snippetMap: Record<string, React.ReactNode> = {
  pupils: <PupilSnippet />,
  finance: <FinanceSnippet />,
  attendance: <AttendanceSnippet />,
  performance: <PerformanceSnippet />,
  reports: <ReportsSnippet />,
  parents: <ParentsSnippet />,
  staff: <StaffSnippet />,
  workspaces: <WorkspacesSnippet />
}

const iconMap: Record<string, React.ReactNode> = {
  pupils: <Users size={18} className="text-[#2c61cc]" />,
  finance: <CreditCard size={18} className="text-[#0f7a5b]" />,
  attendance: <CalendarCheck2 size={18} className="text-[#2c61cc]" />,
  performance: <Award size={18} className="text-[#b46d0a]" />,
  reports: <FileText size={18} className="text-[#2c61cc]" />,
  parents: <MessageSquare size={18} className="text-[#0f7a5b]" />,
  staff: <UserCheck size={18} className="text-[#2c61cc]" />,
  workspaces: <ShieldCheck size={18} className="text-[#152b3c]" />
}

export function FeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const categories = ['All', 'Academics & Pupils', 'Finance & Administration', 'Communication & Records']

  const filteredCapabilities = selectedCategory === 'All' 
    ? coreCapabilities 
    : coreCapabilities.filter(c => c.category === selectedCategory)

  return (
    <>
      <PageIntro 
        eyebrow="ACS capabilities" 
        title="Everything your school needs, made clear." 
        description="A focused, robust suite of cloud management tools tailored for the daily operations that keep modern primary and secondary schools running smoothly."
      />
      
      <section className="mx-auto max-w-[1180px] px-5 pb-24 sm:px-8">
        {/* Category Pill Filters */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-[#e1e8ed] pb-5">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-[#8495a5]">Category:</span>
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors ${
                selectedCategory === cat 
                  ? 'bg-[#152b3c] text-white' 
                  : 'bg-[#edf2f6] text-[#4d6375] hover:bg-[#e1e9f0] hover:text-[#172638]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredCapabilities.map(item => (
            <article 
              key={item.id} 
              className="flex flex-col justify-between rounded-md border border-[#dfe6ea] bg-white p-6 shadow-[0_1px_2px_rgba(21,43,60,0.03)] transition-colors hover:border-[#b2c4d1] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="grid size-9 place-items-center rounded-md bg-[#f0f4f8]">
                      {iconMap[item.id]}
                    </div>
                    <span className="rounded bg-[#eef3f7] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#526676]">
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-[#8495a5]">{item.category}</span>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#172638]">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#2c61cc]">{item.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-[#5b6e7f]">{item.description}</p>

                <ul className="mt-5 space-y-2 border-t border-[#edf2f6] pt-4 text-xs text-[#415566]">
                  {item.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#0f7a5b]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In-Card Interactive Micro-UI Preview */}
              <div className="mt-6 border-t border-[#edf2f6] pt-4">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8495a5]">Live Tool Preview</p>
                {snippetMap[item.id]}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}

export function PricingPage(){return <main><PageIntro eyebrow="Pricing" title="Simple pricing for better school management." description="Choose the ACS plan that fits your school and get the tools you need to manage your everyday school operations in one place."/><section className="mx-auto max-w-[1180px] px-5 pb-20 sm:px-8"><div className="mb-12 flex flex-col gap-2 border-y border-[#dfe6ea] py-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm font-semibold text-[#263d4f]">First 20 schools get 2 months free.</p><p className="text-sm text-[#71808d]">An introductory offer for schools joining ACS.</p></div><div className="grid gap-5 lg:grid-cols-3">{pricingPlans.map(plan=><article className={`flex flex-col border p-6 transition-shadow hover:shadow-[0_14px_35px_rgba(22,40,59,0.06)] ${plan.emphasis?'border-[#7891a1] bg-[#f8fafb]':'border-[#dfe6ea] bg-white'}`} key={plan.id}>{plan.emphasis&&<p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#7891a1]">For growing schools</p>}<p className="text-lg font-semibold text-[#263d4f]">{plan.name}</p><p className="mt-3 min-h-14 text-sm leading-6 text-[#71808d]">{plan.description}</p><div className="mt-7 border-t border-[#e9edef] pt-5"><p className="text-2xl font-semibold tracking-[-0.03em] text-[#263d4f]">{formatPrice(plan.price)}</p><p className="mt-1 text-xs text-[#8b98a3]">{plan.billing}</p><p className="mt-4 text-sm font-medium text-[#526676]">{plan.pupilLimit}</p></div><ul className="mt-6 space-y-3 border-t border-[#e9edef] pt-5 text-sm text-[#526676]">{plan.features.map(feature=><li key={feature} className="flex gap-3"><span className="text-[#7891a1]" aria-hidden="true">✓</span>{feature}</li>)}</ul><Link href="/get-started" className="button-primary mt-8 w-full">{plan.cta}</Link></article>)}</div><article className="mt-5 flex flex-col gap-6 border border-dashed border-[#b8c6ce] bg-[#fbfcfc] p-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-semibold text-[#263d4f]">{largeSchoolsPlan.pupilLimit}</p><p className="mt-2 max-w-2xl text-sm leading-6 text-[#71808d]">{largeSchoolsPlan.description}</p></div><Link href="/contact" className="button-secondary shrink-0">{largeSchoolsPlan.cta}</Link></article></section><Comparison/><Transparency/><LaunchOffer/><Billing/><PlanGrowth/><FAQ/><section className="border-y border-[#dfe6ea] bg-[#f8fafb]"><div className="mx-auto max-w-[1180px] px-5 py-16 text-center sm:px-8"><h2 className="text-2xl font-medium tracking-[-0.03em] text-[#263d4f]">Ready to bring your school management into one place?</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#71808d]">Start with ACS and give your school a simpler way to manage everyday operations.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/get-started" className="button-primary">Get Started</Link><Link href="/contact" className="button-secondary">Contact Us</Link></div></div></section></main>}

function Comparison(){const [open,setOpen]=useState<string|null>(null);return <section className="border-y border-[#e5ebee] bg-[#f8fafb]"><div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8"><p className="eyebrow">Compare plans</p><h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#263d4f]">Choose the coverage your school needs.</h2><div className="mt-8 border-t border-[#dfe6ea]">{Object.entries(comparisonCategories).map(([category,items])=><div className="border-b border-[#dfe6ea]" key={category}><button type="button" className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-[#263d4f] sm:cursor-default" aria-expanded={open===category} onClick={()=>setOpen(open===category?null:category)}>{category}<span className="text-xl font-normal text-[#7891a1] sm:hidden" aria-hidden="true">{open===category?'−':'+'}</span></button><div className={`${open===category?'block':'hidden'} pb-5 sm:block`}><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead><tr className="text-[#8b98a3]"><th className="w-2/5 pb-3 font-normal">Feature</th><th className="pb-3 font-normal">Starter</th><th className="pb-3 font-normal">Growth</th><th className="pb-3 font-normal">Professional</th></tr></thead><tbody>{items.map(item=><tr className="border-t border-[#e9edef] text-[#526676]" key={item}><td className="py-3">{item}</td><td className="py-3 text-[#7891a1]">✓</td><td className="py-3 text-[#7891a1]">✓</td><td className="py-3 text-[#7891a1]">✓</td></tr>)}</tbody></table></div></div></div>)}</div></div></section>}
function Transparency(){return <section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Pricing transparency</p><h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#263d4f]">Know what your school is paying for.</h2><p className="mt-4 max-w-md text-sm leading-7 text-[#71808d]">ACS keeps pricing straightforward. Choose the plan that matches your school&apos;s needs and see exactly what is included.</p></div><div className="grid gap-6 sm:grid-cols-3"><Point title="Clear plans" text="Know the cost and features before you get started."/><Point title="Flexible growth" text="Move to a higher plan as your school grows."/><Point title="Simple billing" text="Pricing is presented clearly on a per-term basis."/></div></div></section>}
function LaunchOffer(){return <section className="border-y border-[#dfe6ea] bg-[#263d4f]"><div className="mx-auto flex max-w-[1180px] flex-col gap-7 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between"><div><p className="eyebrow text-[#c2d0d7]">Launch offer</p><h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">Start with 2 months free.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-[#d5e0e5]">The first 20 schools to join ACS can use their selected plan for 2 months free. Explore the platform, set up your school and experience ACS before moving to the regular pricing.</p></div><div className="flex shrink-0 flex-col gap-3 sm:flex-row"><Link href="/get-started" className="button-primary bg-white text-[#263d4f]">Get Started</Link><Link href="/contact" className="button-secondary border-[#8499a7] text-white">Contact Us</Link></div></div></section>}
function Billing(){return <section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8"><p className="eyebrow">How school pricing works</p><h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#263d4f]">A clear path from setup to regular billing.</h2><div className="mt-10 grid gap-8 border-t border-[#dfe6ea] pt-8 sm:grid-cols-2 lg:grid-cols-4">{billingSteps.map(step=><div key={step.number}><p className="text-sm font-semibold text-[#7891a1]">0{step.number}</p><p className="mt-4 text-sm font-semibold text-[#263d4f]">{step.title}</p><p className="mt-2 text-sm leading-6 text-[#71808d]">{step.description}</p></div>)}</div></section>}
function PlanGrowth(){return <section className="border-y border-[#dfe6ea] bg-[#f8fafb]"><div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8"><h2 className="text-xl font-medium text-[#263d4f]">Growing school? Your plan can grow with you.</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-[#71808d]">Move to a higher plan when your school requires additional capabilities or exceeds its current pupil range. Our team can help you choose the right next step.</p></div></section>}
function Point({title,text}:{title:string;text:string}){return <div className="border-t border-[#dfe6ea] pt-4"><p className="text-sm font-semibold text-[#263d4f]">{title}</p><p className="mt-2 text-sm leading-6 text-[#71808d]">{text}</p></div>}
function FAQ(){const [open,setOpen]=useState<number|null>(null);return <section className="mx-auto max-w-[800px] px-5 py-20 sm:px-8"><p className="eyebrow">Questions</p><h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#263d4f]">A few useful answers.</h2><div className="mt-8 border-t border-[#dfe6ea]">{faqs.map((item,index)=><div className="border-b border-[#dfe6ea]" key={item.question}><button type="button" className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm font-medium text-[#263d4f]" aria-expanded={open===index} onClick={()=>setOpen(open===index?null:index)}>{item.question}<span className="text-xl font-normal text-[#7891a1]" aria-hidden="true">{open===index?'−':'+'}</span></button>{open===index&&<p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-[#71808d]">{item.answer}</p>}</div>)}</div></section>}

export function ContactPage(){return <main><PageIntro eyebrow="Contact ACS" title="Let’s talk about your school." description="Have a question about ACS, pricing, onboarding or how the platform works? Our team is ready to help."/><section className="mx-auto grid max-w-[1180px] gap-14 px-5 pb-24 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><h2 className="text-2xl font-medium tracking-[-0.03em] text-[#263d4f]">We&apos;re here to help.</h2><p className="mt-4 max-w-sm text-sm leading-7 text-[#71808d]">Contact ACS for product questions, pricing, getting started, onboarding, technical support or general enquiries.</p><div className="mt-10 space-y-6 border-t border-[#dfe6ea] pt-6"><ContactItem title="Support" text="Questions about using ACS."/><ContactItem title="Sales & pricing" text="Questions about plans and getting your school started."/><ContactItem title="Onboarding" text="Help setting up your school’s ACS workspace."/></div><p className="mt-10 text-sm text-[#71808d]">Contact details will be shared by the ACS team during onboarding.</p></div><ContactForm/></section><section className="border-y border-[#dfe6ea] bg-[#f8fafb]"><div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between"><div><p className="text-lg font-medium text-[#263d4f]">Not ready to contact us yet?</p><p className="mt-2 text-sm text-[#71808d]">Explore ACS pricing and see which plan fits your school.</p></div><Link href="/pricing" className="button-primary">View Pricing</Link></div></section></main>}
function ContactItem({title,text}:{title:string;text:string}){return <div><p className="text-sm font-semibold text-[#263d4f]">{title}</p><p className="mt-1 text-sm leading-6 text-[#71808d]">{text}</p></div>}
function ContactForm(){const [sent,setSent]=useState(false);return <form className="border border-[#dfe6ea] bg-white p-6 sm:p-8" onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="py-10"><p className="text-lg font-medium text-[#263d4f]">Message received.</p><p className="mt-3 text-sm leading-7 text-[#71808d]">Our team will review your message and get back to you using the contact details you provided.</p><button type="button" className="mt-6 text-sm font-medium text-[#526676] underline underline-offset-4" onClick={()=>setSent(false)}>Send another message</button></div>:<><div className="grid gap-5 sm:grid-cols-2"><Field label="Full name" required/><Field label="School name" required/><Field label="Email address" type="email" required/><Field label="Phone number"/><label className="block text-sm text-[#526676] sm:col-span-2">What can we help you with?<select className="form-input" name="topic" defaultValue=""><option value="" disabled>Select a topic</option><option>Getting started</option><option>Pricing</option><option>Product information</option><option>Technical support</option><option>Partnership</option><option>Other</option></select></label><label className="block text-sm text-[#526676] sm:col-span-2">Message<textarea required className="form-input min-h-32 resize-y" name="message" /></label></div><button className="button-primary mt-6 w-full sm:w-auto" type="submit">Send Message</button></>}</form>}
function Field({label,type='text',required=false}:{label:string;type?:string;required?:boolean}){return <label className="block text-sm text-[#526676]">{label}{required&&<span aria-hidden="true"> *</span>}<input required={required} type={type} name={label.toLowerCase().replaceAll(' ','-')} className="form-input" /></label>}

export function GetStartedPage(){return <><PageIntro eyebrow="Get started" title="Start your school with ACS." description="Set up your school workspace and begin with a 2-month free trial if you are among the first 20 schools."/><section className="mx-auto max-w-[620px] px-5 pb-24 sm:px-8"><Form button="Create school workspace" fields={['School name','Administrator name','Phone','Email','School size','Password']}/></section></>}
export function LoginPage(){return <><PageIntro eyebrow="ACS account" title="Welcome back." description="Log in to your school workspace."/><section className="mx-auto max-w-[480px] px-5 pb-24 sm:px-8"><Form button="Log in" fields={['Email','Password']}/><Link className="mt-5 block text-center text-sm text-[#617281] underline underline-offset-4" href="/get-started">Need an ACS workspace? Get started.</Link></section></>}
function Form({button,fields=['Name','School name','Email','Phone number','Message']}:{button:string;fields?:string[]}){return <form className="space-y-5" onSubmit={e=>e.preventDefault()}>{fields.map(field=><label className="block text-sm text-[#526676]" key={field}>{field}<input required={field!=='Phone number'&&field!=='Message'} className="form-input" type={field==='Email'?'email':field==='Password'?'password':'text'} name={field}/></label>)}<button className="button-primary w-full" type="submit">{button}</button></form>}
