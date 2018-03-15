const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // differentRightmostBit(n,m)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [11,13],
          out: 2,
        },{
          cxt: 'simple test',
          in: [7,23],
          out: 16,
        },{
          cxt: 'simple test',
          in: [1,0],
          out: 1,
        },{
          cxt: 'simple test',
          in: [64,65],
          out: 1,
        },{
          cxt: 'simple test',
          in: [1073741823,1071513599],
          out: 131072,
        },{
          cxt: 'simple test',
          in: [42,22],
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
