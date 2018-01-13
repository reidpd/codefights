const expect = require('chai').expect;
const rearrangePalindrome = require('..').rearrangePalindrome;

describe('rearrangePalindrome()', () => {
  it('output should be a boolean', () => {
    inOut = [
      { in: 'aabb', out: true },
      { in: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc', out: false },
      { in: 'abbcabb', out: true },
      { in: 'zyyzzzzz', out: true },
      { in: 'z', out: true },
      { in: 'zaa', out: true },
      { in: 'abca', out: false }
    ];
    inOut.forEach(pair => expect(rearrangePalindrome(pair.in)).to.be.a('boolean'));
  });


  it('should return a boolean indicating whether the input string can be rearranged to form a palindrome', () => {
    inOut = [
      { in: 'aabb', out: true },
      { in: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc', out: false },
      { in: 'abbcabb', out: true },
      { in: 'zyyzzzzz', out: true },
      { in: 'z', out: true },
      { in: 'zaa', out: true },
      { in: 'abca', out: false }
    ];
    inOut.forEach(pair => expect(rearrangePalindrome(pair.in)).to.deep.equal(pair.out));
  });

  it('should return true if the input string is itself a palindrome', () => {
    inOut = [
      { in: 'z', out: true },
      { in: 'aza', out: true },
      { in: 'acbca', out: true }
    ];
    inOut.forEach(pair => expect(rearrangePalindrome(pair.in)).to.deep.equal(pair.out));
  });

  it('should return true if the string is only one character long', () => {
    expect(rearrangePalindrome('z')).to.deep.equal(true);
  });


});
