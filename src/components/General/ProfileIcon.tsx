import React from "react";

type ProfileIconProps = {
  avatarUrl: string | undefined;
};

const ProfileIcon: React.FC<ProfileIconProps> = ({ avatarUrl }) => (
  <button
    className="w-8 h-8 bg-[#2E5A1C] rounded-full flex items-center justify-center text-white cursor-pointer"
    aria-label="Profile"
  >
    <img
      src={avatarUrl || "/images/appLogo.png"}
      alt="Profile"
      className="w-full h-full object-cover rounded-full"
    />
  </button>
);

export default ProfileIcon;
