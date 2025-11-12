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

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const heading = headingRefs.current[index];
      const desc = descRefs.current[index];
      const logos = logoRefs.current[index] || [];
      const button = buttonRefs.current[index];

      const elements = [heading, desc, ...(logos || []), button].filter(Boolean);

      gsap.set(elements, { color: "#888888" });

      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(elements, { color: "#ffffff", duration: 0.4, ease: "power2.out" });
          setActiveIndex(index);
        },
        onEnterBack: () => {
          gsap.to(elements, { color: "#ffffff", duration: 0.4, ease: "power2.out" });
          setActiveIndex(index);
        },
        onLeave: () => {
          gsap.to(elements, { color: "#888888", duration: 0.4, ease: "power2.out" });
        },
        onLeaveBack: () => {
          gsap.to(elements, { color: "#888888", duration: 0.4, ease: "power2.out" });
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
      <div className="relative flex-1 text-[#888888] overflow-hidden">
        {/* Background accent glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-[#9a753e44] blur-[180px] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#ffffff22] blur-[160px] rounded-full"></div>
        </div>

        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (sectionRefs.current[i] = el)}
            className="relative h-auto md:h-[90vh] flex flex-col justify-center md:justify-center px-6 sm:px-12 lg:px-28 py-10 md:pt-10 mobile-slide"
          >
            <div className="max-w-2xl space-y-6 relative z-10">
              <h1
                ref={(el) => (headingRefs.current[i] = el)}
                className="marcellus text-2xl sm:text-3xl md:text-5xl leading-tight transition-colors duration-300"
              >
                {service.heading}
              </h1>
              <p
                ref={(el) => (descRefs.current[i] = el)}
                className="text-base sm:text-lg md:text-xl leading-relaxed marcellus-sc transition-colors duration-300"
              >
                {service.description}
              </p>

              {service.logo?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-4">
                  {service.logo.map((item, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-lg transition-colors duration-300"
                      ref={(el) => {
                        if (!logoRefs.current[i]) logoRefs.current[i] = [];
                        logoRefs.current[i][idx] = el;
                      }}
                    >
                      • {item}
                    </p>
                  ))}
                </div>
              )}

              {service.buttonText && (
                <Link
                  href={"/login"}
                  suppressHydrationWarning
                  className="mt-4 px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 hover:text-yellow-400 font-semibold rounded-lg transition-colors duration-300"
                  ref={(el) => (buttonRefs.current[i] = el)}
                >
                  {service.buttonText}
                </Link>
              )}
            </div>

            {/* ✅ Image below text on mobile only */}
            <div className="block md:hidden w-full h-64 mt-6 relative rounded-xl overflow-hidden">
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

      {/* Right: Sticky Image (desktop only) */}
      <div className="hidden md:block w-[50%] sticky top-0 h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut"  }}
            className="relative w-full h-full my-auto"
          >
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].heading}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
