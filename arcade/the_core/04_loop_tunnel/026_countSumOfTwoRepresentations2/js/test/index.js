const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // countSumOfTwoReps2(n,l,r)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [6,2,4],
          out: 2,
        },{
          cxt: 'simple test',
          in: [6,3,3],
          out: 1,
        },{
          cxt: 'simple test',
          in: [10,9,11],
          out: 0,
        },{
          cxt: 'simple test',
          in: [24,8,16],
          out: 5,
        },{
          cxt: 'simple test',
          in: [24,12,12],
          out: 1,
        },{
          cxt: 'simple test',
          in: [93,24,58],
          out: 12,
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
