const expect = require('chai').expect;
const firstDigit = require('..').firstDigit;

describe('firstDigit()', () => {
  const ins_and_outs = [
    { cxt: 'should do the job', in: 'var_1__Int', out: '1' },
    { cxt: 'should do the job', in: 'q2q-q', out: '2' },
    { cxt: 'should do the job', in: '0ss', out: '0' },
  ]
  ins_and_outs.forEach(test => it(test.cxt, () => expect(firstDigit(test.in)).to.deep.equal(test.out)));
});
