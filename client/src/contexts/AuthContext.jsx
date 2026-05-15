// Libraries
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
  

// Services
import { getMe, login, logout } from "../services/authService";
import { createJournalEntry } from "../services/journalService";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      if (!user) {
        setAuthLoading(true);
        console.log("Not authenticated, no user data");
        return;
      }

      const data = await getMe();

      if (data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log("Error checking authentication:", error);
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = async (formData) => {
    try {
      const data = await login(formData);
      setUser(data.user);
      navigate("/");
    } catch (error) {
      console.log("Error logging in:", error);
      setUser(null);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Error logging out:", error);
    } finally {
      setUser(null);
      navigate("/");
    }
    [navigate]
  };

  const handleCreateJournalEntry = (payload) => {
    try {
      const newEntry = createJournalEntry(payload);
      console.log("Journal entry created:", newEntry);
    } catch (error) {
      console.error("Error creating journal entry:", error);
    }
  };



  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authLoading,
        checkAuth,
        handleLogin,
        handleLogout,

        handleCreateJournalEntry,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);