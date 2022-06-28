const express = require('express');
const app = express();

// Route imports
const status = require('./routes/statusRoute')

app.use("/api/v1",status);

module.exports = app;