"use client";
import React from "react";
import Header from "../sections/Header";
import { FaPhoneAlt, FaFax, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="min-h-screen text-white font-[Marcellus] flex flex-col items-center"
      style={{
        background:
          "radial-gradient(circle at 50% 80%, #9a753e 0%, #000000 100%)",
      }}
    >
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <section className="w-full flex flex-col items-center pt-20 px-6 md:px-20 lg:px-40">
        <h1 className="text-center text-5xl font-semibold tracking-wide mb-8">
          Contact Us
        </h1>

        {/* Container for Left + Divider + Right */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 w-full pt-10 relative">

          {/* Left Side */}
          <div className="md:w-1/2 space-y-6 flex flex-col p-10">
            <h2 className="text-2xl">We’re Here for You!</h2>
            <p className="leading-relaxed text-md">
              Thank you for reaching out! We appreciate your interest and are
              committed to providing exceptional service. Whether you have a
              question, need assistance, or are exploring a potential
              partnership, our team is here to help. If you're interested in a
              demo or pricing details, we’d be happy to guide you through the
              process.
            </p>

            <div className="flex flex-col gap-4 text-sm mt-8">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg" />
                <a href="tel:+9183200XX908" className="hover:underline">
                  +91 83200XX908
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaFax className="text-lg" />
                <a href="tel:+9183200XX908" className="hover:underline">
                  +91 83200XX908
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lg" />
                <a
                  href="mailto:info@knecthotel.com"
                  className="hover:underline"
                >
                  info@knecthotel.com
                </a>
              </div>
            </div>
          </div>

          {/* Center Divider Line (Visible only on md and above) */}
          <div className="hidden md:block w-[2px] bg-white/30 self-stretch"></div>

          {/* Right Side (Form) */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-start">
            <h2 className="text-xl mb-4">
              You've got questions. We’ve got answers.
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full px-3 py-2 bg-transparent border border-white rounded focus:outline-none focus:ring-1 focus:shadow-md"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-3 py-2 bg-transparent border border-white rounded focus:outline-none focus:ring-1 focus:shadow-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full px-3 py-2 bg-transparent border border-white rounded focus:outline-none focus:ring-1 focus:shadow-md"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter phone"
                    className="w-full px-3 py-2 bg-transparent border border-white rounded focus:outline-none focus:ring-1 focus:shadow-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-3 py-2 bg-transparent border border-white rounded focus:outline-none focus:ring-1 focus:shadow-md"
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-[#4b3520] hover:bg-[#6b4b2a] text-[#f5e0c1] px-8 py-2 rounded-full transition-all duration-300 hover:cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
