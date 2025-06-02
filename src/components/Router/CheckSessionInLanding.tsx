import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../General/LoadingScreen";

const CheckSessionInLanding = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, session } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && session) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 1000);
    }
  }, [isAuthenticated, session, navigate]);

  if (loading) {
    return <LoadingScreen message="Naglo-load..." />;
  }

  // Stay within the landing page if the user is not authenticated
  return <>{children}</>;
};

export default CheckSessionInLanding;
