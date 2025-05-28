import React from 'react';
import WelcomeBanner from '../components/Home/WelcomeBanner';
import ProgressOverview from '../components/Home/ProgressOverview';
import WeatherAlert from '../components/Home/WeatherAlert';
import FeaturedModules from '../components/Home/FeaturedModules';
import RecommendedModules from '../components/Home/RecommendedModules';

const Home: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#F9F7F4] px-4 pt-2 pb-24 max-w-7xl mx-auto">
    <WelcomeBanner />
    <ProgressOverview />
    <WeatherAlert />
    <FeaturedModules />
    <RecommendedModules />
  </div>
);

export default Home; 