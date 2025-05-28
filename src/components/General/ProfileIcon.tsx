import React from 'react';

const ProfileIcon: React.FC = () => (
  <button
    className="w-8 h-8 bg-[#2E5A1C] rounded-full flex items-center justify-center text-white cursor-pointer"
    aria-label="Profile"
  >
    <i className="fas fa-user" aria-hidden="true"></i>
  </button>
);

export default ProfileIcon; 