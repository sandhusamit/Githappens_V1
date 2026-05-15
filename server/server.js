import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { app } from "./middleware/express.js";
import { connectDB } from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import journalRoutes from "./routes/journalRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

/* ========================================================
   ENV
======================================================== */

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

/* ========================================================
   FILE PATH HELPERS
======================================================== */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ========================================================
   HEALTH CHECK
======================================================== */

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "GitHappens API is running...",
  });
});

/* ========================================================
   API ROUTES
======================================================== */

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/messages", messageRoutes);

/* ========================================================
   TEST ROUTES
======================================================== */

if (process.env.NODE_ENV === "test") {
  console.log("Registering test routes...");

  app.use("/api/test", testRoutes);
}

/* ========================================================
   STATIC FRONTEND (VITE DIST)
======================================================== */

app.use(express.static(path.join(__dirname, "../client/dist")));

/* ========================================================
   REACT CATCH-ALL
======================================================== */

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

/* ========================================================
   DATABASE
======================================================== */

connectDB();

/* ========================================================
   SERVER
======================================================== */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
});