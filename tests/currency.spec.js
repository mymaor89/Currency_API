const { expect } = require('chai');
const { spy, stub } = require('sinon');
const convert_corrency = require('../convert.currency');

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

describe('Currency Convert', () => {
  describe('ILS TO USD', () => {
    it('should convert to 91.49491980993106 USD', () => {
      expect(convert_corrency('ILS', 'USD', 350, currency_rates)).to.be.closeTo(91.49491980993106, 0.001);
    });
  });
  describe('Currency double check - GBP TO IDR', () => {
        it('should convert to should convert to 18203.51140810715', () => {
                expect(convert_corrency('GBP', 'IDR', 1, currency_rates)).to.be.closeTo(18203.51140810715, 0.001);
        });
      });
  describe('Amount equal to zero', () => {
    it('should convert to 0 USD', () => {
      expect(convert_corrency('ILS', 'USD', 0, currency_rates)).to.be.equal(0);
    });
  });
  describe('Negative Amount', () => {
    it('should throw an error', () => {
        function throws () {
                convert_corrency('ILS', 'USD', -4, currency_rates);
               }
       expect(throws).to.throw("ArithmeticException", "Expected a string or Resource object. Got a object instead.");
    });
  });
  describe('from-code and to-code are the same code', () => {
    it('should return the same amount', () => {
      expect(convert_corrency('ILS', 'ILS', 5, currency_rates)).to.be.equal(5);
    });
  });
});
