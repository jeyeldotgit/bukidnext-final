import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const { session, loading, isAuthenticated } = useContext(AuthContext);

  return { session, loading, isAuthenticated };
};
