const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // numberOfClans(divisors, k)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [2,3],
            6
          ],
          out: 4,
        },{
          cxt: 'simple test',
          in: [
            [2,3,4],
            6
          ],
          out: 5,
        },{
          cxt: 'simple test',
          in: [
            [1,3],
            10
          ],
          out: 2,
        },{
          cxt: 'simple test',
          in: [
            [6, 2, 2, 8, 9, 2, 2, 2, 2],
            10
          ],
          out: 5,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // friendlyInts(a,b,divs)
      ins_and_outs: [
        {
          cxt: 'return true: from divisors [2,3], 2 is a divisor of both 2 && 4, && 3 is NOT a divisor of 2 or 4',
          in: [
            2,//a
            4,//b
            [2,3]
          ],
          out: true,
        },{
          cxt: 'return false: from divisors [2,3], 3 is a divisor of 3 but not a divisor of 4',
          in: [
            3,//a
            4,//b
            [2,3]
          ],
          out: false,
        }/*,{
          cxt: 'simple test',
          in: [
            0,//a
            1,//b
            []
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            0,//a
            1,//b
            []
          ],
          out: true,
        },*/
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // acceptableDivisor(a,b,divisor)
      ins_and_outs: [
        {
          cxt: 'return true: both 2 && 4 have 2 as a divisor',
          in: [
            2, //a
            4, //b
            2 //divisor
          ],
          out: true,
        },{
          cxt: 'return true: neither 2 nor 4 have 3 as a divisor',
          in: [
            2, //a
            4, //b
            3 //divisor
          ],
          out: true,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // isDivisor(num, divisor)
      ins_and_outs: [
        {
          cxt: 'returns true because 2 is a divisor of 4',
          in: [4, 2],
          out: true,
        },{
          cxt: 'returns true because 3 is a divisor of 9',
          in: [9, 3],
          out: true,
        },{
          cxt: 'returns false because 3 is not a divisor of 4',
          in: [4, 3],
          out: false,
        },{
          cxt: 'returns false because 6 is not a divisor of 9',
          in: [9, 6],
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
