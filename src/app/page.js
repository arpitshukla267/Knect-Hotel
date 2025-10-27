import Header from '@/components/sections/Header'
import React from 'react'
import Hero from '@/components/sections/Hero'
import CentralizedServices from '@/components/sections/Centralized-Services'
import HotelGallery from '@/components/sections/Hotel-Gallery'
import ClientOnlyIntegration from '@/components/ClientOnlyIntegration'
const Integration = ClientOnlyIntegration;
import Blog from '@/components/sections/Blog'
import Review from '@/components/sections/Review'
import Contact from '@/components/sections/Contact'

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
      <Contact />
    </div>
  )
}

export default page