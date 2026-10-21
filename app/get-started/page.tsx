'use client'

import { useEffect } from 'react'
import { appSignupUrl } from '@/lib/site'

export default function Page() {
  useEffect(() => {
    window.location.replace(appSignupUrl)
  }, [])
  return (
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col justify-center px-5 py-24 text-center">
      <p className="text-[13px] text-copy">
        Taking you to the signup page…{' '}
        <a className="link-brand" href={appSignupUrl}>
          Continue
        </a>
      </p>
    </main>
  )
}
