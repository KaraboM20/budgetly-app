const User = require('../models/User')
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: "1h"});  
};

// Register User
exports.registerUser = async (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    if  (!fullName || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }

    try {
       const existingUser = await User.findOne({ email });
       if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
       }

       const user = await User.create ({
        fullName,
        email,
        password,
        profileImageUrl,
       });

       res.status(201).json({
        id: user._id,
        user,
        token: generateToken(user._id),
       });
    } catch (err) {
        res
        .status(500)
        .json({ message: "Error registering user", error: err.message });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required"});
    }
    try
};

// Get User Info
exports.getUserInfo = async (req, res) => {};