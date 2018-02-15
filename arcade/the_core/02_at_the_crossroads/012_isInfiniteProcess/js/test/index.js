const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // name
      ins_and_outs: [
        {
          cxt: 'returns false if the two numbers ever equal eachother according to the algorithm',
          in: [2,6],
          out: false,
        },{
          cxt: 'returns true if the algorithm would result in an infinite loop',
          in: [2,3],
          out: true,
        },{
          cxt: 'returns false for 2 & 10 because they would meet at 6',
          in: [2,10],
          out: false,
        },{
          cxt: 'returns true because the two digits have an odd difference of one',
          in: [0,1],
          out: true,
        },{
          cxt: 'returns true because A is bigger than B',
          in: [3,1],
          out: true,
        },{
          cxt: 'returns false if a === b at the start',
          in: [10,10],
          out: false,
        },{
          cxt: 'simple test',
          in: [5,10],
          out: true,
        },{
          cxt: 'returns false for 6 & 10 because they would meet at 8',
          in: [6,10],
          out: false,
        },{
          cxt: 'returns true because a is bigger than b',
          in: [10,0],
          out: true,
        },{
          cxt: 'returns false if a === b at the start',
          in: [5,5],
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
