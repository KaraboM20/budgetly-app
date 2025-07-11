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
       if (exist) 
    }
};

// Login User
exports.loginUser = async (req, res) => {};

// Register User
exports.getUserInfo = async (req, res) => {};