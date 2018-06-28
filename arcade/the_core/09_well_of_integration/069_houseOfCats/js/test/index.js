const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // houseOfCats(legs)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: 6,
          out: [1,3],
        },{
          cxt: 'simple test',
          in: 2,
          out: [1],
        },{
          cxt: 'simple test',
          in: 8,
          out: [0, 2, 4],
        },{
          cxt: 'simple test',
          in: 4,
          out: [0, 2],
        },{
          cxt: 'simple test',
          in: 44,
          out: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
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
