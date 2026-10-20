'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { appLoginUrl } from '@/lib/site'
import { ACSMark } from '@/components/acs-mark'

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/user-guide', label: 'Guide' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <ACSMark size={32} className="shrink-0" title={null} />
          <span className="flex flex-col leading-none">
            <span className="text-[16px] font-semibold tracking-[-0.03em] text-ink">ACS</span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-copy">
              Academic Cloud System
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a className="nav-link" href={appLoginUrl}>
            Login
          </a>
          <Link className="btn-primary btn-sm" href="/get-started">
            Get started
          </Link>
        </div>

        <button
          type="button"
          className="rounded-[7px] p-2 text-ink transition-colors hover:bg-surface lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-line bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[7px] px-3 py-2.5 text-[15px] font-medium text-copy transition-colors hover:bg-surface hover:text-ink"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-5 border-t border-line pt-4">
              <a className="nav-link" href={appLoginUrl}>
                Login
              </a>
              <Link className="btn-primary btn-sm" href="/get-started" onClick={() => setOpen(false)}>
                Get started
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
    </div>
  )
}
