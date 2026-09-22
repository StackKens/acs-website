'use client'

import Link from 'next/link'
import { ArrowRight, Check, Users, CalendarCheck2, BarChart3 } from 'lucide-react'
import { CTA, capabilities } from './shared'

function Dashboard() {
  const navGroups = [
    { label: 'School', items: ['Pupils', 'Classes', 'Parents & Guardians', 'Staff'] },
    { label: 'Academic structure', items: ['Academic Years', 'Terms', 'Streams', 'Subjects'] },
    { label: 'Monitoring', items: ['Attendance', 'Performance'] },
    { label: 'Finance', items: ['Finance Dashboard', 'Fee Structures', 'Pupil Accounts', 'Payments', 'Reports'] },
  ]
  const stats = [
    ['Pupils', '5', 'Across 8 classes', 'blue'],
    ['Attendance', '100.0%', 'Across recorded sessions', 'green'],
    ['Needs Attention', '0', 'Low attendance or declining', 'amber'],
    ['Avg Performance', '0%', 'All subjects, this term', 'amber'],
  ]
  const toneClasses: Record<string, string> = { blue: 'bg-blue-50', green: 'bg-emerald-50', amber: 'bg-amber-50', purple: 'bg-purple-50', rose: 'bg-rose-50' }
  const actions = [
    ['Mark Attendance', "Record today's attendance", 'green'],
    ['View Pupils', 'Pupil registry & profiles', 'blue'],
    ['Finance', 'Payments & fee accounts', 'purple'],
    ['Performance', 'Results & analytics', 'blue'],
    ['Reports', 'Generate & release reports', 'amber'],
    ['Announcements', 'Notify parents & staff', 'rose'],
  ]
  return <div className="product-frame">
    <div className="overflow-hidden rounded-[10px] border border-[#d9e1e6] bg-[#f1f4f8] shadow-[0_24px_80px_rgba(21,43,60,.13)]">
      <div className="flex min-h-[610px] text-left text-[#172638] sm:min-h-[680px]">
        <aside className="hidden w-[190px] shrink-0 border-r border-[#e3e8ee] bg-white md:block">
          <div className="flex h-16 items-center gap-3 border-b border-[#edf0f3] px-4"><div className="grid size-8 place-items-center rounded-sm bg-[#172638] text-xs font-bold text-white">⌂</div><div><p className="text-sm font-semibold">ACS</p><p className="text-[9px] text-[#8794a2]">School Monitoring</p></div></div>
          <nav className="space-y-5 px-3 py-5">{navGroups.map((group, groupIndex) => <div key={group.label}><p className="mb-2 px-2 text-[9px] font-medium uppercase tracking-wider text-[#9aa7b5]">{group.label}</p>{group.items.map((item, index) => <div key={item} className={`flex items-center gap-2 rounded-sm px-2 py-2 text-[11px] ${groupIndex === 0 && index === 0 ? 'border-l-2 border-[#315fc1] bg-[#eef2f8] font-semibold' : 'text-[#526274]'}`}><span className="size-3 rounded-[2px] border border-current opacity-70" />{item}</div>)}</div>)}</nav>
          <div className="mt-auto border-t border-[#edf0f3] px-4 py-4"><p className="text-[11px] font-semibold">Richard Mpagi</p><p className="text-[9px] text-[#8794a2]">richard.mpagi@school.ac.ug</p><p className="mt-4 text-[11px] text-[#526274]">↪ &nbsp;Logout</p></div>
        </aside>
        <div className="min-w-0 flex-1">
          <header className="flex h-16 items-center justify-between border-b border-[#e1e6ec] bg-white px-4 sm:px-6"><p className="text-[11px] text-[#6d7b89]">Welcome back, <strong className="text-[#172638]">Richard</strong></p><div className="flex items-center gap-3"><span className="hidden rounded border border-[#e0e5eb] px-2 py-1 text-[10px] sm:inline">● Administrator</span><span className="text-sm text-[#708092]">♧</span><span className="grid size-7 place-items-center rounded-full bg-[#dce8fb] text-[10px] text-[#315fc1]">RM</span></div></header>
          <main className="p-4 sm:p-6 lg:p-8"><div className="mb-5"><h3 className="text-lg font-semibold sm:text-xl">Good afternoon, Richard</h3><p className="mt-1 text-xs text-[#7b8997]">Term 2 · 2026</p></div>
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">{stats.map(([label, value, note, tone]) => <div className="rounded-md border border-[#e0e6ec] bg-white p-3 sm:p-4" key={label}><div className="flex items-start justify-between"><div><p className="text-[10px] text-[#667686]">{label}</p><p className="mt-1 text-xl font-semibold sm:text-2xl">{value}</p></div><span className={`size-7 rounded-md ${toneClasses[tone]}`} /></div><p className="mt-2 hidden text-[9px] text-[#9aa5b0] sm:block">{note}</p></div>)}</div>
            <section className="mt-4 overflow-hidden rounded-md border border-[#e0e6ec] bg-white"><div className="flex items-center justify-between border-b border-[#edf0f3] p-4"><div><h4 className="text-xs font-semibold">Attendance Overview</h4><p className="mt-1 text-[9px] text-[#8693a0]">Overall attendance rate across all classes</p></div><div className="hidden gap-1 rounded bg-[#f1f4f8] p-1 text-[9px] text-[#71808d] sm:flex"><span className="px-2 py-1">This week</span><span className="rounded bg-white px-2 py-1 text-[#263d4f] shadow-sm">This month</span><span className="px-2 py-1">This term</span></div></div><div className="relative h-52 p-5 sm:h-64 sm:p-8"><div className="absolute inset-x-8 top-8 bottom-8 flex flex-col justify-between border-t border-dashed border-[#e4e8ed]">{['100%', '94%', '86%', '78%', '70%'].map(v => <span className="-ml-8 -mt-2 text-[9px] text-[#8b98a5]" key={v}>{v}</span>)}</div><div className="absolute inset-x-8 top-8 h-[2px] bg-[#2c61cc]" /><div className="absolute bottom-5 inset-x-8 flex justify-between text-[9px] text-[#8b98a5]"><span>10 Sept</span><span>20 Sept</span><span>21 Sept</span></div></div></section>
            <p className="eyebrow mt-6">Quick actions</p><div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{actions.map(([title, note, tone]) => <div className="flex items-center gap-3 rounded-md border border-[#e0e6ec] bg-white p-3" key={title}><span className={`size-8 shrink-0 rounded-md ${toneClasses[tone]}`} /><div><p className="text-[11px] font-semibold">{title}</p><p className="text-[9px] text-[#8794a2]">{note}</p></div></div>)}</div>
            <p className="eyebrow mt-6">Academic context</p><div className="mt-2 grid grid-cols-2 gap-3 lg:grid-cols-4">{[['Year','2026'],['Term','Term 2'],['Classes','8'],['Streams','1']].map(([label, value]) => <div className="rounded-md border border-[#e0e6ec] bg-white p-3" key={label}><p className="text-[9px] uppercase text-[#96a2ae]">{label}</p><p className="mt-1 text-xs font-semibold">{value}</p></div>)}</div>
          </main>
        </div>
      </div>
    </div>
  </div>
}

function PlatformOverview() {
  return <div className="space-y-4">
    <div>
      <p className="eyebrow">Platform overview</p>
      <p className="mt-2 text-sm text-[#71808d]">A clear view of the work that keeps a school moving.</p>
    </div>
    <div className="grid overflow-hidden rounded-[10px] border border-[#d9e1e6] bg-white shadow-[0_24px_80px_rgba(21,43,60,.09)] sm:grid-cols-[1.1fr_.9fr]">
      <div className="border-b border-[#e6ecef] p-5 sm:border-b-0 sm:border-r sm:p-8">
        <div className="flex items-center justify-between"><div><p className="text-xs font-semibold text-[#172638]">Good afternoon, Richard</p><p className="mt-1 text-[10px] text-[#8a98a4]">Term 2 · 2026</p></div><span className="rounded-full bg-[#edf3fb] px-2 py-1 text-[10px] text-[#315fc1]">Administrator</span></div>
        <div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-md bg-[#f5f8fb] p-4"><Users className="text-[#315fc1]" size={16}/><p className="mt-4 text-2xl font-semibold text-[#172638]">5</p><p className="mt-1 text-[10px] text-[#7a8996]">Pupils across classes</p></div><div className="rounded-md bg-[#f3faf7] p-4"><CalendarCheck2 className="text-[#13866d]" size={16}/><p className="mt-4 text-2xl font-semibold text-[#172638]">100%</p><p className="mt-1 text-[10px] text-[#7a8996]">Attendance recorded</p></div></div>
        <div className="mt-4 rounded-md border border-[#e6ecef] p-4"><div className="flex items-center justify-between"><p className="text-xs font-semibold text-[#2b4354]">Attendance overview</p><span className="text-[10px] text-[#8a98a4]">This month</span></div><div className="mt-7 flex h-16 items-end gap-2">{[38,52,45,66,58,73,70,88,82,96,90,100].map((height, index) => <span key={index} className="flex-1 rounded-t-sm bg-[#dfeaf9]" style={{ height: `${height}%` }} />)}</div></div>
      </div>
      <div className="bg-[#f8fafb] p-5 sm:p-8"><div className="flex items-center gap-2"><BarChart3 className="text-[#315fc1]" size={16}/><p className="text-xs font-semibold text-[#172638]">Today at a glance</p></div><div className="mt-5 space-y-3">{[['Mark attendance','Record today’s sessions'],['Review performance','See results and progress'],['Manage accounts','Keep fees and payments clear']].map(([title, note]) => <div key={title} className="flex items-center justify-between border-b border-[#e3eaee] pb-3"><div><p className="text-xs font-medium text-[#294456]">{title}</p><p className="mt-1 text-[10px] text-[#8997a3]">{note}</p></div><ArrowRight className="text-[#9aabb5]" size={14}/></div>)}</div><p className="mt-8 max-w-xs text-xs leading-5 text-[#71808d]">ACS brings pupil records, attendance, academics, and administration into one calm working view.</p></div>
    </div>
  </div>
}

export default function HomePage() { return <><div className="border-b border-[#e8edef] bg-[#f4f7f8] px-5 py-2.5 text-center text-[11px] text-[#526b7b]">Launching ACS — <strong className="text-[#152b3c]">first 20 schools get 2 months free.</strong> <Link className="ml-1 underline underline-offset-4" href="/get-started">Claim your free trial</Link></div><section className="mx-auto max-w-[1180px] px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32"><p className="eyebrow">Academic Cloud System</p><h1 className="mt-5 max-w-3xl text-[clamp(3.4rem,8vw,6.5rem)] font-semibold leading-[.92] tracking-[-.08em]">Manage your school. Simply.</h1><p className="mt-7 max-w-xl text-base leading-7 text-[#617281] sm:text-lg">ACS brings essential school management tools together in one connected platform.</p><div className="mt-8 flex flex-wrap items-center gap-5"><Link className="button-primary" href="/get-started">Start free trial <ArrowRight className="ml-2 inline" size={15}/></Link><Link className="text-sm font-medium text-[#516b7d]" href="/features">Explore features <ArrowRight className="ml-1 inline" size={15}/></Link></div><div className="mt-16 sm:mt-20"><PlatformOverview /></div></section><section className="border-y border-[#e9edef] bg-white"><div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28"><p className="eyebrow">The platform</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-.06em] sm:text-5xl">Everything your school needs. In one place.</h2><div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(([title,text])=><div className="border-t border-[#dfe6ea] pt-4" key={title}><h3 className="text-[15px] font-medium text-[#263d4f]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#71808d]">{text}</p></div>)}</div></div></section><section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28"><div className="grid gap-12 lg:grid-cols-2 lg:gap-24"><div><p className="eyebrow">Your school. Your workspace.</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">One platform. Every school has its own space.</h2><p className="mt-5 max-w-md text-[15px] leading-7 text-[#617281]">Each school operates in its own workspace with its own users, pupil records, and daily information.</p></div><div className="rounded-lg border border-[#dfe6ea] bg-[#f8fafb] p-8"><div className="mx-auto max-w-xs text-center"><div className="rounded-md border border-[#cad7df] bg-white px-5 py-4 text-sm font-medium shadow-sm">ACS platform</div><div className="mx-auto h-8 w-px bg-[#cdd9df]"/><div className="grid grid-cols-3 gap-2">{['School A','School B','School C'].map(s=><div className="rounded-md border border-[#dfe6ea] bg-white px-2 py-3 text-[11px] text-[#617281]" key={s}>{s}</div>)}</div></div></div></div></section><CTA/></> }
