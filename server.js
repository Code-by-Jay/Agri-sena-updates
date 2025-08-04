
// Load env variables first
require('dotenv').config();

// Required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const path = require('path'); // required for static file
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static frontend files
app.use(express.static(path.join(__dirname,'frontend')));

// ✅ Connect to MongoDB Atlas (from .env)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// 📄 User Schema
const User = require('./models/User');

// 📧 Nodemailer config (uses .env variables)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// 📝 Register endpoint
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('User already exists with that email.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();

    // Optional email sending (disabled unless needed)
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: email,
    //   subject: "Welcome to Agrisena",
    //   text: `Hello ${username}, welcome to Agrisena!`
    // });

    res.status(201).send('✅ User registered successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ Server error during registration');
  }
});

// 🔐 Sign-in endpoint
app.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(404).send('❌ User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('❌ Incorrect password');

    res.status(200).json({ 
      message: `✅ Welcome back, ${username}`,
      username: username
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ Server error during sign-in');
  }
});

// 🚀 Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
