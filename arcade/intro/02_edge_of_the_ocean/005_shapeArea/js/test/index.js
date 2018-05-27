const expect = require('chai').expect;
const shapeArea = require('..').shapeArea;

describe('shapeArea()', () => {
  it('WHEN x is given as an argument, the correct number of blocks will be calculated.', () => {
    let inputsAndOutputs = [
      {arg: 1, answer: 1},
      {arg: 2, answer: 5},
      {arg: 3, answer: 13},
      {arg: 5, answer: 41},
    ]
    inputsAndOutputs.forEach(pair => expect(shapeArea(pair.arg)).to.deep.equal(pair.answer));
  });

});
