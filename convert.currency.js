const getData = require('./currency');

async function convertCurrency(source, destination, amount){
        const current_rates = await getData("USD");
        var result = amount / current_rates.rates[source];
        return result * current_rates.rates[destination];
}

module.exports = convertCurrency;