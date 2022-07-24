const Status = require("../model/statusModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.addStatus = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.body);
  const status = await Status.create(req.body);
  res.status(201).json({
    success: true,
    status,
  });
});

exports.getStatus = catchAsyncErrors(async (req, res, next) => {
  // console.log("Req params:", req.params._id);
  let statusQuery = Status.find({
    uuid: { $ne: req.params._id },
  })
    .sort({ createdAt: -1 })
    .limit(10);
  statusQuery.exec((err, status) => {
    if (err) console.log(err);
    console.log(status);

    res.status(200).json({
      success: true,
      status,
    });
  });
});
