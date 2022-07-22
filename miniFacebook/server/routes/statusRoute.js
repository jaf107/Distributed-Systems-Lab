const express = require('express');
const { getStatus, getUserStatus, addStatus, deleteStatus } = require('../controller/statusController');
const { isAuthenticatedUser } = require('../middlewares/auth');


const router = express.Router();

router.route("/status/new").post(addStatus);
router.route("/status").get(getStatus);

module.exports = router;
