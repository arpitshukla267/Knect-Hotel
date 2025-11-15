'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const reviews = [
  {
    image: '/reviews-1.png',
    text: 'The application consolidates essential hotel management functions such as check-in and check-out processes, housekeeping coordination, billing, and guest communication into a single, easy-to-use system. By automating repetitive tasks and minimizing manual intervention, it significantly enhances operational efficiency.',
    author: 'Alex Martin',
    role: 'Hotel Manager',
    rating: 5,
  },
  {
    image: '/blog-center.png',
    text: 'A seamless experience for our staff and guests. The integration with our existing tools was effortless and support is always available. The platform has transformed how we manage our property.',
    author: 'Priya Sharma',
    role: 'Operations Director',
    rating: 5,
  },
  {
    image: '/blog-right-2.png',
    text: 'We have improved our guest satisfaction scores since using this system. Highly recommended for any hotelier! The analytics and reporting features are game-changers.',
    author: 'John Lee',
    role: 'General Manager',
    rating: 5,
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Optimized auto-play - only when in viewport
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    // Check if component is in viewport before starting
    const checkViewport = () => {
      const element = document.querySelector('[data-review-section]');
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    if (!checkViewport()) return;
    
    const interval = setInterval(() => {
      if (checkViewport()) {
        setDirection(1);
        setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  };

  const next = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
  };

  // Enhanced image slide animation
  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
      transition: { duration: 0.6, ease: 'easeIn' },
    }),
  };

  // Enhanced text fade-up animation
  const textVariants = {
    enter: { opacity: 0, y: 40, scale: 0.95 },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: { 
      opacity: 0, 
      y: -40, 
      scale: 0.95,
      transition: { duration: 0.4, ease: 'easeIn' } 
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      suppressHydrationWarning
      data-review-section
      className="relative flex flex-col items-center justify-center min-h-screen py-20 sm:py-28 px-4 sm:px-8 text-white overflow-hidden"
    >
      {/* Optimized Background Elements - Static */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9a753e]/8 rounded-full blur-3xl will-change-transform" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#d3b87d]/8 rounded-full blur-3xl will-change-transform" />
      </div>

      {/* Title Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mb-16 sm:mb-20 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-6 text-[#d3b87d]">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-sm sm:text-base text-[#d3b87d] font-semibold tracking-widest uppercase px-4 py-2 bg-[#9a753e]/10 rounded-full border border-[#9a753e]/30">
            Testimonials
          </span>
          <div className="w-6 h-6 text-[#d3b87d]">
            <Sparkles className="w-6 h-6" />
          </div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="marcellus text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-[#f5d9a1] via-[#d3b87d] to-[#9a753e] bg-clip-text text-transparent"
        >
          What Our Guests Say
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="h-1 w-32 bg-gradient-to-r from-transparent via-[#9a753e] to-transparent mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-7xl w-full z-10">
        {/* Image Section */}
        <motion.div
          className="relative flex justify-center items-center w-full lg:w-1/2 max-w-[500px] min-h-[350px] sm:min-h-[400px] md:min-h-[450px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#9a753e]/20 to-[#d3b87d]/20 rounded-full blur-3xl scale-150" />

          {/* Enhanced Navigation Arrows */}
          <button
            aria-label="Previous review"
            onClick={prev}
            className="absolute left-2 sm:left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-20 group"
          >
            <motion.div
              className="bg-gradient-to-r from-[#9a753e]/80 to-[#d3b87d]/80 backdrop-blur-md rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 border-[#f5d9a1]/30 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#f5d9a1] transition-colors" />
            </motion.div>
          </button>

          {/* Animated Image Container */}
          <div className="relative w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
                style={{ perspective: '1000px' }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#9a753e]/40">
                  <Image
                    src={reviews[index].image}
                    alt={reviews[index].author}
                    width={500}
                    height={450}
                    className="object-cover w-full h-[350px] sm:h-[400px] md:h-[450px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Rating Stars Overlay */}
                  <motion.div
                    className="absolute top-6 left-6 flex gap-1 bg-black/60 backdrop-blur-sm rounded-full px-3 py-2 border border-[#9a753e]/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    {[...Array(reviews[index].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#d3b87d] text-[#d3b87d]"
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            aria-label="Next review"
            onClick={next}
            className="absolute right-2 sm:right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-20 group"
          >
            <motion.div
              className="bg-gradient-to-r from-[#9a753e]/80 to-[#d3b87d]/80 backdrop-blur-md rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 border-[#f5d9a1]/30 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-[#f5d9a1] transition-colors" />
            </motion.div>
          </button>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-2xl">
            {/* Quote Icon */}
            <motion.div
              className="absolute -top-8 -left-4 text-[#9a753e]/20"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Quote className="w-24 h-24 sm:w-32 sm:h-32" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10"
              >
                {/* Review Text */}
                <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 manrope-regular relative z-10">
                  {reviews[index].text}
                </p>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-6 border-t border-[#9a753e]/30">
                  <div className="flex-1">
                    <motion.div
                      className="text-[#f5d9a1] my-soul-regular text-xl sm:text-2xl md:text-3xl font-semibold mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {reviews[index].author}
                    </motion.div>
                    <motion.div
                      className="text-gray-400 text-sm sm:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      {reviews[index].role}
                    </motion.div>
                  </div>
                  
                  {/* Rating Display */}
                  <motion.div
                    className="flex gap-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    {[...Array(reviews[index].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 sm:w-6 sm:h-6 fill-[#d3b87d] text-[#d3b87d]"
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <motion.div
        className="flex gap-3 mt-12 sm:mt-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAutoPlaying(false);
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className="group"
            aria-label={`Go to review ${i + 1}`}
          >
            <motion.div
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-8 bg-gradient-to-r from-[#9a753e] to-[#d3b87d]'
                  : 'w-2 bg-[#9a753e]/40 group-hover:bg-[#9a753e]/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </button>
        ))}
      </motion.div>
    </section>
  );
}
