const expect = require('chai').expect;
const alternatingSums = require('..').alternatingSums;

describe('alternatingSums()', () => {
  it('Given an array of ints, alternatingSums() should divide even and odd indexed vals into separate totals', () => {
    expect(alternatingSums([50,60,60,45,70])).to.deep.equal([180,105]);
  });
  it('if there are only two values in the array, return the array', () => {
    expect(alternatingSums([50,100])).to.deep.equal([50,100]);
  });
  it('if there is only one value, then the second sum equals zero', () => {
    expect(alternatingSums([80])).to.deep.equal([80,0]);
  });


});
