const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // equalPairOfBits()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [10,11],
          out: 2,
        },{
          cxt: 'simple test',
          in: [0,0],
          out: 1,
        },{
          cxt: 'simple test',
          in: [28,27],
          out: 8,
        },{
          cxt: 'simple test',
          in: [895,928],
          out: 32,
        },{
          cxt: 'simple test',
          in: [1073741824,1006895103],
          out: 262144,
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
