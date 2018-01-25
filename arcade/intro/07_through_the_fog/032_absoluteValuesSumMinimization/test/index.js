const expect = require('chai').expect;
const avsm = require('..').avsm;

describe('absoluteValuesSumMinimization()', () => {
  const ins_and_outs = [
    { cxt: 'simple', in: [2,4,7], out: 4 },
    { cxt: 'simple with repeated 1s', in: [1,1,3,4], out: 1 },
    { cxt: 'simple with only a single num', in: [23], out: 23 },
    {
      cxt: 'big arrays',
      in: [-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6,
            -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7,
            8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
            22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
            36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
      out: 15,
    },
    { cxt: 'simple with only negative nums',
      in: [-4, -1], out: -4,
    },
    { cxt: 'simple with 0,7,9', in: [0,7,9], out: 7 },
    { cxt: 'handle powers of 10 in both directions',
      in: [-1000000, -100000, -10000, -1000, -100, -10, -1,
            0, 1, 10, 100, 1000, 10000, 100000, 1000000],
      out: 0 },
    // { cxt: 'simple', in: [], out:  },
  ]
  ins_and_outs.forEach(test => it(test.cxt, () => expect(avsm(test.in)).to.deep.equal(test.out)));
});
