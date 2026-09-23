'use client'

import { useEffect } from 'react'
import { appSignupUrl } from '@/lib/site'

/** Self-serve school signup lives in the app; this route hands off to it. */
export default function Page() {
  useEffect(() => {
    window.location.replace(appSignupUrl)
  }, [])
  return (
    <main className="mx-auto max-w-[480px] px-5 py-24 text-center sm:px-8">
      <p className="text-sm text-[#617281]">
        Taking you to the signup page…{' '}
        <a className="underline underline-offset-4" href={appSignupUrl}>
          Continue
        </a>
      </p>
    </main>
  )
}
