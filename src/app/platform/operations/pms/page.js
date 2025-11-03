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
  const features = [
    {
      icon: <FaChartBar className="text-teal-400 text-3xl" />,
      title: "Dashboard",
      desc: "Overview of arrivals and departures. Perform quick actions effortlessly.",
    },
    {
      icon: <FaCalendarAlt className="text-teal-400 text-3xl" />,
      title: "Smart Calendar",
      desc: "Drag and drop bookings, automated room allocations, and flexible scheduling.",
    },
    {
      icon: <FaBroom className="text-teal-400 text-3xl" />,
      title: "Housekeeping",
      desc: "Turn over rooms efficiently; also accessible through the mobile app.",
    },
    {
      icon: <FaDollarSign className="text-teal-400 text-3xl" />,
      title: "Folios & Payments",
      desc: "Track guest history and process contactless payments with ease.",
    },
    {
      icon: <FaUsers className="text-teal-400 text-3xl" />,
      title: "Groups",
      desc: "Manage group inquiries, profiles, and settlements efficiently.",
    },
    {
      icon: <FaCloud className="text-teal-400 text-3xl" />,
      title: "Integrations",
      desc: "Connect over 500+ integrations to automate your hotel operations.",
    },
    {
      icon: <FaMobileAlt className="text-teal-400 text-3xl" />,
      title: "Mobile App",
      desc: "Manage property operations on the go with instant notifications.",
    },
    {
      icon: <FaDollarSign className="text-teal-400 text-3xl" />,
      title: "Rates and Inventory",
      desc: "Manage rates and inventory in a single place with an in-built channel manager.",
    },
    {
      icon: <FaUsersCog className="text-teal-400 text-3xl" />,
      title: "Users & Access Controls",
      desc: "Create and manage admins, staff, accountants, and more with flexible permissions.",
    },
    {
      title: "Direct Billing & Corporate Accounts",
      desc: "Manage group bookings and corporate accounts in a single place, with post-paid and recurring payment options.",
    },
    {
      title: "Custom Reports",
      desc: "In addition to 50+ predefined reports, you can build unlimited custom reports.",
    },
    {
      title: "Folio Customizations",
      desc: "Customize folio headers, logos, and terms & conditions that suit your hotel branding guidelines.",
    },
    {
      title: "Payments Automation",
      desc: "Authorize credit cards and virtual cards from OTAs. Send payment reminders and avoid cancellations and chargebacks.",
    },
    {
      title: "PCI DSS Complaint",
      desc: "We are PCI DSS complaint and your data is secured and protected the best way possible.",
    },
    {
      title: "24/7 Premium Support",
      desc: "We know the pain of running hotels and will stand by all the time over chat and calls.",
    },
  ];

  const aboutFeatures = [
  {
    id: 1,
      img: "/pms-about.gif",
      subtitle: "Ease of use",
      title: "Easy to use, drag and drop",
      desc: "Stunning modern user interface and easy front-desk flows.",
    },
    {
      id: 2,
      img: "/pms-image-1.png",
      subtitle: "front desk automation",
      title: "Give the guests what they want.",
      desc: "From search to check-out, Stayflexi PMS centered around the guest. Self-check-ins, auto room allocations, self-room upgrades, and self-check-outs are a few among much guest-centric automation.",
    },
    {
      id: 3,
      img: "/pms-image-2.png",
      subtitle: "room automations",
      title: "Automated room allocations",
      desc: `Stayflexi system intelligently auto allocates the best rooms for the guests. It saves 70% of front desk time. Auto room allocation is the fundamental disruption to make property go contactless. We are proudly the pioneers of this concept.`,
    },
    {
      id: 4,
      img: "/pms-image-3.png",
      subtitle: "Smart Housekeeping",
      title: "Track of room statuses effortlessly",
      desc: "Stayflexi's Smart Housekeeping ensures a seamless and efficient stay for your guests. Manage housekeeping tasks with real-time notifications, automated schedules, and staff assignments.",
    },
    {
      id: 5,
      img: "/pms-image-4.jpg",
      subtitle: "",
      title: "The power of truly All-In-One",
      desc: "Stayflexi platform comes out of the box with PMS, channel manager, booking engine, revenue manager, and housekeeping. You don't require too many integrations."
    },
  ];


  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="text-white font-[Marcellus]"
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex flex-col-reverse md:flex-row justify-center items-center md:gap-10 w-full px-6 md:px-20 pt-10 md:pt-20">
        {/* Left Text Section */}
        <motion.div
          className="space-y-6 text-center md:text-left max-w-xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl md:mt-0 lg:text-6xl font-semibold leading-tight">
            Automated and easy-to-use{" "}
            <span className="text-[#9a753e]">PMS</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-lg">
            Simplify your hotel operations with a powerful PMS designed to save time,
            reduce manual effort, and improve guest satisfaction.
          </p>
      
          <div className="flex justify-center md:justify-start items-center gap-4">
            <button className="text-xs md:text-base px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 hover:text-yellow-400 font-semibold rounded-lg transition-colors duration-300 hover:cursor-pointer">
              Request a Demo
            </button>
            <button
              className="text-xs md:text-base bg-transparent text-white px-6 py-3 rounded-lg hover:cursor-pointer hover:bg-white/20 hover:text-yellow-400 font-semibold transition-colors duration-300"
              style={{
                border: "2px solid white",
                position: "relative",
              }}
            >
              Get started for free
            </button>
          </div>
        </motion.div>
      
        {/* Right Image Section */}
        <motion.div
          className="relative w-full md:w-[500px] h-[350px] md:h-[500px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/pms-hero.png"
              alt="PMS Hero"
              width={1200}
              height={800}
              className="object-contain"
            />
          </div>
        </motion.div>
      </section>


      {/* Features Section */}
      <motion.section
        className="w-full py-16 px-2 md:px-10 lg:px-20 flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <div
          className="w-full gap-2 md:gap-10 grid grid-cols-3"
        >
          {features.slice(0, 9).map((item, index) => (  
            <motion.div
              key={index}
              className="rounded-2xl px-2 py-3 md:p-8 transition-all duration-300 shadow-md hover:shadow-xl"
              variants={fadeUp}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 md:mb-4 text-xs md:text-md">
                {item.icon}
                <h3 className="md:text-xl text-xs md:font-semibold text-center">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-xs md:text-md leading-relaxed mt-4 md:mt-0 text-center md:text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/*About Section*/}
      <div
        className="w-full flex flex-col gap-16 py-10 px-10"
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



      {/* Feature Section */}
      <motion.section
        className="w-full max-h-screen py-20 px-2 md:px-10 lg:px-20 bg-black/50 flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <div
          className="w-full gap-2 md:gap-12"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          }}
        >
          {features.slice(9, 15).map((item, index) => (  
            <motion.div
              key={index}
              className="rounded-2xl px-2 py-3 md:p-8 transition-all duration-300 shadow-md hover:shadow-xl"
              variants={fadeUp}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 md:mb-4 text-xs md:text-md">
                {item.icon}
                <h3 className="md:text-xl text-xs md:font-semibold text-center">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-xs md:text-md leading-relaxed mt-4 md:mt-0 text-center md:text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>




      {/* Banner */}
      <section className="w-full h-[400px] flex flex-col justify-center items-center py-20"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
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
