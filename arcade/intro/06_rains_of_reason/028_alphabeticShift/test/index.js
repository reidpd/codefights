const expect = require('chai').expect;
const alphabeticShift = require('..').alphabeticShift;
const rearrange = require('..').rearrange;

describe('alphabeticShift()', () => {
  const inOut = [
    { ctx: 'simple test', in: 'crazy', out: 'dsbaz' },
    { ctx: 'simple test', in: 'z', out: 'a' }
  ];
  inOut.forEach(test => {
    it(test.ctx, () => expect(alphabeticShift(test.in)).to.deep.equal(test.out));
  })
});

describe('rearrange()', () => {
  it('should take a string and sort it accordingly.', () => {
    const input = ['a', 'b', 'c', 'd', 'z'];
    const output = ['z', 'a', 'b', 'c', 'd'];
    let slice = input.slice(0,4);
    output.forEach((char, idx) => expect(rearrange(input, 4)[idx]).to.deep.equal(char));
  });

});
