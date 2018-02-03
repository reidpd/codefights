const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // phoneCall()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [3,1,2,20],
          out: 14,
        },{
          cxt: 'simple test',
          in: [2,2,1,2],
          out: 1,
        },{
          cxt: 'simple test',
          in: [10,1,2,22],
          out: 11,
        },{
          cxt: 'simple test',
          in: [2,2,1,24],
          out: 14,
        },{
          cxt: 'simple test',
          in: [1,2,1,6],
          out: 3,
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
