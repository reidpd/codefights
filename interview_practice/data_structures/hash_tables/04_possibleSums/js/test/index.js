const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // possibleSums(coins, quantity)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [10, 50, 100],
            [1, 2, 1]
          ],
          out: 9,
        },{
          cxt: 'simple test',
          in: [
            [10, 50, 100, 500],
            [5,3,2,2]
          ],
          out: 122,
        },{
          cxt: 'simple test',
          in: [
            [1],
            [5]
          ],
          out: 5,
        },{
          cxt: 'simple test',
          in: [
            [1,1],
            [2,3]
          ],
          out: 5,
        },{
          cxt: 'simple test',
          in: [
            [1,2],
            [50000,2]
          ],
          out: 50004,
        },{
          cxt: 'simple test',
          in: [
            [1, 2, 3],
            [2, 3, 10000]
          ],
          out: 30008,
        },{
          cxt: 'simple test',
          in: [
            [3, 1, 1],
            [111, 84, 104]
          ],
          out: 521,
        },{
          cxt: 'simple test',
          in: [
            [1, 1, 1, 1, 1],
            [9, 19, 18, 12, 19]
          ],
          out: 77,
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
