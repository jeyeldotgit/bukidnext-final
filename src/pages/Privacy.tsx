import React from "react";

import { useNavigate } from "react-router-dom";
const Privacy: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F9F7F4] flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-8">
        <h1 className="text-3xl font-bold text-[#2E5A1C] mb-6 text-center">
          Patakaran sa Privacy
        </h1>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Petsa ng Pagkabisa:</span> 2 Hunyo
          2025
        </p>
        <h2 className="text-xl font-bold text-[#2E5A1C] mt-6 mb-2">
          1. Panimula
        </h2>
        <p className="text-gray-700 mb-4">
          Maligayang pagdating sa{" "}
          <span className="font-semibold">BukidNext</span>. Pinahahalagahan
          namin ang iyong privacy at kami ay nakatuon sa pagprotekta ng iyong
          personal na impormasyon. Ipinapaliwanag ng Patakaran sa Privacy na ito
          kung paano namin kinokolekta, ginagamit, iniimbak, at ibinabahagi ang
          iyong impormasyon kapag ginagamit mo ang aming aplikasyon.
        </p>
        <h2 className="text-xl font-bold text-[#2E5A1C] mt-6 mb-2">
          2. Anong Impormasyon ang Kinokolekta Namin
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Pangalan mo</li>
          <li>Email address mo</li>
          <li>Profile picture mula sa iyong Facebook</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Hindi kami kumokolekta ng iba pang personal na impormasyon maliban
          kung ito ay iyong boluntaryong ibinigay.
        </p>
        <h2 className="text-xl font-bold text-[#2E5A1C] mt-6 mb-2">
          3. Paano Namin Ginagamit ang Iyong Impormasyon
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Para gumawa at pamahalaan ang iyong BukidNext account</li>
          <li>Para i-personalize ang iyong karanasan sa app</li>
          <li>Para pagbutihin ang aming serbisyo at mga tampok</li>
          <li>
            Para makipag-ugnayan sa iyo tungkol sa mga update o mahahalagang
            impormasyon
          </li>
        </ul>
        <h2 className="text-xl font-bold text-[#2E5A1C] mt-6 mb-2">
          4. Imbakan at Seguridad ng Datos
        </h2>
        <p className="text-gray-700 mb-4">
          Ang iyong impormasyon ay iniimbak nang ligtas at pinoprotektahan laban
          sa hindi awtorisadong pag-access, pagbubunyag, o pagbabago. Gumagamit
          kami ng mga pamantayang pang-industriya para sa seguridad ng iyong
          datos.
        </p>
        <h2 className="text-xl font-bold text-[#2E5A1C] mt-6 mb-2">
          5. Pagbabahagi ng Datos
        </h2>
        <p className="text-gray-700 mb-4">
          Hinding-hindi namin ibebenta, ipagpapalit, o ipapasa ang iyong
          personal na impormasyon sa iba. Ang iyong datos ay maaari lamang
          ibahagi sa mga pinagkakatiwalaang third-party na tumutulong sa amin sa
          pagpapatakbo ng app, kung kinakailangan para sa aming serbisyo, o kung
          hinihingi ng batas.
        </p>
        <h2 className="text-xl font-bold text-[#2E5A1C] mt-6 mb-2">
          6. Mga Karapatan ng Gumagamit
        </h2>
        <p className="text-gray-700 mb-4">May karapatan kang:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Tingnan ang personal na impormasyong hawak namin tungkol sa iyo
          </li>
          <li>Humiling ng pagwawasto ng iyong impormasyon</li>
          <li>Humiling ng pagbura ng iyong account at datos</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Para gamitin ang mga karapatang ito, makipag-ugnayan sa amin sa{" "}
          <a
            href="mailto:bukid.next@gmail.com"
            className="text-blue-600 underline"
          >
            bukid.next@gmail.com
          </a>
          .
        </p>
        <h2 className="text-xl font-bold text-[#2E5A1C] mt-6 mb-2">
          7. Cookies at Pagsubaybay
        </h2>
        <p className="text-gray-700 mb-4">
          Maaaring gumamit ang BukidNext ng cookies o katulad na teknolohiya
          upang mapabuti ang iyong karanasan. Maaari mong kontrolin ang cookies
          sa pamamagitan ng iyong browser settings.
        </p>
        <h2 className="text-xl font-bold text-[#2E5A1C] mt-6 mb-2">
          8. Pagbabago sa Patakaran
        </h2>
        <p className="text-gray-700 mb-4">
          Maaaring i-update ang Patakaran sa Privacy na ito paminsan-minsan.
          Anumang pagbabago ay ipo-post sa pahinang ito na may bagong petsa ng
          pagkabisa.
        </p>
        <h2 className="text-xl font-bold text-[#2E5A1C] mt-6 mb-2">
          9. Makipag-ugnayan sa Amin
        </h2>
        <p className="text-gray-700 mb-2">
          Kung may mga tanong o alalahanin ka tungkol sa Patakaran sa Privacy na
          ito o sa iyong datos, makipag-ugnayan sa amin sa:
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:bukid.next@gmail.com"
            className="text-blue-600 underline"
          >
            bukid.next@gmail.com
          </a>
        </p>
        <button
          onClick={() => navigate("/auth")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Magpatuloy sa Login
        </button>
      </div>
    </div>
  );
};

export default Privacy;
