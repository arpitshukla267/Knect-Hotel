"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import Header from "@/components/sections/Header";

export default function HotelsPage() {
  const hotels = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      rating: 4.8,
      reviews: 1250,
      pricePerNight: 299,
      description:
        "Luxury hotel in the heart of Manhattan featuring rooftop dining, spa services, and panoramic city views. Perfect for business and leisure travelers.",
      amenities: ["WiFi", "Pool", "Gym", "Restaurant"],
    },
    {
      id: 2,
      name: "Seaside Resort & Spa",
      location: "Miami, USA",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      rating: 4.9,
      reviews: 2100,
      pricePerNight: 450,
      description:
        "Beachfront paradise with private beach access, world-class spa, and award-winning oceanfront restaurants. Experience ultimate relaxation.",
      amenities: ["WiFi", "Beach", "Spa", "Restaurant"],
    },
    {
      id: 3,
      name: "Mountain View Lodge",
      location: "Aspen, USA",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      rating: 4.7,
      reviews: 890,
      pricePerNight: 380,
      description:
        "Alpine retreat with ski-in/ski-out access, cozy fireplaces, and breathtaking mountain vistas. Ideal for winter sports enthusiasts.",
      amenities: ["WiFi", "Ski", "Gym", "Restaurant"],
    },
    {
      id: 4,
      name: "Urban Boutique Hotel",
      location: "San Francisco, USA",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      rating: 4.6,
      reviews: 670,
      pricePerNight: 220,
      description:
        "Contemporary design meets comfort in this trendy downtown hotel. Rooftop bar, local art gallery, and tech-enabled rooms.",
      amenities: ["WiFi", "Bar", "Gym", "Art Gallery"],
    },
  ];

  const [flipped, setFlipped] = useState({});

  const handleMouseEnter = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: false }));
  };

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
            KNECT Hotels
          </motion.h1>

          <motion.p
            className="text-gray-200 text-md md:text-lg max-w-2xl mx-auto mb-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Designed to showcase KNECT as a comprehensive platform for
            full-service hotels and resorts.
          </motion.p>

          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            From luxury resorts to business hotels, KNECT unifies operations —
            from front desk to housekeeping — while enhancing every touchpoint
            of guest interaction with smart automation and data-driven insights.
          </motion.p>
        </div>

        {/* Subtle glowing divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E2C994] to-transparent" />
      </motion.div>



      {/* Hotels Grid */}
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
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              variants={fadeUp}
              custom={index * 0.3}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div
                className="relative h-96 perspective-1000"
                onMouseEnter={() => handleMouseEnter(hotel.id)}
                onMouseLeave={() => handleMouseLeave(hotel.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-[1000ms]  ${
                    flipped[hotel.id] ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flipped[hotel.id]
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
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 text-[#E2C994]">
                          {hotel.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3 text-gray-200">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 fill-[#E2C994] text-[#E2C994]" />
                            <span className="font-semibold">
                              {hotel.rating}
                            </span>
                            <span className="text-sm text-gray-300">
                              ({hotel.reviews})
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#E2C994]">
                              ${hotel.pricePerNight}
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
                        {hotel.name}
                      </h3>
                      <p className="text-yellow-100 mb-6 flex-grow text-sm leading-relaxed">
                        {hotel.description}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Amenities</h4>
                          <div className="flex flex-wrap gap-2">
                            {hotel.amenities.map((a, i) => (
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
                          Book Now - ${hotel.pricePerNight}/night
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
