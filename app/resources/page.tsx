'use client';

import React from 'react';
import ResourcesCard from './ResourcesCard'; 
import { resources } from './data';         

const ResourcesPage = () => {
  return (
    <main className="px-4 py-6 pt-[72px] md:pt-[96px] bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Resources</h1>
      <div className="grid grid-cols-3 gap-4 auto-rows-fr">
        {resources.map((item, idx) => (
          <ResourcesCard
            key={idx}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            author={item.author}
            Link={item.Link}
          />

        ))}
      </div>
    </main>
  );
};

export default ResourcesPage;
