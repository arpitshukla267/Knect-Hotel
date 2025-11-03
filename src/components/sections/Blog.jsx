"use client";
import React from "react";
import Image from "next/image";

export default function Blog() {
  return (
    <div
      className="flex flex-col justify-center items-center text-center text-white py-20 px-4 sm:px-6"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      {/* ✅ Image grid */}
      <div className="flex flex-col lg:flex-row justify-center items-center md:gap-8 w-full">
        {/* ✅ Left Column */}
        <div className="flex flex-row lg:flex-col gap-3 sm:gap-4 grayscale justify-cente overflow-x-auto">
          <Image
            src="/blog-left-1.png"
            alt="Blog Left 1"
            width={300}
            height={250}
            className="rounded-xl object-cover w-[45%] sm:w-[250px] lg:w-[300px] mx-auto"
          />
          <Image
            src="/blog-left-2.png"
            alt="Blog Left 2"
            width={300}
            height={150}
            className="rounded-xl object-cover w-[45%] sm:w-[250px] lg:w-[300px] mx-auto"
          />
          <Image
            src="/blog-left-3.png"
            alt="Blog Left 3"
            width={300}
            height={150}
            className="rounded-xl object-cover w-[45%] sm:w-[250px] lg:w-[300px] mx-auto"
          />
        </div>

        {/* ✅ Center Image and Content */}
        <div className="relative flex flex-col items-center mt-10 lg:mt-0">
          <h1 className="marcellus my-5 text-3xl sm:text-4xl lg:text-5xl">
            Blog
          </h1>
          <Image
            src="/blog-center.png"
            alt="Blog Center"
            width={500}
            height={400}
            className="rounded-xl object-cover shadow-lg w-full max-w-[400px] sm:max-w-[500px]"
          />

          {/* ✅ Content */}
          <div className="mt-6 sm:mt-10 max-w-md sm:max-w-xl px-2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 marcellus">
              KnectHotel
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 marcellus-sc">
              The application consolidates essential hotel management functions
              such as check-in and check-out processes, housekeeping coordination,
              billing, and guest communication into a single, easy-to-use system.
            </p>
            <button className="px-5 sm:px-6 py-2 bg-white/50 text-black font-semibold rounded-lg hover:bg-[#b88e52] transition-all hover:cursor-pointer text-sm sm:text-base">
              Explore more
            </button>
          </div>
        </div>

        {/* ✅ Right Column */}
        <div className="flex flex-row lg:flex-col py-16 md:py-0 gap-3 sm:gap-4 grayscale justify-cente overflow-x-auto">
          <Image
            src="/blog-right-1.png"
            alt="Blog Right 1"
            width={300}
            height={250}
            className="rounded-xl object-cover w-[45%] sm:w-[250px] lg:w-[300px] mx-auto"
          />
          <Image
            src="/blog-right-2.png"
            alt="Blog Right 2"
            width={300}
            height={150}
            className="rounded-xl object-cover w-[45%] sm:w-[250px] lg:w-[300px] mx-auto"
          />
          <Image
            src="/blog-right-3.png"
            alt="Blog Right 3"
            width={300}
            height={150}
            className="rounded-xl object-cover w-[45%] sm:w-[250px] lg:w-[300px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
