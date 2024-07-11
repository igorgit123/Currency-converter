const currencyAPI = require("../currencyAPI/currencyAPI.js");
const database = require("../database/database.js");
const baseCalc = require("../currencyAPI/baseCalculator.js");

async function initCurrencies() {
  const currenciesText = await currencyAPI.fetchCurr();
  // console.log(currenciesText);
  const allCurrencies = baseCalc.generateBaseRates(JSON.parse(currenciesText));

  for (const base in allCurrencies) {
    if (allCurrencies.hasOwnProperty(base)) {
      const baseObject = allCurrencies[base];
      database.create(baseObject);
    }
  }
}

module.exports = { initCurrencies };
