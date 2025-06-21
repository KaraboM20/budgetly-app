const { default: mongoose } = require("mongoose");
const monggose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    icon: { type: String },
    source: { type: String, required: true },
    amount: { type: Number, reguired: true}
})