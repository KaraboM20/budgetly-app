const multer = require('multer');

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, c)
})
