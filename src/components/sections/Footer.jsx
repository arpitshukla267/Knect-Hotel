"use client";

import React from "react";
import { Mail, Phone, Headphones  } from "lucide-react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 border-t border-white/20 bg-black"
            // style={{
            //   background:
            //     "radial-gradient(circle at 50% 0%, rgba(255, 200, 120, 0.25), rgba(0, 0, 0, 1))",
            //   borderTop: "1px solid rgba(255, 255, 255, 0.1)"
            // }}
    >
      {/* App Downloads */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex justify-around gap-10 ">
        {/* PMS App */}
        <div className="flex flex-col items-left">
          <h3 className="text-lg font-semibold text-white mb-3">
            Download our App 
          </h3>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 hover:border-[#D4AF37] transition"
            >
              <FaAppStoreIos size={24} className="text-white" />
              <span className="text-sm text-white font-medium">
                App Store
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 hover:border-[#D4AF37] transition"
            >
              <FaGooglePlay size={22} className="text-white" />
              <span className="text-sm text-white font-medium">
                Google Play
              </span>
            </a>
          </div>
        </div>

        {/* POS App */}
        {/* <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            Download App from App Store
          </h3>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 hover:border-[#D4AF37] transition"
            >
              <FaAppStoreIos size={24} className="text-white" />
              <span className="text-sm text-white font-medium">
                App Store
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 hover:border-[#D4AF37] transition"
            >
              <FaGooglePlay size={22} className="text-white" />
              <span className="text-sm text-white font-medium">
                Google Play
              </span>
            </a>
          </div>
        </div> */}

        {/* Contact */}
        <div className="text-left md:text-left lg:text-center">
          <h3 className="text-lg font-semibold text-white mb-4 md:mb-2">Contact</h3>
          <a href="mailto:shuklaarpit440@gmail.com" className="text-sm flex items-center gap-2 justify-start md:justify-start lg:justify-center">
            <Mail size={16} /> info@knecthotel.com
          </a>
          <a href="tel:+919720191991" className="text-sm flex items-center gap-2 justify-start md:justify-start lg:justify-center mt-1">
            <Phone size={16} /> +91 9720191991
          </a>
          <a href="tel:01206053168" className="text-sm flex items-center gap-2 justify-start md:justify-start lg:justify-center mt-1">
            <Headphones size={16} /> +0120 6053168
          </a>
        </div>
      </div>

      {/* Awards Section */}
      <div className="border-t border-gray-800 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 items-center text-center">
          {[
            { src: "/logo-startupindia.jpeg", name: "" },
            { src: "/logo-startinup.jpeg", name: "" },
            { src: "/logo-msme.png", name: "" },
            { src: "/logo-iso.jpeg", name: "" },
          ].map((logo, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-1/3 md:w-1/5 lg:w-[15%]"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg text-black manrope-bold">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-3">
          <div className="flex gap-3 text-center md:gap-6 text-gray-400">
            <a href="/about" className="hover:text-[#D4AF37] transition">About</a>
            <a href="/contact" className="hover:text-[#D4AF37] transition">Contact</a>
            <a href="/terms" className="hover:text-[#D4AF37] transition">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-[#D4AF37] transition">Privacy Policy</a>
            <a href="/refund" className="hover:text-[#D4AF37] transition">Refund Policy</a>
          </div>
          <p className="text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#D4AF37] font-semibold">KnectHotel</span> Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
