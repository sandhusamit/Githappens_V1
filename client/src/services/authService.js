// src/services/authService.js
import api from "../config/api.js";

export const getMe = async () => {
  const res = await api.get("/me");
  return res.data;
};

export const login = async (loginData) => {
  const res = await api.post("/auth/login", loginData);
  return res.data;
};

export const logout = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};