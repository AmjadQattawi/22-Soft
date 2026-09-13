// We use it to create the backend and API.
import express from "express";

// cors allows the React frontend to communicate with the backend.
import cors from "cors";

// This library is responsible for sending the email.
import nodemailer from "nodemailer";

// this reading a file: .env
import "dotenv/config";

// Create an Express application
const app = express();

//It allows the frontend to send requests to the server.
app.use(cors());

//If you receive JSON inside a request, read it and convert it to a JavaScript object.
app.use(express.json());

//  the transporter  responsible for sending emails.
const transporter = nodemailer.createTransport({
  // This means the message will be sent via Gmail.
  service: "gmail",
  auth: {
    // Hey Nodemailer, use this Gmail account to send messages from it.
    // This is the login data that it takes from .env
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// This means the server is waiting for a POST request On address /api/contact 
// (req, res) This function is activated when a request arrives. 
// req → Request → Information coming from React
// res → Response → The response we will return to React
app.post("/api/contact", async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  try {
    // This means using the transporter we set up above to send an email.
    await transporter.sendMail({
      from: `"22-Soft Website" <${process.env.EMAIL_USER}>`,
      to: "amjadalqattawi07@gmail.com",

      replyTo: email || undefined,

      subject: `New Contact Request - ${fullName}`,
      text: `
New Contact Request

Name: ${fullName}
${email ? `Email: ${email}` : ""}
Mobile / WhatsApp: ${phone}

Message:
${message}
  `,
    });

    // Here, the server is running on React: 200 means:Request successful ✅
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
// This is the response sent to React.500 means:Internal Server Error
// This means the problem occurred on the server while the request was being processed.
    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

// This is what actually runs the server.
app.listen(3000, () => {
  // Start receiving requests on Port 3000.
  console.log("Server running on http://localhost:3000");
});
