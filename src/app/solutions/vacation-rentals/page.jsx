"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Home } from "lucide-react";
import Header from "@/components/sections/Header";

export default function VacationRentalsPage() {
  const rentals = [
    {
      id: 1,
      name: "Sunset Beach Villa",
      location: "Maldives",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
      rating: 4.9,
      reviews: 540,
      pricePerNight: 620,
      description:
        "Oceanfront villa with private pool, glass-walled living space, and direct access to white-sand beaches. Perfect for honeymooners or luxury travelers.",
      amenities: ["WiFi", "Private Pool", "Ocean View", "Chef Service"],
    },
    {
      id: 2,
      name: "Alpine Chalet Retreat",
      location: "Swiss Alps",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      rating: 4.8,
      reviews: 460,
      pricePerNight: 480,
      description:
        "Cozy winter cabin featuring wood-burning fireplace, heated floors, mountain-view balcony, and nearby ski access.",
      amenities: ["Fireplace", "Heated Floors", "WiFi", "Mountain View"],
    },
    {
      id: 3,
      name: "Lakeside Serenity Cabin",
      location: "British Columbia, Canada",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800",
      rating: 4.7,
      reviews: 380,
      pricePerNight: 260,
      description:
        "A peaceful lakeside escape surrounded by pine trees. Includes private dock, kayak rentals, and cozy interiors for year-round comfort.",
      amenities: ["Lake View", "Kayaks", "WiFi", "BBQ Deck"],
    },
    {
      id: 4,
      name: "Desert Mirage Villa",
      location: "Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1600585152931-2949e6b7a7f8?w=800",
      rating: 4.8,
      reviews: 510,
      pricePerNight: 530,
      description:
        "Ultra-modern desert villa with infinity pool, rooftop lounge, and private spa room. Designed for exclusivity and peace.",
      amenities: ["Infinity Pool", "Spa", "WiFi", "Rooftop Lounge"],
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
            KNECT Vacation Rentals
          </motion.h1>

          <motion.p
            className="text-gray-200 text-md md:text-lg max-w-2xl mx-auto mb-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Explore luxurious villas, private cabins, and unique stays around
            the world — all connected through KNECT’s smart hospitality platform.
          </motion.p>

          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            KNECT unifies vacation rental management, automation, and guest
            personalization — giving owners full control and guests a
            five-star experience.
          </motion.p>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E2C994] to-transparent" />
      </motion.div>

      {/* Rentals Grid — same responsiveness as Hotels */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {rentals.map((rental, index) => (
            <motion.div
              key={rental.id}
              variants={fadeUp}
              custom={index * 0.3}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div
                className="relative h-80 md:h-96 perspective-1000"
                onMouseEnter={() => handleMouseEnter(rental.id)}
                onMouseLeave={() => handleMouseLeave(rental.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-[1000ms] ${
                    flipped[rental.id] ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flipped[rental.id]
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
                      src={rental.image}
                      alt={rental.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white">
                        <h3 className="text-md md:text-2xl font-semibold md:font-bold mb-1 md:mb-2 text-[#E2C994]">
                          {rental.name}
                        </h3>
                        <div className="flex items-center gap-1 md:gap-2 md:mb-3 text-gray-200">
                          <MapPin className="md:w-4 w-3 h-3 md:h-4" />
                          <span className="text-xs md:text-sm">
                            {rental.location}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 md:gap-2">
                            <Star className="md:w-5 w-4 h-4 md:h-5 fill-[#E2C994] text-[#E2C994]" />
                            <span className="text-xs md:text-sm font-semibold">
                              {rental.rating}
                            </span>
                            <span className="text-xs text-gray-300">
                              ({rental.reviews})
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-md md:text-2xl font-bold text-[#E2C994]">
                              ${rental.pricePerNight}
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
                    className="absolute w-full h-full rounded-xl p-3 md:p-6 shadow-xl scale-105 md:scale-110"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background:
                        "linear-gradient(135deg, #000000 0%, #9a753e 100%)",
                    }}
                  >
                    <div className="flex flex-col h-full text-[#E2C994]">
                      <h3 className="text-md md:text-2xl font-bold mb-2 md:mb-4">
                        {rental.name}
                      </h3>
                      <p className="text-yellow-100 mb-2 md:mb-6 flex-grow text-xs md:text-sm leading-relaxed">
                        {rental.description}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Amenities</h4>
                          <div className="flex flex-wrap gap-2">
                            {rental.amenities.map((a, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-[#E2C994]/20 rounded-full text-xs md:text-sm"
                              >
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="w-full bg-[#E2C994] text-black font-semibold py-3 text-xs md:text-md rounded-lg hover:bg-[#f2dca3] transition-colors">
                          Reserve - ${rental.pricePerNight}/night
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
