//const CurrencyRate = require("../database/models/currencyRatesModel.js");
const database = require("../database/database.js");

const getCurrencyRates = async (req, res) => {
  try {
    const currencyRates = await database.getAll();

    res.status(200).json(currencyRates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCurrencyRate = async (req, res) => {
  try {
    const { id } = req.params;

    const currencyRate = await database.getById(id);

    res.status(200).json(currencyRate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCurrencyRateByBase = async (req, res) => {
  try {
    const { base } = req.params;

    const currencyRate = await database.getByBase(base);

    res.status(200).json(currencyRate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCurrencyRate = async (req, res) => {
  try {
    const currencyRate = await database.create(req.body);
    res.status(200).json({ message: "Rate has been added." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCurrencyRate = async (req, res) => {
  try {
    const { id } = req.params;

    const currencyRate = database.updateById(id, req.body);

    if (!currencyRate) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(currencyRate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCurrencyRate = async (req, res) => {
  try {
    const { id } = req.params;

    const currencyRate = database.deleteById(id);

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
  getCurrencyRateByBase,
  addCurrencyRate,
  updateCurrencyRate,
  deleteCurrencyRate,
};
