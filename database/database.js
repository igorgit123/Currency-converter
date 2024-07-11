const mongoose = require("mongoose");
require("dotenv").config();
const CurrencyRate = require("../database/models/currencyRatesModel");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const collectionName = process.env.COLLECRION_NAME;
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@mongo.ikwf3hq.mongodb.net/${collectionName}?retryWrites=true&w=majority&appName=mongo`;

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

const getAll = async () => {
  const currencyRates = await CurrencyRate.find({});
  return currencyRates;
};

const getById = async (id) => {
  const currencyRate = await CurrencyRate.findById(id);
  return currencyRate;
};

const create = async (currencyRate) => {
  const newRate = await CurrencyRate.create(currencyRate);
};

const updateById = async (id, currencyRate) => {
  const updatedRate = await CurrencyRate.findByIdAndUpdate(id, currencyRate);
};

const deleteById = async (id) => {
  const deleteRate = await CurrencyRate.findByIdAndDelete(id);
};

const dbIsEmpty = async () => {
  try {
    const count = await CurrencyRate.countDocuments({});
    if (count === 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error("Error counting documents:", err);
  }
};

module.exports = {
  connectDB,
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  dbIsEmpty,
};
