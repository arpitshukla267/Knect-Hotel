"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/sections/Header";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export const dynamic = "force-dynamic";

export default function PricingPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("Monthly Plan");
  
  // delay reading searchParams until client
  useEffect(() => {
    const searchParams = useSearchParams();
    const planParam = searchParams.get("plan");
    if (planParam) setSelectedPlan(planParam);
  }, []);

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
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #9a753e 80%, #111111 100%)",
      }}
    >
      <Header />
      <div className="w-[85%] text-center mt-30">
        <h1 className="text-5xl marcellus text-white mb-10">Pricing</h1>

        <div className="flex justify-center space-x-6 mb-16">
          {plans.map((p) => (
            <button
              key={p.name}
              onClick={() => handleSelectChange(p.name)}
              className={`px-6 py-2 rounded-md text-white font-medium transition-all duration-300 ${
                selectedPlan === p.name
                  ? "bg-[#9a753e]"
                  : "bg-[#1f1f1f] hover:bg-[#9a753e]/70"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center items-start gap-10">
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
                selectedPlan === plan.name ? "bg-[#9a753e] scale-110" : "bg-[#1f1f1f] scale-100"
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
      </div>
    </div>
  );
}
