const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // countBlackCells(n,m)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [3,4],
          out: 6,
        },{
          cxt: 'simple test',
          in: [3,3],
          out: 7,
        },{
          cxt: 'simple test',
          in: [2,5],
          out: 6,
        },{
          cxt: 'simple test',
          in: [1,1],
          out: 1,
        },{
          cxt: 'simple test',
          in: [1,2],
          out: 2,
        },{
          cxt: 'simple test',
          in: [1,3],
          out: 3,
        },{
          cxt: 'simple test',
          in: [1,239],
          out: 239,
        },{
          cxt: 'simple test',
          in: [33,44],
          out: 86,
        },{
          cxt: 'simple test',
          in: [16,8],
          out: 30,
        },{
          cxt: 'simple test',
          in: [66666,88888],
          out: 177774,
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
