import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    sender: {
      firstName: String,
      lastName: String,
      email: String,
    },

    service: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      default: "GitHappens Portfolio",
    },

    status: {
      type: String,
      enum: ["new", "read", "archived"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);