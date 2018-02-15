const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // knapsackLight()
      ins_and_outs: [
        {
          cxt: 'returns the extra number',
          in: [2,7,2],
          out: 7,
        }, {
          cxt: 'returns the extra number',
          in: [3,2,2],
          out: 3,
        }, {
          cxt: 'returns the extra number',
          in: [5,5,1],
          out: 1,
        }, {
          cxt: 'returns the extra number',
          in: [500000000, 3, 500000000],
          out: 3,
        }
        /*
        {
          cxt: '',
          in: [],
          out: ,
        }
        */
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
          cxt: '',
          in: [],
          out: ,
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
