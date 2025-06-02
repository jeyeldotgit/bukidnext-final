import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoadingScreen from "../General/LoadingScreen";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { session, loading } = useAuth();

  if (loading) {
    return <LoadingScreen message="Naglo-load..." />;
  }

  if (!session) {
    // Not authenticated, redirect to /auth
    return <Navigate to="/auth" replace />;
  }

  // Authenticated, render children
  return <>{children}</>;
};

export default ProtectedRoute;
