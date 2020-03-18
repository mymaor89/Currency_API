const readline = require('readline');
const convert_corrency = require('./convert.currency');
const getData = require('./currency');
const strong_currency = require('./strong.currency');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function toto() {
  const current_rates = await getData('USD');

  rl.question('Would you like to do \n1. Convert coin ? \n2. View the sorted updated currency by the strongest ? \n', (answer) => {
    switch (answer) {
      case '1':
        rl.question('From what currency to what currency and what amount you would like to convert?', (fromtoamount) => {
          const [from, to, amount] = fromtoamount.split(' ');
          const result = convert_corrency(from, to, amount, current_rates.rates);
          console.log(`The result of the convertion is ${result} ${to}`);
        });
        break;
      case '2':
        console.log('The sorted currency are:');
        console.log(strong_currency(current_rates.rates));
        break;
      default:
        break;
    }
  });
}
// rl.close();
toto();
