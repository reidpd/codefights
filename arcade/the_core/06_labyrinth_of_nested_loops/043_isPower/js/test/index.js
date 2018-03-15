const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isPower(n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: 125,
          out: true,
        },{
          cxt: 'simple test',
          in: 72,
          out: false,
        },{
          cxt: 'simple test',
          in: 100,
          out: true,
        },{
          cxt: 'simple test',
          in: 11,
          out: false,
        },{
          cxt: 'simple test',
          in: 324,
          out: true,
        },{
          cxt: 'simple test',
          in: 256,
          out: true,
        },{
          cxt: 'simple test',
          in: 119,
          out: false,
        },{
          cxt: 'simple test',
          in: 400,
          out: true,
        },{
          cxt: 'simple test',
          in: 350,
          out: false,
        },{
          cxt: 'simple test',
          in: 361,
          out: true,
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
