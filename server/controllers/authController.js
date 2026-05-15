import User from "../models/userModel.js";
import { generateToken } from "../utils/jwt.js";

/* ========================================================
   SAFE USER HELPER
======================================================== */

const sanitizeUser = (user) => {
  const safeUser = user.toObject();
  delete safeUser.password;
  delete safeUser.otpSecret;
  return safeUser;
};

/* ========================================================
   LOGIN USER
======================================================== */

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    /* ================= VALIDATION ================= */

    if (!email || !password) {
      return res.status(400).json({
        hasError: true,
        message: "Email and password are required.",
      });
    }

    /* ================= FIND USER ================= */

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        hasError: true,
        message: "Invalid credentials.",
      });
    }

    /* ================= PASSWORD CHECK ================= */

    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch) {
      return res.status(401).json({
        hasError: true,
        message: "Invalid credentials.",
      });
    }

    /* ================= TOKEN ================= */

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(200).json({
      hasError: false,
      message: "Login successful.",
      user: sanitizeUser(user),
    });
  } catch (error) {
    return res.status(500).json({
      hasError: true,
      message: error.message,
    });
  }
};

/* ========================================================
   LOGOUT USER
======================================================== */

export const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(0),
    });

    return res.status(200).json({
      hasError: false,
      message: "Logout successful.",
    });
  } catch (error) {
    return res.status(500).json({
      hasError: true,
      message: error.message,
    });
  }
};

/* ========================================================
   GET CURRENT USER
======================================================== */

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -otpSecret"
    );

    if (!user) {
      return res.status(404).json({
        hasError: true,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      hasError: false,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      hasError: true,
      message: error.message,
    });
  }
};