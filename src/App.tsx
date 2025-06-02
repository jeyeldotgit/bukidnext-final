import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Components Import
import Header from "./components/General/Header";
import BottomNav from "./components/General/BottomNav";

// Pages Import
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Calendar from "./pages/Calendar";
import Progress from "./pages/Progress";
import Community from "./pages/Community";
import Articles from "./pages/Articles";
import Landing from "./pages/Landing";
import Auth from "./pages/Login";
import Privacy from "./pages/Privacy";

// Contexts Import
import { AuthProvider } from "./contexts/AuthProvider";

// Custom Routing Import
import ProtectedRoute from "./components/Router/ProtectedRoute";
import CheckSessionInLanding from "./components/Router/CheckSessionInLanding";

const AuthenticatedLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#F9F7F4]">
    <Header />
    <main className="flex-1 ">
      <Outlet />
    </main>
    <BottomNav />
  </div>
);

const App: React.FC = () => (
  <AuthProvider>
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <CheckSessionInLanding>
              <Landing />
            </CheckSessionInLanding>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* Authenticated Routes */}
        <Route
          element={
            <ProtectedRoute>
              <AuthenticatedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/community" element={<Community />} />
          <Route path="/articles" element={<Articles />} />
        </Route>
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
