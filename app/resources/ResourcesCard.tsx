'use client';
import React from 'react';
import type { Resource } from './data';
import Tilt from "react-parallax-tilt";

const ResourcesCard = ({ image, title, author, description, Link }: Resource) => {
  return (
    <Tilt>
    <a 
      href={Link}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-xs md:max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden block cursor-pointer hover:shadow-xl transition-shadow"
    >
      <div className="relative w-full aspect-square">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <p className="text-sm text-gray-600 mb-1">{author}</p>
        <h3 className="text-2xl text-gray-800 font-semibold mb-2 hover:text-purple-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </a>
    </Tilt>
  );
};

export default ResourcesCard;
