'use client';
import React, { useRef, useState } from "react";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

const AboutPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioStarted, setAudioStarted] = useState(false);

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioStarted(true);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/*background*/}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/trial_upfeu_pixel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* music */}
      <audio ref={audioRef} src="/images/arcade sirena_mixdown.wav" loop />

      {/* dark overlay here */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-80 z-10" />

      {/* content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 font-pixelify"
          style={{ fontFamily: pixelify.style.fontFamily }}
        >
          coming soon
        </h1>
        <p
          className="max-w-sm sm:max-w-xl text-sm sm:text-lg px-2 font-pixelify"
          style={{ fontFamily: pixelify.style.fontFamily }}
        >
        06&nbsp;&nbsp;&nbsp;23&nbsp;&nbsp;&nbsp;2025
        </p>

        {!audioStarted && (
          <button
            onClick={handlePlaySound}
            className="mt-6 px-4 py-2 bg-white text-black font-bold rounded-xl shadow-xl hover:bg-gray-200 transition"
          >
           
          </button>
        )}
      </div>
    </main>
  );
};

export default AboutPage;
