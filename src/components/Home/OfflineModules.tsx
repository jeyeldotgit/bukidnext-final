import React from 'react';
import { featuredModules, recommendedModules } from '../../lib/mockData';

const offlineModules = [
  ...featuredModules,
  ...recommendedModules,
].filter(module => module.isDownloaded);

const OfflineModules: React.FC = () => {
  if (offlineModules.length === 0) return null;
  return (
    <section aria-label="Offline or Downloaded Modules">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Offline / Downloaded Modules</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offlineModules.map(module => (
          <div key={module.id} className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer" tabIndex={0} aria-label={module.title}>
            <div className="relative h-40 overflow-hidden">
              <img
                src={module.thumbnail}
                alt={module.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                <i className="fas fa-arrow-down text-[#2E5A1C]" aria-label="Downloaded"></i>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="flex justify-between items-center">
                  <span className="text-white text-xs font-medium">{module.language}</span>
                  <span className="text-white text-xs">{module.duration}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold mb-2 text-base">{module.title}</h4>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1" aria-label="Module progress bar">
                <div
                  className="bg-[#2E5A1C] h-1.5 rounded-full"
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{module.progress}% complete</span>
                <span>Offline</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfflineModules; 