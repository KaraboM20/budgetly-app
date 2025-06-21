const xlsx = required('xlsx');
const Expense = require("../models/Expense");


// Add Expense Source
exports.addExpense = async (req, res) => {
    const userId = registerUser.user.id;
    try {
        const { icon, category, amount, date } = req.body;

        if (!category || !amount || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newExpense = new Expense ({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });

        await newExpense.save();
        res.status(200).json(newExpense);
    } catch (error) {
        res.status(500).json({ message: "Server Error"});
    }
}

// Get All Expense Source
exports.getAllExpense = async (req, res) => {
    const userId = req.res.id;

    try {
        const expense = await Expense.find({ userId }).sort({ date: -1});
        res.json(expense);
    } catch (error) {
        res.status(500),json({ message: "Server Error"});
    }
};

// Delete Expense Source
exports.deleteIncome = async (req, res) => {

    try {
        await Income.findByIdAndDelete(req.params.id);
        res.json({ message: "Income deleted successfully"});
    } catch (error) {
        res.status(500).json ({ message: "Server Error"});
    }
}

// Download Excel
exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user.id;

    try {
        const income = await Income.find({ userId }).sort({ date:-1 });

        const data = income.map((item) => ({
            Source: item.source,
            Amount: item.amount,
            Date: item.data,
        }));

        const wb = xlsx.utils.book_new();
        const w5 = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, WSH, "Income");
        xlsx.writeFile(wb, 'income_details.xlsx');
        res.download('income_details.xlsx');
    } catch (error) {
        res.status(500).json({ message: "Server Error"});
    }
}