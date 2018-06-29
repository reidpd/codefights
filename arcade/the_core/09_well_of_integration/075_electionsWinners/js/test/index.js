const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // electionsWinners(votes, k)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [2, 3, 5, 2],
            3
          ],
          out: 2,
        },{
          cxt: 'simple test',
          in: [
            [1, 3, 3, 1, 1],
            0
          ],
          out: 0,
        },{
          cxt: 'simple test',
          in: [
            [5, 1, 3, 4, 1],
            0
          ],
          out: 1,
        },{
          cxt: 'simple test',
          in: [
            [1, 1, 1, 1],
            1
          ],
          out: 4,
        },{
          cxt: 'simple test',
          in: [
            [1, 1, 1, 1],
            0
          ],
          out: 0,
        },{
          cxt: 'simple test',
          in: [
            [3, 1, 1, 3, 1],
            2
          ],
          out: 2,
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
