import api from "../config/api.js";

export const newMessage = async (messageData) => {
  try {
    const res = await api.post("/messages", messageData);

    return {
      hasError: false,
      message: "Message sent successfully.",
      data: res.data.data,
    };
  } catch (error) {
    console.error("Send message error:", error);

    return {
      hasError: true,
      message: error.response?.data?.message || "Failed to send message.",
    };
  }
};