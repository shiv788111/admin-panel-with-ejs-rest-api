import { Router } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

// GET message page
router.get('/', (req, res) => {
  res.render('pages/mesage', { title: 'Messages' });
});

// POST send message
router.post('/send', async (req, res) => {
  const { name, email, message } = req.body; 

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required");
  }

  try {
    // Nodemailer transporter
 const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lavinia84@ethereal.email',
        pass: 'FuJb4HdkmjYSfmyQxT'
    }
});

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);

    res.send("Message sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending message");
  }
});

export default router;
