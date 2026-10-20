import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PageShell } from '@/components/acs-site'
export default function NotFound(){return <PageShell><section className="grid min-h-[65vh] place-items-center px-6 py-20 text-center"><div><p className="eyebrow">404 · Page not found</p><h1 className="section-title mt-4">That page is not here.</h1><p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#617188]">The link may have changed, or the page may still be being prepared.</p><div className="mt-8 flex justify-center gap-3"><Link className="btn btn-primary" href="/">Back home <ArrowLeft size={15}/></Link><Link className="btn border border-[#DEE6F0]" href="/contact">Contact ACS</Link></div></div></section></PageShell>}
