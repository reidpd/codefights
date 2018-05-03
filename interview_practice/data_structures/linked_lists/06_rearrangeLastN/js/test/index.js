const expect = require('chai').expect;
const createListFromArray = require('../../../00_basic/lists/single/js').createListFromArray;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // rearrangeLastN(l, n)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            createListFromArray([1, 2, 3, 4, 5]),
            3
          ],
          out: [3, 4, 5, 1, 2],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1, 2, 3, 4, 5, 6, 7]),
            1
          ],
          out: [7, 1, 2, 3, 4, 5, 6],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1000, -1000]),
            0
          ],
          out: [1000, -1000],
        },{
          cxt: 'returns an empty array when given one as input',
          in: [
            createListFromArray([]),
            0
          ],
          out: [],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([123, 456, 789, 0]),
            4
          ],
          out: [123, 456, 789, 0],
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
