import React from 'react';

const Calendar: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <i className="fas fa-calendar-alt text-[#2E5A1C] text-4xl mb-4" aria-hidden="true"></i>
    <h2 className="text-2xl font-bold mb-2">Kalendaryo</h2>
    <p className="text-gray-600">Your farming calendar and reminders will appear here soon!</p>
  </div>
);

export default Calendar; 