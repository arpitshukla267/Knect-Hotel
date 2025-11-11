"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/sections/Header";

const servicesData = [
  {
    slug: "reception",
    title: "Reception",
    img: "https://i.pinimg.com/736x/87/e1/6b/87e16b6093779feed27d6ee3d7532852.jpg",
    desc: "Our reception operates 24/7 with professionalism and warmth. From check-in to concierge assistance, our front desk ensures your every need is met seamlessly.",
    details: [
      "24-hour check-in and assistance",
      "Personalized guest greetings and quick registration",
      "Concierge recommendations for tours, dining, and activities",
      "Express check-out and travel support",
    ],
  },
  {
    slug: "in-room-dining",
    title: "In-Room Dining",
    img: "https://i.pinimg.com/736x/97/97/9d/97979d5f67a07cdf865769e61d0aafc6.jpg",
    desc: "Enjoy restaurant-quality meals and beverages without leaving your room. Our curated in-room dining menu is available day and night.",
    details: [
      "Round-the-clock dining service",
      "Chef-curated multi-cuisine menu",
      "Customizable meal options for dietary preferences",
      "Fast delivery and discreet service",
    ],
  },
  {
    slug: "housekeeping",
    title: "Housekeeping",
    img: "https://i.pinimg.com/1200x/07/af/c0/07afc06f34f37a25fa73c5e71501a87d.jpg",
    desc: "Our housekeeping staff ensures immaculate cleanliness and comfort, maintaining the highest hygiene standards for your peace of mind.",
    details: [
      "Daily room cleaning and turn-down service",
      "Eco-friendly cleaning supplies",
      "On-demand laundry and linen replacement",
      "Attention to every detail for spotless comfort",
    ],
  },
  {
    slug: "gym",
    title: "Gym",
    img: "https://i.pinimg.com/1200x/20/5e/93/205e93101655fdcd4419f1bf13ab709c.jpg",
    desc: "Stay fit even while you travel. Our state-of-the-art fitness center offers advanced equipment and a motivating environment for your workouts.",
    details: [
      "Latest cardio and strength-training machines",
      "Personal trainer guidance available",
      "Yoga and stretching zones",
      "Complimentary towels and water station",
    ],
  },
  {
    slug: "spa",
    title: "Spa",
    img: "https://i.pinimg.com/736x/4d/63/74/4d6374fb1f7116b42250e3dc195342b0.jpg",
    desc: "Unwind in tranquility with our premium spa therapies that rejuvenate your body and calm your mind.",
    details: [
      "Signature massages and body scrubs",
      "Aromatherapy and relaxation therapies",
      "Steam room and sauna access",
      "Private spa suites for couples",
    ],
  },
  {
    slug: "swimming-pool",
    title: "Swimming Pool",
    img: "https://i.pinimg.com/736x/8b/bf/c3/8bbfc3503f40443ca05461ad62528fef.jpg",
    desc: "Take a refreshing dip or simply lounge by our pristine pool surrounded by serene ambiance and comfort.",
    details: [
      "Temperature-controlled pool",
      "Poolside bar and lounge service",
      "Lifeguard and safety assistance",
      "Family-friendly and kids’ zones",
    ],
  },
  {
    slug: "concierge-service",
    title: "Concierge Service",
    img: "https://i.pinimg.com/736x/32/d2/ad/32d2ad1b5b1beeb7c161ee07289dee3b.jpg",
    desc: "Our concierge team is always ready to make your stay effortless and memorable — from restaurant reservations to city exploration.",
    details: [
      "Tour bookings and local guide arrangements",
      "Ticketing, transportation, and car rentals",
      "Priority reservations for dining and entertainment",
      "Personalized itinerary planning",
    ],
  },
  {
    slug: "in-room-controls",
    title: "In-Room Controls",
    img: "https://i.pinimg.com/1200x/b4/d1/57/b4d1578477041b579d06fbe79280ada6.jpg",
    desc: "Smart technology meets comfort — manage your room ambiance with intuitive in-room control systems.",
    details: [
      "Control lighting, temperature, and curtains",
      "Smart TV and multimedia connectivity",
      "One-touch room service requests",
      "Voice-assist integration for convenience",
    ],
  },
  {
    slug: "conference-hall",
    title: "Conference Hall",
    img: "https://i.pinimg.com/1200x/5a/22/c8/5a22c866686eaabaa55b496251db4769.jpg",
    desc: "Host seamless business events and meetings in our modern conference hall equipped with top-tier technology and amenities.",
    details: [
      "High-speed Wi-Fi and presentation screens",
      "Customizable seating arrangements",
      "On-site tech and event support staff",
      "Catering and refreshment options",
    ],
  },
  {
    slug: "community-hall",
    title: "Community Hall",
    img: "https://i.pinimg.com/1200x/be/5a/4a/be5a4aae17c5b9c60f5c226f03e30608.jpg",
    desc: "Celebrate your special occasions in our spacious community hall, designed for both elegance and convenience.",
    details: [
      "Ideal for weddings, parties, and social gatherings",
      "Premium decor and lighting options",
      "Audio-visual setup available",
      "Dedicated event coordination team",
    ],
  },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service)
    return (
      <div className="flex items-center justify-center h-screen text-white text-2xl">
        Service not found
      </div>
    );

  return (
    <section
      className="relative min-h-screen text-white overflow-hidden py-12 md:py-20"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header/>

      {/* Subtle animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(270deg, rgba(245,217,161,0.2), rgba(0,0,0,0.3), rgba(245,217,161,0.2))",
          backgroundSize: "200% 200%",
          filter: "blur(80px)",
        }}
      />

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
        <button
          onClick={() => router.push("/services")}
          className="flex items-center text-[#f5d9a1] hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft className="mr-2" /> Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[420px] md:h-[500px] object-cover rounded-2xl shadow-[0_0_40px_rgba(245,217,161,0.25)]"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            className="flex-1 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-[#f5d9a1]/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#f5d9a1] mb-4 drop-shadow-lg">
              {service.title}
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              {service.desc}
            </p>
            {service.details && (
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {service.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
            <div className="mt-8 h-1 w-24 bg-[#f5d9a1] rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Lower Description Section */}
      <motion.div
        className="max-w-5xl mx-auto mt-20 mb-20 px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#f5d9a1] mb-6">
          Experience Excellence
        </h2>
        <p className="text-gray-200 leading-relaxed text-lg">
          Every service at KnectHotel is a blend of luxury, comfort, and
          thoughtfulness. Our commitment to your satisfaction drives every
          detail — from the fragrance in the lobby to the precision in your
          morning coffee. We don’t just offer services, we craft experiences
          that stay with you long after you check out.
        </p>
      </motion.div>
    </section>
  );
}
