"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Header from "@/components/sections/Header";

export default function Page() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1.2, ease: "easeOut" },
    }),
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #111111 5%, #9a753e 80%, #111111 100%)",
      }}
    >
      <Header />

      <div className="w-[90%] md:w-[80%] mt-20 relative">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-center marcellus text-white mb-16">
          A<span className="text-2xl md:text-3xl">BOUT</span> K
          <span className="text-2xl md:text-3xl">NECTHOTEL</span>
        </h1>

        {/* Capsules (desktop only) */}
        <div className="hidden lg:flex absolute top-1/3 right-0 space-x-10 z-20">
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

        {/* Mobile/Tablet Blocks */}
        <div className="flex flex-col lg:hidden space-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#9A753E]/80 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/about-mission.png"
              alt="MISSION"
              width={800}
              height={500}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 text-[#f9e7b7]">
                MISSION
              </h2>
              <p className="text-sm leading-relaxed marcellus-sc">
                At KnectHotel, we revolutionize hotel operations with intelligent
                automation, enhancing guest satisfaction, optimizing efficiency,
                and fostering stronger teams—transforming the way hospitality
                thrives in the digital era.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#9A753E]/80 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/about-vision.png"
              alt="VISION"
              width={800}
              height={500}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 text-[#f9e7b7]">VISION</h2>
              <p className="text-sm leading-relaxed marcellus-sc">
                To redefine hospitality by seamlessly connecting people,
                technology, and experiences—empowering hotels to operate smarter
                and deliver unforgettable stays.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#9A753E] flex flex-col w-full sm:w-[85%] md:w-[80%] space-y-2 rounded-2xl px-6 sm:px-10 py-8 sm:pr-20 md:pr-44 text-white relative z-10 mt-20 sm:mt-28 shadow-md"
        >
          <h1 className="marcellus text-2xl sm:text-3xl text-center sm:text-left">
            Discover Our Story, Vision, and Commitment
          </h1>
          <p className="marcellus-sc text-sm sm:text-base leading-relaxed">
            At KnectHotel, we set out with a clear mission: to revolutionize
            hotel management by bridging the gap between technology and
            hospitality. Born from a deep understanding of the challenges faced
            by hotel staff and guests alike, we envisioned a platform that
            simplifies operations, enhances guest experiences, and drives
            efficiency across every touchpoint.
          </p>
          <p className="marcellus-sc text-sm sm:text-base leading-relaxed">
            What began as an idea to create smarter tools for hotels has evolved
            into a comprehensive SaaS solution that empowers hotels to thrive in
            a fast-paced, ever-changing industry. By integrating advanced
            features like real-time order management, guest communication,
            analytics, and personalized services into one platform, we’ve
            created a product that doesn’t just streamline processes but
            transforms the way hotels operate.
          </p>
          <p className="marcellus-sc text-sm sm:text-base leading-relaxed">
            Today, KnectHotel is proud to serve hotels of all sizes, helping
            them deliver exceptional experiences to their guests while making
            their operations more efficient, organized, and future-ready. We are
            committed to innovation, simplicity, and excellence—bringing hotels
            and guests closer than ever before.
          </p>
          <p className="marcellus-sc text-sm sm:text-base leading-relaxed">
            This is just the beginning of our journey, and we’re excited to
            continue growing with you.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// ✅ Capsule Component (Desktop only - unchanged)
const HoverCapsule = ({ title, imgSrc, text }) => {
  const capsuleControls = useAnimation();
  const imageControls = useAnimation();
  const titleControls = useAnimation();
  const textControls = useAnimation();

  // Hover in animation
  const handleMouseEnter = () => {
    capsuleControls.start({
      backgroundColor: "#5a3e1b",
      borderRadius: "20%",
      width: 360,
      height: 360,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    });
    imageControls.start({ opacity: 0, transition: { duration: 0.4 } });
    titleControls.start({
      rotate: 0,
      top: 42,
      fontSize: "2.5rem",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    textControls.start({
      opacity: 1,
      y: 0,
      fontSize: "1.1rem",
      transition: { duration: 0.5, delay: 0.4 },
    });
  };

  // Hover out animation
  const handleMouseLeave = () => {
    capsuleControls.start({
      backgroundColor: "#9A753E",
      borderRadius: "50% / 50%",
      width: 180,
      height: 360,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    imageControls.start({ opacity: 1, transition: { duration: 0.4 } });
    titleControls.start({
      rotate: -90,
      top: "50%",
      fontSize: "3rem",
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
        borderRadius: "50% / 50%",
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
        className="absolute left-1/2 -translate-x-1/2 text-5xl marcellus tracking-widest font-semibold z-10"
      >
        {title}
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        animate={textControls}
        initial={{ opacity: 0, y: 20 }}
        className="absolute bottom-4 left-0 right-0 px-4 text-center text-md marcellus-sc z-10"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
