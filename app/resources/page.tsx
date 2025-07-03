'use client';

import React from 'react';
import ResourcesCard from './ResourcesCard'; 
import { resources } from './data';         

const ResourcesPage = () => {
  return (
    <main className="px-8 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {resources.map((item, idx) => (
          <ResourcesCard
            key={idx}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </main>
  );
};

export default ResourcesPage;
