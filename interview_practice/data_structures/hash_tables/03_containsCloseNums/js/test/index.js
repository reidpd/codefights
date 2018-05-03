const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // containsCloseNums(nums, k)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [0, 1, 2, 3, 5, 2],
            3
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [0, 1, 2, 3, 5, 2],
            2
          ],
          out: false,
        },{
          cxt: 'returns false for empty nums array',
          in: [
            [99, 99],
            2
          ],
          out: true,
        },{
          cxt: 'returns true when there are two identical nums less than k indices apart',
          in: [
            [2,2],
            3
          ],
          out: true,
        },{
          cxt: 'returns false when no digits in nums are identical',
          in: [
            [1,2],
            2
          ],
          out: false,
        },{
          cxt: 'returns true when two identical nums are exactly k indices apart',
          in: [
            [1,2,1],
            2
          ],
          out: true,
        },{
          cxt: 'returns true when two identical nums are exactly 1 index apart (after a beginning section, when they are two apart)',
          in: [
            [1,0,1,1],
            1
          ],
          out: true,
        },{
          cxt: 'returns false when k === 0',
          in: [
            [1,2,1],
            0
          ],
          out: false,
        },{
          cxt: 'returns false when k is less than the number of indices separating two identical nums',
          in: [
            [1,2,1],
            1
          ],
          out: false,
        },{
          cxt: 'returns false when k is equal to nums.length, or there is only one num in nums',
          in: [
            [1],
            1
          ],
          out: false,
        },{
          cxt: 'works for negative nums',
          in: [
            [-1, -1],
            1
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [0, 1, 2, 3, 5, 2],
            3
          ],
          out: true,
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
