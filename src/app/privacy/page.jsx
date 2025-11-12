"use client";

import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 min-h-screen">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-16 leading-relaxed">
        <h1 className="text-3xl font-bold text-[#D4AF37] marcellus my-8">
          Privacy Policy (Compliant with IT Act & SPDI Rules)
        </h1>

        <p className="text-gray-400 mb-6">
          This Privacy Policy is published in compliance with Section 43A and Section 72A
          of the Information Technology Act, 2000, and the Information Technology
          (Reasonable Security Practices and Procedures and Sensitive Personal Data or
          Information) Rules, 2011 (“SPDI Rules”). It explains how{" "}
          <span className="text-white font-semibold">KnectHotel</span> collects, uses,
          discloses, and protects your personal information while providing its services.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          1. Information We Collect
        </h2>
        <p className="text-gray-400 mb-4">
          We collect various types of information to provide, maintain, and enhance our
          services. The information collected includes:
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>
            <span className="text-white font-medium">Personal Information:</span> Your name,
            contact number, email address, billing address, and company details.
          </li>
          <li>
            <span className="text-white font-medium">Sensitive Personal Data or Information (SPDI):</span>{" "}
            Financial details such as credit card, banking, or UPI information collected for
            payment processing.
          </li>
          <li>
            <span className="text-white font-medium">Usage Information:</span> IP address,
            browser type, device data, access times, and pages viewed to help us improve our
            software and site performance.
          </li>
        </ul>

        {/* 2. Use of Information */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          2. Use of Information
        </h2>
        <p className="text-gray-400 mb-4">
          Your information is collected and used for legitimate business purposes,
          including but not limited to:
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>Creating and managing user accounts</li>
          <li>Providing access to software features and hotel management tools</li>
          <li>Processing billing and payment transactions</li>
          <li>Providing technical support and customer service</li>
          <li>Improving system performance, analytics, and product development</li>
          <li>Complying with legal and regulatory obligations</li>
        </ul>

        {/* 3. Consent */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">3. Consent</h2>
        <p className="text-gray-400 mb-4">
          By using our website or software, you expressly consent to the collection, storage,
          and processing of your personal information as outlined in this Privacy Policy.
          You may withdraw your consent at any time by writing to{" "}
          <span className="text-[#D4AF37]">info@knecthotel.com</span>. However, please note
          that withdrawing consent may restrict or disable your access to certain services.
        </p>

        {/* 4. Data Sharing */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">4. Data Sharing</h2>
        <p className="text-gray-400 mb-4">
          We respect your privacy and do not sell, rent, or trade your personal information.
          However, we may share data under the following circumstances:
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>
            With trusted third-party service providers such as payment gateways,
            data processors, and hosting partners who support our operations.
          </li>
          <li>
            When disclosure is required by law, regulation, or government request.
          </li>
          <li>
            To protect our rights, investigate fraud, or respond to security issues.
          </li>
        </ul>

        {/* 5. Security Practices */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          5. Reasonable Security Practices
        </h2>
        <p className="text-gray-400 mb-4">
          KnectHotel follows internationally recognized information security standards,
          including ISO/IEC 27001-compliant controls. Our security measures include:
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>Encrypted storage and transmission of sensitive data</li>
          <li>Secure firewalls, intrusion detection, and access controls</li>
          <li>Regular internal audits and vulnerability assessments</li>
          <li>Limited employee access to user data based on authorization levels</li>
        </ul>

        {/* 6. Data Retention */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">6. Data Retention</h2>
        <p className="text-gray-400 mb-4">
          We retain your information only as long as it is necessary for the purpose it was
          collected, or as required by applicable laws. Once the data is no longer required,
          it will be securely deleted or anonymized in compliance with industry standards.
        </p>

        {/* 7. Your Rights */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">7. Your Rights</h2>
        <p className="text-gray-400 mb-4">
          In accordance with Indian law, you have the right to:
        </p>
        <ul className="list-disc ml-8 text-gray-400 space-y-2">
          <li>Access and review the personal information we hold about you</li>
          <li>Request corrections to inaccurate or incomplete information</li>
          <li>Withdraw consent for data processing (subject to contractual obligations)</li>
        </ul>
        <p className="text-gray-400 mt-4">
          To exercise these rights, please write to{" "}
          <span className="text-[#D4AF37]">info@knecthotel.com</span>. We will respond
          within a reasonable time as required under the SPDI Rules.
        </p>

        {/* 8. Grievance Officer */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">8. Grievance Officer</h2>
        <p className="text-gray-400 mb-4">
          In compliance with Rule 5(9) of the SPDI Rules, the details of our Grievance Officer are as follows:
        </p>
        <div className="bg-[#111] p-4 rounded-lg border border-gray-800">
          <p className="text-sm text-gray-400">
            <span className="text-white font-medium">Name:</span> Sudha Mehta <br />
            <span className="text-white font-medium">Email:</span>{" "}
            <span className="text-[#D4AF37]">info@knecthotel.com</span> <br />
            <span className="text-white font-medium">Contact Address:</span> A-116, Urbtech Trade Centre, Sector-132, Noida-201304, Uttar Pradesh, India <br />
            <span className="text-white font-medium">Phone:</span>{" "}
            <span className="text-[#D4AF37]">+91 9811101448</span>
          </p>
        </div>

        {/* 9. Updates */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          9. Updates to This Privacy Policy
        </h2>
        <p className="text-gray-400 mb-4">
          We may update this Privacy Policy periodically to reflect changes in our legal or
          operational requirements. Any modifications will be posted on this page, and the
          “Last Updated” date below will be revised accordingly. Users are encouraged to
          review this Policy regularly to stay informed.
        </p>

        {/* 10. Contact */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-3 marcellus-sc">
          10. Contact Us
        </h2>
        <p className="text-gray-400 mb-4">
          If you have any questions, concerns, or complaints about this Privacy Policy or our
          data handling practices, please contact our Grievance Officer or email us at{" "}
          <span className="text-[#D4AF37]">info@knecthotel.com</span>.
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
