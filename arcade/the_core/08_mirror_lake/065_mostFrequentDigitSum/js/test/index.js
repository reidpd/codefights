const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // mostFrequentDigitSum(n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: 88,
          out: 9,
        },{
          cxt: 'simple test',
          in: 8,
          out: 8,
        },{
          cxt: 'simple test',
          in: 1,
          out: 1,
        },{
          cxt: 'simple test',
          in: 17,
          out: 9,
        },{
          cxt: 'simple test',
          in: 239,
          out: 9,
        },{
          cxt: 'simple test',
          in: 994,
          out: 9,
        },{
          cxt: 'simple test',
          in: 99999,
          out: 18,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // makeSequence(n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: 88,
          out: [88, 72, 63, 54, 45, 36, 27, 18, 9, 0],
        },{
          cxt: 'simple test',
          in: 8,
          out: [8, 0],
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
