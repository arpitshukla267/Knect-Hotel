"use client";

import React from "react";

export default function LoadingSpinner({ size = 48 }) {
  return (
    <div className="loading-spinner" aria-hidden>
      <img src="/logo.png" alt="loading" style={{ width: size, height: 'auto' }} />
      <style jsx>{`
        .loading-spinner img {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
