const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema ({
    fullName: {type: String, required:true},
    email:{type: String, required:true, uni}
})