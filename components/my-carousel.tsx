"use client";
import { imageUrlType } from "@/lib/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const MyCarousel = ({ data }: { data: imageUrlType }) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  // useEffect to get the initial carousel size
  useEffect(() => {
    const updateCarouselSize = () => {
      let elem = carouselRef.current as unknown as HTMLDivElement;
      let { width, height } = elem.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setCarouselSize({
          width,
          height,
        });
      } else {
        // Retry after a short delay if width is still 0
        setTimeout(updateCarouselSize, 100);
      }
    };

    updateCarouselSize();
  }, []);

  return (
    <div>
      {/* Carousel container */}
      <div className="w-[21rem] sm:w-[34rem] h-60 rounded-md overflow-hidden relative">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            transform: `translateX(${-currentImg * carouselSize.width}px)`,
          }}
          className="w-full h-full absolute flex transition-all duration-300"
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative shrink-0 w-full h-full">
              <Image
                // className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v}
              />
              {/* <div>image no. {i}</div> */}
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`border px-4 py-2 font-bold z-10 absolute bottom-[6.5rem] left-0 bg-black/20 ${
            currentImg === 0 && "opacity-50"
          }`}
        >
          {"<"}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`border px-4 py-2 font-bold z-10 absolute bottom-[6.5rem] right-0 bg-black/20 ${
            currentImg === data.length - 1 && "opacity-50"
          }`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MyCarousel;
