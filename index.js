require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@mongo.ikwf3hq.mongodb.net/currency_rates?retryWrites=true&w=majority&appName=mongo`;
const port = process.env.PORT;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port 3000");
    });
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello from node API Server");
});
