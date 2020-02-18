const { expect } = require('chai');
const convert = require('../convert.js')


describe('currency', () => {
    describe('ILS TO USD', () => {
      it('should convert to 100 USD', () => {
        expect(convert('ILS','USD',350)).to.be.equal(100);
      });
    
    });
});