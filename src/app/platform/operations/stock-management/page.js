"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import {
  FiGrid,
  FiFileText,
  FiActivity,
  FiLink,
  FiAlertTriangle,
  FiUsers,
  FiSettings,
  FiHome,
  FiBarChart2,
} from "react-icons/fi";
import Header from "@/components/sections/Header";

export default function StockManagement() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <FiFileText size={28} color="#ffffff" />,
      title: "Purchase Order List",
      desc: "Track, approve, and streamline your entire purchasing workflow with complete visibility.",
    },
    {
      icon: <FiActivity size={28} color="#ffffff" />,
      title: "Consumption Insights",
      desc: "Monitor daily stock usage and detect inefficiencies before they impact your bottom line.",
    },
    {
      icon: <FiUsers size={28} color="#ffffff" />,
      title: "Vendor Management",
      desc: "Centralize vendor details, monitor performance, and ensure reliable, consistent supply.",
    },
    {
      icon: <FiSettings size={28} color="#ffffff" />,
      title: "Smart Configuration",
      desc: "Tailor inventory modules, roles, and access levels to fit your unique operational structure.",
    },
    {
      icon: <FiLink size={28} color="#ffffff" />,
      title: "Linked Shop Items",
      desc: "Seamlessly sync your shop items with purchase orders and stock records for easy tracking.",
    },
    {
      icon: <FiGrid size={28} color="#ffffff" />,
      title: "Unified Dashboard",
      desc: "Visualize everything — from purchases to stock levels — in one intuitive dashboard.",
    },
    {
      icon: <FiAlertTriangle size={28} color="#ffffff" />,
      title: "Stock Alerts",
      desc: "Never overstock or run out. Get proactive alerts for optimal stock levels.",
    },
    {
      icon: <FiHome size={28} color="#ffffff" />,
      title: "Housekeeping Supplies",
      desc: "Streamline housekeeping materials and monitor their usage to maintain consistent standards.",
    },
    {
      icon: <FiBarChart2 size={28} color="#ffffff" />,
      title: "Performance Reports",
      desc: "Generate detailed reports on consumption, wastage, and purchases to support data-driven decisions.",
    },
  ];

  const aboutFeatures = [
    {
      id: 1,
      img: "/stock-image-1.png",
      subtitle: "Real-time Tracking",
      title: "Stay ahead with real-time visibility",
      desc: "Monitor your entire supply chain live — from incoming orders to closing stocks — all in one place.",
    },
    {
      id: 2,
      img: "/stock-image-2.png",
      subtitle: "Eco Efficiency",
      title: "Reduce waste, save costs",
      desc: "Identify surplus inventory and control wastage with detailed insights that promote sustainability and efficiency.",
    },
    {
      id: 3,
      img: "/stock-image-3.png",
      subtitle: "Vendor Management",
      title: "Stronger vendor relationships",
      desc: "Centralize communication, standardize supplier data, and ensure seamless procurement workflows.",
    },
    {
      id: 4,
      img: "/stock-image-4.png",
      subtitle: "Housekeeping Operations",
      title: "Empower housekeeping with precision",
      desc: "Simplify housekeeping stock management, ensuring consistency in cleanliness standards and supply usage.",
    },
    {
      id: 5,
      img: "/pms-image-4.jpg",
      subtitle: "",
      title: "One unified ecosystem",
      desc: "Integrated with PMS, POS, and channel manager — your inventory syncs with every operation automatically.",
    },
  ];

  const extraFeatures = [
    {
      title: "Closing Stock Review",
      desc: "Gain full clarity on remaining items and streamline month-end audits.",
    },
    {
      title: "Recipe Standardization",
      desc: "Maintain consistency across outlets with standardized recipes and ingredient tracking.",
    },
    {
      title: "Room Tagging",
      desc: "Assign specific inventory items to rooms and departments for traceable accountability.",
    },
    {
      title: "Auto Reorder System",
      desc: "Let the system reorder essential items automatically when stock reaches predefined thresholds.",
    },
    {
      title: "Multi-property Management",
      desc: "Control inventory across multiple properties in real time from a single dashboard.",
    },
    {
      title: "Paperless Operations",
      desc: "Ditch manual logs — digital records ensure transparency, accuracy, and sustainability.",
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
        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:w-1/2"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-gray-300">
            Simplify your operations with{" "}
            <span className="text-[#9a753e]">Smart Stock Management</span>
          </h1>
          <p className="text-gray-400 text-md md:text-lg">
            Control purchases, track usage, and automate your supply chain — all from a single, intuitive platform.
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
            src="/stock-hero.png"
            alt="Stock Hero"
            width={700}
            height={500}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </section>

      {/* ---------- Section 2 (Feature Grid - Animated) ---------- */}
      <section className="relative w-full py-20 md:py-28 px-2 md:px-20 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#d3b87d]"
        >
          Powerful tools for{" "}
          <span className="text-white">Inventory Optimization</span>
        </motion.h2>

        <motion.div
          className="relative w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: -10 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#111]/80 backdrop-blur-md border border-[#ffffff1a] rounded-2xl shadow-lg overflow-hidden transform-gpu hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-4 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[220px]"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-[#9a753e33] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col md:flex-row items-start gap-3 mb-3 min-h-[64px] md:min-h-[72px]">
                {item.icon}
                <h3 className="text-sm md:text-xl font-semibold text-white leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="flex-grow flex items-start">
                <p className="text-gray-400 text-xs md:text-base leading-relaxed">
                  {item.desc}
                </p>
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

        {/* Glow Background */}
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
          Smarter insights, {" "}
          <motion.span
            initial={{ backgroundPosition: "200% center" }}
            whileInView={{ backgroundPosition: "0% center" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#d3b87d] via-white to-[#9a753e] py-4 bg-[length:200%_auto] text-transparent bg-clip-text inline-block"
          >
            simpler workflows
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


      {/* ---------- Section 4 (Extra Features) ---------- */}
      <section className="relative w-full py-20 md:py-28 px-2 md:px-20 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#d3b87d]"
        >
          Manage{" "}
          <span className="text-white">every detail effortlessly</span>
        </motion.h2>

        <motion.div
          className="relative w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          {extraFeatures.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: -10 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#111]/80 backdrop-blur-md border border-[#ffffff1a] rounded-2xl shadow-lg overflow-hidden transform-gpu hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-4 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[220px]"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-[#9a753e33] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-sm md:text-xl font-semibold text-white mb-3 leading-snug">
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

        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-[#9a753e33] blur-[150px] rounded-full opacity-40 pointer-events-none"></div>
      </section>

      {/* ---------- Banner ---------- */}
      <section
        className="w-full h-[400px] flex flex-col justify-center items-center py-20"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Try <span className="text-[#9a753e]">KnectHotel</span> for free
        </h2>
        <p className="text-gray-300 max-w-xs text-sm md:text-md md:max-w-3xl text-wrap text-center">
          Smart, centralized, and automated inventory control — designed for modern hotels.
        </p>
        <button className="mt-6 px-6 py-3 text-sm md:text-md bg-white/20 backdrop-blur-md hover:bg-white/30 hover:text-yellow-400 font-semibold rounded-lg transition-colors duration-300 hover:cursor-pointer">
          Get Started Now
        </button>
      </section>
    </div>
  );
}
