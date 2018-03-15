const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // arrayReplace(inputArray, elemToReplace, substitutionElem)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [[1,2,1], 1, 3],
          out: [3,2,3],
        },{
          cxt: 'simple test',
          in: [[1,2,3,4,5], 3, 0],
          out: [1,2,0,4,5],
        },{
          cxt: 'simple test',
          in: [[1,1,1], 1, 10],
          out: [10, 10, 10],
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
