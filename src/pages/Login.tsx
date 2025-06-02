import React, { useState } from "react";

import appLogo from "../images/appLogo.png";

import SignInWithFacebook from "../api/auth/SignInWithFacebook";

import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/General/LoadingScreen";

const Auth: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const res = await SignInWithFacebook();

      if (res?.success) {
        setTimeout(() => {
          setLoading(false);
          navigate("/home");
        }, 1000);
        return;
      }

      if (res?.success === false) {
        setLoading(false);
        console.log("Error signing in with facebook", res.error);
        return;
      }
    } catch (err) {
      setLoading(false);
      console.log("Error signing in with facebook", err);
      return;
    }
  };

  return (
    <>
      {loading && <LoadingScreen message="Naglo-load..." />}
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#F9F7F4] px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
          <img
            src={appLogo}
            alt="BukidNext Logo"
            className="h-auto w-24 rounded-full object-cover"
            onClick={() => {
              navigate("/");
            }}
          />
          <h1 className="text-2xl font-bold mb-2 text-[#2E5A1C]">
            Magpatuloy sa BukidNext
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Gamitin ang iyong Facebook account para magpatuloy.
          </p>
          <button
            onClick={handleSignIn}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-4 transition"
            aria-label="Magpatuloy gamit ang Facebook"
          >
            <i className="fab fa-facebook-f"></i>
            Magpatuloy gamit ang Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
