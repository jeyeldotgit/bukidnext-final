import React from 'react';

const ProgressOverview: React.FC = () => (
  <section className="bg-white rounded-xl shadow-sm p-4 mb-8" aria-label="Progress overview">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-lg">Your Learning Progress</h3>
      <button className="text-[#2E5A1C] text-sm font-medium cursor-pointer" aria-label="View all progress">View All</button>
    </div>
    <div className="bg-[#F9F7F4] rounded-lg p-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Overall Completion</span>
        <span className="text-sm font-medium">35%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5" aria-label="Overall progress bar">
        <div className="bg-[#2E5A1C] h-2.5 rounded-full" style={{ width: '35%' }}></div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-xs text-gray-500">Modules</p>
          <p className="font-bold">3/8</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Quizzes</p>
          <p className="font-bold">5/12</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Certificates</p>
          <p className="font-bold">1</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProgressOverview; 