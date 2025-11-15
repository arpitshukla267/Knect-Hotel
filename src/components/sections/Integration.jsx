"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Globe, Shield, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

export default function Integration() {
  const logos = [
    "/integration-1.png",
    "/razorpay.png",
    "/aws.png",
    "/stripe.png",
    "/cashfree.png",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { value: "100+", label: "Hotels Onboarded", icon: TrendingUp },
    { value: "1,378", label: "Satisfied Customers", icon: Globe },
    { value: "10+", label: "Partnerships", icon: Shield },
    { value: "24/7", label: "Support", icon: Zap },
  ];

  return (
    <section
      suppressHydrationWarning
      className="relative text-center text-white overflow-hidden py-20 sm:py-28 px-4 sm:px-8"
    >
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9a753e]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#d3b87d]/8 rounded-full blur-3xl" />
      </div>

      {/* Heading */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mb-16 sm:mb-20"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-[#d3b87d]" />
          <span className="text-sm sm:text-base text-[#d3b87d] font-semibold tracking-widest uppercase px-4 py-2 bg-[#9a753e]/10 rounded-full border border-[#9a753e]/30">
            Integrations
          </span>
          <Sparkles className="w-6 h-6 text-[#d3b87d]" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="marcellus text-4xl py-2 sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-[#f5d9a1] via-[#d3b87d] to-[#9a753e] bg-clip-text text-transparent"
        >
          50+ Integrations Worldwide
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="h-1 w-32 bg-gradient-to-r from-transparent via-[#9a753e] to-transparent mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* ⭐ REPLACED SLIDER WITH YOUR FIRST FILE'S ANIMATION ⭐ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full overflow-hidden py-12 sm:py-16 mb-12"
      >
      
        {/* ⭐ Continuous scroll like your first file ⭐ */}
        <div className="flex animate-scroll whitespace-nowrap">
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-block w-[140px] md:w-[200px] lg:w-[240px] my-auto mx-6 sm:mx-10 transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={logo}
                alt="integration"
                width={240}
                height={140}
                className="w-full h-auto object-contain opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-8 sm:mt-10 text-gray-300 marcellus text-sm sm:text-base leading-relaxed px-2 mb-10"
      >
        Seamlessly connected with 50+ booking platforms and supporting 50+
        currencies, we integrate effortlessly with the tools you already use.
      </motion.p>

      {/* CTA */}
      <motion.button
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#9a753e] via-[#d3b87d] to-[#9a753e] text-black font-bold rounded-full overflow-hidden shadow-2xl transition-all duration-500 text-base sm:text-lg marcellus"
      >
        <span className="relative z-10">Explore Integrations</span>
        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
      </motion.button>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative z-10 md:max-w-6xl mx-auto marcellus bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-md rounded-3xl border-2 border-[#9a753e]/30 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-12 mt-20 p-12"
      >
        <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #d3b87d 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              variants={statVariants}
              className="flex-1 text-center relative z-10 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#9a753e]/20 to-[#9a753e]/5 border border-[#9a753e]/30 mb-4 group-hover:border-[#d3b87d]/50 transition-all duration-300">
                <Icon className="md:w-10 md:h-10 w-8 h-8 md:text-2xl text-xl text-[#d3b87d]" />
              </div>

              <motion.div className="md:text-5xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f5d9a1] to-[#d3b87d] mb-2">
                {stat.value}
              </motion.div>

              <div className="md:text-lg text-base text-gray-300 group-hover:text-[#d3b87d] transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
