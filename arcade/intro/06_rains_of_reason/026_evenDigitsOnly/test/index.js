const expect = require('chai').expect;
const evenDigitsOnly = require('..').evenDigitsOnly;

describe('evenDigitsOnly()', () => {
  const inOut = [
    { in: 2426280, out: true },
    { in: 2436280, out: false },
    { in: 2426281, out: false },
    { in: 0000000, out: true },
    { in: 1111111, out: false },
  ]
  it('should handle small numbers', () => {
    inOut.forEach(pair => expect(evenDigitsOnly(pair.in)).to.deep.equal(pair.out));
  });
  xit('should handle larger numbers', () => {
    // currently results in a stack trace error, runs out of heap memory; must find efficient way to test extreme numbers.
    const arr = new Array(Math.pow(10,9));
    const num = arr.fill(2,0).join('');
    expect(evenDigitsOnly(parseInt(num))).to.deep.equal(true);
  });

});
