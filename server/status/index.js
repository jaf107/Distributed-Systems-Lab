const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorMiddleware = require("./middlewares/error");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Route Imports
const status = require("./routes/statusRoute");

app.use("/api/v1", status);

app.use(errorMiddleware);

module.exports = app;
