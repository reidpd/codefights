const expect = require('chai').expect;
const reverseParentheses = require('..').reverseParentheses;

describe('reverseParentheses()', () => {
  it('should do what Im testing for', () => {
    expect(reverseParentheses('a(bc)de')).to.deep.equal('acbde');
  });

});
