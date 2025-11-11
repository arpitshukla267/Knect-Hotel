"use client";
import React from "react";

export default function Integration() {
  const logos = [
    "/integration-1.png",
    "/razorpay.png",
    "/aws.png",
    "/stripe.png",
    "/cashfree.png",
    "/integration-1.png",
    "/razorpay.png",
    "/aws.png",
    "/stripe.png",
    "/cashfree.png",
  ];

  return (
    <div
      suppressHydrationWarning
      className="text-center text-white overflow-hidden relative pt-20 px-4 sm:px-6"
      // style={{
      //   background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      // }}
    >
      <h1 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-10 marcellus">
        50+ Integration Worldwide
      </h1>

      {/* ✅ Continuous Scrolling Row */}
      <div className="relative w-full overflow-hidden py-8 sm:py-12">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-block w-[120px] sm:w-[180px] mx-6 sm:mx-10 transition-transform duration-300 hover:scale-110"
            >
              <img
                src={logo}
                alt="logo"
                className="w-full h-auto mx-auto my-auto object-contain opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="max-w-2xl mx-auto mt-8 sm:mt-10 text-gray-200 marcellus text-xs sm:text-sm leading-relaxed px-2">
        Seamlessly connected with 50+ booking platforms and supporting 50+
        currencies, we integrate effortlessly with the tools you already use—
        helping you run your business with greater efficiency.
      </p>

      <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2 marcellus rounded-xl bg-white/40 text-black font-semibold hover:bg-[#b88e52] transition-all hover:cursor-pointer text-sm sm:text-base">
        Explore Integration
      </button>

      {/* ✅ Stats Section */}
      <div className="w-full marcellus bg-black/90 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mt-10 sm:mt-12 p-5 sm:p-10">
        <div className="flex-1 text-center">
          <div className="text-3xl sm:text-5xl font-bold text-white">100+</div>
          <div className="text-base sm:text-lg text-gray-200 mt-1 sm:mt-2">
            Hotels Onboarded
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl sm:text-5xl font-bold text-white">1,378</div>
          <div className="text-base sm:text-lg text-gray-200 mt-1 sm:mt-2">
            Satisfied Customers
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl sm:text-5xl font-bold text-white">10+</div>
          <div className="text-base sm:text-lg text-gray-200 mt-1 sm:mt-2">
            Partnerships
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl sm:text-5xl font-bold text-white">24/7</div>
          <div className="text-base sm:text-lg text-gray-200 mt-1 sm:mt-2">
            Support
          </div>
        </div>
      </div>
    </div>
  );
}
