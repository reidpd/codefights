const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // increaseNumberRoundness()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [902200100],
          out: true,
        },{
          cxt: 'simple test',
          in: [11000],
          out: false,
        },{
          cxt: 'simple test',
          in: [99080],
          out: true,
        },{
          cxt: 'simple test',
          in: [1022220],
          out: true,
        },{
          cxt: 'simple test',
          in: [106611],
          out: true,
        },{
          cxt: 'simple test',
          in: [234230],
          out: false,
        },{
          cxt: 'returns false if no zeroes are present already',
          in: [888],
          out: false,
        },{
          cxt: 'simple test',
          in: [100],
          out: false,
        },{
          cxt: 'simple test',
          in: [1000000000],
          out: false,
        },{
          cxt: 'simple test',
          in: [103456789],
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
