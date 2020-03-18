const getData = require('./currency');

function convertCurrency(source, destination, amount, current_rates) {
  if (amount < 0)
  {
    throw "ArithmeticException";
  }
  const result = amount / current_rates[source];
  return result * current_rates[destination];
}

module.exports = convertCurrency;
