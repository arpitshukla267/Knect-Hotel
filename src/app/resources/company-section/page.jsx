"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/sections/Header";
import Image from "next/image";

const leadership = [
  {
    name: "Mr Subhash Mehta",
    img: "/founder-1.png",
    role: "Founder & CEO",
    tagline: "Driving innovation and redefining the future of hospitality tech.",
  },
  {
    name: "Mrs Sudha Mehta",
    img: "/founder-2.png",
    role: "Co-Founder & Director",
    tagline: "Leading with empathy, vision, and commitment to excellence.",
  },
];

const values = [
  {
    title: "Innovation",
    description: "We continuously push boundaries to deliver cutting-edge solutions.",
  },
  {
    title: "Customer First",
    description: "Our clients' success is at the heart of everything we do.",
  },
  {
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices.",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every product, service, and interaction.",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CompanySectionPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <div
      className="min-h-screen w-full text-white flex flex-col items-center"
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header />
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="uppercase tracking-[0.35em] text-xs sm:text-sm text-white/80"
          >
            Company
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl marcellus leading-tight"
          >
            About Knect Hotel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto manrope-regular"
          >
            Learn about our mission, values, and leadership team driving innovation in hospitality technology.
          </motion.p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-8 sm:p-10 mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl marcellus mb-4">Our Mission</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 manrope-regular leading-relaxed max-w-4xl mx-auto">
            To empower hotels and vacation rentals with intelligent, integrated technology solutions that streamline operations,
            enhance guest experiences, and drive sustainable growth.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {values.map((value, index) => {
            const itemRef = useRef(null);
            const itemInView = useInView(itemRef, { once: true, amount: 0.2 });
            return (
              <motion.div
                key={index}
                ref={itemRef}
                variants={fadeUpVariants}
                initial="hidden"
                animate={itemInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-6 sm:p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl marcellus mb-3 text-yellow-400">{value.title}</h3>
                <p className="text-sm sm:text-base text-white/85 manrope-regular leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl marcellus mb-10 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14 justify-items-center">
            {leadership.map((leader, index) => {
              const itemRef = useRef(null);
              const itemInView = useInView(itemRef, { once: true, amount: 0.2 });

              return (
                <motion.div
                  key={index}
                  ref={itemRef}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={itemInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur rounded-3xl border border-white/15 p-10 text-center hover:bg-white/15 transition-all duration-300 max-w-sm shadow-lg"
                >
                  <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-2 border-yellow-500 shadow-lg">
                    <Image
                      src={leader.img}
                      alt={leader.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-2xl marcellus mb-1">{leader.name}</h3>
                  <p className="text-base text-yellow-400 mb-3">{leader.role}</p>
                  <p className="text-sm text-white/80 italic max-w-xs mx-auto">{leader.tagline}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 backdrop-blur-lg text-center"
        >
          <h2 className="text-2xl sm:text-3xl marcellus mb-3">Join Our Mission</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 manrope-regular max-w-2xl mx-auto mb-6">
            Interested in learning more or partnering with us? Get in touch today.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-white/70 text-black font-semibold marcellus text-sm sm:text-base shadow-lg shadow-[#9a753e]/40 transition-colors hover:bg-white"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
