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

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-10 px-4 text-white overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)',
      }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl marcellus mb-8 sm:mb-10 text-center leading-tight">
        What Our Guest Says
      </h2>

      <div className="flex items-center justify-center w-full max-w-3xl relative">
        {/* Left Arrow */}
        <button
          aria-label="Previous review"
          onClick={prev}
          className="absolute -left-2 sm:left-4 md:-left-16 hover:cursor-pointer bg-transparent border border-white/60 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-xl sm:text-2xl md:text-3xl hover:bg-white/10 transition z-10"
        >
          &#8592;
        </button>

        {/* Animated Review Content */}
        <div className="relative flex items-center justify-center w-full max-w-lg h-auto min-h-[420px] sm:min-h-[480px] md:min-h-[520px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute flex flex-col items-center justify-center w-full px-2 sm:px-4 text-center"
            >
              <div className="relative w-[220px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto mb-6 sm:mb-8 mx-auto">
                <Image
                  src={reviews[index].image}
                  alt={reviews[index].author}
                  width={500}
                  height={350}
                  className="rounded-sm object-cover w-full h-auto"
                />
              </div>
              <p className="max-w-sm sm:max-w-md md:max-w-lg text-center manrope-regular text-sm sm:text-base md:text-md mb-4 sm:mb-6 leading-relaxed">
                {reviews[index].text}
              </p>
              <div className="my-soul-regular text-lg sm:text-xl md:text-2xl mt-1 sm:mt-2">
                {reviews[index].author}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          aria-label="Next review"
          onClick={next}
          className="absolute -right-2 sm:right-4 md:-right-16 hover:cursor-pointer bg-transparent border border-white/60 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-xl sm:text-2xl md:text-3xl hover:bg-white/10 transition z-10"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
