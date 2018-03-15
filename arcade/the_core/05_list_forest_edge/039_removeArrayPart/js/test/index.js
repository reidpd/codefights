const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // removeArrayPart(inputArray, l, r)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [[2, 3, 2, 3, 4, 5], 2, 4],
          out: [2,3,5],
        },{
          cxt: 'simple test',
          in: [[2, 4, 10, 1], 0, 2],
          out: [1],
        },{
          cxt: 'simple test',
          in: [[5, 3, 2, 3, 4], 1, 1],
          out: [5,2,3,4],
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
