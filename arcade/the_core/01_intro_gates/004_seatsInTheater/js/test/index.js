const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // seatsInTheater()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [16,11,5,3],
          out: 96,
        },{
          cxt: 'returns 0 if nobody will be bothered',
          in: [1,1,1,1],
          out: 0,
        },{
          cxt: 'simple test',
          in: [13,6,8,3],
          out: 18,
        },{
          cxt: 'simple test',
          in: [60,100,60,1],
          out: 99,
        },{
          cxt: 'returns 0 if nobody will be bothered',
          in: [1000,1000,1000,1000],
          out: 0,
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
