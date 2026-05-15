import api from "../config/api";


/* ========================================================
   CREATE JOURNAL ENTRY
======================================================== */
export const createJournalEntry = async (entryData) => {
  const res = await api.post("/journals", entryData);
    return res.data;
};

/* ========================================================
    GET ALL JOURNAL ENTRIES
======================================================== */
export const getJournalEntries = async () => {
  try {
    const res = await api.get("/journals");

    return {
      hasError: false,
      logs: res.data.data,
    };
  } catch (error) {
    console.error("Get journal entries error:", error);

    return {
      hasError: true,
      message: "Failed to load journal entries.",
      logs: [],
    };
  }
};





