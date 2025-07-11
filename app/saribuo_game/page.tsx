'use client';
import React from 'react';
import { Pixelify_Sans } from 'next/font/google';

const pixelify = Pixelify_Sans({ subsets: ['latin'] });

const SaribuoPage = () => {
  return (
    <main className="min-h-screen relative bg-black overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute left-0 right-0 bottom-10 bg-center bg-cover"
        style={{ top: "100px", backgroundImage: "url('/images/saribuo_gamebg.png')" }}
      />

      {/* black layer thingy */}
      <div className="absolute inset-0 bg-black/70" />

      {/* yt vid center */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 font-pixelify"
          style={{ fontFamily: pixelify.style.fontFamily }}
        >
          coming soon.
        </h1>
        <p
          className="max-w-sm sm:max-w-xl text-sm sm:text-lg px-2 font-pixelify"
          style={{ fontFamily: pixelify.style.fontFamily }}
        >
          09&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp;&nbsp;2025
        </p>

        {/*yt link ofc */}
        <div className="mt-8 w-full max-w-xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/mjTDHGSWTls"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
};

export default SaribuoPage;
