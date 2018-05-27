const expect = require('chai').expect;
const matrixElementsSum = require('..').matrixElementsSum;

describe('matrixElementsSum()', () => {
  describe('WHEN a [][] matrix is given as input,', () => {
    let matrix = [
      [0,1,1,2],
      [0,5,0,0],
      [2,0,3,3]
    ];
    it('THEN the total price for suitable rooms is calculated', () => {
      expect(matrixElementsSum(matrix)).to.deep.equal(9)
    });
    it('AND the price does not include any rooms that are 0, and disregards all rooms on all floors beneath a 0', () => {
      expect(matrixElementsSum(matrix)).to.not.equal(17)
      expect(matrixElementsSum(matrix)).to.not.equal(14)
      expect(matrixElementsSum(matrix)).to.not.equal(11)
    });


  });

});
