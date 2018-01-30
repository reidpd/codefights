const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // sumUpNumbers()
      ins_and_outs: [
        {
          cxt: 'returns a sum of all different numbers in the inputString',
          in: ["2 apples, 12 oranges"],
          out: 14,
        },{
          cxt: 'returns the inputString parsed to a number if the string is itself a number',
          in: ["123450"],
          out: 123450,
        },{
          cxt: 'returns 0 if no counts of items can be found in the inputString',
          in: ["Your payment method is invalid"],
          out: 0,
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
