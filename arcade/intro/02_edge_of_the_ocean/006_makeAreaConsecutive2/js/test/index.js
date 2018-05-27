const expect = require('chai').expect;
const makeArrayConsecutive2 = require('..').makeArrayConsecutive2;

describe('makeArrayConsecutive2()', () => {
  // [input] array.integer statues
  // Guaranteed constraints:
  // 1 <= statues.length <= 10
  // 0 <= statues[i] <= 20
  describe('calculates the total amount of statues needed to create a consecutive array of them', () => {
    it('simple', () => {
      expect(makeArrayConsecutive2([6,2,3,8])).to.deep.equal(3); // 4,5, & 7 are missing
    });

    it('output type', () => {
      expect(makeArrayConsecutive2([6,2,3,8])).to.be.a('number');
      expect(makeArrayConsecutive2([6,2,3,8])).to.deep.equal(Math.floor((makeArrayConsecutive2([6,2,3,8]))))
    });

  });

});
