const expect = require('chai').expect;
const extractEachKth = require('..').extractEachKth;

describe('extractEachKth', () => {
  const ins_and_outs = [
    { in: { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k: 3 }, out: [1, 2, 4, 5, 7, 8, 10] },
    { in: { arr: [1, 1, 1, 1, 1], k: 1 }, out: [] },
    { in: { arr: [1, 2, 1, 2, 1, 2, 1, 2], k: 2 }, out: [1,1,1,1] },
  ]
  ins_and_outs.forEach(pair => it('should do the job', () => expect(extractEachKth(pair.in.arr, pair.in.k)).to.deep.equal(pair.out)));
});
