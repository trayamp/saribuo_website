'use client';

import React, { useEffect, useState, useRef, TouchEvent } from 'react';
import Image from 'next/image';

const images: string[] = [
  '/images/first_page.jpg',
  '/images/pridewan.webp', 
  '/images/pridetu.webp', 
  '/images/pridetri.webp',
  '/images/adultthingbg.jpg', 
  '/images/pridewan.webp', 
  '/images/coding_slide.jpg', 
];

const Hero = () => {
  const [current, setCurrent] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  // slide show time here
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Swiping effect
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    } else if (diff < -50) {
      setCurrent((prev) => (prev + 1) % images.length);
    }
    touchStartX.current = null;
  };

  // Manual clicking (next)
  const goToPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="w-full bg-white">
      <div className="flex justify-center items-center w-full mx-auto min-h-[240px] md:min-h-0">
        <div
          className="
            relative
            w-[95vw] max-w-[1000px] h-[220px] rounded-xl shadow-lg
            sm:h-[320px]
            md:w-screen md:max-w-none md:h-screen md:rounded-none md:shadow-none
            overflow-hidden
            transition-all duration-700 ease-in-out
            bg-gray-100
          "
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides container */}
          <div
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, i) => (
              <div key={i} className="relative flex-shrink-0 w-full h-full">
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 768px) 95vw, 100vw"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            aria-label="Previous slide"
            onClick={goToPrev}
            className="
              absolute left-4 top-1/2 -translate-y-1/2 z-20
              bg-white/80 hover:bg-white transition-colors
              rounded-full p-2 shadow-md
              hidden md:flex
            "
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            aria-label="Next slide"
            onClick={goToNext}
            className="
              absolute right-4 top-1/2 -translate-y-1/2 z-20
              bg-white/80 hover:bg-white transition-colors
              rounded-full p-2 shadow-md
              hidden md:flex
            "
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* small circles */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`
                  w-3 h-3 rounded-full border border-white
                  transition-colors duration-300
                  ${i === current ? 'bg-white' : 'bg-white/50'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
