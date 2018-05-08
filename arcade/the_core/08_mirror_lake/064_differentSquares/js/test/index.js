const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // differentSquares(matrix)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [1,2,1],
            [2,2,2],
            [2,2,2],
            [1,2,3],
            [2,2,1]
          ],
          out: 6,
        },{
          cxt: 'returns 1 when only one pattern can be recognized',
          in: [
            [9,9,9,9,9],
            [9,9,9,9,9],
            [9,9,9,9,9],
            [9,9,9,9,9],
            [9,9,9,9,9],
            [9,9,9,9,9]
          ],
          out: 1, /*
                   * only [9,9]
                   *      [9,9] counts
                   */
        },{
          cxt: 'returns 0 when a single 2x2 square cannot be created',
          in: [
            [3]
          ],
          out: 0,
        },{
          cxt: 'returns 0 when only a single line exists',
          in: [
            [3,4,5,6,7,8,9]
          ],
          out: 0,
        },{
          cxt: 'returns 0 when a 2x2 square cannot be found (all arrs have a length of less than 2)',
          in: [
            [3], [4], [5], [6], [7]
          ],
          out: 0,
        },{
          cxt: 'complex test',
          in: [
            [2,5,3,4,3,1,3,2],
            [4,5,4,1,2,4,1,3],
            [1,1,2,1,4,1,1,5],
            [1,3,4,2,3,4,2,4],
            [1,5,5,2,1,3,1,1],
            [1,2,3,3,5,1,2,4],
            [3,1,4,4,4,1,5,5],
            [5,1,3,3,1,5,3,5],
            [5,4,4,3,5,4,4,4]
          ],
          out: 54,
        },{
          cxt: 'returns 0 when a 2x2 square cannot be created from the matrix provided',
          in: [
            [1,1,1,1,1,1,2,2,2,3,3,3,9,9,9,2,3,9]
          ],
          out: 0,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }/*, {
      fn: '', // name
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [],
          out: true,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }
    */
  ];
  tests.forEach((test, testIdx) => {
    test.fn = fns[testIdx]; // sets functions according to order set in index.js
    test.ins_and_outs.forEach(params => {
      params.fn = test.fn;
      test.run(params);
    });
  });
});
