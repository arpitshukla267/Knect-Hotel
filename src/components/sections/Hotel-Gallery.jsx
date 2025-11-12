"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function HotelGallery() {
  const allImages = Array.from({ length: 19 }, (_, i) =>
    i < 5 ? `/gallery-${i + 1}.png` : `/gallery-${i + 1}.jpg`
  );

  const [cols, setCols] = useState(5);

  useEffect(() => {
    const getCols = (w) => {
      if (w <= 550) return 2;
      if (w <= 1028) return 3;
      return 5;
    };
    const handleResize = () => setCols(getCols(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImagesPerCol = () => {
    if (cols === 5) return 4;
    if (cols === 3) return 6;
    if (cols === 2) return 9;
    return 4;
  };

  const imagesPerCol = getImagesPerCol();

  // split images into columns and duplicate for seamless infinite scroll
  const columns = Array.from({ length: cols }).map((_, colIdx) => {
    const start = (colIdx * imagesPerCol) % allImages.length;
    const end = start + imagesPerCol;
    const imgs = allImages.slice(start, end);
    return [...imgs, ...imgs]; // duplicate for seamless scroll
  });

  return (
    <div
      className="text-white flex flex-col justify-center items-center w-full py-16 px-4 md:px-0"
      // style={{
      //   background: "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      // }}
    >
      <h1 className="text-center text-4xl md:text-5xl marcellus mb-12">
        Globally Trusted by 100+ Hotels and <br />
        Vacation Rentals
      </h1>

      {/* Columns */}
      <div className="flex gap-3.5 w-full max-w-[70%] h-[500px] overflow-hidden">
        {columns.map((imgs, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 overflow-hidden"
          >
            <div
              className={`flex flex-col gap-5 ${
                colIdx % 2 === 0 ? "marquee-up" : "marquee-down"
              }`}
            >
              {imgs.map((src, imgIdx) => (
                <div
                  key={imgIdx}
                  className="rounded-2xl overflow-hidden w-full flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Hotel ${imgIdx + 1}`}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link href={"/solutions/hotels"} suppressHydrationWarning className="text-xl my-10 bg-white/10 px-4 py-2 rounded-lg marcellus hover:cursor-pointer hover:scale-105 duration-200 hover:bg-white/20 hover:text-yellow-400">
        Explore Now
      </Link>

      {/* Cyclic marquee CSS */}
      <style jsx>{`
        .marquee-up {
          display: flex;
          flex-direction: column;
          animation: marqueeUp linear infinite;
          animation-duration: 20s;
        }

        .marquee-down {
          display: flex;
          flex-direction: column;
          animation: marqueeDown linear infinite;
          animation-duration: 25s;
        }

        @keyframes marqueeUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); } /* half because we duplicated the content */
        }

        @keyframes marqueeDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
