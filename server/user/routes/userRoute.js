const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  checkAuthentication,
} = require("../controller/userController");
const multer = require("multer");
const upload = multer();

const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(upload.array(), registerUser);
router.route("/login").post(upload.array(), loginUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/authenticated").post(checkAuthentication);

router.route("/logout").get(logout);

module.exports = router;
