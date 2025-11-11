"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/sections/Header";

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Build scalable features for our hospitality platform using modern technologies.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive user experiences and design innovative product features.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Hybrid",
    type: "Full-time",
    description: "Help hotels succeed by providing exceptional support and strategic guidance.",
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "On-site / Remote",
    type: "Full-time",
    description: "Drive growth by connecting with hoteliers and showcasing our platform value.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Maintain and scale our cloud infrastructure for optimal performance.",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    description: "Develop and execute marketing strategies to reach hospitality professionals.",
  },
];

const benefits = [
  "Competitive salary and equity",
  "Flexible work arrangements",
  "Health and wellness benefits",
  "Professional development opportunities",
  "Collaborative team environment",
  "Impactful work in growing industry",
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CareersPage() {
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
            Careers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl marcellus leading-tight"
          >
            Join Our Growing Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto manrope-regular"
          >
            Help us transform the hospitality industry. Explore open positions and discover opportunities to make an impact.
          </motion.p>
        </motion.div>

        {/* Company Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-8 sm:p-10 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl marcellus mb-4 text-center">
            Our Culture
          </h2>
          <p className="text-base sm:text-lg text-white/90 manrope-regular leading-relaxed text-center max-w-4xl mx-auto mb-6">
            At Knect Hotel, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our team members to do their best work while maintaining a healthy work-life balance.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl marcellus mb-6 text-center">
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => {
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
                  className="bg-white/10 backdrop-blur rounded-xl border border-white/15 p-4 text-center"
                >
                  <p className="text-sm sm:text-base text-white/90 manrope-regular">
                    {benefit}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Open Positions */}
        <div ref={containerRef} className="mb-12">
          <h2 className="text-2xl sm:text-3xl marcellus mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => {
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
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl marcellus mb-2">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                          {position.department}
                        </span>
                        <span className="text-xs text-white/60">{position.location}</span>
                        <span className="text-xs text-white/60">•</span>
                        <span className="text-xs text-white/60">{position.type}</span>
                      </div>
                      <p className="text-sm sm:text-base text-white/85 manrope-regular leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold text-sm sm:text-base transition-colors"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 backdrop-blur-lg text-center"
        >
          <h2 className="text-2xl sm:text-3xl marcellus mb-3">
            Don't See a Role That Fits?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 manrope-regular max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-white/70 text-black font-semibold marcellus text-sm sm:text-base shadow-lg shadow-[#9a753e]/40 transition-colors hover:bg-white"
          >
            Submit Your Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

