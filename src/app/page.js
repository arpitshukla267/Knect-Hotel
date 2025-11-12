"use client";

import React, { useEffect, useState } from "react";
import StartupLoader from "@/components/StartupLoader";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import CentralizedServices from "@/components/sections/Centralized-Services";
import HotelGallery from "@/components/sections/Hotel-Gallery";
import ClientOnlyIntegration from "@/components/ClientOnlyIntegration";
const Integration = ClientOnlyIntegration;
import Blog from "@/components/sections/Blog";
import Review from "@/components/sections/Review";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait until loader finishes
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative"
         style={{
           background: "radial-gradient(circle at 50% 50%, #9a753e -50%, #000000 100%)",
         }}
    >
      {!isLoaded && <StartupLoader />}
      <div suppressHydrationWarning className={`${!isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"} transition-opacity duration-700`}>
        <Header />
        <Hero />
        <CentralizedServices />
        <HotelGallery />
        <Integration />
        <Blog />
        <Review />
        <Contact />
      </div>
    </div>
  );
}

export default Page;
