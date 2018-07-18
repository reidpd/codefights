const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // arrayPreviousLess(items)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [3, 5, 2, 4, 5],
          out: [-1, 3, -1, 2, 4],
        },{
          cxt: 'simple test',
          in: [2, 2, 1, 3, 4, 5, 5, 3],
          out: [-1, -1, -1, 1, 3, 4, 4, 1],
        },{
          cxt: 'simple test',
          in: [3, 2, 1],
          out: [-1, -1, -1],
        },{
          cxt: 'simple test',
          in: [100, 101, 102],
          out: [-1, 100, 101],
        },{
          cxt: 'simple test',
          in: [7, 7, 8, 3, 4, 4, 2, 5, 6, 7, 7],
          out: [-1, -1, 7, -1, 3, 3, -1, 2, 5, 6, 6],
        },{
          cxt: 'simple test',
          in: [68, 135, 101, 170, 125],
          out: [-1, 68, 68, 101, 101],
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
