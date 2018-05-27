const expect = require('chai').expect;
const adjacentElements = require('..').adjacentElements;

describe('adjacentElements()', () => {
  let input = [3, 6, -2, -5, 7, 3];
  it('finds the greatest product of adjacent elements', () => {
    expect(adjacentElements(input)).to.deep.equal(21);
  });

});
