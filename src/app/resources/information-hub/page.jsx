"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/sections/Header";

const categories = [
  {
    title: "User Guides",
    description: "Comprehensive step-by-step guides for using all platform features.",
    items: [
      "Getting Started Guide",
      "Dashboard Overview",
      "Reservation Management",
      "Channel Manager Setup",
      "Payment Processing",
    ],
    icon: "📚",
  },
  {
    title: "API Documentation",
    description: "Technical documentation for developers and integrators.",
    items: [
      "API Reference",
      "Authentication Guide",
      "Webhook Integration",
      "SDK Libraries",
      "Rate Limits",
    ],
    icon: "🔧",
  },
  {
    title: "Policy Documents",
    description: "Terms of service, privacy policies, and compliance information.",
    items: [
      "Terms of Service",
      "Privacy Policy",
      "Data Protection",
      "Security Standards",
      "Compliance Certifications",
    ],
    icon: "📋",
  },
  {
    title: "Best Practices",
    description: "Industry best practices and optimization strategies.",
    items: [
      "Revenue Optimization",
      "Guest Experience Tips",
      "Operational Efficiency",
      "Marketing Strategies",
      "Staff Training",
    ],
    icon: "⭐",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function InformationHubPage() {
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
            Information Hub
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl marcellus leading-tight"
          >
            Centralized Knowledge Base
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto manrope-regular"
          >
            Access all documentation, guides, policies, and resources in one convenient location.
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
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
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl marcellus mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-white/80 manrope-regular mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm text-white/85 manrope-regular"
                    >
                      <span className="text-yellow-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-20 bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 backdrop-blur-lg"
        >
          <h2 className="text-2xl sm:text-3xl marcellus mb-4 text-center">
            Search Documentation
          </h2>
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for guides, docs, or policies..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 manrope-regular"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

