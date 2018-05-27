const expect = require('chai').expect;
const depositProfit = require('..').depositProfit;
const howMuchSoFar = require('..').howMuchSoFar;

describe('howMuchSoFar()', () => {
  const inOut = [
    { cxt: 'should return a number', in: [1,1,1], out: 1 },
    { cxt: 'should handle simple chains', in: [2,2,2], out: 8 },
    { cxt: 'should handle the demands of depositProfit', in: [100, 1.2, 1.2], out: 144 },
    { cxt: 'should handle the demands of depositProfit', in: [50, 1.5, 1.5, 1.5, 1.5], out: 253.125 },
  ]
  inOut.forEach(test => it(test.cxt, () => expect(howMuchSoFar(test.in)).to.deep.equal(test.out)) );
});

describe('depositProfit()', () => {
  const inOut = [
    {
      cxt: 'should return the number of years it would take to hit the threshold',
      in: { deposit: 100/* dollars */, rate: 20 /* percent */, threshold: 170 /* dollars */ },
      out: 3 /* years */
    },
    {
      cxt: 'should handle small rates & thresholds',
      in: { deposit: 100, rate: 1, threshold:  101}, out: 1
    },
    {
      cxt: 'should handle small deposits',
      in: { deposit: 1, rate: 100, threshold: 64 }, out: 6
    },
  ];

  inOut.forEach(test => it(test.cxt, () =>  expect(depositProfit(test.in.deposit, test.in.rate, test.in.threshold)).to.deep.equal(test.out) ) );
});
