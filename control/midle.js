const multer = require("multer");

const storage = multer.memoryStorage(); // for storing file in memory as buffer

const upload = multer({ storage: storage });

module.exports = upload;