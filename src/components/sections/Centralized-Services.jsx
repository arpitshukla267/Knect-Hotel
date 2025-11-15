"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CentralizedServices() {
  const services = [
    {
      heading: "Centralize your services with seamlessly integrated Shops.",
      description:
        "The application consolidates essential hotel management functions such as check-in and check-out processes, housekeeping coordination, billing, and guest communication into a single, easy-to-use system.",
      logo: [],
      buttonText: "Get Started",
      image: "/services.png",
    },
    {
      heading: "Guest Hub",
      description:
        "A comprehensive platform to streamline your guest journey — from flexible reservations to post-stay feedback and engagement.",
      logo: [
        "Multi-Platform Access",
        "Analytics & Reporting",
        "Food & Beverage Ordering",
        "Secure Payment Processing",
      ],
      buttonText: "",
      image: "/services-2.png",
    },
    {
      heading: "Operations Hub",
      description:
        "Empower staff with automated tools for scheduling, inventory tracking, and task management — all in real-time.",
      logo: [
        "Staff Scheduling",
        "Inventory Tracking",
        "Task Automation",
        "Real-time Insights",
      ],
      buttonText: "",
      image: "/services-3.png",
    },
    {
      heading: "Request Any Service",
      description:
        "Enhance guest satisfaction by offering seamless, on-demand services through an intuitive request system.",
      logo: [
        "Quick Request Management",
        "Instant Notifications",
        "Guest Feedback Integration",
        "Automated Follow-ups",
      ],
      // buttonText: "Learn More",
      image: "/services-4.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const headingRefs = useRef([]);
  const descRefs = useRef([]);
  const logoRefs = useRef([]);
  const buttonRefs = useRef([]);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Create a master ScrollTrigger that tracks which section is most visible
    const sections = sectionRefs.current.filter(Boolean);
    
    sections.forEach((section, index) => {
      if (!section) return;

      const heading = headingRefs.current[index];
      const desc = descRefs.current[index];
      const logos = logoRefs.current[index] || [];
      const button = buttonRefs.current[index];

      const elements = [heading, desc, ...(logos || []), button].filter(Boolean);

      gsap.set(elements, { color: "#888888" });

      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(elements, { color: "#ffffff", duration: 0.3, ease: "power2.out" });
          // Immediately update active index for better sync - this triggers image change
          requestAnimationFrame(() => {
            setActiveIndex(index);
          });
        },
        onEnterBack: () => {
          gsap.to(elements, { color: "#ffffff", duration: 0.3, ease: "power2.out" });
          requestAnimationFrame(() => {
            setActiveIndex(index);
          });
        },
        onLeave: () => {
          gsap.to(elements, { color: "#888888", duration: 0.3, ease: "power2.out" });
        },
        onLeaveBack: () => {
          gsap.to(elements, { color: "#888888", duration: 0.3, ease: "power2.out" });
        },
        // Use onUpdate to ensure perfect sync - update image when text color changes
        onUpdate: (self) => {
          if (self.isActive && self.progress > 0.2) {
            setActiveIndex(index);
          }
        },
      });
    });

    if (window.innerWidth < 768) {
      gsap.utils.toArray(".mobile-slide").forEach((section) => {
        gsap.fromTo(
          section,
          { x: "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    window.addEventListener("load", refresh);
    setTimeout(() => ScrollTrigger.refresh(), 1000);

    return () => {
      window.removeEventListener("resize", refresh);
      window.removeEventListener("load", refresh);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden md:overflow-visible w-full flex flex-col md:flex-row pt-20"
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      {/* Left: Text sections */}
      <div className="relative flex-1 text-white overflow-hidden">
        {/* Background accent glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-[#9a753e44] blur-[180px] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#ffffff22] blur-[160px] rounded-full"></div>
        </div>

        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (sectionRefs.current[i] = el)}
            className="relative h-auto md:h-[90vh] flex flex-col justify-center md:justify-center px-6 sm:px-12 lg:px-28 py-16 md:py-20 mobile-slide"
          >
            {/* Section Number Badge */}
            <div className="absolute top-8 md:top-12 left-6 sm:left-12 lg:left-28 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#9a753e]/50 bg-gradient-to-br from-[#9a753e]/20 to-transparent flex items-center justify-center backdrop-blur-sm">
                  <span className="text-[#9a753e] text-lg md:text-2xl font-bold marcellus">{i + 1}</span>
                </div>
                <div className="h-px w-16 md:w-24 bg-gradient-to-r from-[#9a753e]/50 to-transparent"></div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#9a753e] to-transparent"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#9a753e] to-transparent"></div>
            </div>

            <div className="max-w-2xl space-y-8 relative z-10 mt-8 md:mt-0">
              {/* Heading with decorative underline */}
              <div className="space-y-4">
                <h1
                  ref={(el) => (headingRefs.current[i] = el)}
                  className="marcellus text-3xl sm:text-4xl md:text-5xl leading-tight transition-colors duration-300 relative"
                >
                  {service.heading}
                  <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-[#9a753e] to-transparent opacity-60"></span>
                </h1>
              </div>

              {/* Description with enhanced styling */}
              <div className="relative pl-4 border-l-2 border-[#9a753e]/30">
                <p
                  ref={(el) => (descRefs.current[i] = el)}
                  className="text-base sm:text-lg md:text-xl leading-relaxed marcellus-sc transition-colors duration-300"
                >
                  {service.description}
                </p>
              </div>

              {/* Enhanced feature list */}
              {service.logo?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-4 sm:pt-6">
                  {service.logo.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-[#9a753e]/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#9a753e] group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      <p 
                        className="text-sm sm:text-base md:text-lg transition-colors duration-300 flex-1"
                        ref={(el) => {
                          if (!logoRefs.current[i]) logoRefs.current[i] = [];
                          logoRefs.current[i][idx] = el;
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Enhanced button */}
              {service.buttonText && (
                <div className="pt-4">
                  <Link
                    href={"/login"}
                    suppressHydrationWarning
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#9a753e]/30 to-[#9a753e]/20 backdrop-blur-md border border-[#9a753e]/50 hover:border-[#9a753e] hover:from-[#9a753e]/40 hover:to-[#9a753e]/30 text-white font-semibold rounded-lg transition-all duration-300 overflow-hidden"
                    ref={(el) => (buttonRefs.current[i] = el)}
                  >
                    <span className="relative z-10">{service.buttonText}</span>
                    <svg 
                      className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9a753e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              )}
            </div>

            {/* ✅ Image below text on mobile only */}
            <div className="block md:hidden w-full h-64 mt-8 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={service.image}
                alt={service.heading}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right: Sticky Image (desktop only) - Enhanced with better transitions */}
      <div className="hidden md:block w-[50%] sticky top-0 h-screen overflow-hidden" ref={imageContainerRef}>
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, x: 50, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -50, rotateY: 15 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.4, 0, 0.2, 1],
                opacity: { duration: 0.4 }
              }}
              className="relative w-full h-[85%] rounded-3xl overflow-hidden border-2 border-[#9a753e]/30 shadow-2xl group"
            >
              <Image
                src={services[activeIndex].image}
                alt={services[activeIndex].heading}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={activeIndex === 0}
              />
              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
              
              {/* Section indicator badge */}
              <motion.div
                className="absolute top-6 right-6 bg-gradient-to-r from-[#9a753e]/90 to-[#d3b87d]/90 backdrop-blur-md rounded-full px-4 py-2 border border-[#f5d9a1]/30 shadow-xl z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              >
                <span className="text-white text-xs font-bold">
                  {activeIndex + 1} / {services.length}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          {/* Enhanced Image indicator dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const section = sectionRefs.current[idx];
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Immediately update active index for instant image change
                    setActiveIndex(idx);
                  }
                }}
                className={`relative rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'bg-gradient-to-r from-[#9a753e] to-[#d3b87d] w-10 h-2 shadow-lg'
                    : 'bg-white/30 hover:bg-white/50 w-2 h-2'
                }`}
                aria-label={`Go to section ${idx + 1}`}
              >
                {idx === activeIndex && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#d3b87d] to-[#f5d9a1] rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
