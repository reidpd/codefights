const expect = require('chai').expect;
const minesweeper = require('..').minesweeper;
const calculateSquare = require('..').calculateSquare

describe('minesweeper()', () => {
  const inOut = [
    // given tests
    // given tests
    {
      context: 'simple test',
      in: [
            [true,false,false],
            [false,true,false],
            [false,false,false]
          ],
      out: [
              [1,2,1],
              [2,1,1],
              [1,1,1]
            ]
    },
    {
      context: 'simple test',
      in: [
            [false,false,false],
            [false,false,false]
          ],
      out: [ [0,0,0], [0,0,0] ]
    },
    {
      context: 'simple test',
      in: [
            [true,false,false,true],
            [false,false,true,false],
            [true,true,false,true]
          ],
      out: [
              [0,2,2,1],
              [3,4,3,3],
              [1,2,3,1]
            ]
    }
    // custom tests
    // { context: '', in: [], out:  },
  ]
  const runTest = (input, output, context) => it(context, () => expect(minesweeper(input)).to.deep.equal(output));

  inOut.forEach(pair => runTest(pair.in, pair.out, pair.context))
});

describe('calculateSquare()', () => {
  const inOut = [
    {
      in: {
        matrix: [
          [true, true, true],
          [true, true, true],
          [true, true, true],
        ],
        x: 1,
        y: 1,
      },
      out: 8,
    },
    {
      in: {
        matrix: [
          [true, false, true],
          [false, true, false],
          [true, false, true],
        ],
        x: 1,
        y: 1,
      },
      out: 4,
    },
    {
      in: {
        matrix: [
          [false, true, false],
          [true, true, true],
          [false, true, false],
        ],
        x: 1,
        y: 1,
      },
      out: 4,
    },
    {
      in: {
        matrix: [
          [true, false, false],
          [false, true, false],
          [false, false, false],
        ],
        x: 1,
        y: 1,
      },
      out: 1,
    }

  ]
  it('should give a sum total of all neighboring truthy vals in a matrix', () => {
    inOut.forEach(pair => expect(calculateSquare(pair.in.matrix, pair.in.y, pair.in.x)).to.deep.equal(pair.out))
  });
  it('should not include the value of matrix[y][x]', () => {
    inOut.forEach(pair => expect(calculateSquare(pair.in.matrix, pair.in.y, pair.in.x)).to.not.deep.equal(pair.out+1))
  });

});
