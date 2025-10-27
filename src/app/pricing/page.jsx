import React, { Suspense } from 'react'
import PricingClient from '@/components/PricingClient'

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div />}> 
      <PricingClient />
    </Suspense>
  )
}
