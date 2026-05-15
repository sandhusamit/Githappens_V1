import { Resend } from "resend";
import Message from "../models/messageModel.js";


export const createMessage = async (req, res) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { sender, service, message, source } = req.body;

    if (!sender?.firstName || !sender?.lastName || !sender?.email) {
      return res.status(400).json({
        hasError: true,
        message: "Sender information is required.",
      });
    }

    if (!message?.trim()) {
      return res.status(400).json({
        hasError: true,
        message: "Message is required.",
      });
    }

    const savedMessage = await Message.create({
      sender,
      service,
      message,
      source,
    });

    await resend.emails.send({
      from: "GitHappens <noreply@githappens.ca>",
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New GitHappens Message - ${service || "General"}`,
      html: `
        <h2>New GitHappens Portfolio Message</h2>

        <p><strong>Name:</strong> ${sender.firstName} ${sender.lastName}</p>
        <p><strong>Email:</strong> ${sender.email}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Source:</strong> ${source || "GitHappens Portfolio"}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(201).json({
      hasError: false,
      message: "Message sent successfully.",
      data: savedMessage,
    });
  } catch (error) {
    console.error("Create message error:", error);

    return res.status(500).json({
      hasError: true,
      message: "Failed to send message.",
    });
  }
};