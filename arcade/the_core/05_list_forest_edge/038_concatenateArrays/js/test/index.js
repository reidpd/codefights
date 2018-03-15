const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // concatenateArrays(a,b)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [2,2,1],
            [10,11]
          ],
          out: [2,2,1,10,11],
        },{
          cxt: 'simple test',
          in: [
            [1,2],
            [3,1,2]
          ],
          out: [1,2,3,1,2],
        },{
          cxt: 'simple test',
          in: [
            [1],
            []
          ],
          out: [1],
        },{
          cxt: 'simple test',
          in: [
            [2, 10, 3, 9, 5, 11, 11],
            [4, 8, 1, 13, 3, 1, 14]
          ],
          out: [2, 10, 3, 9, 5, 11, 11, 4, 8, 1, 13, 3, 1, 14],
        },{
          cxt: 'simple test',
          in: [
            [9, 6, 6, 9, 8, 14],
            [3, 2, 2, 5, 3, 11, 12, 9, 7, 7]
          ],
          out: [9, 6, 6, 9, 8, 14, 3, 2, 2, 5, 3, 11, 12, 9, 7, 7],
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
