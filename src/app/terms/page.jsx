"use client";

import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function Terms() {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 min-h-screen">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-16 leading-relaxed marcellus">
        <h1 className="text-3xl font-bold text-[#D4AF37] my-8">
          Terms and Conditions
        </h1>

        <p className="text-gray-400 mb-6">
          Welcome to <span className="text-white font-semibold">KnectHotel</span>.
          These Terms and Conditions (“Terms”) govern your use of our website,
          mobile applications, and related services (“Services”). Please read them carefully
          before accessing or using any part of our platform. These Terms comply with
          applicable Indian laws, including the Information Technology Act, 2000.
        </p>

        {/* 1. Acceptance */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">1. Acceptance</h2>
        <p className="text-gray-400 mb-4">
          By accessing or using our software or website, you acknowledge that you have read,
          understood, and agreed to be bound by these Terms and our Privacy Policy. If you
          do not agree with any part of these Terms, you must immediately discontinue use of
          the Services. Continued use will be deemed as acceptance.
        </p>

        {/* 2. Services */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">2. Services</h2>
        <p className="text-gray-400 mb-4">
          KnectHotel provides cloud-based hospitality management software that assists hotels,
          resorts, and similar establishments in managing operations. Our services include,
          but are not limited to:
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>Property Management System (PMS)</li>
          <li>Online Booking and Channel Engine</li>
          <li>Point of Sale (POS) Integration</li>
          <li>Front Office and Housekeeping Automation</li>
          <li>Data Analytics and Reporting Tools</li>
        </ul>

        {/* 3. Account & Access */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">3. Account and Access</h2>
        <p className="text-gray-400 mb-4">
          To access certain features of the platform, you may be required to create an account.
          You agree to provide accurate and up-to-date information during registration and to
          maintain the confidentiality of your account credentials.
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>You are solely responsible for maintaining the security of your login credentials.</li>
          <li>Any unauthorized use of your account must be reported immediately at <span className="text-[#D4AF37]">info@knecthotel.com</span>.</li>
          <li>KnectHotel reserves the right to suspend or terminate accounts suspected of misuse.</li>
        </ul>

        {/* 4. Payments */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">4. Payment and Fees</h2>
        <p className="text-gray-400 mb-4">
          Fees for our software and services are billed in advance as per the pricing plan
          selected. You agree to make timely payments to maintain uninterrupted access.
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>Payments once made are generally non-refundable, unless required by law.</li>
          <li>Failure to make payments may result in temporary suspension or permanent termination of your account.</li>
          <li>All fees are exclusive of applicable taxes.</li>
        </ul>

        {/* 5. User Conduct */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">5. User Conduct</h2>
        <p className="text-gray-400 mb-4">
          You agree to use our Services only for lawful purposes and in compliance with all
          applicable regulations. You agree not to:
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>Engage in any activity that violates applicable laws or regulations.</li>
          <li>Attempt to reverse-engineer, decompile, or tamper with our software.</li>
          <li>Upload, transmit, or distribute malicious code, viruses, or harmful files.</li>
          <li>Use the platform to defame, harass, or harm others.</li>
        </ul>

        {/* 6. Intellectual Property */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">6. Intellectual Property</h2>
        <p className="text-gray-400 mb-4">
          All intellectual property rights in our platform, website design, software,
          trademarks, and other related content are the sole property of{" "}
          <span className="text-white font-medium">KnectHotel</span>.
          You may not copy, modify, distribute, or reproduce any part of the content
          without prior written consent.
        </p>

        {/* 7. Termination */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">7. Termination</h2>
        <p className="text-gray-400 mb-4">
          We reserve the right to terminate or suspend your access to our Services at any time,
          with or without prior notice, if we believe you have violated these Terms or engaged
          in fraudulent or abusive activity. Upon termination, your access to all associated
          data may be revoked.
        </p>

        {/* 8. Disclaimers */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">8. Disclaimers and Limitations</h2>
        <p className="text-gray-400 mb-4">
          While we strive to maintain uninterrupted and secure access to our software,
          we do not guarantee that the Services will always function without disruption,
          errors, or security breaches.
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>
            KnectHotel shall not be liable for any indirect, incidental, or consequential
            damages arising from the use or inability to use the Services.
          </li>
          <li>
            We are not responsible for data loss caused by user error, third-party actions,
            or force majeure events.
          </li>
          <li>
            The platform and its content are provided “as is” without warranties of any kind.
          </li>
        </ul>

        {/* 9. Governing Law */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">9. Governing Law and Jurisdiction</h2>
        <p className="text-gray-400 mb-4">
          These Terms are governed by and construed in accordance with the laws of India.
          Any dispute arising from or relating to these Terms shall be subject to the
          exclusive jurisdiction of the courts situated in{" "}
          <span className="text-white font-medium">Uttar Pradesh, India</span>.
        </p>

        {/* 10. Contact */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">10. Contact Information</h2>
        <p className="text-gray-400 mb-4">
          For any questions or concerns regarding these Terms, please contact us at:
        </p>
        <div className="bg-[#111] p-4 rounded-lg border border-gray-800">
          <p className="text-sm text-gray-400">
            Email: <span className="text-[#D4AF37]">info@knecthotel.com</span>
            <br />
            Phone: <span className="text-[#D4AF37]">+1 844 234 2363</span>
            <br />
            Address: A-116, Urbtech Trade Center, Sector 132, Noida, Uttar Pradesh, India
          </p>
        </div>

        <p className="text-gray-500 text-sm mt-12 italic">
          Last updated: {new Date().toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
