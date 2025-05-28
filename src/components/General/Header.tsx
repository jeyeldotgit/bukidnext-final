import React, { useState, useRef, useEffect } from 'react';
import WeatherWidget from './WeatherWidget.tsx';
import LanguageSwitcher from './LanguageSwitcher.tsx';
import ProfileIcon from './ProfileIcon.tsx';
import ProfileModal from './ProfileModal';

const appLogo = '/images/appLogo.png';

interface HeaderProps {
  showAuth?: boolean;
}

const mockUser = {
  name: 'Juan Dela Cruz',
  email: 'juan@email.com',
  avatarUrl: '',
};

const Header: React.FC<HeaderProps> = ({ showAuth = false }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={appLogo} alt="BukidNext Logo" className="h-8 w-8 mr-2 rounded-full object-cover" />
          <h1 className="text-xl font-bold text-[#2E5A1C] font-sans">BukidNext</h1>
        </div>
        <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
          {showAuth ? (
            <>
              <button className="text-[#2E5A1C] font-semibold px-4 py-1 rounded hover:bg-[#F9F7F4] transition" aria-label="Sign Up">Sign Up</button>
              <button className="bg-[#2E5A1C] text-white font-semibold px-4 py-1 rounded hover:bg-[#244714] transition" aria-label="Login">Login</button>
            </>
          ) : (
            <>
              <WeatherWidget />
              <LanguageSwitcher />
              <button onClick={() => setDropdownOpen((v) => !v)} aria-label="Profile Menu">
                <ProfileIcon />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <button className="block w-full text-left px-4 py-2 text-sm text-[#2E5A1C] hover:bg-gray-100" aria-label="Profile" onClick={() => { setProfileModalOpen(true); setDropdownOpen(false); }}>Profile</button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100" aria-label="Logout">Logout</button>
                </div>
              )}
              <ProfileModal open={profileModalOpen} onClose={() => setProfileModalOpen(false)} user={mockUser} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 