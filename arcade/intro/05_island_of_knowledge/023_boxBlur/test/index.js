const expect = require('chai').expect;
const boxBlur = require('..').boxBlur;

describe('boxBlur()', () => {
  const inOut = [
    // given tests
    {
      context: 'simple test',
      in: [
            [1,1,1],
            [1,7,1],
            [1,1,1]
          ],
      out: [ [1] ]
    },
    {
      context: 'simple test',
      in: [
             [0,18,9],
             [27,9,0],
             [81,63,45]
           ],
      out: [ [28] ]
    },
    {
      context: 'simple test',
      in: [  [36,0,18,9],
             [27,54,9,0],
             [81,63,72,45]
           ],
      out: [ [40, 30] ]
    },
    {
      context: 'complicated test',
      in: [
             [7,4,0,1],
             [5,6,2,2],
             [6,10,7,8],
             [1,4,2,0]
      ],
      out: [
        [5,4],
        [4,4]
      ]
    },
    {
      context: 'extra complicated',
      in: [
            [36,0,18,9,9,45,27],
            [27,0,54,9,0,63,90],
            [81,63,72,45,18,27,0],
            [0,0,9,81,27,18,45],
            [45,45,27,27,90,81,72],
            [45,18,9,0,9,18,45],
            [27,81,36,63,63,72,81]
          ],
      out: [
              [39,30,26,25,31],
              [34,37,35,32,32],
              [38,41,44,46,42],
              [22,24,31,39,45],
              [37,34,36,47,59]
            ]
    }
    // custom tests
    // { context: '', in: [], out:  },
  ]
  const runTest = (input, output, context) => it(context, () => expect(boxBlur(input)).to.deep.equal(output));

  inOut.forEach(pair => runTest(pair.in, pair.out, pair.context));
});
