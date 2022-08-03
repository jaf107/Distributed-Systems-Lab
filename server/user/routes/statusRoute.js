const express = require('express');
const { getStatus, getUserStatus, addStatus, deleteStatus } = require('../controller/statusController');
const { isAuthenticatedUser } = require('../middlewares/auth');
const multer = require("multer");
const upload = multer();


const router = express.Router();

router.route("/status/new").post(upload.array(), isAuthenticatedUser ,addStatus);
router.route("/status/:_id").get(isAuthenticatedUser,getStatus);

module.exports = router;
