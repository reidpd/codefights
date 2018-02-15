const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // arithmeticExpression()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [2,3,5],
          out: true,
        },{
          cxt: 'simple test',
          in: [8,2,4],
          out: true,
        },{
          cxt: 'simple test',
          in: [8,3,2],
          out: false,
        },{
          cxt: 'simple test',
          in: [6,3,3],
          out: true,
        },{
          cxt: 'simple test',
          in: [18,2,9],
          out: true,
        },{
          cxt: 'simple test',
          in: [2,3,6],
          out: true,
        },{
          cxt: 'simple test',
          in: [5,2,0],
          out: false,
        },{
          cxt: 'simple test',
          in: [10,2,2],
          out: false,
        },{
          cxt: 'simple test',
          in: [5,2,2],
          out: false,
        },{
          cxt: 'simple test',
          in: [1,2,1],
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
