import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const navItems = [
  { tab: 'home', icon: 'fas fa-home', label: 'Home', path: '/home' },
  { tab: 'lessons', icon: 'fas fa-book', label: 'Lessons', path: '/lessons' },
  { tab: 'calendar', icon: 'fas fa-calendar-alt', label: 'Calendar', path: '/calendar' },
  { tab: 'progress', icon: 'fas fa-chart-line', label: 'Progress', path: '/progress' },
  { tab: 'community', icon: 'fas fa-users', label: 'Community', path: '/community' },
  { tab: 'articles', icon: 'fas fa-newspaper', label: 'Articles', path: '/articles' },
];

const getCurrentTab = (pathname: string) => {
  if (pathname.startsWith('/home')) return 'home';
  if (pathname.startsWith('/lessons')) return 'lessons';
  if (pathname.startsWith('/calendar')) return 'calendar';
  if (pathname.startsWith('/progress')) return 'progress';
  if (pathname.startsWith('/community')) return 'community';
  if (pathname.startsWith('/articles')) return 'articles';
  return 'home';
};

const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentTab = getCurrentTab(location.pathname);

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full bg-white shadow-lg border-t border-gray-200 z-30">
      <div className="max-w-7xl mx-auto flex justify-around sm:justify-between">
        {navItems.map(item => (
          <button
            key={item.tab}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center py-2 px-2 sm:py-3 sm:px-4 ${currentTab === item.tab ? 'text-[#2E5A1C]' : 'text-gray-500'} cursor-pointer whitespace-nowrap w-full focus:outline-none`}
            aria-label={item.label}
            type="button"
            style={{ minWidth: 0 }}
          >
            <i className={`${item.icon} text-xl sm:text-2xl`} aria-hidden="true"></i>
            <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 hidden xs:inline-block sm:inline-block">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav; 