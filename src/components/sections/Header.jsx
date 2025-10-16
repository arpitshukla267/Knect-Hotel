"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // import hook

function Header() {
  const pathname = usePathname(); // get current path
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/service" },
    {
      name: "Pricing",
      dropdown: [
        { name: "Basic", href: "/pricing/basic" },
        { name: "Pro", href: "/pricing/pro" },
        { name: "Enterprise", href: "/pricing/enterprise" },
      ],
    },
    {
      name: "Platform",
      dropdown: [
        { name: "Web", href: "/platform/web" },
        { name: "Mobile", href: "/platform/mobile" },
        { name: "API", href: "/platform/api" },
      ],
    },
    {
      name: "Solutions",
      dropdown: [
        { name: "Small Business", href: "/solutions/small-business" },
        { name: "Enterprise", href: "/solutions/enterprise" },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { name: "Blog", href: "/resources/blog" },
        { name: "Docs", href: "/resources/docs" },
        { name: "FAQs", href: "/resources/faqs" },
      ],
    },
    { name: "Integration", href: "/integration" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 5) setShowNav(false);
      else if (currentScrollY < lastScrollY - 5) setShowNav(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // function to check if menu item is active
  const isActive = (href) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-999 transition-transform duration-500",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="text-white py-4 px-6 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Knect Hotel Logo"
              className="h-12 w-auto cursor-pointer"
              width={160}
              height={40}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block bg-[#1f1f1f] px-6 py-2 rounded-full border border-gray-600">
          <ul className="hidden lg:flex space-x-6 text-sm font-medium items-center">
            {menuItems.map((item, index) => {
              const isLast = index === menuItems.length - 1;

              return (
                <React.Fragment key={item.name}>
                  <li
                    className="relative cursor-pointer marcellus-sc flex items-center space-x-1"
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {item.href && !item.dropdown ? (
                      <Link
                        href={item.href}
                        className={clsx(
                          "hover:text-yellow-400",
                          isActive(item.href) && "text-yellow-400"
                        )}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span
                        className={clsx(
                          "hover:text-yellow-400",
                          item.dropdown?.some(d => isActive(d.href)) && "text-yellow-400"
                        )}
                      >
                        {item.name}
                      </span>
                    )}

                    {item.dropdown && (
                      <motion.span
                        animate={{ rotate: hovered === item.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    )}

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {hovered === item.name && item.dropdown && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 bg-[#1f1f1f] mt-2 rounded-lg shadow-lg py-2 min-w-[150px] z-50"
                        >
                          {item.dropdown.map((drop) => (
                            <li
                              key={drop.name}
                              className={clsx(
                                "px-4 py-2 hover:bg-gray-800 hover:text-yellow-400",
                                isActive(drop.href) && "text-yellow-400"
                              )}
                            >
                              <Link href={drop.href}>{drop.name}</Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  {!isLast && <span className="text-gray-500">|</span>}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/login">
            <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border marcellus-sc border-gray-700 hover:bg-gray-800">
              Login
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-4 py-2 rounded-lg bg-yellow-600 text-black marcellus-sc font-semibold hover:bg-yellow-500">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed h-[100vh] w-[100vw] inset-0 bg-black/60 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="fixed right-0 top-0 h-screen w-72 bg-black shadow-lg flex flex-col z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <span className="text-[#9a753e] font-semibold text-2xl marcellus-regular">
                  Knect Hotel
                </span>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 px-6 space-y-2 mt-6">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={clsx(
                      "list-none py-4 border-b border-gray-700 text-white cursor-pointer marcellus-sc hover:text-yellow-400",
                      (item.href && isActive(item.href)) ||
                        item.dropdown?.some(d => isActive(d.href)) ? "text-yellow-400" : ""
                    )}
                  >
                    {item.href && !item.dropdown ? (
                      <Link href={item.href}>{item.name}</Link>
                    ) : item.dropdown ? (
                      <div>
                        {item.name}
                        <ul className="pl-4 mt-2 space-y-1">
                          {item.dropdown.map((drop) => (
                            <li
                              key={drop.name}
                              className={clsx(
                                "hover:text-yellow-400",
                                isActive(drop.href) && "text-yellow-400"
                              )}
                            >
                              <Link href={drop.href}>{drop.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      item.name
                    )}
                  </li>
                ))}
              </nav>
              <div className="p-6 border-t border-gray-700 space-y-3">
                <Link href="/login">
                  <button className="w-full px-4 py-2 rounded-lg text-white bg-[#1a1a1a] border border-gray-700 marcellus-sc hover:bg-gray-800">
                    Login
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full px-4 py-2 rounded-lg bg-yellow-600 text-white marcellus-sc font-semibold hover:bg-yellow-500">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
