const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isSubstitutionCipher(string1, string2)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["aacb", "aabc"],
          out: true,
        },{
          cxt: 'simple test',
          in: ["aa", "bc"],
          out: false,
        },{
          cxt: 'simple test',
          in: ["aaxxaaz", "aazzaay"],
          out: true,
        },{
          cxt: 'simple test',
          in: ["aaxyaa", "aazzaa"],
          out: false,
        },{
          cxt: 'simple test',
          in: ["aabc", "aacb"],
          out: true,
        },{
          cxt: 'simple test',
          in: ["dccd", "zzxx"],
          out: false,
        },{
          cxt: 'simple test',
          in: ["ddcc", "zzxx"],
          out: true,
        },{
          cxt: 'simple test',
          in: ["aaaabbbbcc", "cccccccccc"],
          out: false,
        },{
          cxt: 'simple test',
          in: ["abcdefg", "hijklmn"],
          out: true,
        },{
          cxt: 'returns true when both strings are identical',
          in: ["aaabbbccc", "aaabbbccc"],
          out: true,
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
