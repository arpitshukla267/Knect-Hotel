"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  // ✅ Updated Platform dropdown
  const platformDropdown = [
    {
      heading: "Operations hub",
      description: "Automate front desk, back office, and housekeeping tasks",
      links: [
        { name: "PMS", href: "/platform/operations/pms" },
        { name: "POS", href: "/platform/operations/pos" },
        { name: "Stock management", href: "/platform/operations/stock-management" },
        { name: "Expenses", href: "/platform/operations/expenses" },
      ],
    },
    {
      heading: "Sales hub",
      description: "Maximize bookings and revenue with advanced tools",
      links: [
        { name: "Booking engine", href: "/platform/sales/booking-engine" },
        { name: "Channel manager", href: "/platform/sales/channel-manager" },
        { name: "Revenue manager", href: "/platform/sales/revenue-manager" },
        { name: "Direct billing", href: "/platform/sales/direct-billing" },
      ],
    },
    {
      heading: "Guest hub",
      description: "Enhance guest experience with personalized services",
      links: [
        { name: "Magic link", href: "/platform/guest/magic-link" },
        { name: "Kiosk & QR", href: "/platform/guest/kiosk-qr" },
        { name: "Guest messaging", href: "/platform/guest/messaging" },
        { name: "Guest reviews", href: "/platform/guest/reviews" },
      ],
    },
    {
      heading: "Payments hub",
      description: "Simplify billing and secure payment processing",
      links: [
        { name: "Invoicing", href: "/platform/payments/invoicing" },
        { name: "Payment gateway", href: "/platform/payments/gateway" },
        { name: "Refunds", href: "/platform/payments/refunds" },
        { name: "Reports", href: "/platform/payments/reports" },
      ],
    },
    {
      heading: "Flexi AI",
      description: "Your 24/7 hotel operations brain",
      links: [
        { name: "AI assistant", href: "/platform/flexi-ai/assistant" },
        { name: "Automation", href: "/platform/flexi-ai/automation" },
        { name: "Analytics", href: "/platform/flexi-ai/analytics" },
      ],
    },
  ];

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/service" },
    {
      name: "Pricing",
      dropdown: [
        { name: "Monthly Plan", href: "/pricing?plan=Monthly Plan" },
        { name: "Quarterly Plan", href: "/pricing?plan=Quarterly Plan" },
        { name: "Half-Yearly Plan", href: "/pricing?plan=Half-Yearly Plan" },
        { name: "Yearly Plan", href: "/pricing?plan=Yearly Plan" },
      ],
    },
    {
      name: "Platform",
      dropdown: platformDropdown,
      isMegaMenu: true, // flag for custom design
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
    const body = document.body;
    const html = document.documentElement;
    if (isOpen) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
    } else {
      body.style.overflow = "";
      html.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
    }
  }, [isOpen]);

  const isActive = (href) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-[999] transition-transform duration-500",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="text-white py-4 px-6 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Knect Hotel Logo" width={160} height={40} className="cursor-pointer" />
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden lg:block bg-[#1f1f1f] px-6 py-2 rounded-full border border-gray-600">
          <ul className="hidden lg:flex space-x-6 text-sm font-medium items-center">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <li
                  className="relative cursor-pointer marcellus-sc flex items-center space-x-1"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item.href && !item.dropdown ? (
                    <Link href={item.href} className={clsx("hover:text-yellow-400", isActive(item.href) && "text-yellow-400")}>
                      {item.name}
                    </Link>
                  ) : (
                    <span
                      className={clsx(
                        "hover:text-yellow-400",
                        item.dropdown?.some((d) => isActive(d.href)) && "text-yellow-400"
                      )}
                    >
                      {item.name}
                    </span>
                  )}
                  {item.dropdown && (
                    <motion.span animate={{ rotate: hovered === item.name ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown size={16} />
                    </motion.span>
                  )}

                  {/* ✅ Mega Menu for Platform */}
                  <AnimatePresence>
                    {hovered === item.name && item.isMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 top-full mt-3 bg-[#0f0f0f] shadow-lg rounded-xl p-6 grid grid-cols-2 gap-6 w-[600px] text-sm z-50"
                      >
                        {platformDropdown.map((section) => (
                          <div key={section.heading} className="text-white">
                            <h4 className="font-semibold mb-1 text-lg flex items-center gap-2 text-yellow-400">
                              {section.heading}
                            </h4>
                            <p className="text-gray-400 text-xs mb-3">{section.description}</p>
                            <ul className="space-y-1">
                              {section.links.map((link) => (
                                <li key={link.name}>
                                  <Link
                                    href={link.href}
                                    className="hover:text-yellow-400 block transition"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ✅ Normal Dropdown */}
                  <AnimatePresence>
                    {hovered === item.name && item.dropdown && !item.isMegaMenu && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 bg-[#1f1f1f] mt-2 rounded-lg shadow-lg py-2 min-w-[200px] z-50"
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
                {index !== menuItems.length - 1 && <span className="text-gray-500">|</span>}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/login" className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-700 hover:bg-gray-800">
            Login
          </Link>
          <Link href="/contact" className="px-4 py-2 rounded-lg bg-yellow-600 text-black font-semibold hover:bg-yellow-500">
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* ✅ Mobile Slider Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-700">
              <span className="text-[#9a753e] font-semibold text-2xl">Knect Hotel</span>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {menuItems.map((item) => {
                const open = hovered === item.name;
                return (
                  <div key={item.name}>
                    <div
                      className="flex justify-between items-center py-3 cursor-pointer text-white"
                      onClick={() => setHovered(open ? null : item.name)}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown size={18} />
                        </motion.span>
                      )}
                    </div>
                    <AnimatePresence>
                      {open && item.dropdown && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-2 overflow-hidden"
                        >
                          {item.isMegaMenu
                            ? platformDropdown.flatMap((section) =>
                                section.links.map((link) => (
                                  <li key={link.name}>
                                    <Link
                                      href={link.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block py-2 text-gray-300 hover:text-yellow-400"
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))
                              )
                            : item.dropdown.map((drop) => (
                                <li key={drop.name}>
                                  <Link
                                    href={drop.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-gray-300 hover:text-yellow-400"
                                  >
                                    {drop.name}
                                  </Link>
                                </li>
                              ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="p-6 border-t border-gray-700">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full mb-3 text-center px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-700 hover:bg-gray-800 text-white"
              >
                Login
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 rounded-lg bg-yellow-600 text-black font-semibold hover:bg-yellow-500"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
