const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn})  
}