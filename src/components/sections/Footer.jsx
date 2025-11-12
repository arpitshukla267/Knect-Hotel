"use client";

import React from "react";
import { Mail, Phone, Headphones  } from "lucide-react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 border-t border-gray-800">
      {/* App Downloads */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* PMS App */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Download PMS App
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
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Download POS App
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

        {/* Contact */}
        <div className="text-left md:text-left lg:text-right">
          <h3 className="text-lg font-semibold text-white mb-4 md:mb-2">Contact</h3>
          <a href="mailto:shuklaarpit440@gmail.com" className="text-sm flex items-center gap-2 justify-start md:justify-start lg:justify-end">
            <Mail size={16} /> info@knecthotel.com
          </a>
          <a href="tel:+919720191991" className="text-sm flex items-center gap-2 justify-start md:justify-start lg:justify-end mt-1">
            <Phone size={16} /> +91 9720191991
          </a>
          <a href="tel:01206053168" className="text-sm flex items-center gap-2 justify-start md:justify-start lg:justify-end mt-1">
            <Headphones size={16} /> +0120 6053168
          </a>
        </div>
      </div>

      {/* Awards Section */}
      <div className="border-t border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center text-center">
          <div>
            <Image src="https://www.startupindia.gov.in/content/dam/invest-india/Logo/startupindia_logo.svg" alt="Y Combinator" width={60} height={60} className="mx-auto" />
            <p className="mt-2 text-lg font-semibold text-white">Startup India</p>
          </div>

          <div>
            <Image src="/getapp.png" alt="GetApp" width={60} height={60} className="mx-auto" />
            <p className="mt-2 text-lg font-semibold text-white">Start In Up</p>
          </div>

          <div>
            <Image src="https://i.pinimg.com/736x/0c/e1/ba/0ce1ba4c740de259538e0a294cec8d7b.jpg" alt="Software Advice" width={60} height={60} className="mx-auto" />
            <p className="mt-2 text-lg font-semibold text-white">MSME</p>
          </div>

          <div>
            <Image src="https://i.pinimg.com/1200x/3a/91/2c/3a912c00ec4a2e65d517635f6b65d5ff.jpg" alt="Software Suggest" width={60} height={60} className="mx-auto" />
            <p className="mt-2 text-lg font-semibold text-white">ISO</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-sm">
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
            <span className="text-[#D4AF37] font-semibold">Knect Hotel</span> Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
