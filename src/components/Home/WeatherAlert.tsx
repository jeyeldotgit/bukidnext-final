import React from 'react';

const WeatherAlert: React.FC = () => (
  <section className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8" aria-label="Weather alert">
    <div className="flex items-start">
      <i className="fas fa-exclamation-circle text-amber-500 mt-1 mr-3 text-lg" aria-hidden="true"></i>
      <div>
        <h4 className="font-bold text-amber-800">Seasonal Alert</h4>
        <p className="text-amber-700 text-sm">Prepare for the rainy season. Consider harvesting early or implementing flood protection measures for your crops.</p>
      </div>
    </div>
  </section>
);

export default WeatherAlert; 