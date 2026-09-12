import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // Hey Nodemailer, use this Gmail account to send messages from it.
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { fullName, phone, message } = req.body;

  try {
    await transporter.sendMail({
      from: '"22-Soft Website" <${process.env.EMAIL_USER}>',
      to: "amjadalqattawi07@gmail.com",
      subject: `New Contact Request - ${fullName}`,
      text: `
New Contact Request

Name: ${fullName}
Mobile / WhatsApp: ${phone}

Message:
${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});