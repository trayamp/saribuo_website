'use client';
import React from 'react';
import { downloadableLinks } from './data';
import SolutionCard from './SolutionCard';

const SolutionsPage = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] sm:[70vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/images/kabataanthumbnail.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 bg-opacity-80 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          {/* Logos Row */}
          <div className="flex flex-row items-center justify-center space-x-2 mb-6">
            <img src="/images/saribuologo.png" alt="Saribuologo" className="h-9 sm:h-10  w-auto" />
            <img src="/images/Far_Easter_University_Logo.svg.png" alt="FEU" className="h-9 sm:h-10 w-auto" />
            <img src="/images/FEU_Tech_official_seal.png" alt="FEU Tech" className="h-9 sm:h-10 w-auto" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">saribuo</h1>
          <p className="max-w-sm sm:max-w-xl text-sm sm:text-lg px-2">
            sari-saring kasarian · buong-buo ang kalooban
          </p>
        </div>
      </div>

      {/* Card Section */}
      <section className="py-20 bg-gray-100">
        <div className="flex justify-center">
          {downloadableLinks.map(({ id, image, title, description, pdfLink }) => (
            <SolutionCard
              key={id}
              image={image}
              title={title}
              description={description}
              pdfLink={pdfLink}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage;
