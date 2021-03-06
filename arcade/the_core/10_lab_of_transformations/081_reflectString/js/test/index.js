const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // reflectString(inputString)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: "name",
          out: "mznv",
        },{
          cxt: 'simple test',
          in: "abyz",
          out: "zyba",
        },{
          cxt: 'simple test',
          in: "nnnnn",
          out: "mmmmm",
        },{
          cxt: 'simple test',
          in: "pqr",
          out: "kji",
        },{
          cxt: 'simple test',
          in: "codefights",
          out: "xlwvurtsgh",
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
