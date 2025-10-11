"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 5) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle body scroll lock when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-500",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="text-white py-4 px-6 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Knect Hotel Logo"
            className="h-12 w-auto"
            width={160}
            height={40}
          />
        </div>

        {/* Desktop Nav */}
        
          <nav className="hidden lg:block bg-[#1f1f1f] px-6 py-2 rounded-full border border-gray-600">
            <ul className="hidden lg:flex space-x-6 text-sm font-medium">
              <li className="hover:text-yellow-400 cursor-pointer marcellus-sc ">Home</li>
              <span className="text-gray-500">|</span>
              <li className="hover:text-yellow-400 cursor-pointer marcellus-sc ">About Us</li>
              <span className="text-gray-500">|</span>
              <li className="hover:text-yellow-400 cursor-pointer marcellus-sc ">Service</li>
              <span className="text-gray-500">|</span>
              <li className="hover:text-yellow-400 cursor-pointer marcellus-sc ">Pricing</li>
              <span className="text-gray-500">|</span>
              <li className="hover:text-yellow-400 cursor-pointer marcellus-sc ">Integration</li>
            </ul>
          </nav>
        <div className="hidden lg:flex items-center justify-between w- space-x-6">

          <div className="flex space-x-3">
            <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border marcellus-sc  border-gray-700 hover:bg-gray-800">
              Login
            </button>
            <button className="px-4 py-2 rounded-lg bg-yellow-600 text-black marcellus-sc  font-semibold hover:bg-yellow-500">
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer with Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed h-[100vh] w-[100vw] inset-0 bg-black/60 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 h-screen w-72 bg-black shadow-lg flex flex-col z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              {/* Header (Logo + Close button) */}
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <span className="text-[#9a753e] to-[#733614] font-semibold text-2xl marcellus-regular">Knect Hotel</span>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-6 space-y-2 mt-6">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="list-none py-4 border-b border-gray-700 text-white cursor-pointer marcellus-sc  hover:text-yellow-400"
                  >
                    {item}
                  </li>
                ))}
              </nav>

              {/* Bottom Buttons */}
              <div className="p-6 border-t border-gray-700 space-y-3">
                <button className="w-full px-4 py-2 rounded-lg text-white bg-[#1a1a1a] border border-gray-700 marcellus-sc hover:bg-gray-800">
                  Login
                </button>
                <button className="w-full px-4 py-2 rounded-lg bg-yellow-600 text-white marcellus-sc font-semibold hover:bg-yellow-500">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
