const Story = require("../model/storyModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const minioClient = require("../config/minio");
const crypto = require("crypto");

exports.addStory = catchAsyncErrors(async (req, res, next) => {
  const minioClient = minioClient;
  const uuid = crypto.randomUUID();
  minioClient.fPutObject(
    "minifacebook",
    uuid,
    req.file.path,
    (err, objectInfo) => {
      if (err) {
        return console.log(err);
      }
    }
  );

  const newStory = new Story({
    name: req.body.name,
    storyUUID: uuid,
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
  const stories = await Story.find().sort({"time":-1}).limit(10);

  res.status(200).json({
    success: true,
    stories,
  });
});
