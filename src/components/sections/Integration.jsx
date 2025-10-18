"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Integration() {
  const logos = [
    "/integration-1.png",
    "/razorpay.png",
    "/aws.png",
    "/stripe.png",
    "/cashfree.png",
  ];

  // Duplicate logos for infinite scroll
  const allLogos = [...logos, ...logos];
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(null);
  

  const LOGO_WIDTH = 200;
  const GAP = 160; // same as Tailwind gap-20
  const TOTAL_WIDTH = LOGO_WIDTH + GAP;

  useEffect(() => {
    let xPos = 0;
    let frame;
    let lastPauseTime = 0;

    const animate = () => {
      const container = containerRef.current;
      if (!container) return;

      // Move container continuously
      xPos -= 3; // speed (px per frame)
      container.style.transform = `translateX(${xPos}px)`;

      // Reset for infinite scroll
      // if (Math.abs(xPos) >= logos.length * TOTAL_WIDTH) {
      //   xPos = 0;
      // }

      // Find which logo is closest to center
      const centerX = window.innerWidth / 2;
      const items = Array.from(container.children);

      let closestIndex = null;
      let minDistance = Infinity;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });

      setCenterIndex(closestIndex);

      // Pause for 1s when a logo hits center
      // const now = performance.now();
      // if (minDistance < 10 && now - lastPauseTime > 1500) {
      //   lastPauseTime = now;
      //   setTimeout(() => {
      //     frame = requestAnimationFrame(animate);
      //   }, 500);
      //   return;
      // }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [logos.length]);

  return (
    <div
      className="text-center text-white overflow-hidden relative"
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <h1 className="text-3xl my-15 font-semibold mb-10 marcellus">
        50+ Integration Worldwide
      </h1>

      <div className="relative w-full py-20 flex justify-center items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex items-center gap-20"
          style={{ willChange: "transform" }}
        >
          {[...allLogos, ...allLogos, ...allLogos, ...allLogos, ...allLogos, ...allLogos].map((logo, index) => {
            const active = index === centerIndex;
            return (
              <motion.div
                key={index}
                animate={{
                  scale: active ? 1.6 : 1,
                  opacity: active ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                className="w-[200px] h-[200px] flex justify-center items-center"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="object-contain w-full h-full"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <p className="max-w-2xl mx-auto mt-10 text-gray-200 marcellus text-sm leading-relaxed">
        Seamlessly connected with 50+ booking platforms and supporting 50+
        currencies, we integrate effortlessly with the tools you already use—
        helping you run your business with greater efficiency.
      </p>

      <button className="mt-8 px-6 marcellus py-2 rounded-xl bg-white/40 text-black font-semibold hover:bg-[#b88e52] transition-all hover:cursor-pointer">
        Explore Integration
      </button>

      <div className="w-full marcellus bg-black/90 rounded-xl flex flex-col md:flex-row justify-between items-center gap-8 mt-12 p-6 md:p-10">
        <div className="flex-1 text-center">
          <div className="text-4xl md:text-5xl font-bold text-white">100+</div>
          <div className="text-lg text-gray-200 mt-2">Hotels Onboarded</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-4xl md:text-5xl font-bold text-white">1,378</div>
          <div className="text-lg text-gray-200 mt-2">Satisfied Customers</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-4xl md:text-5xl font-bold text-white">10+</div>
          <div className="text-lg text-gray-200 mt-2">Partnerships</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-4xl md:text-5xl font-bold text-white">24/7</div>
          <div className="text-lg text-gray-200 mt-2">Support</div>
        </div>
      </div>
    </div>
  );
}
