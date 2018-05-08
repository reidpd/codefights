const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // constructSquare(s)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: "ab",
          out: 81,
        },{
          cxt: 'simple test',
          in: "zzz",
          out: -1,
        },{
          cxt: 'simple test',
          in: "aba",
          out: 900,
        },{
          cxt: 'simple test',
          in: "abcbbb",
          out: 810000,
        },{
          cxt: 'simple test',
          in: "abc",
          out: 961,
        },{
          cxt: 'simple test',
          in: "aaaabbcde",
          out: 999950884,
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
