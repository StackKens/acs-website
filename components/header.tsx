'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { appLoginUrl } from '@/lib/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-[#e6ecef] bg-[#fbfcfd]/95 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 sm:px-8">
      <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}><span className="grid size-8 place-items-center rounded-[8px] bg-[#152b3c] text-[11px] font-bold tracking-[-.08em] text-white">AC</span><span className="text-[16px] font-semibold tracking-[-.03em] text-[#152b3c]">ACS</span></Link>
      <nav className="hidden items-center gap-8 md:flex"><Link className="nav-link" href="/features">Features</Link><Link className="nav-link" href="/pricing">Pricing</Link><Link className="nav-link" href="/contact">Contact</Link></nav>
      <div className="hidden items-center gap-5 md:flex"><a className="nav-link" href={appLoginUrl}>Login</a><Link className="button-primary" href="/get-started">Get started</Link></div>
      <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
    </div>
    {open && <nav className="border-t border-[#e6ecef] bg-[#fbfcfd] px-5 py-5 md:hidden"><div className="flex flex-col gap-5"><Link onClick={() => setOpen(false)} className="nav-link" href="/features">Features</Link><Link onClick={() => setOpen(false)} className="nav-link" href="/pricing">Pricing</Link><Link onClick={() => setOpen(false)} className="nav-link" href="/contact">Contact</Link><div className="flex gap-5 border-t border-[#e6ecef] pt-5"><a onClick={() => setOpen(false)} className="nav-link" href={appLoginUrl}>Login</a><Link onClick={() => setOpen(false)} className="font-medium text-[#152b3c]" href="/get-started">Get started</Link></div></div></nav>}
  </header>
}

export function PageShell({ children }: { children: React.ReactNode }) { return <main className="min-h-screen bg-[#fbfcfd] text-[#152b3c]"><Header />{children}</main> }
