const expect = require('chai').expect;
const centuryFromYear = require('..').centuryFromYear;

describe('centuryFromYear', () => {
  it('WHEN input is XX00, THEN return XX', () => {
    expect(centuryFromYear(1900)).to.deep.equal(19);
  });

  it('WHEN input is XY01 to XY99, THEN return XY + 1', () => {
    expect(centuryFromYear(1701)).to.deep.equal(18);
  });
});
