import React, { useState, useRef, useEffect } from "react";
import WeatherWidget from "./WeatherWidget.tsx";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import ProfileIcon from "./ProfileIcon.tsx";
import ProfileModal from "./ProfileModal";
import LoadingScreen from "./LoadingScreen";

import appLogo from "../../images/appLogo.png";

import { useAuth } from "../../hooks/useAuth.ts";

import { useNavigate } from "react-router-dom";

import SignOut from "../../api/auth/SignOut.tsx";

interface HeaderProps {
  showAuth?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showAuth = false }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const { session } = useAuth();

  const user = session?.user;

  const userProfile = {
    name: user?.user_metadata?.name,
    email: user?.email,
    avatarUrl: user?.user_metadata?.avatar_url,
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleSignOut = async () => {
    setLoading(true);
    const { success, message } = await SignOut();
    if (success) {
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1000);
    } else {
      setLoading(false);
      console.error(message);
    }
  };

  return (
    <>
      {loading && <LoadingScreen message="Naglo-logout..." />}
      <header className="bg-white shadow-md p-4 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center">
            <img
              src={appLogo}
              alt="BukidNext Logo"
              className="h-8 w-8 rounded-full object-cover"
            />
            <h1 className="text-xl font-bold text-[#2E5A1C] font-sans ml-2">
              BukidNext
            </h1>
          </div>
          <div
            className="flex items-center space-x-4 relative"
            ref={dropdownRef}
          >
            {showAuth ? (
              <></>
            ) : (
              <>
                <WeatherWidget />
                <LanguageSwitcher />
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-label="Menu ng Profile"
                >
                  <ProfileIcon avatarUrl={userProfile.avatarUrl} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-[#2E5A1C] hover:bg-gray-100"
                      aria-label="Profile"
                      onClick={() => {
                        setProfileModalOpen(true);
                        setDropdownOpen(false);
                      }}
                    >
                      Profile
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      aria-label="Mag-logout"
                      onClick={handleSignOut}
                    >
                      Mag-logout
                    </button>
                  </div>
                )}
                <ProfileModal
                  open={profileModalOpen}
                  onClose={() => setProfileModalOpen(false)}
                  user={userProfile}
                />
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
