// const strongToWeak = require('../strongToWeak.js')
const chai = require('chai');
const assertArrays = require('chai-arrays');
const { expect } = require('chai');
const strong_currency = require('../strong.currency');
chai.use(assertArrays);
const nock = require('nock');
const response = require('./response');

describe('Get User tests', () => {
        beforeEach(() => {
          nock('https://api.exchangerate-api.com/v4/latest/')
            .get('USD')
            .reply(200, response);
        });
});

const expected = ['GBP', 'EUR', 'CHF', 'USD', 'BSD', 'PAB', 'CAD', 'SGD', 'AUD', 'NZD', 'BGN', 'FJD', 'PEN', 'AED', 'SAR', 'ILS', 'PLN', 'MYR',
  'RON', 'BRL', 'TRY', 'DKK', 'HRK', 'CNY', 'GTQ', 'HKD', 'SEK', 'NOK', 'EGP', 'ZAR', 'MXN', 'CZK', 'UAH', 'TWD', 'THB', 'UYU', 'PHP', 'DOP',
  'ARS', 'INR', 'RUB', 'JPY', 'ISK', 'PKR', 'HUF', 'KZT', 'CLP', 'KRW', 'COP', 'PYG', 'IDR'];

const result = strong_currency(response);

describe('strongToWeak', () => {
  before(() => {
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
      expect(result).to.be.containingAllOf(expected);
    });
    it('IDR should be last', () => {
      expect(result[50]).to.be.equal('IDR');
    });
    it('GBP should be first', () => {
      expect(result[0]).to.be.equal('GBP');
    });
  });
});
