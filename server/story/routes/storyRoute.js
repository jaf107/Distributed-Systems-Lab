const express = require("express");
const {
  addStory,
  getStory,
  getAllStory,
} = require("../controller/storyController");
const app = express();
const router = express.Router();
const multer = require("multer");
const { isAuthenticatedUser } = require("../middlewares/auth");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });


router.route("/story/new").post( upload.single("picture"), isAuthenticatedUser, addStory);
router.route("/story/:_id").get( isAuthenticatedUser,getStory);
// router.route("/story").t(getAllStory);

module.exports = router;
