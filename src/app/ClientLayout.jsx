"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initLenis } from "@/utils/lenis";
import { BlogProvider } from "@/context/BlogContext";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Geist, Geist_Mono, Poppins, Montserrat_Alternates } from "next/font/google";

// Fonts
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

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    initLenis();
  }, []);

  // Hide footer on these routes
  const hideFooterRoutes = ["/login", "/signup"];
  const shouldShowFooter = !hideFooterRoutes.includes(pathname);

  return (
    <div
      className={`bg-[#0A0A0A] text-gray-300 font-poppins antialiased ${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${montserratAlternates.variable}`}
    >
      <BlogProvider>
        <main className="min-h-screen">{children}</main>
        {shouldShowFooter && <Footer />}
      </BlogProvider>
    </div>
  );
}
