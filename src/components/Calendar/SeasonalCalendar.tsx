import React, { useState } from 'react';

const months = [
  'Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo',
  'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'
];
const daysShort = ['Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab', 'Lin'];

const cropOptions = ['Palay', 'Mais', 'Gulay', 'Saging', 'Tubó', 'Kamote', 'Iba pa...'];
const simulationOptions = ['Pagtatanim', 'Pag-aani', 'Patubig', 'Pag-abono', 'Pag-spray', 'Iba pa...'];
const journalOptions = [
  'Nagsimula ng pagtatanim',
  'Nagsagawa ng patubig',
  'Nag-abono',
  'Nag-spray ng pestisidyo',
  'Nag-ani',
  'Iba pa...'
];

interface Entry {
  crop?: string;
  journal?: string;
  simulation?: string;
}

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(month: number, year: number) {
  // 0 = Sunday, 1 = Monday, ...
  // We want Monday as first day, so adjust
  let day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

const currentYear = new Date().getFullYear();

const SeasonalCalendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [entries, setEntries] = useState<Record<string, Entry>>({});
  const [modalDay, setModalDay] = useState<number | null>(null);
  const [crop, setCrop] = useState('');
  const [journal, setJournal] = useState('');
  const [simulation, setSimulation] = useState('');
  const [customCrop, setCustomCrop] = useState('');
  const [customSimulation, setCustomSimulation] = useState('');
  const [customJournal, setCustomJournal] = useState('');

  const openModal = (day: number) => {
    setModalDay(day);
    const key = `${currentYear}-${selectedMonth}-${day}`;
    setCrop(entries[key]?.crop || '');
    setJournal(entries[key]?.journal || '');
    setSimulation(entries[key]?.simulation || '');
    setCustomCrop('');
    setCustomSimulation('');
    setCustomJournal('');
  };

  const closeModal = () => {
    setModalDay(null);
    setCrop('');
    setJournal('');
    setSimulation('');
    setCustomCrop('');
    setCustomSimulation('');
    setCustomJournal('');
  };

  const saveEntry = () => {
    if (modalDay !== null) {
      const key = `${currentYear}-${selectedMonth}-${modalDay}`;
      setEntries({
        ...entries,
        [key]: {
          crop: crop === 'Iba pa...' ? customCrop : crop,
          simulation: simulation === 'Iba pa...' ? customSimulation : simulation,
          journal: journal === 'Iba pa...' ? customJournal : journal,
        },
      });
      closeModal();
    }
  };

  const daysInMonth = getDaysInMonth(selectedMonth, currentYear);
  const firstDayOfWeek = getFirstDayOfWeek(selectedMonth, currentYear);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <section className="mb-8 w-full flex flex-col items-center" aria-label="Kalendaryong Panahon">
      
      <div className="flex items-center justify-between mb-4 w-full max-w-4xl">
        <button
          className="btn-secondary"
          onClick={() => setSelectedMonth((m) => (m === 0 ? 11 : m - 1))}
          aria-label="Nakaraang buwan"
        >
          &larr;
        </button>
        <span className="font-bold text-lg text-[#2E5A1C]">{months[selectedMonth]} {currentYear}</span>
        <button
          className="btn-secondary"
          onClick={() => setSelectedMonth((m) => (m === 11 ? 0 : m + 1))}
          aria-label="Susunod na buwan"
        >
          &rarr;
        </button>
      </div>
      <div className="bg-white rounded-xl shadow p-4 w-full max-w-4xl">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysShort.map((d) => (
            <div key={d} className="text-xs font-bold text-[#2E5A1C] text-center">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {daysArray.map((day) => {
            const key = `${currentYear}-${selectedMonth}-${day}`;
            const entry = entries[key];
            return (
              <button
                key={day}
                className={`rounded-lg border border-gray-200 p-2 h-20 flex flex-col items-start justify-start relative bg-[#F9F7F4] hover:bg-[#FFB800]/10 transition ${entry ? 'border-[#2E5A1C] bg-[#e6f4e6]' : ''}`}
                onClick={() => openModal(day)}
                aria-label={`Araw ${day}`}
              >
                <span className="font-bold text-[#2E5A1C] text-sm mb-1">{day}</span>
                {entry && (
                  <>
                    {entry.crop && <span className="text-xs text-[#2E5A1C] font-semibold">🌱 {entry.crop}</span>}
                    {entry.simulation && <span className="text-xs text-[#8B5E3C]">🔄 {entry.simulation}</span>}
                    {entry.journal && <span className="text-xs text-gray-500 mt-1">"{entry.journal}"</span>}
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
      {/* Modal for adding/editing entry */}
      {modalDay !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={closeModal}
              aria-label="Isara"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-[#2E5A1C] mb-4">{months[selectedMonth]} {modalDay}, {currentYear}</h3>
            <label className="block mb-2 text-sm font-medium text-gray-700">Pananim</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
              value={crop}
              onChange={e => setCrop(e.target.value)}
            >
              <option value="">Pumili ng pananim</option>
              {cropOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            {crop === 'Iba pa...' && (
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                value={customCrop}
                onChange={e => setCustomCrop(e.target.value)}
                placeholder="Ilagay ang pananim"
              />
            )}
            <label className="block mb-2 text-sm font-medium text-gray-700">Simulation</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
              value={simulation}
              onChange={e => setSimulation(e.target.value)}
            >
              <option value="">Pumili ng simulation</option>
              {simulationOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            {simulation === 'Iba pa...' && (
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                value={customSimulation}
                onChange={e => setCustomSimulation(e.target.value)}
                placeholder="Ilagay ang simulation"
              />
            )}
            <label className="block mb-2 text-sm font-medium text-gray-700">Journal</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
              value={journal}
              onChange={e => setJournal(e.target.value)}
            >
              <option value="">Pumili ng journal</option>
              {journalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            {journal === 'Iba pa...' && (
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                value={customJournal}
                onChange={e => setCustomJournal(e.target.value)}
                placeholder="Ilagay ang journal entry"
              />
            )}
            <button className="btn-primary w-full" onClick={saveEntry}>
              I-save
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SeasonalCalendar; 