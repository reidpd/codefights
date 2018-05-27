const expect = require('chai').expect;
const add = require('../index.js').add;

describe('add(p1, p2)', () => {
  it('should add two numbers together', () => {
    expect(add(1,2)).to.deep.equal(3);
  });
});
