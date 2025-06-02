import React from "react";
import DashboardStats from "../components/Home/DashboardStats";
import WelcomeBanner from "../components/Home/WelcomeBanner";
import ProgressOverview from "../components/Home/ProgressOverview";
import WeatherAlert from "../components/Home/WeatherAlert";
import FeaturedModules from "../components/Home/FeaturedModules";
import RecommendedModules from "../components/Home/RecommendedModules";
import OfflineModules from "../components/Home/OfflineModules";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#F9F7F4] px-4 pt-2 pb-24 max-w-7xl mx-auto">
    <WelcomeBanner />
    <DashboardStats />
    <ProgressOverview />
    <WeatherAlert />
    <FeaturedModules />
    <RecommendedModules />
    <OfflineModules />
    <div className="mt-8 text-center">
      <Link
        to="/privacy"
        className="text-sm text-[#2E5A1C] underline hover:text-[#FFB800]"
      >
        Privacy Policy
      </Link>
    </div>
  </div>
);

export default Home;
