import express from "express";
import {
    createJournalEntry,
    getJournalEntries
}
from "../controllers/journalController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { get } from "mongoose";

const router = express.Router();


/* ========================================================
    JOURNAL ROUTES
======================================================== */

// CREATE JOURNAL ENTRY
// Final route: POST /api/journals
router.post("/", authMiddleware, createJournalEntry);
router.get("/", getJournalEntries);

export default router;