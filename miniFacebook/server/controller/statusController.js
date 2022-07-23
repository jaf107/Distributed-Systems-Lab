const Status = require("../model/statusModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.addStatus = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  const status = await Status.create(req.body);
  res.status(201).json({
    success: true,
    status,
  });
});

exports.getStatus = catchAsyncErrors(async (req, res, next) => {
  let status = await Status.find({ email: { $ne: req.params.email } })
    .sort({ time: -1 })
    .limit(10);
  res.status(200).json({
    success: true,
    status,
  });
});
