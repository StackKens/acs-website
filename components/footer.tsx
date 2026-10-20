import Link from 'next/link'

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/user-guide', label: 'User guide' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About ACS' },
      { href: '/contact', label: 'Contact' },
      { href: '/get-started', label: 'Get started' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_2fr] md:py-16">
        <div>
          <p className="text-[16px] font-semibold tracking-[-0.03em] text-ink">ACS</p>
          <p className="mt-2 text-[13px] leading-5 text-copy">Academic Cloud System</p>
          <p className="mt-4 max-w-xs text-[13px] leading-6 text-copy">
            A practical school management platform, built around primary schools in Uganda.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="t-eyebrow text-copy">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link className="text-[14px] text-copy transition-colors hover:text-ink" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-[12px] text-copy sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ACS · A product by Vexel Labs</p>
          <p>Call +256 755 038 100 · stackkens@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}
