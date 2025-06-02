import React from 'react';
import SeasonalCalendar from '../components/Calendar/SeasonalCalendar';

const Calendar: React.FC = () => (
  <div className="flex flex-col items-center  min-h-[60vh] text-center px-4">
    
    <i className="fas fa-calendar-alt text-[#2E5A1C] text-4xl mb-4 mt-4" aria-hidden="true"></i>
    <h2 className="text-2xl font-bold mb-2">Kalendaryo</h2>
    <p className="text-gray-600">Dito mo makikita ang iyong mga tala at simulation ng pagtatanim.</p>
    <SeasonalCalendar />
  </div>
);

export default Calendar; 