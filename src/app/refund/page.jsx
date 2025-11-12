"use client";

import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function RefundPolicy() {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 min-h-screen">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-16 leading-relaxed">
        <h1 className="text-3xl font-bold text-[#D4AF37] marcellus my-8">Refund Policy</h1>

        <p className="text-gray-400 mb-6">
          At <span className="text-white font-semibold">KnectHotel</span>, we aim to deliver
          seamless and reliable software solutions designed specifically for the hospitality
          industry. We value the trust our clients place in us and are committed to ensuring
          transparency in our billing and refund process. Please review this Refund Policy
          carefully to understand your rights and obligations when using our services.
        </p>

        {/* Subscription Fees */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          1. Subscription Fees
        </h2>
        <p className="text-gray-400 mb-4">
          All subscription plans are billed in advance, either monthly or annually,
          depending on the plan you select during sign-up. These charges cover access to our
          cloud-based Property Management System (PMS), Point of Sale (POS) integrations,
          booking engines, and related software tools.
        </p>
        <p className="text-gray-400 mb-4">
          Subscription fees are generally <span className="text-white font-medium">non-refundable</span>,
          except in cases outlined under the <span className="text-white font-medium">Eligible Refund
          Cases</span> section below.
        </p>

        {/* Eligible Refund Cases */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          2. Eligible Refund Cases
        </h2>
        <p className="text-gray-400 mb-4">
          Refunds may be considered and approved by KnectHotel only under the following
          specific circumstances:
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>
            <span className="text-white font-medium">Service Downtime:</span> If the
            KnectHotel platform remains non-operational for more than{" "}
            <span className="text-[#D4AF37]">72 consecutive hours</span> due to an internal
            system failure attributable solely to us (excluding external factors such as
            internet issues, force majeure events, or scheduled maintenance).
          </li>
          <li>
            <span className="text-white font-medium">Incorrect Billing:</span> If you have
            been overcharged or billed erroneously due to a system or payment gateway error.
            In such cases, supporting documents may be requested to verify the claim.
          </li>
        </ul>
        <p className="text-gray-400 mt-4">
          All refund claims will be reviewed by our finance and technical teams, and approved
          only after thorough verification.
        </p>

        {/* Non-Refundable Situations */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          3. Non-Refundable Situations
        </h2>
        <p className="text-gray-400 mb-4">
          Refunds will <span className="text-white font-medium">not</span> be issued under
          the following circumstances:
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>Cancellation of service due to change of mind or internal business decisions.</li>
          <li>Partial or unused services within an ongoing billing cycle.</li>
          <li>
            One-time payments made for{" "}
            <span className="text-white font-medium">
              custom development, integrations, or feature enhancements
            </span>
            .
          </li>
          <li>
            Downtime caused by user misconfiguration, network issues, or external vendors.
          </li>
        </ul>

        {/* Cancellation */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          4. Cancellation Policy
        </h2>
        <p className="text-gray-400 mb-4">
          You may cancel your subscription plan at any time by visiting your account settings
          or by contacting our support team. Once cancellation is processed, your account
          will remain active until the end of the current billing period.
        </p>
        <p className="text-gray-400 mb-4">
          No refunds or credits will be issued for the remaining unused days of the billing
          cycle. After cancellation, your account data will be securely retained for a
          limited period in accordance with our{" "}
          <a href="/privacy" className="text-[#D4AF37] hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Refund Process */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          5. Refund Process
        </h2>
        <p className="text-gray-400 mb-4">
          To request a refund, please email us at{" "}
          <span className="text-[#D4AF37]">info@knecthotel.com</span> with your registered
          account details, payment reference ID, and a clear explanation of the reason for
          the refund request. Our team will acknowledge your request within{" "}
          <span className="text-[#D4AF37]">48 business hours</span>.
        </p>
        <p className="text-gray-400 mb-4">
          Upon verification and approval, eligible refunds will be processed and credited to
          the original payment method within{" "}
          <span className="text-[#D4AF37]">7–10 business days</span>. In certain cases,
          banking delays may extend this period slightly.
        </p>

        {/* Fair Use Clause */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          6. Fair Use and Abuse Prevention
        </h2>
        <p className="text-gray-400 mb-4">
          KnectHotel reserves the right to decline refund requests that appear fraudulent,
          repetitive, or abusive in nature. Any misuse of this policy to obtain unwarranted
          financial benefit may result in account termination and reporting to relevant
          authorities.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          7. Contact for Billing or Refund Queries
        </h2>
        <div className="bg-[#111] p-4 rounded-lg border border-gray-800 mb-6">
          <p className="text-sm text-gray-400">
            <span className="text-white font-medium">Email:</span>{" "}
            <span className="text-[#D4AF37]">info@knecthotel.com</span>
            <br />
            <span className="text-white font-medium">Phone:</span>{" "}
            <span className="text-[#D4AF37]">+91 9811101448</span>
            <br />
            <span className="text-white font-medium">Address:</span> A-116, Urbtech Trade Centre,
            Sector-132, Noida-201304, Uttar Pradesh, India
          </p>
        </div>

        {/* Closing */}
        <p className="text-gray-400 mb-4">
          This Refund Policy is part of our{" "}
          <a href="/terms" className="text-[#D4AF37] hover:underline">
            Terms and Conditions
          </a>{" "}
          and is governed by the laws of India. Any disputes related to billing or refunds
          shall be subject to the exclusive jurisdiction of the courts located in{" "}
          <span className="text-white font-medium">Uttar Pradesh, India</span>.
        </p>

        <p className="text-gray-500 text-sm mt-12 italic">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
