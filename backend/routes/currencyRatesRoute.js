const express = require("express");
//const CurrencyRate = require("../models/currencyRatesModel.js");
const router = express.Router();

const {
  getCurrencyRates,
  getCurrencyRate,
  getCurrencyRateByBase,
  addCurrencyRate,
  updateCurrencyRate,
  deleteCurrencyRate,
} = require("../controllers/currencyRatesController.js");

router.get("/", getCurrencyRates);

router.get("/:id", getCurrencyRate);

router.get("/base/:base", getCurrencyRateByBase);

router.post("/", addCurrencyRate);

router.put("/:id", updateCurrencyRate);

router.delete("/:id", deleteCurrencyRate);

module.exports = router;
