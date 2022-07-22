const express = require("express");
const { addStory, getStory } = require("../controller/storyController");

const router = express.Router();

const multer = require("multer");
const app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

router.route("/story/new").post(upload.single("files"), addStory);
router.route("/story").get(getStory);

module.exports = router;
