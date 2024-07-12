const mongoose = require("mongoose");

const rateSchema = mongoose.Schema({
  currency: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

const CurrencyRateSchema = mongoose.Schema(
  {
    base: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    rates: {
      type: Map,
      of: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CurrencyRate = mongoose.model("CurrencyRate", CurrencyRateSchema);

module.exports = CurrencyRate;
