
//It is a function. We give it the phone number and the country, and it tries to understand the number and convert it into a Phone Number object.
import { parsePhoneNumberFromString } from "libphonenumber-js";


// npm install express-rate-limit
import rateLimit from "express-rate-limit";

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

const countryMap = {
  "+962": "JO",
  "+966": "SA",
  "+970": "PS",
  "+964": "IQ",
  "+971": "AE",
  "+974": "QA",
  "+965": "KW",
  "+973": "BH",
  "+968": "OM",
  "+212": "MA",
  "+1": "US",
}; 


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

// Limit repeated contact requests
// For each IP, allow a maximum of 5 requests within a 15-minute window.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5, // Maximum 5 requests per IP
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});


// This means the server is waiting for a POST request On address /api/contact 
// (req, res) This function is activated when a request arrives. 
// req → Request → Information coming from React
// res → Response → The response we will return to React
app.post("/api/contact", contactLimiter, async (req, res) => {
  const { fullName, email,countryCode, phone, message } = req.body;

  // Server-side validation
  const trimmedName = fullName?.trim();
  const trimmedEmail = email?.trim();
  const trimmedPhone = phone?.trim();
  const trimmedMessage = message?.trim();
  
  // Full Name
  if (!trimmedName || trimmedName.length < 3 || trimmedName.length > 50) {
    return res.status(400).json({
      success: false,
      message: "Invalid full name",
    });
  }

  // Email - Optional
  if (trimmedEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }
  }

 
// Phone
const country = countryMap[countryCode];

if (!country) {
  return res.status(400).json({
    success: false,
    message: "Invalid country",
  });
}

if (!trimmedPhone) {
  return res.status(400).json({
    success: false,
    message: "Phone number is required",
  });
}

const phoneNumber = parsePhoneNumberFromString(trimmedPhone, country);

if (!phoneNumber || !phoneNumber.isValid()) {
  return res.status(400).json({
    success: false,
    message: "Invalid phone number",
  });
}

  // Message
  if (trimmedMessage && trimmedMessage.length < 5) {
    return res.status(400).json({
      success: false,
      message: "Message must be at least 5 characters",
    });
  }

  if (trimmedMessage && trimmedMessage.length > 1000) {
    return res.status(400).json({
      success: false,
      message: "Message is too long",
    });
  }
 

  try {
    // This means using the transporter we set up above to send an email.
    await transporter.sendMail({
      from: `"22-Soft Website" <${process.env.EMAIL_USER}>`,
      to: "amjadalqattawi07@gmail.com",

      replyTo: trimmedEmail || undefined,

      subject: `New Contact Request - ${trimmedName}`,
      text: `
New Contact Request

Name: ${trimmedName}
${trimmedEmail ? `Email: ${trimmedEmail}` : ""}
Mobile / WhatsApp: ${phoneNumber.number}

Message:
${trimmedMessage || ""}
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
