const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // swapAdjacentBits(n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [13],
          out: 14,
        },{
          cxt: 'simple test',
          in: [74],
          out: 133,
        },{
          cxt: 'simple test',
          in: [1073741823],
          out: 1073741823,
        },{
          cxt: 'input of 0 returns 0',
          in: [0],
          out: 0,
        },{
          cxt: 'simple test',
          in: [1],
          out: 2,
        },{
          cxt: 'simple test',
          in: [83748],
          out: 166680,
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
