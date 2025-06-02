import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/General/LoadingScreen";

import appLogo from "../images/appLogo.png";
import heroBg from "../images/a2825a80a74be3704ad1d2c4c4da4336.jpg";

const Landing: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F4]">
      {loading && <LoadingScreen message="Naglo-load..." />}
      {/* Landing Navbar */}
      <nav className="bg-white shadow-md p-4 top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center">
            <img
              src={appLogo}
              alt="BukidNext Logo"
              className="h-auto w-8 rounded-full object-cover mt-1"
            />
            <h1 className="text-xl font-bold text-[#2E5A1C] font-sans">
              BukidNext
            </h1>
          </div>
          <button
            className="bg-[#2E5A1C] text-white font-semibold px-4 py-1 rounded hover:bg-[#244714] transition"
            aria-label="Mag-login"
            onClick={() => handleNavigate("/auth")}
          >
            Mag-login
          </button>
        </div>
      </nav>
      {/* Modern Hero Section with left fade */}
      <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background image with left fade overlay */}
        <img
          src={heroBg}
          alt="Tanawin ng bukirin sa Pilipinas"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Text Side */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
              Modernong Pagsasaka para sa{" "}
              <span className="text-[#FFB800]">Pilipinong Kultura</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-white/90">
              Isang makabago, makulay, at madaling gamitin na plataporma para sa
              mga magsasakang Pilipino. Alamin ang mga bagong kaalaman,
              teknolohiya, at suporta para sa masaganang ani at maunlad na
              pamumuhay.
            </p>
            <button
              className="bg-[#FFB800] text-[#2E5A1C] font-bold px-10 py-3 rounded-full shadow-lg text-lg hover:bg-[#ffe066] transition mb-4"
              onClick={() => handleNavigate("/home")}
            >
              Simulan ang Paglalakbay
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-[#2E5A1C] mb-10 text-center tracking-tight">
          Bakit BukidNext?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <i className="fas fa-book-open text-[#FFB800] text-4xl mb-4"></i>
            <h4 className="font-bold mb-2 text-[#2E5A1C] text-lg">Edukasyon</h4>
            <p className="text-gray-700 text-center">
              Mga aralin at gabay na angkop sa lokal na wika at kultura ng
              Pilipino.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <i className="fas fa-users text-[#FFB800] text-4xl mb-4"></i>
            <h4 className="font-bold mb-2 text-[#2E5A1C] text-lg">Komunidad</h4>
            <p className="text-gray-700 text-center">
              Makipag-ugnayan at magbahagi ng karanasan sa kapwa magsasaka.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <i className="fas fa-hand-holding-usd text-[#FFB800] text-4xl mb-4"></i>
            <h4 className="font-bold mb-2 text-[#2E5A1C] text-lg">Suporta</h4>
            <p className="text-gray-700 text-center">
              Alamin ang mga programa at tulong mula sa gobyerno at pribadong
              sektor.
            </p>
          </div>
        </div>
      </section>
      {/* Extended Features Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-[#2E5A1C] mb-10 text-center tracking-tight">
          Mga Tampok na Katangian
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl">
              <i className="fas fa-mobile-alt"></i>
            </span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">
                Mobile-First at Offline Mode
              </h4>
              <p className="text-gray-700">
                Gamitin ang app kahit walang internet. Disenyo para sa madaling
                paggamit sa cellphone.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl">
              <i className="fas fa-language"></i>
            </span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">Multi-Wika</h4>
              <p className="text-gray-700">
                Pumili ng Tagalog, Cebuano, o English para sa mas komportableng
                pagkatuto.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl">
              <i className="fas fa-certificate"></i>
            </span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">
                Sertipikasyon at Progreso
              </h4>
              <p className="text-gray-700">
                Subaybayan ang iyong pag-unlad at makakuha ng sertipiko sa bawat
                natapos na aralin.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl">
              <i className="fas fa-bullhorn"></i>
            </span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">
                Balita at Anunsyo
              </h4>
              <p className="text-gray-700">
                Laging updated sa mga balita, blog, at anunsyo ukol sa
                agrikultura.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl">
              <i className="fas fa-hands-helping"></i>
            </span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">
                Tulong ng Pamahalaan
              </h4>
              <p className="text-gray-700">
                Alamin ang mga programa, ayuda, at insurance na maaaring makuha
                ng mga magsasaka.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl">
              <i className="fas fa-universal-access"></i>
            </span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">
                Accessible para sa Lahat
              </h4>
              <p className="text-gray-700">
                Malinaw na teksto, malalaking button, at suporta para sa lahat
                ng uri ng gumagamit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#2E5A1C] text-white py-6 text-center text-sm mt-8">
        &copy; {new Date().getFullYear()} BukidNext. Lahat ng karapatan ay
        nakalaan.
      </footer>
    </div>
  );
};

export default Landing;
