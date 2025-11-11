"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/sections/Header";

const newsItems = [
  {
    date: "March 20, 2024",
    title: "Knect Hotel Featured in Hospitality Tech Magazine",
    excerpt:
      "Our innovative platform was highlighted as a game-changer in the hospitality technology space.",
    description:
      "Knect Hotel was recently featured in Hospitality Tech Magazine for its groundbreaking AI-driven automation tools. The article praised our ability to streamline guest management, dynamic pricing, and cross-platform integrations for hotels worldwide.",
    image: "/images/news-1.jpg",
    category: "Press",
    source: "Hospitality Tech",
  },
  {
    date: "March 15, 2024",
    title: "Major Hotel Chain Adopts Knect Hotel Platform",
    excerpt:
      "Leading hotel chain selects Knect Hotel for their digital transformation initiative.",
    description:
      "A major international hotel group has officially integrated Knect Hotel into its operations, improving guest experience and automating key operational workflows. The partnership highlights our continued growth in enterprise hospitality solutions.",
    image: "/images/news-2.jpg",
    category: "Business",
    source: "Company Announcement",
  },
  {
    date: "March 10, 2024",
    title: "AI Features Receive Industry Recognition",
    excerpt:
      "Our AI assistant capabilities were recognized at the Hospitality Innovation Awards.",
    description:
      "At the Hospitality Innovation Awards 2024, Knect Hotel’s AI assistant won in the ‘Smart Operations’ category for its intelligent task automation and guest personalization capabilities.",
    image: "/images/news-3.jpg",
    category: "Awards",
    source: "Industry Awards",
  },
  {
    date: "March 5, 2024",
    title: "Partnership with Leading Payment Providers",
    excerpt:
      "New integrations with major payment gateways expand our financial services offerings.",
    description:
      "We’ve joined forces with Stripe, Razorpay, and Cashfree to simplify transactions for hoteliers. This integration empowers hotels to accept global payments with lower fees and real-time reporting.",
    image: "/images/news-4.jpg",
    category: "Partnership",
    source: "Company Announcement",
  },
  {
    date: "February 28, 2024",
    title: "Knect Hotel Expands to International Markets",
    excerpt:
      "Platform now available in 15+ countries with localized features and support.",
    description:
      "Knect Hotel continues its global expansion, introducing multi-language support, regional payment compatibility, and 24/7 international customer support.",
    image: "/images/news-5.jpg",
    category: "Expansion",
    source: "Company Announcement",
  },
  {
    date: "February 20, 2024",
    title: "Customer Success Story: 300% Revenue Growth",
    excerpt:
      "Case study reveals how a boutique hotel achieved significant revenue growth using our platform.",
    description:
      "One of our boutique hotel partners reported a 300% revenue boost within 6 months using Knect Hotel’s pricing intelligence and marketing automation tools.",
    image: "/images/news-6.jpg",
    category: "Success",
    source: "Case Study",
  },
  {
    date: "February 10, 2024",
    title: "Knect Hotel Launches Sustainability Program",
    excerpt:
      "We’re committed to reducing carbon footprints with new energy-efficient solutions.",
    description:
      "Our sustainability program enables partner hotels to monitor and reduce energy consumption through smart room controls and predictive analytics.",
    image: "/images/news-7.jpg",
    category: "Environment",
    source: "Corporate News",
  },
  {
    date: "February 1, 2024",
    title: "CEO Shares Vision for the Future of Hospitality",
    excerpt:
      "In a recent interview, our CEO discussed how AI and automation will redefine the industry.",
    description:
      "During an exclusive interview with Travel Insight, our CEO outlined how emerging technologies will transform guest experience, personalization, and operational efficiency across hotels worldwide.",
    image: "/images/news-8.jpg",
    category: "Interview",
    source: "Travel Insight",
  },
  {
    date: "January 25, 2024",
    title: "Knect Hotel Wins Innovation Excellence Award",
    excerpt:
      "Recognized for our cutting-edge approach to hospitality technology and AI automation.",
    description:
      "Knect Hotel received the 2024 Innovation Excellence Award for its revolutionary AI assistant and multi-platform integration ecosystem, marking another milestone in our mission to modernize hospitality.",
    image: "/images/news-9.jpg",
    category: "Awards",
    source: "Tech Journal",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ✅ Separate component for each news card
function NewsCard({ news, onSelect }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 max-w-sm"
    >
      <div className="relative h-48 w-full">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
            {news.category}
          </span>
          <span className="text-xs text-white/60">{news.date}</span>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-white marcellus">
          {news.title}
        </h2>
        <p className="text-white/80 text-sm mb-4">{news.excerpt}</p>
        <button
          onClick={() => onSelect(news)}
          className="text-[#d2a86a] font-medium text-sm hover:underline"
        >
          Read more →
        </button>
      </div>
    </motion.div>
  );
}

export default function NewsPage() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const currentItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      className="min-h-screen w-full text-white flex flex-col items-center"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header />

      <div className="w-full max-w-7xl px-6 md:px-10 pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl marcellus leading-tight">
            Press Releases & Media Coverage
          </motion.h1>
          <motion.p className="mt-4 text-white/80 max-w-3xl mx-auto manrope-regular text-sm sm:text-base md:text-lg">
            Stay updated with the latest news, press releases, and media
            coverage about Knect Hotel.
          </motion.p>
        </motion.div>

        {/* News Grid */}
        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
        >
          {currentItems.map((news, index) => (
            <NewsCard key={index} news={news} onSelect={setSelectedNews} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-md flex items-center justify-center font-medium ${
                  currentPage === i + 1
                    ? "bg-[#d2a86a] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Popup Modal */}
        <AnimatePresence>
          {selectedNews && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 sm:p-8 max-w-lg w-full text-center relative"
              >
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 text-white/90 hover:text-white text-2xl font-bold transition-transform hover:scale-110"
                  aria-label="Close"
                >
                  ×
                </button>

                <Image
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  width={600}
                  height={400}
                  className="rounded-lg mb-4 mx-auto object-cover"
                />
                <h2 className="text-2xl sm:text-3xl marcellus mb-3">
                  {selectedNews.title}
                </h2>
                <p className="text-sm text-white/80 mb-2">
                  {selectedNews.date} — {selectedNews.source}
                </p>
                <p className="text-white/90 text-base leading-relaxed manrope-regular">
                  {selectedNews.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
