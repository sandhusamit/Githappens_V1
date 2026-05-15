// import axios from "axios";
import api from "../config/api";


/* ========================================================
   REGISTER USER
======================================================== */

// export const registerUser = async (userData) => {
//   try {
//     const res = await api.post("/users", userData);

//     return {
//       hasError: false,
//       user: res.data.user,
//     };
//   } catch (error) {
//     if (error.response?.status === 409) {
//       return { status: 409 };
//     }

//     return {
//       hasError: true,
//       message: "A problem occurred during registration.",
//     };
//   }
// };

export const registerUser = async (userData) => {
  const res = await api.post("/users", userData);

  return res.data;
};

/* ========================================================
   GET USER BY ID
======================================================== */

// export const getUserDataById = async (userId) => {
//   try {
//     const res = await api.get(`/users/${userId}`);

//     return {
//       hasError: false,
//       user: res.data,
//     };
//   } catch (error) {
//     return {
//       hasError: true,
//       message: "Failed to fetch user data.",
//     };
//   }
// };

export const getUserDataById = async (userId) => {
  const res = await api.get(`/users/${userId}`);

  return res.data;
};

/* ========================================================
   CHECK EMAIL EXISTS
======================================================== */

export const emailExists = async (email) => {
  try {
    const res = await api.post("/auth/check-email", { email });

    return {
      hasError: false,
      exists: res.data.exists,
    };
  } catch (error) {
    return {
      hasError: true,
    };
  }
};

/* ========================================================
   GET USER BY USERNAME
======================================================== */

export const getUserByUsername = async (username) => {
  try {
    const res = await api.post("/users/username", { username });

    return {
      hasError: false,
      user: res.data.user,
    };
  } catch (error) {
    return {
      hasError: true,
      message: error.response?.data?.message || "Request failed",
    };
  }
};
