const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // stringsConstruction(a,b)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["abc", "abccba"],
          out: 2,
        },{
          cxt: 'simple test',
          in: ["hnccv", "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"],
          out: 3,
        },{
          cxt: 'should return 0 if a single iteration of string a cannot be found in string b',
          in: ["abc", "def"],
          out: 0,
        },{
          cxt: 'leftover portions of string a within string b do not count',
          in: ["zzz", "zzzzzzzzzzz"],
          out: 3,
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
