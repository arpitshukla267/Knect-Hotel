"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import {
  FiGlobe,
  FiMonitor,
  FiSettings,
  FiBarChart2,
  FiUsers,
  FiSmartphone,
} from "react-icons/fi";
import Header from "@/components/sections/Header";

export default function Page() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <FiGlobe size={28} color="#ffffff" />,
      title: "Multi-language Support",
      desc: "Let global travelers book in their own language for a personalized and frictionless experience.",
    },
    {
      icon: <FiMonitor size={28} color="#ffffff" />,
      title: "Custom Booking Widget",
      desc: "Easily embed a customizable booking engine on your hotel website, matching your brand design.",
    },
    {
      icon: <FiSmartphone size={28} color="#ffffff" />,
      title: "Mobile-Optimized Interface",
      desc: "Deliver a lightning-fast and seamless booking flow across all devices—no pinching or zooming needed.",
    },
    {
      icon: <FiBarChart2 size={28} color="#ffffff" />,
      title: "Real-time Rate & Availability Sync",
      desc: "Always show the latest room rates and availability with live synchronization from your PMS and OTAs.",
    },
    {
      icon: <FiSettings size={28} color="#ffffff" />,
      title: "Automated Confirmation & Alerts",
      desc: "Send instant confirmation emails, reminders, and updates to guests automatically after every booking.",
    },
    {
      icon: <FiUsers size={28} color="#ffffff" />,
      title: "Guest Data Insights",
      desc: "Understand booking patterns and guest behavior to drive repeat stays and boost direct revenue.",
    },
    {
      title: "Upselling Opportunities",
      desc: "Offer add-ons like spa sessions or airport transfers during booking to increase average revenue per guest.",
    },
    {
      title: "Zero Commission",
      desc: "Enjoy 100% profit from direct bookings—no third-party commission or extra cost involved.",
    },
    {
      title: "Secure Payment Gateway",
      desc: "Accept global payments confidently with integrated, PCI-compliant payment solutions.",
    },
  ];

  const aboutFeatures = [
    {
      id: 1,
      img: "/booking-engine-1.png",
      subtitle: "Direct Bookings",
      title: "Boost direct bookings effortlessly",
      desc: "Reduce OTA dependency by converting website visitors into confirmed guests using our intuitive booking interface.",
    },
    {
      id: 2,
      img: "/booking-engine-2.png",
      subtitle: "Dynamic Pricing",
      title: "Smart rate management",
      desc: "Maximize revenue with automatic rate adjustments based on demand, seasonality, and competitor trends.",
    },
    {
      id: 3,
      img: "/booking-engine-3.png",
      subtitle: "Integration Ready",
      title: "Seamless system integration",
      desc: "Easily connect with PMS, channel manager, and payment systems for smooth end-to-end operations.",
    },
    {
      id: 4,
      img: "/booking-engine-4.png",
      subtitle: "Custom Branding",
      title: "Match your hotel identity",
      desc: "Personalize the booking experience with your logo, color palette, and domain to reinforce brand loyalty.",
    },
    {
      id: 5,
      img: "/pms-image-4.jpg",
      subtitle: "",
      title: "Part of the All-in-One Suite",
      desc: "Booking Engine works in harmony with KnectHotel’s PMS, channel manager, and revenue tools for full operational control.",
    },
  ];

  return (
    <div
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
        color: "white",
        minHeight: "100vh",
      }}
      className="w-full"
    >
      <Header />

      {/* ---------- Section 1 (Hero) ---------- */}
      <section className="w-full min-h-screen md:h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-8 md:px-20 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:w-1/2"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-gray-300">
            Turn visitors into guests with our{" "}
            <span className="text-[#9a753e]">Booking Engine</span>
          </h1>
          <p className="text-gray-400 text-md md:text-lg">
            Power your direct sales with an easy, elegant, and commission-free booking experience.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-white/50 text-xs md:text-md text-black font-semibold px-6 py-3 rounded-md hover:bg-white hover:cursor-pointer transition">
              Request demo
            </button>
            <button className="border border-white text-xs md:text-md text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-black hover:cursor-pointer transition">
              Get started for free
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative md:w-1/2 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/booking-hero.png"
            alt="Booking Engine Hero"
            width={700}
            height={500}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </section>

      {/* ---------- Section 2 ---------- */}
      <section className="relative w-full py-20 md:py-28 px-2 md:px-20 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#d3b87d]"
        >
          Redefine your booking experience
        </motion.h2>

        <motion.div
          className="relative w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          {features.slice(0, 6).map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: -10 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#111]/80 backdrop-blur-md border border-[#ffffff1a] rounded-2xl shadow-lg overflow-hidden transform-gpu hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-4 md:p-8 flex flex-col justify-between min-h-[220px]"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-[#9a753e33] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col md:flex-row items-start gap-3 mb-3 min-h-[64px] md:min-h-[72px]">
                {item.icon}
                <h3 className="text-sm md:text-xl font-semibold text-white leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-400 text-xs md:text-base leading-relaxed">{item.desc}</p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#9a753e] to-transparent origin-left"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------- Section 3 (Enhanced Background + Text Animation) ---------- */}
      <section className="relative w-full py-24 md:py-32 px-4 sm:px-10 lg:px-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#9a753e22,transparent_70%)] animate-gradientMove"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#9a753e15,transparent_70%)] animate-gradientMove-slow"></div>
      
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-24 text-[#d3b87d]"
        >
          Simplify booking operations with{" "}
          <motion.span
            initial={{ backgroundPosition: "200% center" }}
            whileInView={{ backgroundPosition: "0% center" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#d3b87d] via-white to-[#9a753e] py-4 bg-[length:200%_auto] text-transparent bg-clip-text inline-block"
          >
            KnectHotel Booking Engine
          </motion.span>
        </motion.h2>
      
        <div className="space-y-12 md:space-y-28 relative z-10">
          {aboutFeatures.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                i % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image stays the same — your style preserved */}
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={800}
                  height={800}
                  className="object-cover rounded-2xl scale-105 hover:scale-110 transition-transform duration-700"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#000000cc] via-transparent opacity-0 hover:opacity-100 flex items-end justify-start p-6"
                >
                  <p className="text-[#d3b87d] font-semibold text-base">
                    {feature.subtitle || "Discover More"}
                  </p>
                </motion.div>
              </motion.div>
      
              {/* Animated text block */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="w-full md:w-1/2 md:space-y-8 space-y-4"
              >
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7 }}
                  className="text-2xl md:text-5xl font-bold text-white"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-gray-300 md:leading-7.5 leading-4.5 md:text-xl"
                >
                  {feature.desc}
                </motion.p>
                <motion.div
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="h-[3px] w-1/4 bg-gradient-to-r from-[#9a753e] to-transparent origin-left"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      
        {/* Background floating glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#9a753e33] blur-[120px] rounded-full opacity-40 pointer-events-none animate-float"></div>
      </section>



      {/* ---------- Section 4 ---------- */}
      <section className="relative w-full py-20 md:py-28 px-2 md:px-20 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#d3b87d]"
        >
          Empower direct sales
        </motion.h2>

        <motion.div
          className="relative w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          {features.slice(6, 9).map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: -10 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#111]/80 backdrop-blur-md border border-[#ffffff1a] rounded-2xl shadow-lg overflow-hidden transform-gpu hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-4 md:p-8 flex flex-col justify-between min-h-[220px]"
            >
              <h3 className="text-sm md:text-xl font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-base leading-relaxed">
                {item.desc}
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#9a753e] to-transparent origin-left"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------- Banner ---------- */}
      <section className="w-full h-[400px] flex flex-col justify-center items-center py-20 bg-black/50">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Try <span className="text-[#9a753e]">KnectHotel</span> Booking Engine for free
        </h2>
        <p className="text-gray-300 max-w-xs md:max-w-3xl text-sm md:text-md text-center">
          Boost direct sales, enhance guest experience, and simplify hotel operations—all without paying commissions.
        </p>
        <button className="mt-6 px-6 text-sm md:text-md py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 hover:text-yellow-400 font-semibold rounded-lg transition-colors duration-300 hover:cursor-pointer">
          Get Started Now
        </button>
      </section>
    </div>
  );
}
