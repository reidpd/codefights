const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // makeArrayConsecutive2(statues)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [6, 2, 3, 8],
          out: 3,
        },{
          cxt: 'simple test',
          in: [0,3],
          out: 2,
        },{
          cxt: 'simple test',
          in: [5,4,6],
          out: 0,
        },{
          cxt: 'simple test',
          in: [6,3],
          out: 2,
        },{
          cxt: 'simple test',
          in: [1],
          out: 0,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
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
