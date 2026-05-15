import devLogJournal from "../models/devLogModel.js";

/* ========================================================
   CREATE JOURNAL ENTRY
======================================================== */

export const createJournalEntry = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("REQ USER:", req.user);

    const journalEntry = await devLogJournal.create({
      ...req.body,
      user: req.user.id || req.user._id,
    });

    return res.status(201).json({
      success: true,
      data: journalEntry,
    });
  } catch (error) {
    console.error("Create journal error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ========================================================
    GET ALL JOURNAL ENTRIES
======================================================== */
export const getJournalEntries = async (req, res) => {
  try {
    const entries = await devLogJournal.find();
    return res.status(200).json({
      success: true,
      data: entries,
    });
  } catch (error) {
    console.error("Get journal entries error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
