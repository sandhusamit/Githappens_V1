import User from "../models/userModel.js";

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
   GET ALL USERS
======================================================== */

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -otpSecret");

    return res.status(200).json({
      hasError: false,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      hasError: true,
      message: error.message,
    });
  }
};

/* ========================================================
   GET USER BY ID
======================================================== */

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select(
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

/* ========================================================
   CREATE USER
======================================================== */

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    /* ================= VALIDATION ================= */

    if (!firstName || !lastName || !username || !email || !password) {
      return res.status(400).json({
        hasError: true,
        message:
          "firstName, lastName, username, email, and password are required.",
      });
    }

    /* ================= EXISTING USER ================= */

    const existingUser = await User.findOne({
      $or: [{ email }, { username }, { firstName }],
    });

    if (existingUser) {
      return res.status(409).json({
        hasError: true,
        message: "User already exists.",
      });
    }

    /* ================= CREATE USER ================= */
    /*
      Do NOT hash password here.
      Your userModel already hashes password in pre("save").
    */

    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    return res.status(201).json({
      hasError: false,
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error("Create user error:", error);

    return res.status(500).json({
      hasError: true,
      message: error.message,
    });
  }
};

/* ========================================================
   UPDATE USER
======================================================== */

export const updateUserById = async (req, res) => {
  try {
    const allowedUpdates = [
      "firstName",
      "lastName",
      "username",
      "email",
      "role",
      "is2FAEnabled",
    ];

    const updates = {};

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    }).select("-password -otpSecret");

    if (!updatedUser) {
      return res.status(404).json({
        hasError: true,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      hasError: false,
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      hasError: true,
      message: error.message,
    });
  }
};

/* ========================================================
   DELETE USER
======================================================== */

export const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        hasError: true,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      hasError: false,
      message: "User deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      hasError: true,
      message: error.message,
    });
  }
};

/* ========================================================
   DELETE ALL USERS
======================================================== */

export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany();

    return res.status(200).json({
      hasError: false,
      message: "All users deleted.",
    });
  } catch (error) {
    return res.status(500).json({
      hasError: true,
      message: error.message,
    });
  }
};