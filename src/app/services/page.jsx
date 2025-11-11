"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/sections/Header";

export default function ServicesPage() {
  const router = useRouter();

  const services = [
    {
      id: 0,
      slug: "reception",
      title: "Reception",
      img: "https://i.pinimg.com/736x/87/e1/6b/87e16b6093779feed27d6ee3d7532852.jpg",
      desc: "A warm welcome awaits you at our 24x7 reception desk, where hospitality meets efficiency.",
    },
    {
      id: 1,
      slug: "in-room-dining",
      title: "In-Room Dining",
      img: "https://i.pinimg.com/736x/97/97/9d/97979d5f67a07cdf865769e61d0aafc6.jpg",
      desc: "Enjoy gourmet meals and late-night snacks in the comfort of your room.",
    },
    {
      id: 2,
      slug: "housekeeping",
      title: "Housekeeping",
      img: "https://i.pinimg.com/1200x/07/af/c0/07afc06f34f37a25fa73c5e71501a87d.jpg",
      desc: "Spotless comfort, personalized attention, and freshness all day long.",
    },
    {
      id: 3,
      slug: "gym",
      title: "Gym",
      img: "https://i.pinimg.com/1200x/20/5e/93/205e93101655fdcd4419f1bf13ab709c.jpg",
      desc: "A fully equipped fitness center with modern machines and expert trainers.",
    },
    {
      id: 4,
      slug: "spa",
      title: "Spa",
      img: "https://i.pinimg.com/736x/4d/63/74/4d6374fb1f7116b42250e3dc195342b0.jpg",
      desc: "Indulge in peace and rejuvenation at our tranquil luxury spa.",
    },
    {
      id: 5,
      slug: "swimming-pool",
      title: "Swimming Pool",
      img: "https://i.pinimg.com/736x/8b/bf/c3/8bbfc3503f40443ca05461ad62528fef.jpg",
      desc: "Take a refreshing dip or unwind by our crystal-clear infinity pool.",
    },
    {
      id: 6,
      slug: "concierge-service",
      title: "Concierge Service",
      img: "https://i.pinimg.com/736x/32/d2/ad/32d2ad1b5b1beeb7c161ee07289dee3b.jpg",
      desc: "Personalized assistance with tours, reservations, and travel plans.",
    },
    {
      id: 7,
      slug: "in-room-controls",
      title: "In-Room Controls",
      img: "https://i.pinimg.com/1200x/b4/d1/57/b4d1578477041b579d06fbe79280ada6.jpg",
      desc: "Control lighting, temperature, and entertainment effortlessly.",
    },
    {
      id: 8,
      slug: "conference-hall",
      title: "Conference Hall",
      img: "https://i.pinimg.com/1200x/5a/22/c8/5a22c866686eaabaa55b496251db4769.jpg",
      desc: "Host meetings or events in our tech-ready, elegant conference hall.",
    },
    {
      id: 9,
      slug: "community-hall",
      title: "Community Hall",
      img: "https://i.pinimg.com/1200x/be/5a/4a/be5a4aae17c5b9c60f5c226f03e30608.jpg",
      desc: "Celebrate moments with elegance in our spacious community hall.",
    },
  ];

  return (
    <section
      className="relative min-h-screen w-full text-white overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header />

      {/* Subtle animated background shimmer */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(270deg, rgba(255,215,141,0.2), rgba(0,0,0,0.5), rgba(255,215,141,0.2))",
          backgroundSize: "200% 200%",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(245,217,161,0.3)]"
        >
          Our Signature Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#f5d9a1] mt-3 text-base md:text-lg max-w-xl mx-auto"
        >
          Discover the hallmark amenities that define the KnectHotel experience.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={() => router.push(`/services/${s.slug}`)}
            className="group relative rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(245,217,161,0.1)] hover:shadow-[0_0_40px_rgba(245,217,161,0.3)] cursor-pointer"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6 backdrop-blur-[2px]">
              <h3 className="text-2xl font-semibold text-[#f5d9a1] mb-1 drop-shadow-lg">
                {s.title}
              </h3>
              <p className="text-gray-200 text-sm leading-snug line-clamp-2">
                {s.desc}
              </p>
              <div className="mt-3 text-[#f5d9a1] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                Explore More →
              </div>
            </div>

            {/* Glow border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-transparent"
              whileHover={{
                borderColor: "rgba(245,217,161,0.6)",
                boxShadow:
                  "0 0 25px rgba(245,217,161,0.4), 0 0 60px rgba(154,117,62,0.2)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
