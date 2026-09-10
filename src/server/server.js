import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "amjadalqattawi079@gmail.com",
  },
});

app.post("/api/contact", async (req, res) => {
  const { fullName, phone, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: "amjadalqattawi079@gmail.com",
      to: "amjadalqattawi079@gmail.com",
      subject: "New Contact Form Message",
      text: `
Name: ${fullName}
Phone: ${phone}

Message:
${message}
      `,
    });

    console.log("Accepted:", info.accepted);
    console.log("Rejected:", info.rejected);
    console.log("Message ID:", info.messageId);
    console.log("Server response:", info.response);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});