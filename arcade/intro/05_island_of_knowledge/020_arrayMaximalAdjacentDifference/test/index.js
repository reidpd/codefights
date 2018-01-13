const expect = require('chai').expect;
const arrMaxAdjDiff = require('..').arrMaxAdjDiff;

describe('arrMaxAdjDiff()', () => {
  xit('should return an integer', () => {});

  it('should return the maximum difference between any neighboring integers of an array', () => {
    const inOut = [
      { in: [2,4,1,0], out: 3 },
      { in: [1,1,1,1], out: 0 },
      { in: [-1,4,10,3,-2], out: 7 },
    ];
    inOut.forEach(pair => expect(arrMaxAdjDiff(pair.in)).to.deep.equal(pair.out));
  });

});
