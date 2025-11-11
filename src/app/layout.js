"use client";

import { useEffect } from "react";
import { initLenis } from "@/utils/lenis";
import { Geist, Geist_Mono, Poppins, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { BlogProvider } from "@/context/BlogContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alt",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${montserratAlternates.variable}`}
    >
      <body
        className={`font-poppins antialiased ${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${montserratAlternates.variable}`}
      >
        <BlogProvider>{children}</BlogProvider>
      </body>
    </html>
  );
}
