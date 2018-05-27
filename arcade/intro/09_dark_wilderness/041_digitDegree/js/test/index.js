const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // digitDegree()
      ins_and_outs: [
        {
          cxt: 'single digits require no processing, so they return 0',
          in: [5],
          out: 0,
        }, {
          cxt: 'handles multi-digit nums that only require one round of processing',
          in: [100],
          out: 1,
        }, {
          cxt: 'handles multi-digit nums that require two rounds of processing',
          in: [91],
          out: 2,
        }, {
          cxt: 'handles other two round processing input',
          in: [99],
          out: 2,
        }
        /*, {
          cxt: '',
          in: [],
          out: ,
        }*/
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.be.a('number');
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
