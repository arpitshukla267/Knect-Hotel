"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      className="flex flex-col justify-center items-center text-center text-white py-16 sm:py-20 px-4 sm:px-8 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="marcellus text-3xl sm:text-4xl lg:text-5xl mb-10"
      >
        Blog
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 w-full max-w-7xl">
        {/* ✅ Left Column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-row lg:flex-col gap-3 sm:gap-4 justify-center mb-6 lg:mb-0 overflow-x-auto lg:overflow-visible w-full sm:w-auto"
        >
          {["/blog-left-1.png", "/blog-left-2.png", "/blog-left-3.png"].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Blog Left ${i}`}
              width={280}
              height={200}
              className="rounded-xl object-cover w-[45%] sm:w-[220px] lg:w-[280px] mx-auto shadow-md"
            />
          ))}
        </motion.div>

        {/* ✅ Center Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col items-center text-center max-w-md sm:max-w-xl px-2"
        >
          <Image
            src="/blog-center.png"
            alt="Blog Center"
            width={500}
            height={400}
            className="rounded-2xl object-cover shadow-lg w-full mb-6 sm:mb-8"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#f5d9a1] marcellus">
            KnectHotel
          </h3>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 marcellus-sc px-2 sm:px-0">
            Discover how KnectHotel transforms modern hospitality — streamlining
            check-ins, enhancing guest experiences, and integrating hotel
            operations into a seamless digital platform.
          </p>
          <button
            onClick={() => router.push("/resources/blog")}
            className="px-6 py-2 sm:py-3 bg-[#f5d9a1] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 text-sm sm:text-base shadow-md"
          >
            Explore More
          </button>
        </motion.div>

        {/* ✅ Right Column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-row lg:flex-col gap-3 sm:gap-4 justify-center mt-10 lg:mt-0 overflow-x-auto lg:overflow-visible w-full sm:w-auto"
        >
          {["/blog-right-1.png", "/blog-right-2.png", "/blog-right-3.png"].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Blog Right ${i}`}
              width={280}
              height={200}
              className="rounded-xl object-cover w-[45%] sm:w-[220px] lg:w-[280px] mx-auto shadow-md"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
