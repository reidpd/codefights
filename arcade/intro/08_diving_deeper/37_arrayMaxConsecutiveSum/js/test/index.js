const expect = require('chai').expect;
const arrayMaxConsecutiveSum = require('..').arrayMaxConsecutiveSum;

describe('arrayMaxConsecutiveSum', () => {
  const ins_and_outs = [
    {
      cxt: 'should return the greatest sum of any two consecutive ints',
      in: { arr: [2,3,5,1,6], k: 2 }, out: 8
    }, {
      cxt: 'should return the greatest sum of any two consecutive ints',
      in: { arr: [2,4,10,1], k: 2 }, out: 14
    }, {
      cxt: 'should return the greatest sum of any three consecutive ints',
      in: { arr: [1,3,2,4], k: 3 }, out: 9
    }, {
      cxt: 'should return the greatest sum of any one consecutive ints (aka find the max int of the arr)',
      in: { arr: [3,2,1,1], k: 1 }, out: 3
    },
  ];
  ins_and_outs.forEach(test => it(test.cxt, () => expect(arrayMaxConsecutiveSum(test.in.arr, test.in.k)).to.deep.equal(test.out)));
});
