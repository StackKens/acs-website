'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HomePage from '@/components/pages/home'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcfd] text-[#152b3c]">
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}
