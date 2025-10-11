"use client";
import Image from "next/image";
import React from "react";

export default function CentralizedServices() {
  return (
    <div
      className=" text-white flex flex-col w-full"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #9a753e 85%, #111111 100%)",
      }}
    >
      {/* Top Media Logos Full Width */}
      <div className="w-full lg:px-20 md:px-8 md:py-10 mt-8 px-3">
        <div className="relative w-full md:h-10 h-6">
          <Image
            src="/logos.png"
            alt="Media Logos"
            fill
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-around px-6 md:px-20 py-16 gap-10">
        {/* Left Text */}
        <div className="max-w-lg text-left space-y-6 flex-1">
          <h1 className=" marcellus text-2xl text-center md:text-left lg:text-5xl leading-tight">
            Centralize your services with seamlessly integrated Shops.
          </h1>
          <p className="text-gray-300 text-center md:text-left lg:text-lg text-sm leading-relaxed">
            The application consolidates essential hotel management functions
            such as check-in and check-out processes, housekeeping coordination,
            billing, and guest communication into a single, easy-to-use system.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4 flex-wrap">
            <button className="lg:px-6 px-3 lg:py-3 py-2 bg-white/20 backdrop-blur-md lg:text-md hover:bg-white/30 hover:cursor-pointer hover:text-yellow-400 text-white lg:font-semibold rounded-lg transition">
              Get Started
            </button>
            <button className="lg:px-6 px-3 lg:py-3 py-2 bg-white/20 backdrop-blur-md lg:text-md hover:bg-white/30 hover:cursor-pointer hover:text-yellow-400 text-white lg:font-semibold rounded-lg transition">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/services.png"
            alt="App Preview"
            fill
            className="rounded-lg object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Top Media Logos Full Width */}
        <div className="w-full md:hidden ">
          <div className="relative w-full h-96">
            <Image
              src="/services.png"
              alt="Media Logos"
              fill
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
