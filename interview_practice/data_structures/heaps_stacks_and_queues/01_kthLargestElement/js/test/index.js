const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // kthLargestElement()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [7, 6, 5, 4, 3, 2, 1],
            2
          ],
          out: 6,
        },{
          cxt: 'simple test',
          in: [
            [99, 99],
            2
          ],
          out: 99,
        },{
          cxt: 'simple test',
          in: [
            [1],
            1
          ],
          out: 1,
        },{
          cxt: 'simple test',
          in: [
            [2,1],
            1
          ],
          out: 2,
        },{
          cxt: 'simple test',
          in: [
            [-1, 2, 0],
            2
          ],
          out: 0,
        },{
          cxt: 'simple test',
          in: [
            [-1, 2, 0],
            3
          ],
          out: -1,
        },{
          cxt: 'simple test',
          in: [
            [3,1,2,4],
            2
          ],
          out: 3,
        },{
          cxt: 'simple test',
          in: [
            [3,2,1,5,6,4],
            2
          ],
          out: 5,
        },{
          cxt: 'simple test',
          in: [
            [5, 2, 4, 1, 3, 6, 0],
            2
          ],
          out: 5,
        },{
          cxt: 'simple test',
          in: [
            [3, 3, 3, 3, 3, 3, 3, 3, 3],
            8
          ],
          out: 3,
        },{
          cxt: 'simple test',
          in: [
            [3, 3, 3, 3, 4, 3, 3, 3, 3],
            1
          ],
          out: 4,
        },{
          cxt: 'simple test',
          in: [
            [3, 3, 3, 3, 4, 3, 3, 3, 3],
            5
          ],
          out: 3,
        },{
          cxt: 'simple test',
          in: [
            [3, 2, 3, 1, 2, 4, 5, 5, 6],
            4
          ],
          out: 4,
        },{
          cxt: 'simple test',
          in: [
            [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6],
            1
          ],
          out: 11,
        },{
          cxt: 'simple test',
          in: [
            [2,1],
            2
          ],
          out: 1,
        },{
          cxt: 'simple test',
          in: [
            [-1, -1],
            2
          ],
          out: -1,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
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
