"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBlog } from "@/context/BlogContext";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/sections/Header";
import { MapPin, Star } from "lucide-react";

// -----------------------------------------------------------
// DUMMY BLOG DATA (MUST BE AT THE TOP)
// -----------------------------------------------------------
const dummyBlogs = [
  {
    id: 1,
    title: "AI Is Reshaping Hospitality Faster Than Ever",
    slug: "ai-reshaping-hospitality",
    image: "https://images.unsplash.com/photo-1557683304-673a23048d34?w=800",
    description:
      "How automation is redefining workflows, enhancing guest experience, and transforming hotel operations."
  },
  {
    id: 2,
    title: "Future of Smart Property Management Systems",
    slug: "future-of-pms",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    description:
      "Exploring the next generation of cloud-native PMS tools powering hotels worldwide."
  },
  {
    id: 3,
    title: "Digital Guest Onboarding Beats Traditional Check-ins",
    slug: "digital-guest-onboarding",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800",
    description:
      "Contactless onboarding is essential for frictionless guest arrival and faster check-ins."
  },
  {
    id: 4,
    title: "How Gen Z Travelers Are Redefining Tourism",
    slug: "gen-z-travel-trends",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    description:
      "Understanding the digital-first generation shaping the future of travel behavior."
  },
  {
    id: 5,
    title: "Automation Playbook for Small Hotels",
    slug: "automation-playbook-small-properties",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800",
    description:
      "Simple tools and strategies for boosting efficiency in small hospitality businesses."
  },
  {
    id: 6,
    title: "Smart Energy Systems for Hotels in 2025",
    slug: "smart-energy-hotels",
    image: "https://images.unsplash.com/photo-1582719478181-2f2b39f7a3b9?w=800",
    description:
      "IoT-powered automation is cutting energy costs and reducing carbon footprints across properties."
  },
  {
    id: 7,
    title: "Mobile Apps Are Driving Guest Loyalty",
    slug: "mobile-app-guest-loyalty",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800",
    description:
      "Hotels are earning more repeat guests thanks to personalized app experiences."
  },
  {
    id: 8,
    title: "The Psychology Behind Perfect Guest Experience",
    slug: "guest-experience-psychology",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    description:
      "How emotional design and experience mapping elevate hospitality service."
  },
  {
    id: 9,
    title: "Smart Multi-Property Management Solutions",
    slug: "multi-property-management",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
    description:
      "How hotel chains sync operations, data, and processes seamlessly using modern systems."
  },
  {
    id: 10,
    title: "Top Hospitality Tech Trends for 2025",
    slug: "hospitality-tech-2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    description:
      "The biggest innovations redefining hotels, hostels, and rentals this year."
  }
];

export default function BlogPage() {
  // ignoring context blogs entirely for now
  const allBlogs = dummyBlogs;

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = allBlogs.slice(startIndex, startIndex + blogsPerPage);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderLayout = (blog) => {
    return (
      <motion.div
        key={blog.id}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="bg-[#111]/80 backdrop-blur-lg border border-[#ffffff1a] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="relative w-full h-[240px] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded-t-2xl transform transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-[#d3b87d] mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-300 text-sm mb-4">{blog.description}</p>
          <Link
            href={`/resources/blog/${blog.slug}`}
            className="text-[#9a753e] hover:text-[#d3b87d] transition-colors duration-300"
          >
            Read more →
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)"
      }}
    >
      <Header />

      {/* HEADER SECTION */}
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
            KNECT Blogs
          </motion.h1>

          <motion.p
            className="text-gray-200 text-md md:text-lg max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Insights curated for hospitality innovators, creators, operators,
            and tech-driven disruptors.
          </motion.p>

          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            Dive into trends, strategies, and stories shaping the future of
            guest experience, automation, and property intelligence.
          </motion.p>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E2C994] to-transparent" />
      </motion.div>

      {/* BLOG GRID */}
      <section className="relative py-10 px-4 md:px-16 overflow-hidden">
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#9a753e33] blur-[150px] rounded-full opacity-40 pointer-events-none"></div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-14 text-[#d3b87d]"
        >
          Featured Articles
        </motion.h2>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {paginatedBlogs.map((blog) => renderLayout(blog))}
          </AnimatePresence>
        </motion.div>

        {/* PAGINATION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-14 gap-2"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === i + 1
                  ? "bg-[#9a753e] border-[#9a753e] text-white"
                  : "border-[#9a753e] text-[#d3b87d] hover:bg-[#9a753e]/30"
              } transition-all duration-300`}
            >
              {i + 1}
            </motion.button>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
