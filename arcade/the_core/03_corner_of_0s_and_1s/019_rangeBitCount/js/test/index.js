const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // rangeBitCount()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [2,7],
          out: 11,
        },{
          cxt: 'simple test',
          in: [0,1],
          out: 1,
        },{
          cxt: 'simple test',
          in: [1,10],
          out: 17,
        },{
          cxt: 'simple test',
          in: [8,9],
          out: 3,
        },{
          cxt: 'simple test',
          in: [9,10],
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
