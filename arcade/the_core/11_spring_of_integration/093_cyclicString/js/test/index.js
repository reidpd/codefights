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
          in: "cabca",
          out: 3,
        },{
          cxt: 'simple test',
          in: "aba",
          out: 2,
        },{
          cxt: 'simple test',
          in: "ccccccccccc",
          out: 1,
        },{
          cxt: 'simple test',
          in: "bcaba",
          out: 5,
        },{
          cxt: 'simple test',
          in: "abacabaabacab",
          out: 7,
        },{
          cxt: 'simple test',
          in: "aab",
          out: 3,
        },{
          cxt: 'simple test',
          in: "abaaba",
          out: 3,
        },{
          cxt: 'simple test',
          in: "zazazaza",
          out: 2,
        },{
          cxt: 'simple test',
          in: "abbaab",
          out: 4,
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
