const currencyAPI = require("../currencyAPI/currencyAPI.js");
const database = require("../database/database.js");
const baseCalc = require("../currencyAPI/baseCalculator.js");
var cron = require("node-cron");

async function initCurrencies() {
  const currenciesText = await currencyAPI.fetchCurr();
  // console.log(currenciesText);
  const allCurrencies = baseCalc.generateBaseRates(JSON.parse(currenciesText));

  loadCurrenciesIntoDb(allCurrencies);
  /*   if (database.collectionHasDocuments === true) {
    console.log(database.collectionHasDocuments);
    loadCurrenciesIntoDb(allCurrencies);
  } else {
    updateAllCurrencies(allCurrencies);
  } */
}

function loadCurrenciesIntoDb(allCurrencies) {
  for (const base in allCurrencies) {
    if (allCurrencies.hasOwnProperty(base)) {
      const baseObject = allCurrencies[base];
      database.create(baseObject);
    }
  }
}

function updateAllCurrencies(allCurrencies) {
  for (const base in allCurrencies) {
    if (allCurrencies.hasOwnProperty(base)) {
      const baseObject = allCurrencies[base];
      const { base } = baseObject;
      database.updateByBase(base, baseObject);
    }
  }
}

//scheduler that loads rates into the DB every 3 hours
cron.schedule("0 */3 * * *", () => {
  initCurrencies();
});

module.exports = { initCurrencies };
