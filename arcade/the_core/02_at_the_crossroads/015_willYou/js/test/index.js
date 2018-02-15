const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // willYou()
      ins_and_outs: [
        {
          cxt: 'returns false if all params are true (aka, no contradition)',
          in: [true, true, true],
          out: false,
        },{
          cxt: 'returns true if loved but not beautiful (aka contradition)',
          in: [true, false, true],
          out: true,
        },{
          cxt: 'returns true if loved but not young (aka contradition)',
          in: [false, true, true],
          out: true,
        },{
          cxt: 'returns false if neither young nor beautiful nor loved',
          in: [false, false, false],
          out: false,
        },{
          cxt: 'returns true if loved, but neither young nor beautiful',
          in: [false, false, true],
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
