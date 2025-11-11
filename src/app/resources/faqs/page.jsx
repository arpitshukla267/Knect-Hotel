"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/sections/Header";

const faqs = [
  {
    question: "What is Knect Hotel and how does it help?",
    answer:
      "Knect Hotel is an all-in-one hospitality platform that centralizes reservations, guest profiles, billing, and communications to streamline your daily hotel operations.",
  },
  {
    question: "Can I migrate data from my current PMS?",
    answer:
      "Yes. Our onboarding specialists handle data import for reservations, rate plans, and guest history so you can go live without downtime.",
  },
  {
    question: "Do you support channel manager integrations?",
    answer:
      "Absolutely. We connect with 50+ booking channels and OTAs, keeping inventory, pricing, and availability synchronized in real time.",
  },
  {
    question: "Is there mobile access for staff?",
    answer:
      "Managers and teams can access Knect Hotel from any device with responsive dashboards and role-based permissions for secure on-the-go updates.",
  },
  {
    question: "How secure is the platform?",
    answer:
      "We follow industry-standard encryption, role management, and regular security audits to ensure your guest data and property analytics stay protected.",
  },
  {
    question: "Can I customize workflows for my property?",
    answer:
      "Yes. Automations, task templates, and approval flows can be tailored to reflect your property brand, SOPs, and service levels.",
  },
  {
    question: "Does Knect Hotel help with guest communication?",
    answer:
      "You can automate pre-arrival emails, schedule SMS reminders, and track all conversations in one timeline to elevate guest experiences.",
  },
  {
    question: "What training do you provide to new teams?",
    answer:
      "We offer guided onboarding, live webinars, and a self-serve knowledge base so every department feels confident using the platform.",
  },
  {
    question: "Is there reporting for revenue and housekeeping?",
    answer:
      "Yes. Real-time dashboards surface key metrics like RevPAR, occupancy, housekeeping progress, and maintenance tickets in intuitive visual reports.",
  },
  {
    question: "Can I connect payment gateways?",
    answer:
      "We integrate with leading gateways and support contactless check-outs, scheduled deposits, and secure payment links for guests.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Subscriptions are modular. Choose the modules you need, pay per active room, and scale plans up or down as seasons change.",
  },
  {
    question: "What if I need support after onboarding?",
    answer:
      "Enjoy 24/7 chat and email assistance, a dedicated customer success manager, and proactive health checks to keep your property running smoothly.",
  },
];

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="min-h-screen w-full text-white flex flex-col items-center"
      style={{
        background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
        <Header />
      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-10 lg:px-16 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="uppercase tracking-[0.35em] text-xs sm:text-sm text-white/80"
          >
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl marcellus leading-tight"
          >
            Answers to Your Most Common Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto manrope-regular"
          >
            Whether you manage a boutique stay or a multi-property portfolio, Knect
            Hotel keeps your team connected, responsive, and data-driven.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.08, delayChildren: 0.3 },
            },
          }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white/10 backdrop-blur rounded-2xl border border-white/15 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                aria-expanded={activeIndex === index}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 marcellus text-left"
              >
                <span className="text-base sm:text-lg md:text-xl">
                  {faq.question}
                </span>
                <motion.span
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl"
                >
                  {activeIndex === index ? "×" : "+"}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-5 sm:px-7 pb-5 sm:pb-6"
                  >
                    <p className="text-sm sm:text-base text-white/85 manrope-regular leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-20 bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 backdrop-blur-lg text-center"
        >
          <h2 className="text-2xl sm:text-3xl marcellus mb-3">
            Still unsure about something?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 manrope-regular max-w-2xl mx-auto">
            Our specialists are ready to walk you through the platform, tailor a demo
            for your workflows, and help you decide the best configuration for your
            property.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center mt-6 sm:mt-8 px-6 sm:px-8 py-3 rounded-full bg-white/70 text-black font-semibold marcellus text-sm sm:text-base shadow-lg shadow-[#9a753e]/40 transition-colors hover:bg-white"
          >
            Talk to Our Team
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

