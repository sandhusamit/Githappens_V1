import express from "express";

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  deleteAllUsers,
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* ========================================================
   USER ROUTES
======================================================== */

// GET ALL USERS
// Final route: GET /api/users
router.get("/", authMiddleware, getAllUsers);

// GET USER BY ID
// Final route: GET /api/users/:id
router.get("/:id", authMiddleware, getUserById);

// CREATE USER
// Final route: POST /api/users
router.post("/", createUser);

// UPDATE USER
// Final route: PUT /api/users/:id
router.put("/:id", authMiddleware, updateUserById);

// DELETE USER
// Final route: DELETE /api/users/:id
router.delete("/:id", authMiddleware, deleteUserById);

// DELETE ALL USERS
// Final route: DELETE /api/users
router.delete("/", authMiddleware, deleteAllUsers);

export default router;
