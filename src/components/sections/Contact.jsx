"use client";
import React from "react";
import Header from "../sections/Header";
import { Vortex } from "../ui/vortex";

export default function Contact() {
  return (
    <div
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e -50%, #000000 100%)",
      }}
    >
      <Vortex
        particleCount={800}
        baseHue={40}
        backgroundColor="transparent" // IMPORTANT: make vortex canvas transparent
        className="flex flex-col items-center justify-center h-screen"
      >
        <Header />

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 z-10">
          {/* Title */}
          <div className="backdrop-blur-lg bg-white/5 border border-[#9a753e]/40 px-6 py-4 md:px-20 md:py-10 rounded-full shadow-[0_0_30px_rgba(154,117,62,0.4)]">
            <h1
              className="text-3xl md:text-8xl tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#f5e0c1] to-[#9a753e]"
              style={{
                fontFamily: "var(--font-montserrat-alt)",
                fontWeight: 600,
              }}
            >
              L<span className="text-2xl md:text-7xl">et’s</span> C
              <span className="text-2xl md:text-7xl">ollaborate</span>
            </h1>
          </div>

          {/* Button */}
          <a
            href="mailto:info@knecthotel.com"
            className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-[#9a753e]/40 rounded-full px-6 py-2 text-[#f5e0c1] hover:bg-[#9a753e]/20 transition-all backdrop-blur-md text-sm sm:text-base shadow-[0_0_20px_rgba(154,117,62,0.3)]"
          >
            Drop an Email
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#f5e0c1"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </Vortex>
    </div>
  );
}
