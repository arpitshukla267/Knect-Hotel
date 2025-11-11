"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/sections/Header";

const milestones = [
  {
    year: "2024",
    title: "100+ Hotels Onboarded",
    description:
      "Reached a major milestone with over 100 hotels and vacation rentals using our platform.",
    details:
      "This achievement demonstrates our growing trust within the hospitality industry, helping properties streamline their guest management and revenue systems with ease.",
    achievement: "Major Milestone",
    images: [
      "https://i.pinimg.com/736x/c3/6b/72/c36b7282f717aa6d301d04e0d782186d.jpg",
      "/images/milestone1b.jpg",
    ],
  },
  {
    year: "2024",
    title: "AI Assistant Launch",
    description:
      "Introduced advanced AI capabilities to automate hotel operations and enhance guest experiences.",
    details:
      "Our AI system handles guest queries, booking adjustments, and analytics — reducing staff workload and improving efficiency.",
    achievement: "Product Launch",
    images: ["/images/milestone2.jpg"],
  },
  {
    year: "2023",
    title: "Series A Funding",
    description:
      "Successfully raised Series A funding to accelerate product development and market expansion.",
    details:
      "We secured investment from top venture partners, enabling faster scaling of our AI and PMS technologies.",
    achievement: "Funding",
    images: ["/images/milestone3.jpg"],
  },
  {
    year: "2023",
    title: "50+ Integration Partners",
    description:
      "Expanded our integration ecosystem with 50+ booking channels and payment gateways.",
    details:
      "Our integrations now include Stripe, Razorpay, Airbnb, and Expedia — offering hoteliers seamless control over their channels.",
    achievement: "Partnership",
    images: ["/images/milestone4.jpg"],
  },
];

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ✅ Milestone Card (with Read More button)
function MilestoneCard({ milestone, index, onReadMore }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={timelineVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.15 }}
      className={`relative flex items-center justify-between gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-[25px] md:left-1/2 w-4 h-4 bg-yellow-400 opacity-25 rounded-full border-4 border-[#9a753e] transform md:-translate-x-1/2 z-10"></div>

      {/* Card Content */}
      <div
        className={`flex-1 ml-12 md:ml-0 ${
          isLeft
            ? "md:mr-auto md:pr-8 md:text-right"
            : "md:ml-auto md:pl-8 md:text-left"
        }`}
      >
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-6 py-5 hover:bg-white/15 transition-all duration-300 shadow-lg">
          <div className="flex items-center justify-between gap-4">
            {/* Left or Right Small Image */}
            {isLeft && milestone.images?.[0] && (
              <div className="relative w-40 h-40 rounded-xl overflow-hidden hidden md:block">
                <Image
                  src={milestone.images[0]}
                  alt={milestone.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Text Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 justify-center md:justify-end">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                  {milestone.achievement}
                </span>
                <span className="text-lg sm:text-xl font-bold text-yellow-400 marcellus">
                  {milestone.year}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl marcellus mb-2">
                {milestone.title}
              </h3>
              <p className="text-sm sm:text-base text-white/85 manrope-regular leading-relaxed mb-3">
                {milestone.description}
              </p>

              {/* ✅ Read More Button */}
              <button
                onClick={() => onReadMore(milestone)}
                className="text-[#d2a86a] font-medium text-sm hover:underline transition-colors"
              >
                Read More →
              </button>
            </div>

            {!isLeft && milestone.images?.[0] && (
              <div className="relative w-40 h-40 rounded-xl overflow-hidden hidden md:block">
                <Image
                  src={milestone.images[0]}
                  alt={milestone.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ✅ Fullscreen Modal Popup
function MilestoneModal({ milestone, onClose }) {
  return (
    <AnimatePresence>
      {milestone && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 backdrop-blur-xl max-w-4xl w-full relative text-center overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl sm:text-3xl marcellus mb-2">
              {milestone.title}
            </h2>
            <p className="text-sm sm:text-base text-white/70 mb-6">
              {milestone.year} — {milestone.achievement}
            </p>

            {/* Multiple Images */}
            {milestone.images && milestone.images.length > 0 && (
              <div
                className={`grid ${
                  milestone.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                } gap-4 mb-6`}
              >
                {milestone.images.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-full h-60 sm:h-72 md:h-80 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <p className="text-base text-white/90 leading-relaxed manrope-regular">
              {milestone.details}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ✅ Main Page
export default function MilestoneGalleryPage() {
  const containerRef = useRef(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  return (
    <div
      className="min-h-screen w-full text-white flex flex-col items-center"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header />

      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-10 lg:px-16 pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl marcellus leading-tight">
            Our Journey & Achievements
          </h1>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto manrope-regular text-base">
            Celebrating key moments, partnerships, and milestones that have
            shaped Knect Hotel’s growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <MilestoneCard
                key={milestone.title}
                milestone={milestone}
                index={index}
                onReadMore={setSelectedMilestone}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <MilestoneModal
        milestone={selectedMilestone}
        onClose={() => setSelectedMilestone(null)}
      />
    </div>
  );
}
