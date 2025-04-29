const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/enquire", async (req, res) => {
  const { fullName, email, phone, type, test, message } = req.body;

  if (!fullName || !email || !phone || !type || !test) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Your Lab" <${process.env.EMAIL}>`,
      to: email,
      subject: "Home Collection Request Received",
      html: `
        <h2>Hello ${fullName},</h2>
        <p>Thank you for your home collection request. Here are your details:</p>
        <ul>
          <li><strong>Full Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Sample Type:</strong> ${type}</li>
          <li><strong>Test Requested:</strong> ${test}</li>
          <li><strong>Message:</strong> ${message || "No message provided"}</li>
        </ul>
        <p>We will contact you within 24 hours to confirm your appointment.</p>
        <br/>
        <p>Regards,<br/>Your Lab Team</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    res.status(201).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});

router.post("/booking", async (req, res) => {
  const { fullName, email, phone, collectionDate } = req.body;

  // Validate input fields
  if (!fullName || !email || !phone || !collectionDate) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled." });
  }

  try {
    // Create transporter using Gmail SMTP configuration
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail email service
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.PASSWORD, // Your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: `"Your Lab" <${process.env.EMAIL}>`,
      to: email, // Recipient email
      subject: "Home Visit Booking Confirmation",
      html: `
        <h2>Hello ${fullName},</h2>
        <p>Thank you for booking a home visit. Here are your booking details:</p>
        <ul>
          <li><strong>Full Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Collection Date:</strong> ${collectionDate}</li>
        </ul>
        <p>We will contact you shortly to confirm the appointment.</p>
        <br/>
        <p>Regards,<br/>Your Lab Team</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);

    // Send a successful response to the client
    return res.status(201).json({ message: "Booking email sent successfully" });
  } catch (error) {
    // Detailed error logging
    console.error("Error occurred while sending email:", error);
    return res.status(500).json({
      message: "Failed to send booking email",
      error: error.message, // Send back error message for debugging
    });
  }
});

router.post("/appointment", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    speciality,
    doctor,
    appointmentDate,
    appointmentTime,
  } = req.body;

  // Validate required fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !dob ||
    !gender ||
    !speciality ||
    !doctor ||
    !appointmentDate ||
    !appointmentTime
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Clinic" <${process.env.EMAIL}>`,
      to: email,
      subject: "Appointment Confirmation",
      html: `
        <h3>Hello ${firstName} ${lastName},</h3>
        <p>Your appointment has been successfully booked with the following details:</p>
        <ul>
          <li><strong>Doctor:</strong> ${doctor}</li>
          <li><strong>Speciality:</strong> ${speciality}</li>
          <li><strong>Date:</strong> ${appointmentDate}</li>
          <li><strong>Time:</strong> ${appointmentTime}</li>
        </ul>
        <p>Thank you for choosing our clinic!</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ message: "Appointment booked and confirmation sent." });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ message: "Error booking appointment.", error: err });
  }
});

router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, gender, age, message } = req.body;

  // Basic validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !gender ||
    !age ||
    !message
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Setup mail transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Compose email
    const mailOptions = {
      from: `"Contact Request" <${process.env.EMAIL}>`,
      to: email,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Contact message sent successfully." });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ message: "Failed to send contact message." });
  }
});

router.post("/book", async (req, res) => {
  const { fullName, email, phone, age, gender, date, time } = req.body;

  // Check if all required fields are present
  if (!fullName || !email || !phone || !age || !gender || !date || !time) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Log the received data to ensure it's correct
  console.log("Booking Data:", req.body);

  try {
    // Create the nodemailer transporter with Gmail configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // your email (from .env)
        pass: process.env.PASSWORD, // your app password (from .env)
      },
    });

    // Admin Notification Email
    const adminMailOptions = {
      from: `"Booking Notification" <${process.env.EMAIL}>`, // sender address
      to: process.env.EMAIL, // receiver address (admin)
      subject: "New Test Booking",
      html: `
        <h3>New Booking Request</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
      `,
    };

    // User Confirmation Email
    const userMailOptions = {
      from: `"Diagnostic Center" <${process.env.EMAIL}>`, // sender address
      to: email, // user email
      subject: "Booking Confirmation",
      html: `
        <p>Dear ${fullName},</p>
        <p>Your test booking has been received. Here are the details:</p>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Gender:</strong> ${gender}</li>
          <li><strong>Age:</strong> ${age}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
        <p>We'll contact you shortly to confirm your appointment.</p>
        <p>Thank you,<br/>Diagnostic Center</p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions); // Email to admin
    await transporter.sendMail(userMailOptions); // Confirmation email to user

    res.status(200).json({ message: "Booking submitted successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send booking email." });
  }
});

router.post("/package", async (req, res) => {
  const { fullName, email, phone, age, gender, date, time } = req.body;

  // Validate form data
  if (!fullName || !email || !phone || !age || !gender || !date || !time) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create a Nodemailer transporter with Gmail (or any email service)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // your email
        pass: process.env.PASSWORD, // your app password (for Gmail)
      },
    });

    // Mail to Admin (for internal notification)
    const adminMailOptions = {
      from: `"Booking Notification" <${process.env.EMAIL}>`,
      to: process.env.EMAIL, // Replace with your admin email
      subject: "New Test Booking",
      html: `
        <h3>New Booking Request</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
      `,
    };

    // Confirmation email to the User
    const userMailOptions = {
      from: `"Diagnostic Center" <${process.env.EMAIL}>`,
      to: email,
      subject: "Booking Confirmation",
      html: `
        <p>Dear ${fullName},</p>
        <p>Your test booking has been received. Here are the details:</p>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Gender:</strong> ${gender}</li>
          <li><strong>Age:</strong> ${age}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
        <p>We will contact you shortly to confirm.</p>
        <p>Thank you,<br/>Diagnostic Center</p>
      `,
    };

    // Send email to the admin and user
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    // Respond with a success message
    res.status(200).json({ message: "Booking submitted successfully." });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ message: "Failed to send booking email." });
  }
});





module.exports = router;