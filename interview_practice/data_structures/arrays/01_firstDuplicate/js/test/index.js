const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // firstDuplicate()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [[2, 3, 3, 1, 5, 2]],
          out: 3,
        },{
          cxt: 'simple test',
          in: [[2, 4, 3, 5, 1]],
          out: -1,
        },{
          cxt: 'simple test',
          in: [[1]],
          out: -1,
        },{
          cxt: 'simple test',
          in: [[2, 2]],
          out: 2,
        },{
          cxt: 'simple test',
          in: [[2, 1]],
          out: -1,
        },{
          cxt: 'simple test',
          in: [[2,1,3]],
          out: -1,
        },{
          cxt: 'simple test',
          in: [[2, 3, 3]],
          out: 3,
        },{
          cxt: 'simple test',
          in: [[3, 3, 3]],
          out: 3,
        },{
          cxt: 'simple test',
          in: [[8, 4, 6, 2, 6, 4, 7, 9, 5, 8]],
          out: 6,
        },{
          cxt: 'simple test',
          in: [[10, 6, 8, 4, 9, 1, 7, 2, 5, 3]],
          out: -1,
        },{
          cxt: 'simple test',
          in: [[1, 1, 2, 2, 1]],
          out: 1,
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
