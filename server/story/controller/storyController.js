const Story = require("../model/storyModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const crypto = require("crypto");
const minioClient = require("../config/minio");
const fs = require("fs");

exports.addStory = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.body);
  const uuid = crypto.randomUUID();
  minioClient.fPutObject(
    "minifacebook",
    uuid,
    req.file.path,
    (err, objectInfo) => {
      if (err) {
        return console.log(err);
      }
      // fs.unlinkSync(req.file);
    }
  );

  const newStory = new Story({
    name: req.body.name,
    storyUUID: uuid,
    user_UUID: req.body.user_UUID
  });
  try {
    const savedStory = await newStory.save();
    res.status(201).json({
      success: true,
      savedStory,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

exports.getStory = catchAsyncErrors(async (req, res, next) => {
  // console.log("Req params:", req.params._id);
  console.log(req.body);

  const stories = await Story.find({
    name: { $ne: req.params._id },
  })
    .sort({ createdAt: -1 })
    .limit(10);
  // console.log(stories);
  res.status(200).json({
    success: true,
    stories,
  });
});

exports.getAllStory = catchAsyncErrors(async (req, res, next) => {
  
  const stories = await Story.find({
  })
  res.status(200).json({
    success: true,
    stories,
  });
});