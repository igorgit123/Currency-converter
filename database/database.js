const mongoose = require("mongoose");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@mongo.ikwf3hq.mongodb.net/currency_rates?retryWrites=true&w=majority&appName=mongo`;

const connectDB = async () => {
  await mongoose
    .connect(dbURI)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
