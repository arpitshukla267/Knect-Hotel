"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import Header from "@/components/sections/Header";

export default function GroupsPage() {
  const groups = [
    {
      id: 1,
      name: "Corporate Events Hall",
      location: "Los Angeles, USA",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
      rating: 4.9,
      capacity: "Up to 500 guests",
      description:
        "A luxurious, fully equipped venue for conferences, meetings, and networking events with world-class AV and smart scheduling features.",
      amenities: ["WiFi", "Catering", "Audio Visual", "Parking"],
    },
    {
      id: 2,
      name: "Beachfront Wedding Venue",
      location: "Goa, India",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800",
      rating: 4.8,
      capacity: "Up to 300 guests",
      description:
        "Elegant seaside wedding destination offering open-air ceremonies, curated dining, and full guest accommodation options.",
      amenities: ["Beach Access", "Catering", "Decor", "Music"],
    },
    {
      id: 3,
      name: "Grand Convention Center",
      location: "Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
      rating: 4.9,
      capacity: "Up to 2000 guests",
      description:
        "Ultra-modern convention venue with modular halls, VIP lounges, and integrated KNECT management for seamless multi-day events.",
      amenities: ["WiFi", "Catering", "Security", "Multi-Hall"],
    },
    {
      id: 4,
      name: "Royal Banquet Palace",
      location: "Jaipur, India",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      rating: 4.7,
      capacity: "Up to 800 guests",
      description:
        "Heritage-inspired palace venue blending regal architecture with smart lighting and climate control for unforgettable celebrations.",
      amenities: ["Decor", "Lighting", "Catering", "Parking"],
    },
  ];

  const [flipped, setFlipped] = useState({});
  const handleMouseEnter = (id) =>
    setFlipped((prev) => ({ ...prev, [id]: true }));
  const handleMouseLeave = (id) =>
    setFlipped((prev) => ({ ...prev, [id]: false }));

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1.2, ease: "easeOut" },
    }),
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header />

      {/* Animated Header Section */}
      <motion.div
        className="relative bg-black/40 backdrop-blur-md border-b border-yellow-800/40 shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.h1
            className="text-3xl md:text-6xl font-extrabold text-[#E2C994] mb-4 md:mb-6 tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            KNECT Group Venues
          </motion.h1>

          <motion.p
            className="text-gray-200 text-md md:text-lg max-w-2xl mx-auto mb-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Showcase event spaces, conference halls, and wedding destinations
            — powered by KNECT’s integrated group booking and event automation.
          </motion.p>

          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            From business summits to dream weddings, KNECT transforms venue
            management with unified scheduling, billing, and real-time
            collaboration tools.
          </motion.p>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E2C994] to-transparent" />
      </motion.div>

      {/* Groups Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {groups.map((group, index) => (
            <motion.div
              key={group.id}
              variants={fadeUp}
              custom={index * 0.3}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div
                className="relative h-96 perspective-1000"
                onMouseEnter={() => handleMouseEnter(group.id)}
                onMouseLeave={() => handleMouseLeave(group.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-[1000ms] ${
                    flipped[group.id] ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flipped[group.id]
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={group.image}
                      alt={group.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 text-[#E2C994]">
                          {group.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3 text-gray-200">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{group.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-[#E2C994]" />
                            <span className="text-sm text-gray-200">
                              {group.capacity}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-[#E2C994]">
                              ★ {group.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute w-full h-full rounded-xl p-6 shadow-xl scale-110"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background:
                        "linear-gradient(135deg, #000000 0%, #9a753e 100%)",
                    }}
                  >
                    <div className="flex flex-col h-full text-[#E2C994]">
                      <h3 className="text-2xl font-bold mb-4">{group.name}</h3>
                      <p className="text-yellow-100 mb-6 flex-grow text-sm leading-relaxed">
                        {group.description}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Facilities</h4>
                          <div className="flex flex-wrap gap-2">
                            {group.amenities.map((a, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-[#E2C994]/20 rounded-full text-sm"
                              >
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="w-full bg-[#E2C994] text-black font-semibold py-3 rounded-lg hover:bg-[#f2dca3] transition-colors">
                          Inquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
