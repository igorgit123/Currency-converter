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
  const currencyRates = await CurrencyRate.aggregate([
    // Sort by base and createdAt in descending order to prepare for grouping
    { $sort: { base: 1, createdAt: -1 } },
    // Group by the base field and get the most recent document in each group
    {
      $group: {
        _id: "$base",
        mostRecent: { $first: "$$ROOT" },
      },
    },
    // Replace the root document with the most recent document
    { $replaceRoot: { newRoot: "$mostRecent" } },
    // Sort the final results by base alphabetically
    { $sort: { base: 1 } },
  ]);

  //.find({});
  return currencyRates;
};

const getById = async (id) => {
  const currencyRate = await CurrencyRate.findById(id);
  return currencyRate;
};

const getByBase = async (baseCurrency) => {
  const condition = `{'base':'${baseCurrency}'}`;
  const currencyByBase = await CurrencyRate.findOne({ base: baseCurrency })
    .sort({ createdAt: -1 })
    .exec();
  return currencyByBase;
};

const create = async (currencyRate) => {
  const newRate = await CurrencyRate.create(currencyRate);
};

const updateById = async (id, currencyRate) => {
  const updatedRate = await CurrencyRate.findByIdAndUpdate(id, currencyRate);
};

const updateByBase = async (base, currencyRate) => {
  const condition = `{ base: '${base}' }`;
  const updatedRate = await CurrencyRate.findOneAndUpdate(
    condition,
    currencyRate
  );
};

const deleteById = async (id) => {
  const deleteRate = await CurrencyRate.findByIdAndDelete(id);
};

const collectionHasDocuments = async () => {
  //check if collection exists
  const collections = await mongoose.connection.db
    .listCollections({ name: collectionName })
    .toArray();
  if (collections.length > 0) {
    console.log(`Collection "${collectionName}" exists.`);

    // Check if collection has documents
    const count = await mongoose.connection.db
      .collection(collectionName)
      .countDocuments();
    if (count > 0) {
      console.log(`Collection "${collectionName}" has ${count} documents.`);
      return true;
    } else {
      console.log(`Collection "${collectionName}" is empty.`);
      return false;
    }
  } else {
    console.log(`Collection "${collectionName}" does not exist.`);
  }
};

module.exports = {
  connectDB,
  getAll,
  getById,
  getByBase,
  create,
  updateById,
  updateByBase,
  deleteById,
  collectionHasDocuments,
};
