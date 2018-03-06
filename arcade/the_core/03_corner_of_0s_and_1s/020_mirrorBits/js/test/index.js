const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // mirrorBits(n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [97],
          out: 67,
        },{
          cxt: 'simple test',
          in: [8],
          out: 1,
        },{
          cxt: 'simple test',
          in: [123],
          out: 111,
        },{
          cxt: 'simple test',
          in: [86782],
          out: 65173,
        },{
          cxt: 'simple test',
          in: [5],
          out: 5,
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
