"use client";
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Header from "@/components/sections/Header";

export default function Page() {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #111111 5%, #9a753e 80%, #111111 100%)",
      }}
    >
      <Header />

      <div className="w-[80%] mt-20 relative">
        {/* Title */}
        <h1 className="text-5xl text-center marcellus text-white mb-16">
          A<span className="text-3xl">BOUT</span> K
          <span className="text-3xl">NECTHOTEL</span>
        </h1>

        {/* Capsules Wrapper */}
        <div className="absolute top-1/3 right-0 flex space-x-10 z-20">
          <HoverCapsule
            title="MISSION"
            imgSrc="/about-mission.png"
            text="At KnectHotel, we revolutionize hotel operations with intelligent automation, enhancing guest satisfaction, optimizing efficiency, and fostering stronger teams—transforming the way hospitality thrives in the digital era."
          />

          <HoverCapsule
            title="VISION"
            imgSrc="/about-vision.png"
            text="To redefine hospitality by seamlessly connecting people, technology, and experiences—empowering hotels to operate smarter and deliver unforgettable stays."
          />
        </div>

        {/* Base Story Section */}
        <div className="bg-[#9A753E] flex flex-col w-[80%] space-y-6 rounded-2xl px-10 py-8 pr-44 text-white relative z-10 mt-28 shadow-md">
          <h1 className="marcellus text-3xl">
            Discover Our Story, Vision, and Commitment
          </h1>
          <p className="marcellus-sc text-sm">
            At KnectHotel, we set out with a clear mission: to revolutionize hotel
            management by bridging the gap between technology and hospitality.
            Born from a deep understanding of the challenges faced by hotel staff
            and guests alike, we envisioned a platform that simplifies operations,
            enhances guest experiences, and drives efficiency across every
            touchpoint.
          </p>
          <p className="marcellus-sc text-sm">
            What began as an idea to create smarter tools for hotels has evolved
            into a comprehensive SaaS solution that empowers hotels to thrive in
            a fast-paced, ever-changing industry. By integrating advanced features
            like real-time order management, guest communication, analytics, and
            personalized services into one platform, we’ve created a product that
            doesn’t just streamline processes but transforms the way hotels
            operate.
          </p>
          <p className="marcellus-sc text-sm">
            Today, KnectHotel is proud to serve hotels of all sizes, helping them
            deliver exceptional experiences to their guests while making their
            operations more efficient, organized, and future-ready. We are
            committed to innovation, simplicity, and excellence—bringing hotels
            and guests closer than ever before.
          </p>
          <p className="marcellus-sc text-sm">
            This is just the beginning of our journey, and we’re excited to
            continue growing with you.
          </p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// ✅ Capsule Component (Inside same file)
const HoverCapsule = ({ title, imgSrc, text }) => {
  const capsuleControls = useAnimation();
  const imageControls = useAnimation();
  const titleControls = useAnimation();
  const textControls = useAnimation();

  // Mouse Enter
  const handleMouseEnter = () => {
    capsuleControls.start({
      backgroundColor: "#5a3e1b",
      borderRadius: "1.5rem",
      width: 340,
      height: 360,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    imageControls.start({ opacity: 0, transition: { duration: 0.4 } });
    titleControls.start({
      rotate: 0,
      top: 42,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    textControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 },
    });
  };

  // Mouse Leave
  const handleMouseLeave = () => {
    capsuleControls.start({
      backgroundColor: "#9A753E",
      borderRadius: "9999px",
      width: 180,
      height: 360,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    imageControls.start({ opacity: 1, transition: { duration: 0.4 } });
    titleControls.start({
      rotate: -90,
      top: "50%",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    textControls.start({
      opacity: 0,
      y: 20,
      transition: { duration: 0.4 },
    });
  };

  return (
    <motion.div
      animate={capsuleControls}
      initial={{
        backgroundColor: "#9A753E",
        borderRadius: "9999px",
        width: 180,
        height: 360,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden cursor-pointer text-white shadow-xl"
    >
      {/* Image */}
      <motion.div
        animate={imageControls}
        initial={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        animate={titleControls}
        initial={{ rotate: -90, top: "50%" }}
        className="absolute left-1/2 -translate-x-1/2 text-3xl marcellus tracking-widest font-semibold z-10"
      >
        {title}
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        animate={textControls}
        initial={{ opacity: 0, y: 20 }}
        className="absolute bottom-4 left-0 right-0 px-4 text-center text-sm marcellus-sc z-10"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
