const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const axios = require("axios");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const tempToken = req.headers["cookie"].split("=")[1];
  const token = {token: tempToken};
  const authenticated = false;
  axios.post(`http://localhost:5000/api/v1/authenticated`, token)
  .then(response => {
    
    const { isAuthenticated } = response.data;
    // console.log(isAuthenticated);
    if (!isAuthenticated) {
      return next(new ErrorHander("Please Login to access this resource", 401));
    }
  
    next();

  })
  .catch(error => console.log("Please sign in"));

  // console.log(authenticated)
  
});
