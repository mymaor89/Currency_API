// const strongToWeak = require('../strongToWeak.js')
const chai = require('chai');
const assertArrays = require('chai-arrays');
const { expect } = require('chai');
const strong_currency = require('../strong.currency');

chai.use(assertArrays);
const currency_rates = {
  USD: 1,
  AED: 3.672006,
  ARS: 63.047443,
  AUD: 1.660242,
  BGN: 1.774951,
  BRL: 5.014848,
  BSD: 1,
  CAD: 1.412614,
  CHF: 0.957473,
  CLP: 851.962797,
  CNY: 7.015179,
  COP: 4050.047619,
  CZK: 24.538348,
  DKK: 6.762248,
  DOP: 54.10369,
  EGP: 15.709457,
  EUR: 0.905597,
  FJD: 2.285703,
  GBP: 0.824852,
  GTQ: 7.647096,
  HKD: 7.764289,
  HRK: 6.880301,
  HUF: 313.223695,
  IDR: 15015.202792,
  ILS: 3.825349,
  INR: 74.225478,
  ISK: 139.145302,
  JPY: 106.875337,
  KRW: 1240.845912,
  KZT: 433.933673,
  MXN: 22.871737,
  MYR: 4.340649,
  NOK: 10.426879,
  NZD: 1.672885,
  PAB: 1,
  PEN: 3.552616,
  PHP: 51.69261,
  PKR: 158.677239,
  PLN: 4.040313,
  PYG: 6542.384615,
  RON: 4.380567,
  RUB: 74.824728,
  SAR: 3.751608,
  SEK: 9.904783,
  SGD: 1.426519,
  THB: 32.235296,
  TRY: 6.450019,
  TWD: 30.209323,
  UAH: 26.839842,
  UYU: 44.506018,
  ZAR: 16.606705,
};

const expected = ['GBP', 'EUR', 'CHF', 'USD', 'BSD', 'PAB', 'CAD', 'SGD', 'AUD', 'NZD', 'BGN', 'FJD', 'PEN', 'AED', 'SAR', 'ILS', 'PLN', 'MYR',
  'RON', 'BRL', 'TRY', 'DKK', 'HRK', 'CNY', 'GTQ', 'HKD', 'SEK', 'NOK', 'EGP', 'ZAR', 'MXN', 'CZK', 'UAH', 'TWD', 'THB', 'UYU', 'PHP', 'DOP',
  'ARS', 'INR', 'RUB', 'JPY', 'ISK', 'PKR', 'HUF', 'KZT', 'CLP', 'KRW', 'COP', 'PYG', 'IDR'];

const result = strong_currency(currency_rates);

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
