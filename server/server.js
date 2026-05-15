import dotenv from "dotenv";
import { app } from "./middleware/express.js";
import { connectDB } from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import journalRoutes from "./routes/journalRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

/* ================= HEALTH CHECK ================= */

app.get("/", (req, res) => {
  res.status(200).send("Githappens API is running...");
});

/* ================= ROUTES ================= */
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/messages", messageRoutes);


/* ================= TEST-ONLY ROUTES ================= */

if (process.env.NODE_ENV === "test") {
  console.log("Registering test routes...");
  app.use("/api/test", testRoutes);
}

/* ================= SERVER START ================= */

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`MONGO_URI: ${process.env.MONGO_URI}`);
});

export { app };