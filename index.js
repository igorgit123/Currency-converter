require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("../job_interview/database/database.js");
const currencyRateRoutes = require("../job_interview/routes/currencyRatesRoute.js");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT;

connectDB();
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("Server is running on port 3000");
});

app.use("/currencyRates", currencyRateRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node API Server");
});
