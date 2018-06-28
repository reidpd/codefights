const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // allLongestStrings
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["aba", "aa", "ad", "vcd", "aba"],
          out: ["aba", "vcd", "aba"],
        },{
          cxt: 'simple test',
          in: ["aa"],
          out: ["aa"],
        },{
          cxt: 'simple test',
          in: ["abc", "eeee", "abcd", "dcd"],
          out: ["eeee", "abcd"],
        },{
          cxt: 'simple test',
          in: ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"],
          out: ["zzzzzz", "abcdef", "aaaaaa"],
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
