'use client';
import React, { useState } from 'react';
import Image from 'next/image';

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
  const prev = () => setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-16 text-white"
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <h2 className="text-4xl md:text-5xl marcellus mb-10 text-center">What Our Guest says</h2>
      <div className="flex items-center justify-center w-full max-w-3xl relative">
        {/* Left Arrow */}
        <button
          aria-label="Previous review"
          onClick={prev}
          className="absolute left-0 md:-left-16 hover:cursor-pointer bg-transparent border border-white/60 rounded-full w-12 h-12 flex items-center justify-center text-3xl hover:bg-white/10 transition"
        >
          &#8592;
        </button>
        {/* Review Content */}
        <div className="flex flex-col items-center justify-center-safe mx-auto">
          <Image
            src={reviews[index].image}
            alt={reviews[index].author}
            width={500}
            height={350}
            className="rounded-sm object-cover  mb-8"
          />
          <p className="max-w-lg manrope-regular text-center text-base md:text-md mb-6">
            {reviews[index].text}
          </p>
          <div className="my-soul-regular text-2xl mt-2">{reviews[index].author}</div>
        </div>
        {/* Right Arrow */}
        <button
          aria-label="Next review"
          onClick={next}
          className="absolute right-0 md:-right-16 hover:cursor-pointer bg-transparent border border-white/60 rounded-full w-12 h-12 flex items-center justify-center text-3xl hover:bg-white/10 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}