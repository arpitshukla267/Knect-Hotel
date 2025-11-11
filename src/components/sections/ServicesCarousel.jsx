"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "@/components/sections/Header";

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const services = [
    {
      id: 0,
      slug: "reception",
      title: "Reception",
      img: "https://images.unsplash.com/photo-1620288627228-38d66e12e6a0",
      desc: "A warm welcome awaits you at our 24x7 reception desk, where hospitality meets efficiency.",
    },
    {
      id: 1,
      slug: "in-room-dining",
      title: "In-Room Dining",
      img: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73",
      desc: "Enjoy gourmet meals and late-night snacks without leaving your room. Elegance at your service.",
    },
    {
      id: 2,
      slug: "housekeeping",
      title: "Housekeeping",
      img: "https://images.unsplash.com/photo-1600489000022-c193b67a6c1b",
      desc: "Our housekeeping team ensures spotless comfort and a refreshing stay.",
    },
    {
      id: 3,
      slug: "gym",
      title: "Gym",
      img: "https://images.unsplash.com/photo-1571019613914-85f342c55f9e",
      desc: "Stay active in our modern fitness center with state-of-the-art equipment.",
    },
    {
      id: 4,
      slug: "spa",
      title: "Spa",
      img: "https://images.unsplash.com/photo-1584270354949-1c62a3a62c31",
      desc: "Relax and rejuvenate in our luxury spa with calming therapies and treatments.",
    },
    {
      id: 5,
      slug: "swimming-pool",
      title: "Swimming Pool",
      img: "https://images.unsplash.com/photo-1501117716987-c8e3f9ab6d1e",
      desc: "Take a dip in our infinity pool with breathtaking city views.",
    },
  ];

  const scrollNext = () =>
    setActiveIndex((prev) => (prev + 1) % services.length);
  const scrollPrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );

  useEffect(() => {
    const autoSlide = setInterval(scrollNext, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section
      className="w-full overflow-hidden min-h-screen flex flex-col justify-center items-center text-white relative"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header />

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Our Signature Services
        </h2>
        <p className="text-[#f5d9a1] mt-3 text-base md:text-lg max-w-xl mx-auto">
          Explore the luxurious amenities that make your stay unforgettable.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl px-6 flex items-center justify-center">
        <button
          onClick={scrollPrev}
          className="absolute left-4 md:left-10 z-10 bg-[#9a753e] p-3 rounded-full hover:bg-white hover:text-black transition"
        >
          <ChevronLeft size={26} />
        </button>

        <div className="relative w-full flex justify-center items-center overflow-hidden">
          {services.map((s, i) => {
            const isActive = i === activeIndex;
            const offset = i - activeIndex;
            const translate = `translateX(${offset * 120}%) scale(${
              isActive ? 1 : 0.8
            })`;
            const opacity = isActive ? 1 : 0.3;

            return (
              <div
                key={s.id}
                onClick={() => router.push(`/services/${s.slug}`)}
                className={`absolute cursor-pointer rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
                  isActive ? "z-20" : "z-10"
                }`}
                style={{
                  transform: translate,
                  opacity,
                  width: isActive ? "65%" : "55%",
                  height: isActive ? "420px" : "340px",
                  border:
                    isActive && "2px solid rgba(245,217,161,0.8)",
                }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-[#f5d9a1]">
                    {s.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-4 md:right-10 z-10 bg-[#9a753e] p-3 rounded-full hover:bg-white hover:text-black transition"
        >
          <ChevronRight size={26} />
        </button>
      </div>
    </section>
  );
}
