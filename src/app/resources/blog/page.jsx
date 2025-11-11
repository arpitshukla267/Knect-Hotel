"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBlog } from "@/context/BlogContext";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/sections/Header";

export default function BlogPage() {
  const { blogs } = useBlog();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
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
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header />

      {/* ---------------- Banner ---------------- */}
      <section className="relative w-full pt-28 pb-6 flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Animated background like Section 3 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#9a753e22,transparent_70%)] animate-gradientMove"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#9a753e15,transparent_70%)] animate-gradientMove-slow"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-[#d3b87d] mb-4 z-10"
        >
          Our Latest Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 text-sm md:text-lg max-w-2xl z-10"
        >
          Explore ideas, innovations, and hospitality tech shaping tomorrow’s guest experience.
        </motion.p>
      </section>

      {/* ---------------- Blog Cards ---------------- */}
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

        {/* Smooth pagination */}
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
