const currency = require('../currency')


async function printResults(){
    let result = await currency('ILS')
    console.log(result)    
}
printResults()