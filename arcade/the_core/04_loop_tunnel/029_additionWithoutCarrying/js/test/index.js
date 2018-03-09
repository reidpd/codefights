const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // additionWithoutCarrying()
      ins_and_outs: [
        {
          cxt: 'add 2 numbers together and return the sum without carrying any digits beyond 9 to the next 10th',
          in: [9, 9],
          out: 8,
        },{
          cxt: 'simple test',
          in: [456, 1734],
          out: 1180,
        },{
          cxt: 'simple test',
          in: [99999, 0],
          out: 99999,
        },{
          cxt: 'simple test',
          in: [999, 999],
          out: 888,
        },{
          cxt: 'simple test',
          in: [0, 0],
          out: 0,
        },{
          cxt: 'simple test',
          in: [54321, 54321],
          out: 8642,
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
