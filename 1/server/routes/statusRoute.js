const express = require('express');
const { addStatus, getStatus, deleteStatus, getUserStatus } = require('../controller/statusController');

const router = express.Router();

router.route("/status/new").post(addStatus);
router.route("/status").get(getStatus);
router.route("/status/:id").delete(deleteStatus);
router.route("/me/status").get(getUserStatus);

module.exports = router;