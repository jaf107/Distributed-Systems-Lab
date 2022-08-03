const express = require('express');
const { getStatus, getUserStatus, addStatus, deleteStatus, getAllStatus } = require('../controller/statusController');
// const { isAuthenticatedUser } = require('../middlewares/auth');
const multer = require("multer");
const upload = multer();


const router = express.Router();

// router.route("/status/new").post(upload.array(), isAuthenticatedUser ,addStatus);
// router.route("/status/:_id").get(isAuthenticatedUser,getStatus);

router.route("/status/new").post(upload.array(),addStatus);
router.route("/status/:_id").get(getStatus);
router.route("/status").get(getAllStatus);


module.exports = router;
