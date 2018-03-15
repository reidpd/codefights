const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // createArray()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [4],
          out: new Array(4).fill(1),
        },{
          cxt: 'simple test',
          in: [2],
          out: new Array(2).fill(1),
        },{
          cxt: 'simple test',
          in: [1],
          out: new Array(1).fill(1),
        },{
          cxt: 'simple test',
          in: [5],
          out: new Array(5).fill(1),
        },{
          cxt: 'simple test',
          in: [49],
          out: new Array(49).fill(1),
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
