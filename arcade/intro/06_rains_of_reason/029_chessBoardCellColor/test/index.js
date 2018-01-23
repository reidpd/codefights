const expect = require('chai').expect;
const chessBoardCellColor = require('..').chessBoardCellColor;
const createRow = require('..').createRow;

describe('chessBoardCellColor()', () => {
  const inOut = [
    { in: ['A1', 'C3'], out: true },
    { in: ['A1', 'H3'], out: false },
    { in: ['A1', 'B2'], out: true },
    { in: ['B3', 'H8'], out: false },

  ];

  inOut.forEach(test => {
    it('simple test', () => expect(chessBoardCellColor(test.in)).to.deep.equal(test.out));
  })

});

describe('createRow()', () => {
  it('should create the appropriate row', () => {
    createRow(0).forEach((n, idx) => expect(createRow(0)[idx]).to.deep.equal(n));
  });

});
