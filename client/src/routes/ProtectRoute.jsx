import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectRoute({ children }) {
  const location = useLocation();

  const {
    user,
    authLoading,
  } = useAuth();

  if (authLoading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return <>{children}</>;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
}