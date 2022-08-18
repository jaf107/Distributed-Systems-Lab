const express = require("express");
const {
  addStory,
  getStory,
  uploadStory,
} = require("../controller/storyController");
const app = express();
const router = express.Router();
const multer = require("multer");
// const { isAuthenticatedUser } = require('../middlewares/auth');

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

router
  .route("/story/new")
  .post(/* isAuthenticatedUser, */ upload.single("picture"), addStory);
router.route("/story/:_id").get(/* isAuthenticatedUser, */ getStory);

module.exports = router;
