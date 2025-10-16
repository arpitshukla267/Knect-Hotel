"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      heading: "Guest hub",
      description:
        "A comprehensive platform to streamline your guest journey, from flexible reservation options to enhancing post-stay feedback.",
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
      heading: "Operations hub",
      description:
        "A comprehensive platform to streamline your guest journey, from flexible reservation options to enhancing post-stay feedback.",
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
      heading: "Request any service",
      description:
        "A comprehensive platform to streamline your guest journey, from flexible reservation options to enhancing post-stay feedback.",
      logo: [
        "Multi-Platform Access",
        "Analytics & Reporting",
        "Food & Beverage Ordering",
        "Secure Payment Processing",
      ],
      buttonText: "Learn More",
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
    // Cleanup old triggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const heading = headingRefs.current[index];
      const desc = descRefs.current[index];
      const logos = logoRefs.current[index] || [];
      const button = buttonRefs.current[index];

      // initial color
      gsap.set([heading, desc, ...(logos || []), button].filter(Boolean), {
        color: "#101010",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 80%",
        onEnter: () => {
          gsap.to([heading, desc, ...(logos || []), button].filter(Boolean), {
            color: "#ffffff",
            duration: 0.4,
            ease: "power2.out",
          });
          setActiveIndex(index);
        },
        onEnterBack: () => {
          gsap.to([heading, desc, ...(logos || []), button].filter(Boolean), {
            color: "#ffffff",
            duration: 0.4,
            ease: "power2.out",
          });
          setActiveIndex(index);
        },
        onLeave: () => {
          gsap.to([heading, desc, ...(logos || []), button].filter(Boolean), {
            color: "#101010",
            duration: 0.4,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to([heading, desc, ...(logos || []), button].filter(Boolean), {
            color: "#101010",
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      className="relative w-full flex pt-20"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #9a753e 90%, #111111 100%)",
      }}
    >
      {/* Left: Text sections */}
      <div className="flex-1 text-[#4b5563]">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (sectionRefs.current[i] = el)}
            className="h-[90vh] flex flex-col justify-start px-8 lg:px-20 pt-10"
          >
            <div className="max-w-lg space-y-6">
              <h1
                ref={(el) => (headingRefs.current[i] = el)}
                className="marcellus text-3xl md:text-5xl leading-tight transition-colors duration-300"
              >
                {service.heading}
              </h1>
              <p
                ref={(el) => (descRefs.current[i] = el)}
                className="text-xl leading-relaxed marcellus-sc transition-colors duration-300"
              >
                {service.description}
              </p>

              {service.logo?.length > 0 && (
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {service.logo.map((item, idx) => (
                    <p
                      key={idx}
                      className="text-lg transition-colors duration-300"
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
                <button
                  className="mt-4 px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 hover:text-yellow-400 font-semibold rounded-lg transition-colors duration-300"
                  ref={(el) => (buttonRefs.current[i] = el)}
                >
                  {service.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right: Sticky Image */}
      <div className="hidden md:block w-[50%] sticky top-0 h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
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
