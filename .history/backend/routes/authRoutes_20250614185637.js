const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getUserInfo,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

router.post{"/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400)
    }
}}

module.exports = router;