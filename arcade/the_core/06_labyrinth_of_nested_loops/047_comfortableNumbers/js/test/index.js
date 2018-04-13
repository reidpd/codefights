const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // comfortableNumbers(l, r)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [10,12],
          out: 2,
        },{
          cxt: 'simple test',
          in: [1,9],
          out: 20,
        },{
          cxt: 'simple test',
          in: [13,13],
          out: 0,
        },{
          cxt: 'simple test',
          in: [12,108],
          out: 707,
        },{
          cxt: 'complicated test',
          in: [239,777],
          out: 6166,
        },{
          cxt: 'complicated test',
          in: [1,1000],
          out: 11435,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // digitSum(n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [22],
          out: 4,
        },{
          cxt: 'simple test',
          in: [10],
          out: 1,
        },{
          cxt: 'simple test',
          in: [11],
          out: 2,
        },{
          cxt: 'simple test',
          in: [1234],
          out: 10,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // makeSegment(n)
      ins_and_outs: [
        {
          cxt: 'in conjunction with digitSum, the function should return an array containing all numbers within the range [n - dS(n), n + dS(n)], where dS(n) is the sum of the digits of n',
          in: 22,
          out: [18,19,20,21,22,23,24,25,26],
        },{
          cxt: 'the sum of the digits in 22 is 4, so the function should return a segment containing ints from (22-4) to (22+4)',
          in: 22,
          out: [18,19,20,21,22,23,24,25,26],
        },{
          cxt: 'the sum of the digits in 12 is 3, so the function should return a segment containing ints from (12-3) to (12+3)',
          in: 12,
          out: [9,10,11,12,13,14,15],
        },{
          cxt: 'the sum of the digits in 11 is 2, so the function should return a segment containing ints from (11-2) to (11+2)',
          in: 11,
          out: [9,10,11,12,13],
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // aComfyWithB(a,b)
      ins_and_outs: [
        {
          cxt: 'returns false when the digits of a (10) do not add up to a sum (1) that can in either direction of A make a range ([9,10,11]) that includes b (12)',
          in: [10,12],
          out: false,
        },{
          cxt: 'returns true when the digits of a (12) add to a sum (3) that can in either direction of a make a range ([9,10,11,12,13,14,15]) that includes b (10)',
          in: [12,13],
          out: true,
        },{
          cxt: 'returns false if a === b',
          in: [10, 10],
          out: false,
        }
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
