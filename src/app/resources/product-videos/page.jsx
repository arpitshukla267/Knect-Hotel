"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/sections/Header";

const videos = [
  {
    title: "Platform Overview & Dashboard Tour",
    description: "Get a comprehensive overview of the Knect Hotel platform and explore the intuitive dashboard interface.",
    duration: "5:32",
    thumbnail: "/gallery-1.png",
  },
  {
    title: "Reservation Management Deep Dive",
    description: "Learn how to efficiently manage bookings, check-ins, and check-outs with our advanced reservation system.",
    duration: "8:15",
    thumbnail: "/gallery-2.png",
  },
  {
    title: "Channel Manager Setup Guide",
    description: "Step-by-step tutorial on connecting and managing multiple booking channels through our channel manager.",
    duration: "12:45",
    thumbnail: "/gallery-3.png",
  },
  {
    title: "AI Assistant Features & Automation",
    description: "Discover how our AI assistant can automate tasks and enhance your hotel operations.",
    duration: "7:20",
    thumbnail: "/gallery-4.png",
  },
  {
    title: "Guest Communication Tools",
    description: "Explore messaging features, automated notifications, and guest engagement tools.",
    duration: "6:50",
    thumbnail: "/gallery-5.png",
  },
  {
    title: "Payment Processing & Invoicing",
    description: "Master the payment gateway integration and learn how to generate professional invoices.",
    duration: "9:15",
    thumbnail: "/gallery-6.png",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProductVideosPage() {
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
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 pt-24 pb-16">
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
            Product Videos
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl marcellus leading-tight"
          >
            Learn Through Video Tutorials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto manrope-regular"
          >
            Watch comprehensive video guides and product demos to master every feature of Knect Hotel.
          </motion.p>
        </motion.div>

        {/* Video Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => {
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
                className="group bg-white/10 backdrop-blur rounded-2xl border border-white/15 overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-video bg-white/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur"
                    >
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg sm:text-xl marcellus mb-2 group-hover:text-yellow-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-white/80 manrope-regular leading-relaxed">
                    {video.description}
                  </p>
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
            Need More Help?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 manrope-regular max-w-2xl mx-auto mb-6">
            Our support team is available 24/7 to assist you with any questions or technical issues.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-white/70 text-black font-semibold marcellus text-sm sm:text-base shadow-lg shadow-[#9a753e]/40 transition-colors hover:bg-white"
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

