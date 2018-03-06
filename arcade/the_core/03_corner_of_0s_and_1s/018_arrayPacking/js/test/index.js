const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // arrayPacking(array)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [24,85,0],
          out: 21784,
        },{
          cxt: 'simple test',
          in: [23,45,39],
          out: 2567447,
        },{
          cxt: 'simple test',
          in: [1,2,4,8],
          out: 134480385,
        },{
          cxt: 'simple test',
          in: [5],
          out: 5,
        },{
          cxt: 'simple test',
          in: [187,99,42,43],
          out: 724198331,
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
