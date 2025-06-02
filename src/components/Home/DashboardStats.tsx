import React from 'react';

const cropPrices = [
  { name: 'Palay', price: 22.5, unit: '₱/kg' },
  { name: 'Mais', price: 18.0, unit: '₱/kg' },
  { name: 'Gulay', price: 35.0, unit: '₱/kg' },
  { name: 'Saging', price: 28.0, unit: '₱/kg' },
];

const DashboardStats: React.FC = () => (
  <section className="mb-8" aria-label="Dashboard ng Presyo at Stats">
    <h3 className="font-bold text-lg mb-4 text-[#2E5A1C]">Dashboard ng Presyo ng Pananim</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {cropPrices.map(crop => (
        <div key={crop.name} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-[#2E5A1C] font-bold text-lg mb-1">{crop.name}</span>
          <span className="text-2xl font-extrabold text-[#FFB800]">₱{crop.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500">{crop.unit}</span>
        </div>
      ))}
    </div>
    {/* Add more dashboard stats here as needed */}
  </section>
);

export default DashboardStats; 