import React from 'react';
import { govAids } from '../../lib/mockData';

const GovAidsSection: React.FC = () => (
  <section className="mb-8" aria-label="Government Aids">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-lg">Government Aids</h3>
      <button className="text-[#2E5A1C] text-sm font-medium cursor-pointer" aria-label="View all government aids">View All</button>
    </div>
    <div className="flex space-x-4 overflow-x-auto pb-2">
      {govAids.map(aid => (
        <div key={aid.id} className="min-w-[260px] bg-white rounded-xl shadow-sm overflow-hidden flex-shrink-0" tabIndex={0} aria-label={aid.title}>
          <img src={aid.image} alt={aid.title} className="w-full h-32 object-cover" />
          <div className="p-4">
            <h4 className="font-bold text-base mb-1 line-clamp-2">{aid.title}</h4>
            <p className="text-xs text-gray-500 mb-2">{aid.agency}</p>
            <p className="text-sm text-gray-700 line-clamp-2 mb-2">{aid.summary}</p>
            <a href={aid.link} className="text-[#2E5A1C] text-xs font-medium underline" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default GovAidsSection; 