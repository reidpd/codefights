const expect = require('chai').expect;
const reverseParentheses = require('..').reverseParentheses;

describe('reverseParentheses()', () => {
  it('should reverse a single set of chars within a bracket sequence once', () => {
    expect(reverseParentheses('a(bc)de')).to.deep.equal('acbde');
  });

  it('should reverse nested bracket seqs appropriately', () => {
    expect(reverseParentheses('a()'))
  });


});
