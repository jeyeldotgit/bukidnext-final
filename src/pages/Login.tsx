import React from 'react';
import { useNavigate } from 'react-router-dom';

const appLogo = '/images/appLogo.png';

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F9F7F4] px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <img src={appLogo} alt="BukidNext Logo" className="h-12 w-12 mb-4 rounded-full object-cover" />
        <h1 className="text-2xl font-bold mb-2 text-[#2E5A1C]">Mag-login sa BukidNext</h1>
        <p className="text-gray-600 mb-6 text-center">I-access ang iyong account para sa modernong pagsasaka.</p>
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-4 transition" aria-label="Continue with Facebook">
          <i className="fab fa-facebook-f"></i>
          Continue with Facebook
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Wala ka pang account?{' '}
          <button className="text-[#2E5A1C] underline font-medium" onClick={() => navigate('/signup')}>
            Mag-sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login; 