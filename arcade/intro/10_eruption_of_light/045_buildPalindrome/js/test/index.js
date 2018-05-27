const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // name
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["abcdc"],
          out: "abcdcba",
        }, {
          cxt: 'simple test',
          in: ["ababab"],
          out: "abababa",
        }, {
          cxt: 'should return the input string if it is already a palindrome',
          in: ["abba"],
          out: "abba",
        }, {
          cxt: 'simple test',
          in: ["abaa"],
          out: "abaaba",
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
