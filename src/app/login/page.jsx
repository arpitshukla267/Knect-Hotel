"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const fade = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e -50%, #000000 100%)",
      }}
    >
      <motion.div
        variants={fade}
        initial="hidden"
        animate="visible"
        className="bg-black/60 backdrop-blur-lg border border-[#9a753e]/40 rounded-2xl shadow-2xl w-full max-w-md p-8 text-[#f5e6c5]"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-[#d6b26b]">
          Welcome Back
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] text-[#f5e6c5] placeholder-[#9a753e]/60 focus:outline-none focus:ring-2 focus:ring-[#9a753e]"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-4 py-2 pr-10 rounded-lg bg-[#1a1a1a] text-[#f5e6c5] placeholder-[#9a753e]/60 focus:outline-none focus:ring-2 focus:ring-[#9a753e]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-[#9a753e] hover:text-[#f5e6c5]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 bg-[#9a753e] text-black font-semibold py-2 rounded-lg hover:bg-[#b08a4e] transition-all"
            type="submit"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="underline font-semibold text-[#d6b26b] hover:text-[#f5e6c5]"
          >
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
}
