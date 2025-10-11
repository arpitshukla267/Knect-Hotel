import Header from '@/components/sections/Header'
import React from 'react'
import Hero from '@/components/sections/Hero'
import CentralizedServices from '@/components/sections/Centralized-Services'
import HotelGallery from '@/components/sections/Hotel-Gallery'
import Integration from '@/components/sections/Integration'
import Blog from '@/components/sections/Blog'
import Review from '@/components/sections/Review'

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <CentralizedServices />
      <HotelGallery />
      <Integration />
      <Blog />
      <Review />
    </div>
  )
}

export default page