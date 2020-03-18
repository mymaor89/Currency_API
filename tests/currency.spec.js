const { expect } = require('chai');
const { spy, stub } = require('sinon');
const convert_corrency = require('../convert.currency');
const nock = require('nock');
const response = require('./response');

describe('Get User tests', () => {
        beforeEach(() => {
          nock('https://api.exchangerate-api.com/v4/latest/')
            .get('USD')
            .reply(200, response);
        });
});
describe('Currency Convert', () => {
  describe('ILS TO USD', () => {
    it('should convert to 91.49491980993106 USD', () => {
      expect(convert_corrency('ILS', 'USD', 350, response)).to.be.closeTo(91.49491980993106, 0.001);
    });
  });
  describe('Currency double check - GBP TO IDR', () => {
        it('should convert to should convert to 18203.51140810715', () => {
                expect(convert_corrency('GBP', 'IDR', 1, response)).to.be.closeTo(18203.51140810715, 0.001);
        });
      });
  describe('Amount equal to zero', () => {
    it('should convert to 0 USD', () => {
      expect(convert_corrency('ILS', 'USD', 0, response)).to.be.equal(0);
    });
  });
  describe('Negative Amount', () => {
    it('should throw an error', () => {
        function throws () {
                convert_corrency('ILS', 'USD', -4, response);
               }
       expect(throws).to.throw("ArithmeticException", "Expected a string or Resource object. Got a object instead.");
    });
  });
  describe('from-code and to-code are the same code', () => {
    it('should return the same amount', () => {
      expect(convert_corrency('ILS', 'ILS', 5, response)).to.be.equal(5);
    });
  });
});
