import React from "react";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  user?: {
    name: string | undefined;
    email: string | undefined;
    avatarUrl?: string | undefined;
  };
}

const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose, user }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close profile modal"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={user?.avatarUrl || "/images/appLogo.png"}
            alt={user?.name || "User"}
            className="h-20 w-20 rounded-full object-cover mb-4 border-4 border-[#2E5A1C]"
          />
          <h2 className="text-xl font-bold text-[#2E5A1C] mb-1">
            {user?.name || "Can't render name"}
          </h2>
          <p className="text-gray-600 mb-4">
            {user?.email || "Can't render email"}
          </p>
          <button className="bg-[#2E5A1C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#244714] transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
