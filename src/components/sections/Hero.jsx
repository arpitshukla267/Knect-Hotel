import React, { useEffect, useState } from "react";

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="h-screen w-full flex items-center bg-cover bg-white bg-center relative "
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-10 lg:px-20 text-left">
        <h1 className="text-white marcellus text-3xl lg:text-5xl leading-snug max-w-3xl">
          All your{" "}
          <span className="text-yellow-800 font-semibold  marcellus ">
            Hotels and Rental
          </span>{" "}
          needs,
          <br />
          One Powerful Platform.
        </h1>

        <div className="mt-8 flex lg:flex-row flex-col items-start gap-6">
          <button className="bg-[#ba9655] hover:bg-yellow-700 text-white px-6 py-3 marcellus-sc rounded-lg font-medium shadow-lg transition">
            Get Started for free
          </button>
          <button className="bg-[#ba9655] hover:bg-yellow-600 text-white px-6 py-3 marcellus-sc rounded-lg font-medium shadow-lg transition">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
