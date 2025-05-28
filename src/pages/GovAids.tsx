import React from 'react';
import { govAids } from '../lib/mockData';

const GovAids: React.FC = () => (
  <div className="max-w-5xl mx-auto py-8 px-4">
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
      <i className="fas fa-hand-holding-usd text-[#2E5A1C] text-2xl" aria-hidden="true"></i>
      Government Aids
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {govAids.map(aid => (
        <div key={aid.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
          <img src={aid.image} alt={aid.title} className="w-full h-40 object-cover" />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-bold text-lg mb-1 line-clamp-2">{aid.title}</h3>
            <p className="text-xs text-gray-500 mb-2">{aid.agency}</p>
            <p className="text-sm text-gray-700 mb-4 flex-1 line-clamp-3">{aid.summary}</p>
            <a href={aid.link} className="mt-auto text-[#2E5A1C] text-xs font-medium underline self-start" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GovAids; 