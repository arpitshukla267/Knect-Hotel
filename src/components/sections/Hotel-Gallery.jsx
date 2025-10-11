"use client";
import Image from "next/image";
import React from "react";

export default function HotelGallery() {
  const images = [
    "/gallery-1.png",
    "/gallery-2.png", 
    "/gallery-3.png",
    "/gallery-4.png",
    "/gallery-5.png",
  ]; // repeated for simplicity

  const [cols, setCols] = React.useState(5);

  // determine columns based on window width
  React.useEffect(() => {
    const getCols = (w) => {
      if (typeof w !== 'number') return 5;
      if (w <= 550) return 2;
      if (w <= 1028) return 3;
      return 5;
    };

    const handleResize = () => setCols(getCols(window.innerWidth));

    // set initial cols (guard for SSR)
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div
      className="text-white flex flex-col justify-center items-center w-full py-16 px-4 md:px-0"
      style={{
        background: "linear-gradient(180deg, #111111 5%, #9a753e 80%, #111111 100%)",
      }}
    >
      <h1 className="text-center text-4xl md:text-5xl marcellus mb-12">
        Globally Trusted by 100+ Hotels and <br />
        Vacation Rentals
      </h1>

      {/* Column Marquee Wrapper with full viewport height */}
      <div className="flex gap-3.5 w-full max-w-[70%] h-[500px] overflow-hidden">
        {Array.from({ length: cols }).map((_, colIdx) => (
          <div
            key={colIdx}
            className={`flex-1 flex flex-col gap-5 ${
              colIdx % 2 === 0 ? "animate-col-up" : "animate-col-down"
            }`}
          >
            {/* Duplicate images for seamless looping */}
            {[...images, ...images].map((src, imgIdx) => (
              <div
                key={imgIdx}
                className="rounded-2xl overflow-hidden w-full flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Hotel ${imgIdx + 1}`}
                  width={300}
                  height={400}
                  className="object-contain w-full h-full" // Changed to contain to prevent cropping
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="text-xl my-10 bg-white/10 px-4 py-2 rounded-lg marcellus hover:cursor-pointer hover:scale-105 duration-200 hover:bg-white/20 hover:text-yellow-400">Explore Now</button>

      {/* Column Scroll Animations */}
      <style jsx>{`
        .animate-col-up {
          animation: colUp 25s linear infinite;
        }
        .animate-col-down {
          animation: colDown 30s linear infinite;
        }
        @keyframes colUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-350%);
          }
        }
        @keyframes colDown {
          0% {
            transform: translateY(-350%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </div>
  );
}