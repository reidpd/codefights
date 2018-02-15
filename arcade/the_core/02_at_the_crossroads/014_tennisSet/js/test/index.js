const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // tennisSet()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [3,6],
          out: true,
        },{
          cxt: 'simple test',
          in: [8,5],
          out: false,
        },{
          cxt: 'simple test',
          in: [6,5],
          out: false,
        },{
          cxt: 'simple test',
          in: [7,7],
          out: false,
        },{
          cxt: 'simple test',
          in: [6,4],
          out: true,
        },{
          cxt: 'simple test',
          in: [7,5],
          out: true,
        },{
          cxt: 'simple test',
          in: [7,2],
          out: false,
        },{
          cxt: 'simple test',
          in: [7,6],
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
