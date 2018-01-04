const expect = require('chai').expect;
const commonCharacterCount = require('..').commonCharacterCount;

describe('commonCharacterCount()', () => {
  it('output should be an integer', () => {
    expect(commonCharacterCount('abc', 'abc')).to.deep.equal(3);
  });

  it('output should include duplicate letters', () => {
    expect(commonCharacterCount('aabc', 'aadc')).to.deep.equal(3);
    expect(commonCharacterCount('abca', 'acda')).to.deep.equal(3);
  });

});
