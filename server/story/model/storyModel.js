const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user_UUID: {
    type: String,
    required: true,
  },
  storyUUID: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("Story", storySchema);
