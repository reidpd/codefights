const expect = require('chai').expect;
const addBorder = require('..').addBorder;

describe('addBorder()', () => {
  it('output should be an array of strings', () => {
    expect(addBorder(['abc', 'def'])).to.be.an('array');
    addBorder(['abc', 'def']).forEach(val => expect(val).to.be.a('string'));
  });

  it('simple test', () => {
    expect(addBorder(['abc'])).to.deep.equal(['*****', '*abc*', '*****']);
  });


});
