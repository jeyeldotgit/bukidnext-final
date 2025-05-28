import React from 'react';
import { weatherData } from '../../lib/mockData';

const WeatherWidget: React.FC = () => (
  <div className="hidden md:flex items-center bg-[#F9F7F4] rounded-lg p-2" aria-label="Weather widget">
    <i className="fas fa-sun text-[#FFB800] mr-2" aria-hidden="true"></i>
    <div>
      <p className="text-sm font-medium">{weatherData.temperature}°C | {weatherData.condition}</p>
      <p className="text-xs text-[#8B5E3C]">{weatherData.alert}</p>
    </div>
  </div>
);

export default WeatherWidget; 