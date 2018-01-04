const expect = require('chai').expect;
const almostIncreasingSequence = require('..').almostIncreasingSequence;

describe('almostIncreasingSequence()', () => {
  it('WHEN the function is executed, the output should be a boolean', () => {
    expect(almostIncreasingSequence([1,2,3])).to.be.a('boolean');
  });


  it('WHEN the sequence is already strictly increasing, THEN the function returns true', () => {
    expect(almostIncreasingSequence([1,2,3,4,5])).to.deep.equal(true);
  });

  it('WHEN the sequence contains only one character that defies protocol, THEN the function returns true', () => {
    expect(almostIncreasingSequence([1,2,3,2,4,5])).to.deep.equal(true);
    expect(almostIncreasingSequence([1,1,2,3,4,5])).to.deep.equal(true);
    expect(almostIncreasingSequence([1,2,3,5,4])).to.deep.equal(true);
  });

  it('WHEN more than one num defies protocol, THEN the function returns false', () => {
    expect(almostIncreasingSequence([1,3,2,1])).to.deep.equal(false);
  });



});
