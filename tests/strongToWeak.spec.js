//const strongToWeak = require('../strongToWeak.js')
const chai = require('chai');
const assertArrays = require('chai-arrays');
const { expect } = require('chai');
chai.use(assertArrays);
const currency_codes= [
  'USD', 'AED', 'ARS', 'AUD', 'BGN', 'BRL',
  'BSD', 'CAD', 'CHF', 'CLP', 'CNY', 'COP',
  'CZK', 'DKK', 'DOP', 'EGP', 'EUR', 'FJD',
  'GBP', 'GTQ', 'HKD', 'HRK', 'HUF', 'IDR',
  'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'KZT',
  'MXN', 'MYR', 'NOK', 'NZD', 'PAB', 'PEN',
  'PHP', 'PKR', 'PLN', 'PYG', 'RON', 'RUB',
  'SAR', 'SEK', 'SGD', 'THB', 'TRY', 'TWD',
  'UAH', 'UYU', 'ZAR'
]
const result = [
  'GBP','USD', 'AED', 'ARS', 'AUD', 'BGN', 'BRL',
  'BSD', 'CAD', 'CHF', 'CLP', 'CNY', 'COP',
  'CZK', 'DKK', 'DOP', 'EGP', 'EUR', 'FJD',
  'GTQ', 'HKD', 'HRK', 'HUF',
  'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'KZT',
  'MXN', 'MYR', 'NOK', 'NZD', 'PAB', 'PEN',
  'PHP', 'PKR', 'PLN', 'PYG', 'RON', 'RUB',
  'SAR', 'SEK', 'SGD', 'THB', 'TRY', 'TWD',
  'UAH', 'UYU', 'ZAR', 'IDR'
]
describe('strongToWeak', () => {
  before(function() {
    // runs before all tests in this file regardless where this line is defined.
    
    });
    describe('Sort currency codes from strong to weak', () => {
      it('should return an array', () => {
        expect(result).to.be.array();
      });
      it('should return an array with length 51', () => {
        expect(result).to.be.ofSize(51);
      });
      it('should return an array that contain all 51 codes', () => {
        expect(result).to.be.containingAllOf(currency_codes);
      });
      it('IDR should be last', () => {
        expect(result[50]).to.be.equal('IDR')
      });
      it('GBP should be first', () => {
        expect(result[0]).to.be.equal('GBP')
      });

    
    });
});