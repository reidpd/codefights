const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // pagesNumberingWithInk(current, numberOfDigits)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [1,5],
          out: 5,
        },{
          cxt: 'simple test',
          in: [21,5],
          out: 22,
        },{
          cxt: 'simple test',
          in: [8,4],
          out: 10,
        },{
          cxt: 'simple test',
          in: [21,6],
          out: 23,
        },{
          cxt: 'simple test',
          in: [76,250],
          out: 166,
        },{
          cxt: 'simple test',
          in: [80,1000],
          out: 419,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // countDigits(n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [1],
          out: 1,
        },{
          cxt: 'simple test',
          in: [11],
          out: 2,
        },{
          cxt: 'simple test',
          in: [111],
          out: 3,
        },{
          cxt: 'simple test',
          in: [123456],
          out: 6,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // enoughDigitsForNum(n, digitsLeft)
      ins_and_outs: [
        {
          cxt: 'will return true if there are more digits left than digits in the current number in order to number the page',
          in: [22, 3],
          out: true,
        },{
          cxt: 'will return false if there are not enough digits left in order to number the page',
          in: [22, 1],
          out: false,
        },{
          cxt: 'will return true if there are equal digits left in order to number the page',
          in: [22,2],
          out: true,
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
