const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // growingPlant()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [100, 10, 910],
          out: 10,
        }, {
          cxt: 'simple test',
          in: [10, 9, 4],
          out: 1,
        }, {
          cxt: 'simple test',
          in: [5, 2, 7],
          out: 2,
        }, {
          cxt: 'simple test',
          in: [7, 3, 443],
          out: 110,
        }, {
          cxt: 'simple test',
          in: [6, 5, 10],
          out: 5,
        },
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
  tests.forEach((test, idx) => test.fn = fns[idx]); // sets functions according to order set in index.js
  tests.forEach((test, testIdx) => {
    test.fn = fns[idx]; // sets functions according to order set in index.js
    test.ins_and_outs.forEach(params => {
      params.fn = test.fn;
      test.run(params);
    });
  });
});
