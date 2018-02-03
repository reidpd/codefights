const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // lateRide()
      ins_and_outs: [
        {
          cxt: 'returns the sum of digits the digital time would show',
          in: [240],
          out: 4,
        },{
          cxt: 'returns the sum of digits the digital time would show',
          in: [808],
          out: 14,
        },{
          cxt: 'returns the sum of digits the digital time would show',
          in: [1439],
          out: 19,
        },{
          cxt: 'returns the sum of digits the digital time would show',
          in: [0],
          out: 0,
        },{
          cxt: 'returns the sum of digits the digital time would show',
          in: [23],
          out: 5,
        },{
          cxt: 'returns the sum of digits the digital time would show',
          in: [8],
          out: 8,
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
