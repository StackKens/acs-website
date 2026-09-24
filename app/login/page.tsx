'use client'

import { useEffect } from 'react'
import { appLoginUrl } from '@/lib/site'

export default function Page() {
  useEffect(() => {
    window.location.replace(appLoginUrl)
  }, [])
  return (
    <main className="mx-auto max-w-[480px] px-5 py-24 text-center sm:px-8">
      <p className="text-sm text-[#617281]">
        Taking you to the login page…{' '}
        <a className="underline underline-offset-4" href={appLoginUrl}>
          Continue
        </a>
      </p>
    </main>
  )
}
