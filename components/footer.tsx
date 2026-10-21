import Link from 'next/link'
import { appLoginUrl } from '@/lib/site'

/**
 * Footer — a single line, per the reference.
 *
 * The reference lists Features, Pricing and Contact. Privacy, Terms and the
 * app login are kept here because they have no other entry point on the
 * site; without them those pages would be unreachable.
 */
const links = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line py-[22px]">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-center text-[12px] text-copy sm:flex-row sm:gap-x-7 sm:text-left">
        <span>ACS · Academic Cloud System</span>
        <nav aria-label="Footer" className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-brand">
              {link.label}
            </Link>
          ))}
          <a href={appLoginUrl} className="transition-colors hover:text-brand">
            Login
          </a>
          <span>© {new Date().getFullYear()} ACS. All rights reserved.</span>
        </nav>
      </div>
    </footer>
  )
}
