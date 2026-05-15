import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getJournalEntries } from "../services/journalService";

const DevLogContext = createContext(null);

export function DevLogProvider({ children }) {
  const [devLogs, setDevLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDevLogs = async () => {
      try {
        const response = await getJournalEntries();

        setDevLogs(response.logs);
      } catch (err) {
        console.error("Load dev logs error:", err);
        setError("Failed to load dev logs.");
      } finally {
        setLoading(false);
      }
    };

    loadDevLogs();
  }, []);

  const findLog = (slug) => {
    return devLogs.find((log) => log.slug === slug);
  };

  const value = useMemo(
    () => ({
      devLogs,
      loading,
      error,
      findLog,
    }),
    [devLogs, loading, error]
  );

  return (
    <DevLogContext.Provider value={value}>
      {children}
    </DevLogContext.Provider>
  );
}

export function useDevLogs() {
  const context = useContext(DevLogContext);

  if (!context) {
    throw new Error("useDevLogs must be used inside DevLogProvider");
  }

  return context;
}