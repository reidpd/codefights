const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // largestNumber()
      ins_and_outs: [
        {
          cxt: 'should return the largest number possible for n number of digits',
          in: [2],
          out: 99,
        },{
          cxt: 'should return the largest number possible for n number of digits',
          in: [1],
          out: 9,
        },{
          cxt: 'should return the largest number possible for n number of digits',
          in: [3],
          out: 999,
        },{
          cxt: 'should return the largest number possible for n number of digits',
          in: [4],
          out: 9999,
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
