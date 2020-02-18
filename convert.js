const currency = require('./currency')

const convert = function (from,to,amount){
    //mock
    const rate = 3.5;
    let result = amount / rate
    return result;
}
module.exports = convert;