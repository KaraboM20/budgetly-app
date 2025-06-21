const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, resizeBy, next) => {
    let token = req.headers.authorization?.split()
}