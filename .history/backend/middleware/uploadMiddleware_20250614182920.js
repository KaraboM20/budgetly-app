const multer = require('multer');

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
        const allowedTypes = [ 'image/jpeg', 'image/png', 'image/jpg' ];
        if (allowedTypes.includes(file.minetype)) {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    },
});
