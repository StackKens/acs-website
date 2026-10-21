'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ACSMark } from '@/components/acs-mark'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Escape closes the menu and returns focus to the trigger.
  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <ACSMark size={32} className="shrink-0" title={null} />
          <span className="text-[26px] font-bold lowercase tracking-[-0.02em] text-ink">acs</span>
        </Link>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-btn border border-line bg-white nav:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav
          id="primary-nav"
          aria-label="Main"
          className={`${
            open ? 'flex' : 'hidden'
          } absolute inset-x-0 top-20 flex-col border-b border-line bg-white px-[clamp(20px,4vw,48px)] pb-5 pt-2 nav:static nav:flex nav:flex-row nav:items-center nav:gap-7 nav:border-0 nav:p-0`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`flex min-h-11 items-center border-b border-line py-3.5 text-[14.5px] font-medium transition-colors nav:border-0 nav:py-0 ${
                isActive(link.href) ? 'text-brand' : 'text-copy hover:text-brand'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 self-stretch nav:mt-0 nav:self-auto"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

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
