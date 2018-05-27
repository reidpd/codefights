const expect = require('chai').expect;
const allLongestStrings = require('..').allLongestStrings;

describe('allLongestStrings()', () => {
  const arr = ['a', 'quzy', 'ab', 'abc', 'xy', 'abcd', 'z']
  it('output should be an array', () => {
    expect(allLongestStrings(arr)).to.be.an('array');
  });

  it('output should be an array of strings', () => {
    allLongestStrings(arr).forEach(item => expect(item).to.be.a('string'))
  });

  it('output should only contain strings whose length is equal to the string with the longest length', () => {
    expect(allLongestStrings(arr).length).to.deep.equal(2)
    allLongestStrings(arr).forEach(str => expect(str.length).to.deep.equal(4));
  });

  it('the order of outputted strings must coincide with the order from the input array', () => {
    expect(allLongestStrings(arr).indexOf('quzy')).to.deep.equal(0);
    expect(allLongestStrings(arr).indexOf('abcd')).to.deep.equal(1);
  });

});
