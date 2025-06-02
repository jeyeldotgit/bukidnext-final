import React, { useState } from 'react';

const languages = [
  { code: 'tagalog', label: 'Tagalog' },
  { code: 'cebuano', label: 'Cebuano' },
  { code: 'english', label: 'English' },
];

const LanguageSwitcher: React.FC = () => {
  const [selected, setSelected] = useState('tagalog');
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" tabIndex={0} onBlur={() => setOpen(false)}>
      <button
        className="flex items-center text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white cursor-pointer whitespace-nowrap"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Pumili ng Wika"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{languages.find(l => l.code === selected)?.label}</span>
        <i className="fas fa-chevron-down ml-2 text-xs" aria-hidden="true"></i>
      </button>
      {open && (
        <ul className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10" role="listbox">
          {languages.map(lang => (
            <li
              key={lang.code}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${selected === lang.code ? 'font-bold text-[#2E5A1C]' : ''}`}
              role="option"
              aria-selected={selected === lang.code}
              onClick={() => { setSelected(lang.code); setOpen(false); }}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher; 