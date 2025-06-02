import React from "react";

interface LoadingScreenProps {
  message?: string;
}

const appLogo = "/images/appLogo.png";

const LoadingScreen: React.FC<LoadingScreenProps> = ({ message }) => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-80">
    <img
      src={appLogo}
      alt="Loading..."
      className="w-20 h-20 mb-4 animate-spin"
      style={{ animationDuration: "1s" }}
    />
    {message && (
      <span className="text-lg text-[#2E5A1C] font-semibold">{message}</span>
    )}
  </div>
);

export default LoadingScreen;
