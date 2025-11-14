'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const reviews = [
  {
    image: '/reviews-1.png',
    text: 'The application consolidates essential hotel management functions such as check-in and check-out processes, housekeeping coordination, billing, and guest communication into a single, easy-to-use system. By automating repetitive tasks and minimizing manual intervention, it significantly enhances operational efficiency.',
    author: 'Alex Martin',
  },
  {
    image: '/blog-center.png',
    text: 'A seamless experience for our staff and guests. The integration with our existing tools was effortless and support is always available.',
    author: 'Priya Sharma',
  },
  {
    image: '/blog-right-2.png',
    text: 'We have improved our guest satisfaction scores since using this system. Highly recommended for any hotelier!',
    author: 'John Lee',
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
  };

  // Image slide animation
  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  // Text fade-up animation
  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <div
      suppressHydrationWarning
      className="flex flex-col items-center justify-center min-h-screen py-12 px-4 text-white overflow-hidden"
      // style={{
      //   background: 'radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)',
      // }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl marcellus mb-10 text-center leading-tight">
        What Our Guests Say
      </h2>

      <div className="relative flex flex-col items-center justify-center gap-10 max-w-5xl w-full">
        {/* Image + Arrows wrapper (fixed height) */}
        <div className="relative flex justify-center items-center w-full max-w-[500px] min-h-[280px] sm:min-h-[340px] md:min-h-[400px] mb-8">
          {/* Left Arrow */}
          <button
            aria-label="Previous review"
            onClick={prev}
            className="absolute left-2 sm:left-4 md:-left-16 top-1/2 -translate-y-1/2 bg-transparent border border-white/60 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl hover:bg-white/10 transition z-10"
          >
            &#8592;
          </button>

          {/* Animated Image */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-[250px] sm:w-[320px] md:w-[400px] lg:w-[460px]"
            >
              <Image
                src={reviews[index].image}
                alt={reviews[index].author}
                width={460}
                height={300}
                className="rounded-xl object-cover w-full h-[260px] sm:h-[300px] md:h-[350px] shadow-[0_0_25px_rgba(245,217,161,0.25)]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            aria-label="Next review"
            onClick={next}
            className="absolute right-2 sm:right-4 md:-right-16 top-1/2 -translate-y-1/2 bg-transparent border border-white/60 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl hover:bg-white/10 transition z-10"
          >
            &#8594;
          </button>
        </div>

        {/* Text Section */}
        <div className="relative w-full md:w-3/4 flex flex-col items-center text-center px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 manrope-regular">
                {reviews[index].text}
              </p>
              <div className="text-[#f5d9a1] my-soul-regular text-lg sm:text-xl md:text-2xl font-semibold">
                — {reviews[index].author}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
