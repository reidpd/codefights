const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isDigit()
      ins_and_outs: [
        {
          cxt: 'returns true for "0" ',
          in: ["0"],
          out: true,
        },{
          cxt: 'returns false for "-" ',
          in: ["-"],
          out: false,
        },{
          cxt: 'returns false for "O" ',
          in: ["O"],
          out: false,
        },{
          cxt: 'returns true for "1" ',
          in: ["1"],
          out: true,
        },{
          cxt: 'returns true for "2" ',
          in: ["2"],
          out: true,
        },{
          cxt: 'returns false for "!" ',
          in: ["!"],
          out: false,
        },{
          cxt: 'returns false for "@"',
          in: ["@"],
          out: false,
        },{
          cxt: 'returns false for "+"',
          in: ["+"],
          out: false,
        },{
          cxt: 'returns true for "6"',
          in: ["6"],
          out: true,
        },{
          cxt: 'returns false for "("',
          in: ["("],
          out: false,
        },{
          cxt: 'returns false for ")"',
          in: [")"],
          out: false,
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
