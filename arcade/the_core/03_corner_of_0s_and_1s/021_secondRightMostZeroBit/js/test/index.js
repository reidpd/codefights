const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // secondRightMostZeroBit(n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [37],
          out: 8,
        },{
          cxt: 'simple test',
          in: [1073741824],
          out: 2,
        },{
          cxt: 'simple test',
          in: [83748],
          out: 2,
        },{
          cxt: 'simple test',
          in: [4],
          out: 2,
        },{
          cxt: 'simple test',
          in: [728782938],
          out: 4,
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
