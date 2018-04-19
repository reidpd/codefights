const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isUnstablePair(filename1, filename2)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["aa", "AAB"],
          out: true,
        },{
          cxt: 'simple test',
          in: ["A", "z"],
          out: false,
        },{
          cxt: 'simple test',
          in: ["yyyyyy", "Azzzzzzzzz"],
          out: false,
        },{
          cxt: 'simple test',
          in: ["mehOu", "mehau"],
          out: true,
        },{
          cxt: 'simple test',
          in: ["aaZ", "AAzz"],
          out: true,
        },{
          cxt: 'simple test',
          in: ["fdsAs", "dzdw"],
          out: false,
        },{
          cxt: 'simple test',
          in: ["aaad", "aaAdd"],
          out: true,
        },{
          cxt: 'simple test',
          in: ["zzzzzAa123", "zzzzza"],
          out: true,
        },{
          cxt: 'simple test',
          in: ["123za", "123Z"],
          out: false,
        },{
          cxt: 'simple test',
          in: ["qwerTyu123", "qwertyu"],
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
