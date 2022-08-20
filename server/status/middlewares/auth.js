const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const axios = require("axios");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const token = req.headers["cookie"].split("=")[1];
  axios.get(`http://localhost:4000/api/v1/authenticated/${token}`)
  .then(response => {
    const authenticated = response.data.success;
    console.log(response.data.success)
  })
  .catch(error => console.log("Please sign in first"));

  if (!authenticated) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  next();
});
