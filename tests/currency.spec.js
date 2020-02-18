const { expect } = require('chai');
const convert = require('../convert.js')


describe('currency', () => {
    describe('ILS TO USD', () => {

      it('should convert to 100 USD', () => {
        expect(convert('ILS','USD',350)).to.be.equal(100);
      });
      
    });
    describe('Amount equal to zero', () => {

        it('should convert to 0 USD', () => {
          expect(convert('ILS','USD',0)).to.be.equal(0);
        });
        
      });
    describe('Negative Amount', () => {

        it('should throw an error', () => {
            assert.throws(convert('ILS','USD',-4), Error, "Error thrown");
        });
        
      });
      describe('from-code and to-code are the same code', () => {

        it('should return the same amount', () => {
          expect(convert('ILS','ILS',5)).to.be.equal(5);
        });
        
      });
});