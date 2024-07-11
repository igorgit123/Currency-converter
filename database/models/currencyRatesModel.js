const mongoose = require("mongoose");

const CurrencyRateSchema = mongoose.Schema(
  {
    fromCurrency: {
      type: String,
      required: true,
    },

    toCurrency: {
      type: String,
      required: true,
    },

    course: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CurrencyRate = mongoose.model("CurrencyRate", CurrencyRateSchema);

module.exports = CurrencyRate;
