import React from 'react';
import { useNavigate } from 'react-router-dom';

const heroBg = '/images/a2825a80a74be3704ad1d2c4c4da4336.jpg';
const appLogo = '/images/appLogo.png';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F4]">
      {/* Landing Navbar */}
      <nav className="bg-white shadow-md p-4 top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center">
            <img src={appLogo} alt="BukidNext Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-[#2E5A1C] font-sans">BukidNext</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-[#2E5A1C] font-semibold px-4 py-1 rounded hover:bg-[#F9F7F4] transition" aria-label="Sign Up" onClick={() => navigate('/signup')}>Sign Up</button>
            <button className="bg-[#2E5A1C] text-white font-semibold px-4 py-1 rounded hover:bg-[#244714] transition" aria-label="Login" onClick={() => navigate('/login')}>Login</button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <header
        className="relative text-white py-16 px-4 flex flex-col items-center justify-center min-h-[420px]"
        style={{ minHeight: '420px' }}
      >
        <img
          src={heroBg}
          alt="Filipino farming landscape"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.55)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E5A1C]/80 to-[#8B5E3C]/80 z-10" aria-hidden="true"></div>
        <div className="relative z-20 flex flex-col items-center">
          <div className="flex items-center mb-4">
            <img src={appLogo} alt="BukidNext Logo" className="h-auto w-20  rounded-full object-cover" />
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans drop-shadow-lg">
              BukidNext
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Modernong Pagsasaka para sa <span className="text-[#FFB800]">Pilipinong Kultura</span>
          </h2>
          <p className="max-w-xl text-center text-lg md:text-xl mb-8 text-[#F9F7F4]">
            Isang makabago, makulay, at madaling gamitin na plataporma para sa mga magsasakang Pilipino. Alamin ang mga bagong kaalaman, teknolohiya, at suporta para sa masaganang ani at maunlad na pamumuhay.
          </p>
          <button
            className="bg-[#FFB800] text-[#2E5A1C] font-bold px-8 py-3 rounded-full shadow-lg text-lg hover:bg-[#ffe066] transition"
            onClick={() => navigate('/home')}
          >
            Simulan ang Paglalakbay
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="flex-1 py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-[#2E5A1C] mb-8 text-center">Bakit BukidNext?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <i className="fas fa-book-open text-[#FFB800] text-3xl mb-4"></i>
            <h4 className="font-bold mb-2 text-[#2E5A1C]">Edukasyon</h4>
            <p className="text-gray-700 text-center">Mga aralin at gabay na angkop sa lokal na wika at kultura ng Pilipino.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <i className="fas fa-users text-[#FFB800] text-3xl mb-4"></i>
            <h4 className="font-bold mb-2 text-[#2E5A1C]">Komunidad</h4>
            <p className="text-gray-700 text-center">Makipag-ugnayan at magbahagi ng karanasan sa kapwa magsasaka.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <i className="fas fa-hand-holding-usd text-[#FFB800] text-3xl mb-4"></i>
            <h4 className="font-bold mb-2 text-[#2E5A1C]">Suporta</h4>
            <p className="text-gray-700 text-center">Alamin ang mga programa at tulong mula sa gobyerno at pribadong sektor.</p>
          </div>
        </div>
      </section>

      {/* Extended Features Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-[#2E5A1C] mb-8 text-center">Mga Tampok na Katangian</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl"><i className="fas fa-mobile-alt"></i></span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">Mobile-First at Offline Mode</h4>
              <p className="text-gray-700">Gamitin ang app kahit walang internet. Disenyo para sa madaling paggamit sa cellphone.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl"><i className="fas fa-language"></i></span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">Multi-Wika</h4>
              <p className="text-gray-700">Pumili ng Tagalog, Cebuano, o English para sa mas komportableng pagkatuto.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl"><i className="fas fa-certificate"></i></span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">Sertipikasyon at Progreso</h4>
              <p className="text-gray-700">Subaybayan ang iyong pag-unlad at makakuha ng sertipiko sa bawat natapos na aralin.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl"><i className="fas fa-bullhorn"></i></span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">Balita at Anunsyo</h4>
              <p className="text-gray-700">Laging updated sa mga balita, blog, at anunsyo ukol sa agrikultura.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl"><i className="fas fa-hands-helping"></i></span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">Tulong ng Pamahalaan</h4>
              <p className="text-gray-700">Alamin ang mga programa, ayuda, at insurance na maaaring makuha ng mga magsasaka.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-[#FFB800] text-white rounded-full p-3 text-2xl"><i className="fas fa-universal-access"></i></span>
            <div>
              <h4 className="font-bold text-[#2E5A1C] mb-1">Accessible para sa Lahat</h4>
              <p className="text-gray-700">Malinaw na teksto, malalaking button, at suporta para sa lahat ng uri ng gumagamit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E5A1C] text-white py-6 text-center text-sm mt-8">
        &copy; {new Date().getFullYear()} BukidNext. Lahat ng karapatan ay nakalaan.
      </footer>
    </div>
  );
};

export default Landing; 