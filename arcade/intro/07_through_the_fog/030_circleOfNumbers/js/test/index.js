const expect = require('chai').expect;
const circleOfNumbers = require('..').circleOfNumbers;

describe('circleOfNumbers()', () => {
  const inOut = [
    { in: { a: 10, b: 2 }, out: 7 },
    { in: { a: 10, b: 7 }, out: 2 },
    { in: { a: 4, b: 1 }, out: 3 },
    { in: { a: 6, b: 3 }, out: 0 },
  ];
  inOut.forEach(test => {
    it('simple test', () => expect(circleOfNumbers(test.in.a, test.in.b)).to.deep.equal(test.out));
  })
});
