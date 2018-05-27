const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // digitsProductBetterVersion() that doesn't solve timeout need on codefights, but a lot more readable
      ins_and_outs: [
        {
          cxt: 'to get a product of "12", the function could return "26" because 2 * 6 === 12',
          in: [12],
          out: 26,
        },{
          cxt: 'there is no two+ digit whose product can be 19, so the result must be -1',
          in: [19],
          out: -1,
        },{
          cxt: 'for 450, the lowest digit the product of whose digits equals 450, return 2559',
          in: [450],
          out: 2559,
        },{
          cxt: 'for 0, the result should be 10 (1 * 0 === 0)',
          in: [0],
          out: 10,
        },{
          cxt: '13 is a prime number, so the result must be -1',
          in: [13],
          out: -1,
        },{
          cxt: '1 returns 1',
          in: [1],
          out: 1,
        },{
          cxt: '243 returns 399 (3 * 9 * 9 === 243)',
          in: [243],
          out: 399,
        },{
          cxt: '576 returns 889 (8 * 8 * 9 === 576)',
          in: [576],
          out: 889,
        },{
          cxt: '360 returns 589 (5 * 8 * 9 === 360)',
          in: [360],
          out: 589,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // isPrime()
      ins_and_outs: [
        {
          cxt: 'returns true if the number given as input is a prime number',
          in: [13],
          out: true,
        },{
          cxt: 'returns false if the number given as input is not a prime number',
          in: [8],
          out: false,
        },{
          cxt: 'returns false if the number given as input is not a prime number',
          in: [10],
          out: false,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // cycleDigits()
      ins_and_outs: [
        {
          cxt: 'should take an array of ints & produce a new array of the next number after the digits are joined',
          in: [[1,0]],
          out: [1,1],
        },{
          cxt: 'if all the digits are 9s, the function should return an array with a bigger length by 1',
          in: [[9,9]],
          out: [1,0,0],
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in).length).to.deep.equal(param.out.length)
          expect(parseInt(param.fn(...param.in).join(''))).to.deep.equal(parseInt(param.out.join('')))
        });
      }
    }, {
      fn: '', // calculatedProductFromDigits()
      ins_and_outs: [
        {
          cxt: 'calculates product',
          in: [[1,0]],
          out: 0,
        },{
          cxt: 'calculates product',
          in: [[2,6]],
          out: 12,
        },{
          cxt: 'calculates product',
          in: [[1,1]],
          out: 1,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // digitsProduct() // this version is what was submitted to codefights
      ins_and_outs: [
        {
          cxt: 'to get a product of "12", the function could return "26" because 2 * 6 === 12',
          in: [12],
          out: 26,
        },{
          cxt: 'there is no two+ digit whose product can be 19, so the result must be -1',
          in: [19],
          out: -1,
        },{
          cxt: 'for 450, the lowest digit the product of whose digits equals 450, return 2559',
          in: [450],
          out: 2559,
        },{
          cxt: 'for 0, the result should be 10 (1 * 0 === 0)',
          in: [0],
          out: 10,
        },{
          cxt: '13 is a prime number, so the result must be -1',
          in: [13],
          out: -1,
        },{
          cxt: '1 returns 1',
          in: [1],
          out: 1,
        },{
          cxt: '243 returns 399 (3 * 9 * 9 === 243)',
          in: [243],
          out: 399,
        },{
          cxt: '576 returns 889 (8 * 8 * 9 === 576)',
          in: [576],
          out: 889,
        },{
          cxt: '360 returns 589 (5 * 8 * 9 === 360)',
          in: [360],
          out: 589,
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
