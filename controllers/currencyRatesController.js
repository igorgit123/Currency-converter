const CurrencyRate = require("../database/models/currencyRatesModel.js");

const getCurrencyRates = async (req, res) => {
  try {
    const currencyRates = await CurrencyRate.find({});
    res.status(200).json(currencyRates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCurrencyRate = async (req, res) => {
  try {
    const { id } = req.params;
    const currencyRates = await CurrencyRate.findById(id);
    res.status(200).json(currencyRates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCurrencyRate = async (req, res) => {
  try {
    const currencyRate = await CurrencyRate.create(req.body);
    res.status(200).json(currencyRate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCurrencyRate = async (req, res) => {
  try {
    const { id } = req.params;

    const currencyRate = await CurrencyRate.findByIdAndUpdate(id, req.body);

    if (!currencyRate) {
      return res.status(404).json({ message: "Not found" });
    }

    const updatedCurr = await CurrencyRate.findById(id);
    res.status(200).json(updatedCurr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCurrencyRate = async (req, res) => {
  try {
    const { id } = req.params;

    const currencyRate = await CurrencyRate.findByIdAndDelete(id);

    if (!currencyRate) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "Rate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCurrencyRates,
  getCurrencyRate,
  addCurrencyRate,
  updateCurrencyRate,
  deleteCurrencyRate,
};
