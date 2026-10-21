import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { GuidePage } from '@/components/pages/guide'
import { canonical } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: canonical('/user-guide') },
  title: 'User guide',
  description:
    'How ACS works — a plain-language guide for schools, teachers, parents and platform teams.',
}

export default function Page(){return <PageShell><GuidePage/><Footer/></PageShell>}
