"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { FiSmartphone, FiBell, FiCreditCard, FiShoppingBag } from "react-icons/fi";
import Header from "@/components/sections/Header";

export default function Page() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <FiShoppingBag size={28} color="#ffffff" />,
      title: "Unlimited POS outlets",
      desc: "Add any outlet in minutes and start taking orders — complete order life cycle management.",
    },
    {
      icon: <FiCreditCard size={28} color="#ffffff" />,
      title: "In room & website orders",
      desc: "QR code in-room orders. Website orders for non-guests.",
    },
    {
      icon: <FiSmartphone size={28} color="#ffffff" />,
      title: "Upsell services",
      desc: "Intelligently upsell services like spa and rentals throughout the guest journey.",
    },
    {
      icon: <FiBell size={28} color="#ffffff" />,
      title: "Real time notifications",
      desc: "Instantly get notified when guests place orders.",
    },
    {
      icon: <FiSmartphone size={28} color="#ffffff" />,
      title: "Mobile orders",
      desc: "Order taking app to take quick orders from F&B outlets.",
    },
    {
      icon: <FiCreditCard size={28} color="#ffffff" />,
      title: "Integrated payments",
      desc: "Supports various in-person and contactless payment modes.",
    },


    {
      title: "Table and Staff configuration",
      desc: "Configure table, seating areas and staff. Track orders by tables and staff.",
    },
    {
      title: "KOT printing",
      desc: "Setup KOT printers and notify kitchen instantly on the orders",
    },
    {
      title: "In room & QR code orders",
      desc: "Take orders from room, magic link or setup table QR codes.",
    },
    {
      title: "Inventory tracking",
      desc: "Real time inventory tracking and manage out of stock items",
    },
    {
      title: "Discounts",
      desc: "Offer special discounts to in-room or online orders",
    },
    {
      title: "Analytics",
      desc: "Sophisticated reports and analytics about outlet performance on your finger tips.",
    },
  ];

  const aboutFeatures = [
  {
    id: 1,
      img: "/pos-image-1.png",
      subtitle: "F&B",
      title: "F&B Outlets in minutes",
      desc: "Setup any F&B POS outlet, upload menu items and start selling it in 15 minutes. Service both in-house and non in-house guests seamlessly.",
    },
    {
      id: 2,
      img: "/pos-image-2.png",
      subtitle: "coming soon!",
      title: "Spa, kayak, tours and other time based experiences",
      desc: "Manage any time-based services with ease. You can set up any service and sell by hours or packages.",
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


      {/* --------------- Section 1 --------------- */}
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
            Manage all your services with{" "}
            <span className="text-[#9a753e]">Built-in Shops</span>
          </h1>
          <p className="text-gray-400 text-md md:text-lg">
            Have a restaurant, spa, or any other service? We've got you covered.
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
            src="/pos-hero.png"
            alt="POS Hero"
            width={700}
            height={500}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </section>

      {/* --------------- Section 2 --------------- */}
      <motion.section
        className="w-full md:py-20 px-2 md:px-20 flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-white">
          It’s beyond just <span className="text-[#9a753e]">POS</span>
        </h1>
      
        <div className="w-full max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {features.slice(0, 6).map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.9)",
                textAlign: "left",
              }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-3">
                {/* Hide icon if not available */}
                {item.icon ? (
                  item.icon
                ) : (
                  <div className="w-12 h-12" /> // keeps layout consistent
                )}
                <h3 className="text-sm md:text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-xs md:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* --------------- Section 3 --------------- */}

      {/*About Section*/}
      <div
        className="w-full flex flex-col md:gap-16 py-10 px-10"
        style={{ color: "white", justifyContent: "center" }}
      >
        <h1
          className="text-center font-bold text-wrap max-w-3xl mx-auto md:text-5xl text-3xl"
          style={{ lineHeight: "1.2" }}
        >
          What's so unique about{" "}
          <span style={{ color: "#9a753e" }}>Stayflexi Autonomous PMS?</span>
        </h1>
      
        {aboutFeatures.map((feature) => (
          <div
            key={feature.id}
            className="w-full flex flex-col md:flex-row justify-between items-center gap-12 feature-block mb-16"
            style={{
              marginTop: "2rem",
              flexDirection: feature.id % 2 === 0 ? "row-reverse" : "row",
            }}
          >
            {/* Text Card */}
            <div
              className="flex flex-col justify-between rounded-2xl shadow-lg p-8 mx-auto text-card"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                width: "100%",
                maxWidth: "500px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                gap: "1.5rem",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {feature.subtitle && (
                  <h4
                    className="feature-subtitle"
                    style={{
                      textTransform: "uppercase",
                      padding: "8px 20px",
                      borderRadius: "9999px",
                      backgroundColor: "white",
                      color: "black",
                      fontWeight: "600",
                      fontSize: "0.95rem",
                      alignSelf: "flex-start",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {feature.subtitle}
                  </h4>
                )}
      
                <h1
                  className="feature-title"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    lineHeight: "1.3",
                  }}
                >
                  {feature.title}
                </h1>
              </div>
      
              <p
                className="feature-desc"
                style={{
                  color: "#ccc",
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                }}
              >
                {feature.desc}
              </p>
            </div>
      
            {/* Image */}
            <div className="relative h-full feature-image">
              <Image
                src={feature.img}
                alt={feature.title}
                width={900}
                height={800}
                className="object-contain"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  maxWidth: "800px",
                  height: "auto",
                  width: "100%",
                }}
              />
            </div>
          </div>
        ))}
      
        {/* ✅ Responsive adjustments */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .feature-block {
              flex-direction: column !important;
              text-align: center;
              gap: 2rem !important;
            }
            .text-card {
              max-width: 90% !important;
              padding: 1.5rem !important;
              gap: 1rem !important;
            }
            .feature-title {
              font-size: 1.6rem !important;
              line-height: 1.3 !important;
            }
            .feature-desc {
              font-size: 0.95rem !important;
              line-height: 1.5 !important;
            }
            .feature-subtitle {
              font-size: 0.8rem !important;
              padding: 6px 16px !important;
            }
            .feature-image img {
              max-width: 90% !important;
            }
          }
      
          @media (max-width: 640px) {
            .feature-block {
              text-align: center;
              gap: 1.5rem !important;
            }
            .text-card {
              max-width: 100% !important;
              padding: 1rem !important;
            }
            .feature-title {
              font-size: 1.4rem !important;
            }
            .feature-desc {
              font-size: 0.9rem !important;
            }
            .feature-subtitle {
              font-size: 0.75rem !important;
              margin: 0 auto !important;
            }
            .feature-image img {
              max-width: 100% !important;
            }
          }
        `}</style>
      </div>



      {/* --------------- Section 4 --------------- */}
      <motion.section
        className="w-full py-10 px-6 md:px-20 flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >

        <div className="w-full max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {features.slice(6, 12).map((item, index) => (
            <motion.div
              key={index}
              className="md:p-8 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.9)",
                textAlign: "left",
              }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-3">
                {/* Hide icon if not available */}
                
                <h3 className=" text-md md:text-xl font-semibold text-center">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* Banner */}
      <section className="w-full h-[400px] flex flex-col justify-center items-center py-20"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Try <span className="text-[#9a753e]">KnectHotel</span> for free
          </h2>
          <p className="text-gray-300 max-w-xs md:max-w-3xl text-wrap text-center">Hassle Free Migration. No Hidden Charges. An One stop solution for sales, marketing and operations of hotels and vacation rentals.</p>
          <button className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 hover:text-yellow-400 font-semibold rounded-lg transition-colors duration-300 hover:cursor-pointer">
            Get Started Now
          </button>
      </section>
    </div>
  );
}
