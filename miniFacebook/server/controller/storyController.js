const Story = require("../model/storyModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const crypto = require("crypto");
const minioClient = require("../config/minio");

exports.addStory = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
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

  const stories = await Story.find({
    user_UUID: { $ne: req.params._id },
  })
    .sort({ createdAt: -1 })
    .limit(10);
  // console.log(stories);
  res.status(200).json({
    success: true,
    stories,
  });
});
