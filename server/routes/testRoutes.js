import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.delete("/users/by-email/:email", async (req, res) => {
  try {
    if (process.env.NODE_ENV !== "test") {
      return res.status(403).json({
        hasError: true,
        message: "Test routes are disabled.",
      });
    }

    const { email } = req.params;

    await User.deleteMany({ email });

    return res.status(200).json({
      hasError: false,
      message: "Test user deleted.",
    });
  } catch (error) {
    return res.status(500).json({
      hasError: true,
      message: error.message,
    });
  }
});

export default router;