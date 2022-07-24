const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require('cookie-parser')
const errorMiddleware = require("./middlewares/error");
// const multer = require("multer");
// const upload = multer();

// app.use(upload.array());

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Headers", "Content-type");

  // res.setHeader('Content-Type', 'application/json');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Route Imports
const user = require("./routes/userRoute");
const status = require("./routes/statusRoute");
const story = require("./routes/storyRoute");

app.use("/api/v1", user);
app.use("/api/v1", status);
app.use("/api/v1", story);

app.use(express.static(path.join(__dirname, "../clientv2/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../clientv2/public/index.html"));
});

app.use(errorMiddleware);

module.exports = app;
