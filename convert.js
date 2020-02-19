const currency = require('./currency');

const convert = function (from, to, amount) {
  const rate = currency(from, to);
  const result = amount / rate;
  return result;
};
module.exports = convert;
