const expect = require('chai').expect;
const isLucky = require('..').isLucky;

describe('isLucky()', () => {
  it('output should be a boolean', () => {
    expect(isLucky(1010)).to.be.a('boolean');
  });

  describe('WHEN an even number of digits is given within the number argument, ', () => {
    it('AND each half of the number has an equal sum, THEN return true', () => {
      expect(isLucky(1010)).to.deep.equal(true);
      expect(isLucky(123321)).to.deep.equal(true);
      expect(isLucky(1982376446378219)).to.deep.equal(true);
    });

    it('AND each half of the number does not have an equal sum, THEN return false', () => {
      expect(isLucky(123456)).to.deep.equal(false);
      expect(isLucky(123323)).to.deep.equal(false);
    });
  });

});
