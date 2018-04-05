const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // squareDigitsSequence()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [16],
          out: 9,
        },
        {
          cxt: 'simple test',
          in: [103],
          out: 4,
        },
        {
          cxt: 'simple test',
          in: [1],
          out: 2,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // allDigitsAreUnique(sequence)
      ins_and_outs: [
        {
          cxt: 'will be true when all digits are unique amongst the sequence',
          in: [[1,2,3]],
          out: true,
        },{
          cxt: 'will be false when one digit amongst the sequence is not unique',
          in: [[1,2,3,1]],
          out: false,
        },{
          cxt: 'will be false when one digit in the middle of the sequence is not unique',
          in: [[1,2,3,2]],
          out: false,
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
