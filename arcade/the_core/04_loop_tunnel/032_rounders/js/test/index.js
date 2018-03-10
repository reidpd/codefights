const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // rounders()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [15],
          out: 20,
        },{
          cxt: 'simple test',
          in: [1234],
          out: 1000,
        },{
          cxt: 'simple test',
          in: [1445],
          out: 2000,
        },{
          cxt: 'simple test',
          in: [14],
          out: 10,
        },{
          cxt: 'simple test',
          in: [10],
          out: 10,
        },{
          cxt: 'simple test',
          in: [99],
          out: 100,
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
