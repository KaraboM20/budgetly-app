const User = require("../models/User");
const Income = require("../models/Income");


// Add Income Source
exports.addIncome = async (req, res) => {
    const userId = registerUser.user.id;
    try {
        const { icon, source, amount, date } = req.body;

        if (!source || !amount || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newIncome = new Income ({
            userId,
            icon,
            source,
            amount,
            date:
        })
    }
}

// Get All Income Source
exports.getAllIncome = async (req, res) => {}

// Delete Income Source
exports.deleteIncome = async (req, res) => {}

// Download Excel
exports.downloadIncomeExcel = async (req, res) => {}