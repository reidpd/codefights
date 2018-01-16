const expect = require('chai').expect;
const avoidObstacles = require('..').avoidObstacles;

describe('avoidObstacles()', () => {
  const inOut = [
    // given tests
    { context: 'simple test', in: [5, 3, 6, 7, 9], out: 4 },
    { context: 'simple test', in: [2, 3], out: 4 },
    { context: 'simple test', in: [1, 4, 10, 6, 2], out: 7 },
    // custom tests
    // { context: '', in: [], out:  },
  ]
  const runTest = (input, output, context) => it(context, () => expect(avoidObstacles(input)).to.deep.equal(output));

  inOut.forEach(pair => runTest(pair.in, pair.out, pair.context));
});
