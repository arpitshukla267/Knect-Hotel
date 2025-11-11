"use client";
import React from "react";
import Image from "next/image";
import {
  FaChartBar,
  FaCalendarAlt,
  FaDollarSign,
  FaBroom,
  FaUsersCog,
  FaUsers,
  FaCloud,
  FaMobileAlt,
} from "react-icons/fa";
import Header from "@/components/sections/Header";
import { motion } from "framer-motion";

export default function PMS() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <FaChartBar className="text-[#ffffff] text-3xl" />,
      title: "Dashboard",
      desc: "Get a complete view of arrivals, departures, and occupancy. Handle quick actions directly from the dashboard with ease.",
    },
    {
      icon: <FaCalendarAlt className="text-[#ffffff] text-3xl" />,
      title: "Smart Calendar",
      desc: "Drag and drop bookings, automate room allocations, and manage your schedule more efficiently than ever.",
    },
    {
      icon: <FaBroom className="text-[#ffffff] text-3xl" />,
      title: "Housekeeping",
      desc: "Monitor room status and cleaning progress in real-time, all synced to your staff’s mobile app.",
    },
    {
      icon: <FaDollarSign className="text-[#ffffff] text-3xl" />,
      title: "Folios & Payments",
      desc: "Track guest balances, process contactless payments, and manage detailed folio histories instantly.",
    },
    {
      icon: <FaUsers className="text-[#ffffff] text-3xl" />,
      title: "Group Management",
      desc: "Simplify group reservations, profiles, and settlements from a unified interface.",
    },
    {
      icon: <FaCloud className="text-[#ffffff] text-3xl" />,
      title: "Integrations",
      desc: "Connect to over 500+ integrations seamlessly — from payment gateways to door locks and accounting tools.",
    },
    {
      icon: <FaMobileAlt className="text-[#ffffff] text-3xl" />,
      title: "Mobile App",
      desc: "Run your entire hotel operations on the go with the PMS mobile app and instant push notifications.",
    },
    {
      icon: <FaDollarSign className="text-[#ffffff] text-3xl" />,
      title: "Rates & Inventory",
      desc: "Manage rates, inventory, and distribution channels in one place using the built-in channel manager.",
    },
    {
      icon: <FaUsersCog className="text-[#ffffff] text-3xl" />,
      title: "User & Access Control",
      desc: "Create custom roles for your team — from admin to housekeeping — with granular access permissions.",
    },
    {
      title: "Corporate Billing",
      desc: "Handle corporate and group accounts efficiently with flexible invoicing and recurring billing options.",
    },
    {
      title: "Custom Reports",
      desc: "Use 50+ ready-to-use reports or create unlimited custom reports tailored to your operational needs.",
    },
    {
      title: "Branded Folios",
      desc: "Personalize guest folios with your hotel’s logo, terms, and style to match your brand identity.",
    },
    {
      title: "Payment Automation",
      desc: "Automate OTA virtual card authorizations and send payment reminders to minimize cancellations.",
    },
    {
      title: "PCI DSS Certified",
      desc: "We meet PCI DSS compliance standards, ensuring all guest data and transactions remain secure.",
    },
    {
      title: "24/7 Expert Support",
      desc: "Our dedicated team is available around the clock via chat or call — we know hotel operations never sleep.",
    },
  ];

  const aboutFeatures = [
    {
      id: 1,
      img: "/pms-about.gif",
      subtitle: "Ease of use",
      title: "Simple, intuitive, and drag-and-drop ready",
      desc: "Experience a modern, user-friendly interface built for efficiency. Simplify front desk workflows with intuitive drag-and-drop operations.",
    },
    {
      id: 2,
      img: "/pms-image-1.png",
      subtitle: "Front desk automation",
      title: "Empower your guests with contactless freedom",
      desc: "From booking to check-out, automation is at the core — enabling self check-ins, room upgrades, and smooth departures without manual intervention.",
    },
    {
      id: 3,
      img: "/pms-image-2.png",
      subtitle: "Room automation",
      title: "Auto-allocate the best rooms, instantly",
      desc: "KnectHotel PMS intelligently assigns optimal rooms automatically, saving up to 70% of front desk time while ensuring guest satisfaction.",
    },
    {
      id: 4,
      img: "/pms-image-3.png",
      subtitle: "Smart Housekeeping",
      title: "Real-time housekeeping updates",
      desc: "Monitor room readiness and housekeeping progress live. Assign staff tasks and view real-time cleaning status across your property.",
    },
    {
      id: 5,
      img: "/pms-image-4.jpg",
      subtitle: "",
      title: "Truly All-in-One Platform",
      desc: "KnectHotel PMS integrates PMS, channel manager, booking engine, revenue management, and housekeeping — no extra integrations needed.",
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

      {/* ---------- Section 1 ---------- */}
      <section className="w-full min-h-screen md:h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-8 md:px-20 py-24">
        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:w-1/2"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-gray-300">
            Automated and easy-to-use{" "}
            <span className="text-[#9a753e]">PMS</span>
          </h1>
          <p className="text-gray-400 text-md md:text-lg">
            A modern property management system designed to make hotel operations smarter and simpler.
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

        {/* Image */}
        <motion.div
          className="relative md:w-1/2 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/pms-hero.png"
            alt="PMS Hero"
            width={700}
            height={500}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </section>

      {/* ---------- Section 2 (Equal Height Cards) ---------- */}
      <section className="relative w-full py-20 md:py-28 px-2 md:px-20 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#d3b87d]"
        >
          The tools your front desk deserves
        </motion.h2>

        <motion.div
          className="relative w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          {features.slice(0, 9).map((item, index) => (
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
              <div className="relative flex flex-col md:flex-row items-start gap-3 mb-3 min-h-[64px]">
                {item.icon}
                <h3 className="text-sm md:text-xl font-semibold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="flex-grow flex items-start">
                <p className="text-gray-400 text-xs md:text-base leading-relaxed">{item.desc}</p>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#9a753e] to-transparent origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-[#9a753e33] blur-[150px] rounded-full opacity-40 pointer-events-none"></div>
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
          What's unique about{" "}
          <motion.span
            initial={{ backgroundPosition: "200% center" }}
            whileInView={{ backgroundPosition: "0% center" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#d3b87d] via-white to-[#9a753e] bg-[length:200%_auto] text-transparent bg-clip-text inline-block"
          >
             KnectHotel’s PMS
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


      {/* ---------- Section 4 (Same Layout as Section 2) ---------- */}
      <section className="relative w-full py-20 md:py-28 px-2 md:px-20 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#d3b87d]"
        >
          Go beyond management — automate everything
        </motion.h2>

        <motion.div
          className="relative w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          {features.slice(9, 15).map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: -10 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#111]/80 backdrop-blur-md border border-[#ffffff1a] rounded-2xl shadow-lg overflow-hidden transform-gpu hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-4 md:p-8 flex flex-col justify-between min-h-[220px]"
            >
              <div className="relative flex flex-col items-start gap-3 mb-3 min-h-[64px]">
                <h3 className="text-sm md:text-xl font-semibold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="flex-grow flex items-start">
                <p className="text-gray-400 text-xs md:text-base leading-relaxed">{item.desc}</p>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#9a753e] to-transparent origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-[#9a753e33] blur-[150px] rounded-full opacity-40 pointer-events-none"></div>
      </section>

      {/* ---------- Banner ---------- */}
      <section
        className="w-full h-[400px] flex flex-col justify-center items-center py-20"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Try <span className="text-[#9a753e]">KnectHotel</span> for free
        </h2>
        <p className="text-gray-300 max-w-xs md:max-w-3xl text-wrap text-sm md:text-md text-center">
          Hassle-free migration. No hidden charges. The all-in-one solution for hotel sales,
          marketing, and operations.
        </p>
        <button className="mt-6 px-6 py-3 text-sm md:text-md bg-white/20 backdrop-blur-md hover:bg-white/30 hover:text-yellow-400 font-semibold rounded-lg transition-colors duration-300 hover:cursor-pointer">
          Get Started Now
        </button>
      </section>
    </div>
  );
}
