"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/sections/Header";

const collaborations = [
  {
    name: "TechCrunch Partnership",
    description: "Featured in TechCrunch for innovative hospitality technology solutions.",
    logo: "/integration-1.png",
    type: "Media",
  },
  {
    name: "AWS Technology Alliance",
    description: "Strategic partnership with AWS for cloud infrastructure and scalability.",
    logo: "/aws.png",
    type: "Technology",
  },
  {
    name: "Hospitality Industry Association",
    description: "Active member and collaborator with leading hospitality industry associations.",
    logo: "/razorpay.png",
    type: "Industry",
  },
  {
    name: "Payment Gateway Partners",
    description: "Integrated partnerships with Razorpay, Stripe, and Cashfree for seamless payments.",
    logo: "/stripe.png",
    type: "Integration",
  },
  {
    name: "Hotel Chain Collaborations",
    description: "Working with major hotel chains to implement and optimize our platform.",
    logo: "/cashfree.png",
    type: "Enterprise",
  },
  {
    name: "Startup Accelerator Program",
    description: "Graduated from top-tier startup accelerator programs focused on hospitality tech.",
    logo: "/integration-1.png",
    type: "Program",
  },
];

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CollaborationsPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

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
            Collaborations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl marcellus leading-tight"
          >
            Our Strategic Partnerships
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto manrope-regular"
          >
            We collaborate with industry leaders, technology partners, and media organizations to deliver exceptional value to our clients.
          </motion.p>
        </motion.div>

        {/* Collaborations Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collaborations.map((collab, index) => {
            const itemRef = useRef(null);
            const itemInView = useInView(itemRef, { once: true, amount: 0.2 });

            return (
              <motion.div
                key={index}
                ref={itemRef}
                variants={slideInVariants}
                initial="hidden"
                animate={itemInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-6 sm:p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                        {collab.type}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl marcellus mb-2">
                      {collab.name}
                    </h3>
                    <p className="text-sm sm:text-base text-white/85 manrope-regular leading-relaxed">
                      {collab.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-20 bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 backdrop-blur-lg text-center"
        >
          <h2 className="text-2xl sm:text-3xl marcellus mb-3">
            Interested in Partnering?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 manrope-regular max-w-2xl mx-auto mb-6">
            We're always looking for strategic partnerships that can benefit our clients and the hospitality industry.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-white/70 text-black font-semibold marcellus text-sm sm:text-base shadow-lg shadow-[#9a753e]/40 transition-colors hover:bg-white"
          >
            Become a Partner
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

