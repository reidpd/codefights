const expect = require('chai').expect;
const sortByHeight = require('..').sortByHeight;

describe('sortByHeight()', () => {

  let input = [-1, 150, 190, 170, -1, -1, 160, 180];
  let output = [-1, 150, 160, 170, -1, -1, 180, 190];
  xit('should do what Im testing for', () => {
    expect(sortByHeight(input)).to.deep.equal([150,160,170,180,190]);
  });

  it('output should be an array', () => {
    expect(sortByHeight(input)).to.be.an('array');
  });

  it('output must not alter the indices of any -1 value', () => {
    [0,4,5].forEach(idx => expect(sortByHeight(input)[idx]).to.deep.equal(-1));
  });

  it('simple test', () => {
    expect(sortByHeight(input)).to.deep.equal(output);
  });

});
