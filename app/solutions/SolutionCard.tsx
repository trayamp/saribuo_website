'use client';
import React from 'react';

type SolutionCardProps = {
  image: string;
  title: string;
  description: string;
  pdfLink: string;
};

const SolutionCard = ({ image, title, description, pdfLink }: SolutionCardProps) => {
  return (
    <a 
      href={pdfLink} 
      download 
      target="_blank" 
      rel="noopener noreferrer"
      className="max-w-xs md:max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden block cursor-pointer hover:shadow-xl transition-shadow"
    >
      <div className="relative w-full h-56">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl text-gray-800 font-semibold mb-2 hover:text-purple-900">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
        <button
          className="mt-4 px-4 py-2 bg-purple-900 text-white rounded hover:bg-gray-800 transition"
          onClick={(e) => e.stopPropagation()}
        >
          Download PDF
        </button>
      </div>
    </a>
  );
};

export default SolutionCard;
