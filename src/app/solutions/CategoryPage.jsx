"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Header from "@/components/sections/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function CategoryPage({ title, subtitle, description, image, features }) {
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

      <div className="w-full max-w-6xl px-6 md:px-10 pt-24 pb-20">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl marcellus mb-4">{title}</h1>
          <p className="text-white/80 text-base sm:text-lg manrope-regular max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden mb-20 shadow-2xl border border-white/20"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-white/85 manrope-regular text-lg leading-relaxed mb-16 max-w-3xl mx-auto text-center"
        >
          {description}
        </motion.p>

        {/* Features Section */}
        <div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-8 md:gap-12 place-items-center"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 backdrop-blur-lg hover:bg-white/15 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#d2a86a] marcellus">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm sm:text-base manrope-regular leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
