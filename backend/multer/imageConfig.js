const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    console.log(file);
    callback(null, `image-${Date.now()}.${file.originalname}`);
    // callback(null, Date.now() + path.extname(file.originalname));
  },
});

const filefilter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    callback(new Error("Not valid"));
  }
};
const upload = multer({
  storage: storage,
  fileFilter: filefilter,
});

module.exports = upload;
