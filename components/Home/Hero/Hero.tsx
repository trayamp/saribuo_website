'use client';

import React, { useEffect, useState, useRef, TouchEvent } from 'react';
import Image from 'next/image';

// Image list with photo credits
const slides = [
  { src: '/images/first_page.jpg', credit: ' Photo by Justin Fernando' },
  { src: '/images/pridewan.webp', credit: ' Photo by Justin Fernando' },
  { src: '/images/pridetu.webp', credit: ' Photo by Justin Fernando' },
  { src: '/images/pridetri.webp', credit: ' Photo by Justin Fernando' },
  { src: '/images/pridefor.jpg', credit: ' Photo by Rey Quijano' },
  { src: '/images/pridefayb.jpg', credit: ' Photo by Rey Quijano' },
  { src: '/images/pridesiks.jpg', credit: ' Photo by Rey Quijano' },
];

const Hero = () => {
  const [current, setCurrent] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  // slide timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // swipe epeks
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (diff < -50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    }
    touchStartX.current = null;
  };

  // nav buttons
  const goToPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="w-full bg-white">
      {/* Mobile navbar spacer */}
      <div className="h-[64px] bg-white md:hidden" />

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
          {/* Slides wrapper */}
          <div
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="relative flex-shrink-0 w-full h-full">
                <Image
                  src={slide.src}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 768px) 95vw, 100vw"
                />
                <p className="absolute bottom-2 right-2 text-xs text-white px-2 py-1 rounded-sm">
                  {slide.credit}
                </p>
              </div>
            ))}
          </div>

          {/* Previous button */}
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

          {/* next button */}
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

          {/* smol dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full border border-white ${
                  i === current ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
