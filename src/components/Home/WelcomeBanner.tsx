import React from 'react';

const getGreeting = (lang: string) => {
  switch (lang) {
    case 'tagalog':
      return 'Maligayang pagdating, Magsasaka!';
    case 'cebuano':
      return 'Maayong pag-abot, Mag-uuma!';
    default:
      return 'Welcome, Farmer!';
  }
};

const WelcomeBanner: React.FC<{ language?: string }> = ({ language = 'english' }) => {
  const today = new Date();
  const dateString = today.toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  return (
    <section className="mb-8" aria-label="Welcome banner">
      <h2 className="text-2xl font-bold mb-2 font-sans">{getGreeting(language)}</h2>
      <p className="text-gray-600 text-sm">{dateString}</p>
    </section>
  );
};

export default WelcomeBanner; 