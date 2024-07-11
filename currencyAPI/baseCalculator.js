function generateBaseRates(exchangeRates) {
  const { rates, date, timestamp } = exchangeRates;
  const currencies = Object.keys(rates);
  const baseRates = {};

  // Add the initial base (EUR) to the baseRates
  baseRates["EUR"] = {
    timestamp,
    base: "EUR",
    date,
    rates,
  };

  // Create new base rates for each currency
  currencies.forEach((baseCurrency) => {
    const newRates = {};
    const baseRate = rates[baseCurrency];

    // Calculate the new rates
    newRates["EUR"] = 1 / baseRate;
    currencies.forEach((currency) => {
      if (currency !== baseCurrency) {
        newRates[currency] = rates[currency] / baseRate;
      }
    });

    // Construct the new base currency object
    baseRates[baseCurrency] = {
      timestamp,
      base: baseCurrency,
      date,
      rates: newRates,
    };
  });

  return baseRates;
}

module.exports = { generateBaseRates };
