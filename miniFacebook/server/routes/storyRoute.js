const express = require('express');
const { addStory, getStory, deleteStory } = require('../controller/storyController');


const router = express.Router();

router.route("/story/new").post(addStory);
router.route("/story").get(getStory);
router.route("/story/:id").delete(deleteStory);
// router.route("/me/status").get(isAuthenticatedUser,getUse);

module.exports = router;
