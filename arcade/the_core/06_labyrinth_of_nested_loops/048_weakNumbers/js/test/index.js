const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // weakNumbers(n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: 9,
          out: [2,2],
        },{
          cxt: 'simple test',
          in: 1,
          out: [0,1],
        },{
          cxt: 'simple test',
          in: 2,
          out: [0,2],
        },{
          cxt: 'simple test',
          in: 7,
          out: [2,1],
        },{
          cxt: 'simple test',
          in: 500,
          out: [403,1],
        },{
          cxt: 'simple test',
          in: 4,
          out: [0,4],
        },{
          cxt: 'simple test',
          in: 1000,
          out: [0,4],
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // divisors(n)
      ins_and_outs: [
        {
          cxt: 'returns an array containing all integers that are common divisors with n',
          in: 1,
          out: [1],
        },{
          cxt: 'returns an array containing all integers that are common divisors with n',
          in: 2,
          out: [1,2],
        },{
          cxt: 'returns an array containing all integers that are common divisors with n',
          in: 3,
          out: [1,3],
        },{
          cxt: 'returns an array containing all integers that are common divisors with n',
          in: 4,
          out: [1,2,4],
        },{
          cxt: 'returns an array containing all integers that are common divisors with n',
          in: 5,
          out: [1,5],
        },{
          cxt: 'returns an array containing all integers that are common divisors with n',
          in: 6,
          out: [1,2,3,6],
        },{
          cxt: 'returns an array containing all integers that are common divisors with n',
          in: 7,
          out: [1,7],
        },{
          cxt: 'returns an array containing all integers that are common divisors with n',
          in: 8,
          out: [1,2,4,8],
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // defineWeakness(x)
      ins_and_outs: [
        {
          cxt: 'returns the amount of integers less than x that have more divisors than x',
          in: 1,
          out: 0,
        },{
          cxt: 'returns the amount of integers less than x that have more divisors than x',
          in: 5,
          out: 1,
        },{
          cxt: 'returns the amount of integers less than x that have more divisors than x',
          in: 7,
          out: 2,
        },{
          cxt: 'returns the amount of integers less than x that have more divisors than x',
          in: 9,
          out: 2,
        },{
          cxt: 'returns the amount of integers less than x that have more divisors than x',
          in: 4,
          out: 0,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // makeRange(a,b)
      ins_and_outs: [
        {
          cxt: 'returns an array of consecutive integers from a to b',
          in: [1,10],
          out: [1,2,3,4,5,6,7,8,9,10],
        },{
          cxt: 'returns an array of consecutive integers from a to b',
          in: [2,5],
          out: [2,3,4,5],
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
