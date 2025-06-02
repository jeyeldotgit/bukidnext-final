import React from 'react';
import { recommendedModules } from '../../lib/mockData';

const RecommendedModules: React.FC = () => (
  <section aria-label="Recommended For You" className='mb-8'>
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-lg">Recommended For You</h3>
      <button className="text-[#2E5A1C] text-sm font-medium cursor-pointer" aria-label="View all recommended modules">View All</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {recommendedModules.map(module => (
        <div key={module.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex cursor-pointer" tabIndex={0} aria-label={module.title}>
          <div className="w-1/3 relative overflow-hidden">
            <img 
              src={module.thumbnail} 
              alt={module.title} 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-2/3 p-4">
            <h4 className="font-bold mb-1 text-base">{module.title}</h4>
            <div className="flex text-xs text-gray-500 mb-2">
              <span className="mr-3">{module.language}</span>
              <span>{module.duration}</span>
            </div>
            <button className="mt-2 bg-[#2E5A1C] text-white text-sm py-1 px-3 rounded-lg cursor-pointer" aria-label={`Start learning ${module.title}`}>
              Start Learning
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RecommendedModules; 