"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Star } from "lucide-react";
import Header from "@/components/sections/Header";

export default function HostelsPage() {
  const hostels = [
    {
      id: 1,
      name: "Nomad's Haven",
      location: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800",
      rating: 4.7,
      reviews: 860,
      pricePerNight: 25,
      description:
        "Modern co-living hostel with open lounges, pool bar, and digital nomad workspace. Perfect for backpackers and freelancers.",
      amenities: ["WiFi", "Pool", "Work Lounge", "Cafe"],
    },
    {
      id: 2,
      name: "Urban Tribe Hostel",
      location: "Berlin, Germany",
      image:
        "https://images.unsplash.com/photo-1551776235-dde6d4829808?w=800",
      rating: 4.8,
      reviews: 1340,
      pricePerNight: 32,
      description:
        "Stylish city-center hostel featuring shared dorms, kitchen facilities, game zone, and evening social events.",
      amenities: ["WiFi", "Bar", "Kitchen", "Events"],
    },
    {
      id: 3,
      name: "Backpack Basecamp",
      location: "Kathmandu, Nepal",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      rating: 4.6,
      reviews: 920,
      pricePerNight: 18,
      description:
        "Cozy mountain-view hostel offering cultural tours, bonfire nights, and affordable dorms for trekkers and explorers.",
      amenities: ["WiFi", "Tour Desk", "Bonfire", "Cafe"],
    },
    {
      id: 4,
      name: "Seaside Backpackers",
      location: "Goa, India",
      image:
        "https://images.unsplash.com/photo-1582719478181-2f2b39f7a3b9?w=800",
      rating: 4.5,
      reviews: 780,
      pricePerNight: 20,
      description:
        "Beachfront budget hostel with yoga deck, surf rentals, and rooftop hangouts — ideal for social travelers.",
      amenities: ["WiFi", "Surf Rentals", "Yoga Deck", "Rooftop"],
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
            KNECT Hostels
          </motion.h1>

          <motion.p
            className="text-gray-200 text-md md:text-lg max-w-2xl mx-auto mb-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Affordable. Social. Smart. Designed for backpackers, students, and
            digital nomads — powered by KNECT’s smart property tools.
          </motion.p>

          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            KNECT simplifies hostel management — from shared room assignments
            and payments to event coordination and guest engagement — all in one
            intuitive platform.
          </motion.p>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E2C994] to-transparent" />
      </motion.div>

      {/* Hostels Grid */}
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
          {hostels.map((hostel, index) => (
            <motion.div
              key={hostel.id}
              variants={fadeUp}
              custom={index * 0.3}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div
                className="relative h-96 perspective-1000"
                onMouseEnter={() => handleMouseEnter(hostel.id)}
                onMouseLeave={() => handleMouseLeave(hostel.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-[1000ms] ${
                    flipped[hostel.id] ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flipped[hostel.id]
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
                      src={hostel.image}
                      alt={hostel.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 text-[#E2C994]">
                          {hostel.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3 text-gray-200">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{hostel.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 fill-[#E2C994] text-[#E2C994]" />
                            <span className="font-semibold">
                              {hostel.rating}
                            </span>
                            <span className="text-sm text-gray-300">
                              ({hostel.reviews})
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#E2C994]">
                              ${hostel.pricePerNight}
                            </div>
                            <div className="text-xs text-gray-300">
                              per night
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
                      <h3 className="text-2xl font-bold mb-4">
                        {hostel.name}
                      </h3>
                      <p className="text-yellow-100 mb-6 flex-grow text-sm leading-relaxed">
                        {hostel.description}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Amenities</h4>
                          <div className="flex flex-wrap gap-2">
                            {hostel.amenities.map((a, i) => (
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
                          Book Stay - ${hostel.pricePerNight}/night
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
