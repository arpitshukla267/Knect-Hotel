"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Hotel } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      {/* Optimized Background Elements - Static */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9a753e]/15 rounded-full blur-3xl will-change-transform" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#d3b87d]/15 rounded-full blur-3xl will-change-transform" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d3b87d 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo/Brand Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#9a753e]/30 to-[#9a753e]/10 border-2 border-[#9a753e]/50 mb-4"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Hotel className="w-10 h-10 text-[#d3b87d]" />
          </motion.div>
          <motion.h1
            className="marcellus text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-[#f5d9a1] via-[#d3b87d] to-[#9a753e] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Welcome Back
          </motion.h1>
          <motion.p
            className="text-gray-400 text-sm"
            variants={itemVariants}
          >
            Sign in to continue to KnectHotel
          </motion.p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl rounded-3xl border-2 border-[#9a753e]/30 shadow-2xl p-8 sm:p-10"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#9a753e] via-[#d3b87d] to-[#9a753e] rounded-3xl opacity-20 blur-xl -z-10" />

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <motion.div
              variants={itemVariants}
              className="space-y-2"
            >
              <label className="block text-sm font-semibold text-[#d3b87d] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a753e]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-black/40 border border-[#9a753e]/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9a753e] focus:border-[#d3b87d] transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div
              variants={itemVariants}
              className="space-y-2"
            >
              <label className="block text-sm font-semibold text-[#d3b87d] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a753e]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-black/40 border border-[#9a753e]/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9a753e] focus:border-[#d3b87d] transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9a753e] hover:text-[#d3b87d] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            {/* Remember Me & Forgot Password */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between text-sm"
            >
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#9a753e]/30 bg-black/40 text-[#9a753e] focus:ring-[#9a753e]"
                />
                <span>Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-[#d3b87d] hover:text-[#f5d9a1] transition-colors font-medium"
              >
                Forgot password?
              </Link>
            </motion.div>

            {/* Login Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full bg-gradient-to-r from-[#9a753e] via-[#d3b87d] to-[#9a753e] text-black font-bold py-4 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Sign In
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#d3b87d] via-[#f5d9a1] to-[#d3b87d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundSize: "200% 100%" }}
              />
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="relative my-8"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#9a753e]/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black/90 text-gray-400">Or continue with</span>
            </div>
          </motion.div>

          {/* Social Login Buttons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {["Google", "GitHub"].map((provider) => (
              <motion.button
                key={provider}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="py-3 rounded-xl bg-black/40 border border-[#9a753e]/30 text-white hover:border-[#d3b87d] hover:bg-black/60 transition-all duration-300 font-medium"
              >
                {provider}
              </motion.button>
            ))}
          </motion.div>

          {/* Sign Up Link */}
          <motion.p
            variants={itemVariants}
            className="text-center text-sm mt-8 text-gray-400"
          >
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[#d3b87d] hover:text-[#f5d9a1] font-semibold transition-colors inline-flex items-center gap-1"
            >
              Sign Up
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.p>
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={itemVariants}
          className="text-center text-xs text-gray-500 mt-6"
        >
          By signing in, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </motion.div>
    </div>
  );
}
