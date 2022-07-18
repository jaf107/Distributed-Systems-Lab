const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const multer = require('multer');
const upload = multer();
app.use(upload.array()); 
const errorMiddleware = require("./middlewares/error");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

app.use(express.json());
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(fileUpload());
app.use(cors({credentials : true, origin : 'http://localhost:3000'}));
app.use(function (req, res, next) {

  // Website you wish to allow to connect 
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
 // res.setHeader('Access-Control-Allow-Headers');
  // res.setHeader('Content-Type', 'application/json');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// Route Imports
const user = require("./routes/userRoute");
const status = require("./routes/statusRoute");

app.use("/api/v1", user);
app.use("/api/v1", status);

app.use(errorMiddleware);

module.exports = app;