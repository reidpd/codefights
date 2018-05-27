const expect = require('chai').expect;
const differentSymbolsNaive = require('..').differentSymbolsNaive;

describe('differentSymbolsNaive', () => {
  const ins_and_outs = [
    { cxt: 'will return the length of the input array filtered for unique elements', in: 'cabca', out: 3 },
    { cxt: 'will return only one character if multiple iterations are present', in: 'ccccc', out: 1 }
  ];
  ins_and_outs.forEach(test => it(test.cxt, () => expect(differentSymbolsNaive(test.in)).to.deep.equal(test.out)));
});
