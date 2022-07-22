const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
} = require("../controller/userController");
const multer = require("multer");
const upload = multer();

const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(upload.array(), registerUser);
router.route("/login").post(upload.array(), loginUser);

// router.route("/logout").get(logout);

module.exports = router;
