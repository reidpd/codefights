const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

const List = require('../../../00_basic/lists/single/js/').List;

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isListPalindrome()
      ins_and_outs: [
        {
          cxt: 'returns true if the list is identical in original and reversed orders',
          in: [new List('value').fill([0,1,0])],
          out: true,
        },{
          cxt: 'simple test',
          in: [new List('value').fill([1,2,2,3])],
          out: false,
        },{
          cxt: 'simple test',
          in: [new List('value').fill([1, 1000000000, -1000000000, -1000000000, 1000000000, 1])],
          out: true,
        },{
          cxt: 'simple test',
          in: [new List('value').fill([1,2,3,3,2])],
          out: false,
        },{
          cxt: 'simple test',
          in: [new List('value').fill([1, 2, 3, 1, 2, 3])],
          out: false,
        },{
          cxt: 'return true for empty lists',
          in: [new List('value')],
          out: true,
        },{
          cxt: 'simple test',
          in: [new List('value').fill([3,5,3,5])],
          out: false,
        },{
          cxt: 'simple test',
          in: [new List('value').fill([1,5,2,4])],
          out: false,
        },{
          cxt: 'simple test',
          in: [new List('value').fill([10])],
          out: true,
        },{
          cxt: 'simple test',
          in: [new List('value').fill([0,0])],
          out: true,
        },{
          cxt: 'simple test',
          in: [new List('value').fill([1,3,2,2,2])],
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
