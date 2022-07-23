const express = require("express");
const {
  addStory,
  getStory,
  uploadStory,
} = require("../controller/storyController");

const router = express.Router();
const multer = require("multer");


var multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
  /* filename: function (req, file, cb) {
    cb(null, file.originalname);
    const ext = file.mimetype.split("/")[1];
    cb(null, `file-${file.filename}-${Date.now()}-${ext}`);
  }, */
});



const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Not an image" }, false);
  }
};
var upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const app = express();
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

router.route("/story/new").post(upload.single("photo"), addStory);
router.route("/story").get(getStory);

module.exports = router;
