"use client";
import React from "react";
import Image from "next/image";

export default function Blog() {
  return (
    <div
      className="flex flex-col justify-center items-center text-center text-white py-20"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #9a753e 80%, #111111 100%)",
      }}
    >
        
      {/* Image grid */}
      <div className="flex justify-center items-center gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-4 grayscale">
          <Image
            src="/blog-left-1.png"
            alt="Blog Left 1"
            width={300}
            height={250}
            className="rounded-xl object-cover"
          />
          <Image
            src="/blog-left-2.png"
            alt="Blog Left 2"
            width={300}
            height={150}
            className="rounded-xl object-cover"
          />
          <Image
            src="/blog-left-3.png"
            alt="Blog Left 3"
            width={300}
            height={150}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="relative flex flex-col items-center">
          <h1 className="marcellus my-5 text-5xl">Blog</h1>
          <Image
            src="/blog-center.png"
            alt="Blog Center"
            width={500}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
          {/* Content */}
          <div className="mt-10 max-w-xl">
            <h3 className="text-2xl font-semibold mb-4 marcellus">KnectHotel</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-6 marcellus-sc">
              The application consolidates essential hotel management functions such
              as check-in and check-out processes, housekeeping coordination,
              billing, and guest communication into a single, easy-to-use system.
            </p>
            <button className="px-6 py-2 bg-white/50 hover:cursor-pointer text-black font-semibold rounded-lg hover:bg-[#b88e52] transition-all">
              Explore more
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 grayscale">
          <Image
            src="/blog-right-1.png"
            alt="Blog Right 1"
            width={300}
            height={150}
            className="rounded-xl object-cover"
          />
          <Image
            src="/blog-right-2.png"
            alt="Blog Right 2"
            width={300}
            height={150}
            className="rounded-xl object-cover"
          />
          <Image
            src="/blog-right-3.png"
            alt="Blog Right 3"
            width={300}
            height={150}
            className="rounded-xl object-cover"
          />
        </div>
      </div>


    </div>
  );
}
