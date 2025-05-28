import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/General/Header';
import BottomNav from './components/General/BottomNav';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Calendar from './pages/Calendar';
import Progress from './pages/Progress';
import Community from './pages/Community';
import Articles from './pages/Articles';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

const AuthenticatedLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#F9F7F4]">
    <Header />
    <main className="flex-1 pb-20">
      <Outlet />
    </main>
    <BottomNav />
  </div>
);

const App: React.FC = () => (
  <Router>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Authenticated Routes */}
      <Route element={<AuthenticatedLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/community" element={<Community />} />
        <Route path="/articles" element={<Articles />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
