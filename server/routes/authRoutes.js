import express from "express";
import {
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* ========================================================
   AUTH ROUTES
======================================================== */

// GET CURRENT AUTHENTICATED USER
// Final route: GET /api/auth/me
router.get("/me", authMiddleware, getCurrentUser);

// LOGIN USER
// Final route: POST /api/auth/login
router.post("/login", loginUser);

// LOGOUT USER
// Final route: POST /api/auth/logout
router.post("/logout", logoutUser);

export default router;
