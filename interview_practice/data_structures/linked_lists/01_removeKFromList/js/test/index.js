const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

const List = require('../../../00_basic/lists/single/js/');

describe("testing ", () => {
  const tests = [
    {
      fn: '', // removeKFromList()
      ins_and_outs: [
        {
          cxt: 'returns a singly-linked list with all nodes whose value is equal to *k* filtered out',
          in: [ // l, k
            new List('value').fill([3, 1, 2, 3, 4, 5]).head,
            3
          ],
          out: new List('value').fill([1, 2, 4, 5]).head,
        },{
          cxt: 'returns the list provided if the value cannot be found within the list',
          in: [
            new List('value').fill([1, 2, 3, 4, 5, 6, 7]).head,
            10
          ],
          out: new List('value').fill([1, 2, 3, 4, 5, 6, 7]).head,
        },{
          cxt: 'returns an empty list if all values within the list are equal to *k*',
          in: [
            new List('value').fill([1000, 1000, 1000]).head,
            1000
          ],
          out: new List('value').head, // === null
        },{
          cxt: 'returns an empty list if the input list is empty and a k is still provided',
          in: [
            new List('value').head,
            -1000
          ],
          out: new List('value').head,
        },{
          cxt: 'simple test',
          in: [
            new List('value').fill([123, 456, 789, 0]).head,
            0
          ],
          out: new List('value').fill([123, 456, 789]).head,
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
