const expect = require('chai').expect;
const arrayChange = require('..').arrayChange;

describe('arrayChange()', () => {
  it('output should be an integer', () => {
    expect(arrayChange([1,1,1])).to.be.an('number');
    expect(arrayChange([1,1,1])).to.deep.equal(Math.floor(arrayChange([1,1,1])));
  });

  it('should count the number of singular increments necessary to create an array of strictly-ascending integers', () => {
    const inOut = [
      {in: [1,1,1], out: 3},
      {in: [-1000, 0, -2, 0], out: 5},
      {in: [2, 1, 10, 1], out: 12},
      {in: [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15], out: 13}
    ]
    inOut.forEach(pair => expect(arrayChange(pair.in)).to.deep.equal(pair.out));
  });

});
