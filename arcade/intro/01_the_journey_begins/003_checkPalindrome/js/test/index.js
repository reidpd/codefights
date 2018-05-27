const expect = require('chai').expect;
const checkPalindrome = require('..').checkPalindrome;

describe('checkPalindrome', () => {
  it('WHEN a string that is the same when reversed is supplied, THEN the fn returns true', () => {
    expect(checkPalindrome('abcba')).to.deep.equal(true);
  });

  it('WHEN a string that differs when reversed is supplied, THEN the fn returns false', () => {
    expect(checkPalindrome('abc')).to.deep.equal(false);
  });

});
