"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/sections/Header";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);

  const [selectedPlan, setSelectedPlan] = useState(() => {
    try {
      const p = searchParams?.get?.("plan");
      return p || "Monthly Plan";
    } catch {
      return "Monthly Plan";
    }
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const planParam = searchParams?.get?.("plan");
    if (planParam && planParam !== selectedPlan) setSelectedPlan(planParam);
  }, [searchParams]);

  const plans = [
    {
      name: "Monthly Plan",
      price: "₹7,999 / month + GST",
      desc: [
        "Perfect for small hotels, BnBs, or guesthouses that want to start digitizing without long commitments.",
        "Full access to hotel management features",
        "Manage rooms, bookings & staff with ease",
        "Real-time analytics dashboard",
        "Automated invoices & receipts",
        "24/7 customer support",
      ],
    },
    {
      name: "Quarterly Plan",
      price: "₹22,999 / 3 months + GST",
      desc: [
        "Ideal for growing hotels seeking short-term stability.",
        "Includes all Monthly Plan features",
        "Priority onboarding & training",
        "Performance analytics dashboard",
        "Faster response times for support",
      ],
    },
    {
      name: "Half-Yearly Plan",
      price: "₹44,999 / 6 months + GST",
      desc: [
        "Perfect balance between flexibility and growth.",
        "Everything in Quarterly Plan",
        "Higher savings with half-year discount",
        "Free on-site support once a year",
        "Advanced performance tracking",
      ],
    },
    {
      name: "Yearly Plan",
      price: "₹89,999 / 12 months + GST",
      desc: [
        "Maximum savings and best for long-term stability.",
        "All features from Half-Yearly Plan",
        "Free setup & onboarding training",
        "Custom branding with your hotel name",
        "Annual analytics & performance report",
        "Flat 15% discount vs monthly billing",
      ],
    },
  ];

  const handleSelectChange = (value) => {
    setSelectedPlan(value);
    router.push(`/pricing?plan=${encodeURIComponent(value)}`);
    setIsDropdownOpen(false);

    // Smooth scroll card into view on mobile/tablet
    const index = plans.findIndex((p) => p.name === value);
    if (scrollContainerRef.current && cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-8"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #9a753e 80%, #111111 100%)",
      }}
    >
      <Header />

      <div className="w-[85%] text-center mt-24">
        <h1 className="text-4xl md:text-5xl marcellus text-white mb-10">
          Pricing
        </h1>

        {/* --- Dropdown selector (replaces plain buttons on mobile) --- */}
        <div className="relative inline-block md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-60 bg-[#1f1f1f] text-white px-5 py-3 rounded-md text-lg hover:bg-[#9a753e]/20 transition-all"
          >
            {selectedPlan}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-5 h-5 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-60 bg-[#1a1a1a] rounded-md shadow-lg z-50 text-left"
              >
                {plans.map((plan) => (
                  <li
                    key={plan.name}
                    onClick={() => handleSelectChange(plan.name)}
                    className={`px-5 py-3 cursor-pointer hover:bg-[#9a753e]/40 rounded-md transition-all ${
                      selectedPlan === plan.name ? "bg-[#9a753e]/30" : ""
                    }`}
                  >
                    {plan.name}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* --- Plan Buttons (for desktop) --- */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-4 mb-10">
          {plans.map((p) => (
            <button
              key={p.name}
              onClick={() => handleSelectChange(p.name)}
              className={`md:px-5 px-8 py-3 md:py-2 rounded-md text-white md:font-medium transition-all duration-300 ${
                selectedPlan === p.name
                  ? "bg-[#9a753e]"
                  : "bg-[#1f1f1f] hover:bg-[#9a753e]/70"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* --- Desktop Cards --- */}
        <div className="hidden lg:flex justify-center items-start gap-10">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: selectedPlan === plan.name ? 1 : 0.8,
                scale: selectedPlan === plan.name ? 1.02 : 1,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 30px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl p-8 w-[320px] h-[420px] text-left text-white transition-all duration-300 ${
                selectedPlan === plan.name
                  ? "bg-[#9a753e] scale-110"
                  : "bg-[#1f1f1f] scale-100"
              }`}
            >
              <h2 className="text-2xl marcellus mb-3">{plan.name}</h2>
              <p className="font-semibold mb-4">{plan.price}</p>
              <ul className="space-y-2 text-sm marcellus-sc">
                {plan.desc.map((line, i) => (
                  <li key={i}>• {line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* --- Mobile Scrollable Cards --- */}
        <div
          ref={scrollContainerRef}
          className="lg:hidden flex overflow-x-auto md:gap-6 gap-4 md:px-8 py-6 mb-16 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: selectedPlan === plan.name ? 1 : 0.85,
                scale: selectedPlan === plan.name ? 1.05 : 1,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className={`snap-center flex-shrink-0 rounded-2xl p-6 w-[75%] sm:w-[60%] h-[420px] text-left text-white transition-all duration-300 ${
                selectedPlan === plan.name
                  ? "bg-[#9a753e] scale-100 mx-4"
                  : "bg-[#1f1f1f]"
              }`}
            >
              <h2 className="text-xl marcellus mb-3">{plan.name}</h2>
              <p className="font-semibold mb-4">{plan.price}</p>
              <ul className="space-y-2 text-sm marcellus-sc">
                {plan.desc.map((line, i) => (
                  <li key={i}>• {line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="text-sm text-gray-300 mt-4 md:hidden">
          ← Swipe to explore plans →
        </p>
      </div>
    </div>
  );
}
