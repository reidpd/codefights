const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // fileNaming()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["doc", "doc", "image", "doc(1)", "doc"],
          out: ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"],
        },{
          cxt: 'when an iterated name replicates a previous unique name, the algorithm accounts for it with a new number attached',
          in: ["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
          out: ["a(1)", "a(6)", "a", "a(2)", "a(3)", "a(4)", "a(5)", "a(7)", "a(8)", "a(9)", "a(10)", "a(11)"],
        },{
          cxt: 'iterated items do not duplicate previous uniques',
          in: ["dd", "dd(1)", "dd(2)", "dd", "dd(1)", "dd(1)(2)", "dd(1)(1)", "dd", "dd(1)"],
          out: ["dd", "dd(1)", "dd(2)", "dd(3)", "dd(1)(1)", "dd(1)(2)", "dd(1)(1)(1)", "dd(4)", "dd(1)(3)"],
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          const result = param.fn(param.in);
          param.out.forEach((correctName, resultName) => expect(result[resultName]).to.deep.equal(correctName))
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
