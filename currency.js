const fetch = require('node-fetch');

const url = 'https://api.exchangerate-api.com/v4/latest/';
const getData = async (code) => {
  try {
    const response = await fetch(url + code);
    // let result = await response.json();
    const result = await response.json();
    // console.log(Object.keys(rates).length)
    return result;
  } catch (error) {
    console.log(error);
  }
};
getData('USD');

module.exports = getData;
