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
        token: gene
       })
    }
};

// Login User
exports.loginUser = async (req, res) => {};

// Register User
exports.getUserInfo = async (req, res) => {};