"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Sparkles } from "lucide-react";
import Header from "@/components/sections/Header";

export default function ExperimentalStaysPage() {
  const stays = [
    {
      id: 1,
      name: "Aurora Glass Dome",
      location: "Lapland, Finland",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
      rating: 4.9,
      reviews: 630,
      pricePerNight: 720,
      description:
        "Sleep under the Northern Lights in a temperature-controlled glass dome, featuring panoramic views of the Arctic sky and smart ambient lighting synced with aurora activity.",
      amenities: ["WiFi", "Heated Dome", "Aurora View", "Private Sauna"],
    },
    {
      id: 2,
      name: "Underwater Coral Suite",
      location: "Maldives",
      image:
        "https://images.unsplash.com/photo-1519821172141-b5d8b6dc46f0?w=800",
      rating: 4.8,
      reviews: 520,
      pricePerNight: 950,
      description:
        "Immerse yourself beneath the ocean in this transparent underwater suite surrounded by marine life — an exclusive fusion of design and nature.",
      amenities: ["Ocean View", "Private Chef", "WiFi", "Glass Walls"],
    },
    {
      id: 3,
      name: "Floating Jungle Pod",
      location: "Ubud, Bali",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      rating: 4.7,
      reviews: 410,
      pricePerNight: 340,
      description:
        "An eco-conscious stay hovering above the rainforest canopy, blending natural bamboo design with solar-powered comfort.",
      amenities: ["Eco Design", "Solar Power", "Rainforest View", "WiFi"],
    },
    {
      id: 4,
      name: "Desert Capsule Habitat",
      location: "Wadi Rum, Jordan",
      image:
        "https://images.unsplash.com/photo-1508264165352-258859e62245?w=800",
      rating: 4.8,
      reviews: 580,
      pricePerNight: 410,
      description:
        "Experience Mars on Earth in this capsule-style desert habitat with holographic lighting, AI temperature control, and immersive stargazing pods.",
      amenities: ["Smart Climate", "Stargazing", "Holographic Light", "WiFi"],
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

      {/* Header */}
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
            KNECT Experimental Stays
          </motion.h1>

          <motion.p
            className="text-gray-200 text-md md:text-lg max-w-2xl mx-auto mb-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Pushing boundaries of travel — futuristic habitats, nature-integrated
            sanctuaries, and smart-living concepts, all connected through KNECT.
          </motion.p>

          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Explore tomorrow’s hospitality today. From floating pods to
            transparent underwater villas, KNECT powers next-gen property
            management for the world’s most imaginative stays.
          </motion.p>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E2C994] to-transparent" />
      </motion.div>

      {/* Stays Grid */}
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
          {stays.map((stay, index) => (
            <motion.div
              key={stay.id}
              variants={fadeUp}
              custom={index * 0.3}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div
                className="relative h-96 perspective-1000"
                onMouseEnter={() => handleMouseEnter(stay.id)}
                onMouseLeave={() => handleMouseLeave(stay.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-[1000ms] ${
                    flipped[stay.id] ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flipped[stay.id]
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
                      src={stay.image}
                      alt={stay.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 text-[#E2C994]">
                          {stay.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3 text-gray-200">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{stay.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 fill-[#E2C994] text-[#E2C994]" />
                            <span className="font-semibold">{stay.rating}</span>
                            <span className="text-sm text-gray-300">
                              ({stay.reviews})
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#E2C994]">
                              ${stay.pricePerNight}
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
                      <h3 className="text-2xl font-bold mb-4">{stay.name}</h3>
                      <p className="text-yellow-100 mb-6 flex-grow text-sm leading-relaxed">
                        {stay.description}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {stay.amenities.map((a, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-[#E2C994]/20 rounded-full text-sm"
                              >
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="w-full bg-[#E2C994] text-black font-semibold py-3 rounded-lg hover:bg-[#f2dca3] transition-colors flex items-center justify-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          Experience Now - ${stay.pricePerNight}/night
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
