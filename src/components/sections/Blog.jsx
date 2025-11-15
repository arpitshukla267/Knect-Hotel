"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, TrendingUp } from "lucide-react";

export default function Blog() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.75, rotate: -8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    hover: {
      scale: 1.08,
      rotate: 3,
      y: -8,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const centerCardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40, rotateX: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section className="relative flex flex-col justify-center items-center text-center text-white py-24 sm:py-32 px-4 sm:px-8 overflow-hidden">
      {/* Optimized Background Elements - Static for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#9a753e]/8 rounded-full blur-3xl will-change-transform" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d3b87d]/8 rounded-full blur-3xl will-change-transform" />
      </div>

      {/* Enhanced Title Section */}
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mb-20 sm:mb-24"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-6 text-[#d3b87d]">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-sm sm:text-base text-[#d3b87d] font-semibold tracking-widest uppercase px-4 py-2 bg-[#9a753e]/10 rounded-full border border-[#9a753e]/30">
            Our Stories
          </span>
          <div className="w-6 h-6 text-[#d3b87d]">
            <Sparkles className="w-6 h-6" />
          </div>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="marcellus text-5xl py-2 sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-[#f5d9a1] via-[#d3b87d] to-[#9a753e] bg-clip-text text-transparent"
        >
          Blog & Insights
        </motion.h1>
        
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <BookOpen className="w-5 h-5 text-[#9a753e]" />
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-transparent via-[#9a753e] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 128, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <TrendingUp className="w-5 h-5 text-[#9a753e]" />
        </motion.div>
        
        <motion.p
          className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Discover the latest trends, insights, and stories from the world of hospitality
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl"
      >
        {/* Left Column - Gallery Images */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-row lg:flex-col gap-5 sm:gap-6 justify-center lg:justify-start w-full lg:w-auto overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide"
        >
          {["/gallery-1.png", "/gallery-2.png", "/gallery-3.png"].map((img, i) => (
            <motion.div
              key={i}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
              className="relative group flex-shrink-0"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9a753e]/30 via-[#d3b87d]/30 to-[#9a753e]/30 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9a753e]/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={img}
                alt={`Blog Gallery ${i + 1}`}
                width={300}
                height={260}
                className="relative z-10 rounded-2xl object-cover w-[300px] sm:w-[320px] lg:w-[300px] h-[220px] sm:h-[240px] lg:h-[260px] shadow-2xl border-2 border-[#9a753e]/30 group-hover:border-[#d3b87d]/60 transition-all duration-500"
              />
              <motion.div
                className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                initial={{ y: 20, scale: 0.9 }}
                whileHover={{ y: 0, scale: 1 }}
              >
                <div className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md rounded-xl px-4 py-3 border border-[#9a753e]/30 shadow-xl">
                  <p className="text-white text-sm font-semibold">Gallery {i + 1}</p>
                  <p className="text-gray-400 text-xs mt-1">View Collection</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Center Section - Enhanced Featured Card */}
        <motion.div
          variants={centerCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.03, y: -8, rotateY: 2 }}
          className="relative flex flex-col items-center text-center max-w-md sm:max-w-xl lg:max-w-lg xl:max-w-xl px-4 sm:px-6 group"
        >
          {/* Enhanced Decorative Border Glow */}
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-[#9a753e] via-[#d3b87d] via-[#f5d9a1] to-[#9a753e] rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute -inset-1 bg-gradient-to-r from-[#9a753e]/40 via-[#d3b87d]/40 to-[#9a753e]/40 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-gradient-to-br from-black/95 via-black/85 to-black/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border-2 border-[#9a753e]/40 shadow-2xl w-full overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #d3b87d 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            {/* Enhanced Image Container */}
            <motion.div
              className="relative w-full h-[300px] sm:h-[340px] lg:h-[320px] rounded-2xl overflow-hidden mb-8 group/image"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9a753e] via-[#d3b87d] to-[#9a753e] rounded-2xl blur opacity-30 group-hover/image:opacity-60 transition-opacity duration-500" />
              <Image
                src="/blog-center.png"
                alt="KnectHotel Blog"
                fill
                className="relative z-10 object-cover rounded-2xl transition-transform duration-700 group-hover/image:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              
              {/* Enhanced Floating Badge */}
              <motion.div
                className="absolute top-5 right-5 bg-gradient-to-r from-[#9a753e] to-[#d3b87d] backdrop-blur-md rounded-full px-5 py-2.5 border-2 border-[#f5d9a1]/30 shadow-xl z-20"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-white text-xs font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              </motion.div>
            </motion.div>

            {/* Enhanced Content */}
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#f5d9a1] via-[#d3b87d] to-[#9a753e] marcellus relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="relative z-10">KnectHotel</span>
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-[#9a753e] to-[#d3b87d] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.h3>
            
            <motion.p
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 marcellus-sc relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Discover how KnectHotel transforms modern hospitality — streamlining
              check-ins, enhancing guest experiences, and integrating hotel
              operations into a seamless digital platform.
            </motion.p>

            {/* Enhanced CTA Button */}
            <motion.button
              onClick={() => router.push("/resources/blog")}
              className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#9a753e] via-[#d3b87d] to-[#9a753e] text-black font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(154,117,62,0.5)] transition-all duration-500 text-base sm:text-lg z-10"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#d3b87d] via-[#f5d9a1] to-[#d3b87d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0%", "200%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 100%" }}
              />
              <span className="relative z-10 flex items-center justify-center gap-3">
                Explore More
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.div>
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column - Gallery Images */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-row lg:flex-col gap-5 sm:gap-6 justify-center lg:justify-end w-full lg:w-auto overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide"
        >
          {["/gallery-4.png", "/gallery-5.png", "/gallery-1.png"].map((img, i) => (
            <motion.div
              key={i}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
              className="relative group flex-shrink-0"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9a753e]/30 via-[#d3b87d]/30 to-[#9a753e]/30 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9a753e]/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={img}
                alt={`Blog Gallery ${i + 4}`}
                width={300}
                height={260}
                className="relative z-10 rounded-2xl object-cover w-[300px] sm:w-[320px] lg:w-[300px] h-[220px] sm:h-[240px] lg:h-[260px] shadow-2xl border-2 border-[#9a753e]/30 group-hover:border-[#d3b87d]/60 transition-all duration-500"
              />
              <motion.div
                className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                initial={{ y: 20, scale: 0.9 }}
                whileHover={{ y: 0, scale: 1 }}
              >
                <div className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md rounded-xl px-4 py-3 border border-[#9a753e]/30 shadow-xl">
                  <p className="text-white text-sm font-semibold">Gallery {i + 4}</p>
                  <p className="text-gray-400 text-xs mt-1">View Collection</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Bottom Decorative Line */}
      <motion.div
        className="mt-20 sm:mt-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="h-1 w-full max-w-5xl bg-gradient-to-r from-transparent via-[#9a753e] to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#d3b87d] rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.div>
    </section>
  );
}
