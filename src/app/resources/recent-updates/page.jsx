"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Header from "@/components/sections/Header";

const updates = [
  {
    date: "March 15, 2024",
    title: "New AI Assistant Feature Released",
    description:
      "Introducing our advanced AI assistant that helps hotel staff automate routine tasks and improve guest communication.",
    category: "Product Update",
    image: "/images/update-ai.jpg",
  },
  {
    date: "March 10, 2024",
    title: "Enhanced Channel Manager Integration",
    description:
      "We've expanded our channel manager capabilities with support for 10+ new booking platforms and improved synchronization speeds.",
    category: "Integration",
    image: "/images/channel-manager.jpg",
  },
  {
    date: "March 5, 2024",
    title: "Mobile App Version 2.0 Launch",
    description:
      "Our redesigned mobile application offers improved performance, new features, and a more intuitive user experience.",
    category: "Product Update",
    image: "/images/mobile-app.jpg",
  },
  {
    date: "February 28, 2024",
    title: "Security Enhancement Update",
    description:
      "We've implemented advanced encryption protocols and multi-factor authentication to ensure your data remains secure.",
    category: "Security",
    image: "/images/security-update.jpg",
  },
  {
    date: "February 20, 2024",
    title: "New Payment Gateway Partners",
    description:
      "Added support for Razorpay, Stripe, and Cashfree, giving you more flexibility in payment processing options.",
    category: "Integration",
    image: "/images/payment-gateways.jpg",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RecentUpdatesPage() {
  const containerRef = useRef(null);

  return (
    <div
      className="min-h-screen w-full text-white flex flex-col items-center"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
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
            Recent Updates
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl marcellus leading-tight"
          >
            Latest News & Announcements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto manrope-regular"
          >
            Stay informed about the latest features, improvements, and important
            announcements from Knect Hotel.
          </motion.p>
        </motion.div>

        {/* Updates Grid */}
        <div ref={containerRef} className="space-y-10">
          {updates.map((update, index) => {
            const itemRef = useRef(null);
            const itemInView = useInView(itemRef, { once: true, amount: 0.3 });

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
                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                  {/* Image Section */}
                  <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate={itemInView ? "visible" : "hidden"}
                    className="relative w-full lg:w-1/3 h-56 sm:h-64 md:h-72 overflow-hidden rounded-xl"
                  >
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover rounded-xl scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </motion.div>

                  {/* Text Section */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                        {update.category}
                      </span>
                      <span className="text-xs text-white/60">
                        {update.date}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl marcellus mb-3">
                      {update.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white/85 manrope-regular leading-relaxed">
                      {update.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-20 bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 backdrop-blur-lg text-center"
        >
          <h2 className="text-2xl sm:text-3xl marcellus mb-3">
            Want to stay updated?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 manrope-regular max-w-2xl mx-auto mb-6">
            Subscribe to our newsletter for the latest updates and exclusive
            insights.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-white/70 text-black font-semibold marcellus text-sm sm:text-base shadow-lg shadow-[#9a753e]/40 transition-colors hover:bg-white"
          >
            Subscribe Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
