const expect = require('chai').expect;
const fns = require('..').fns;
const createListFromArray = require('../../../00_basic/lists/single/js').createListFromArray;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // mergeTwoLinkedLists(l1, l2)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            createListFromArray([1,2,3]),
            createListFromArray([4,5,6])
          ],
          out: [1,2,3,4,5,6],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1, 1, 2, 4]),
            createListFromArray([0, 3, 5])
          ],
          out: [0, 1, 1, 2, 3, 4, 5],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([5, 10, 15, 40]),
            createListFromArray([2, 3, 20])
          ],
          out: [2, 3, 5, 10, 15, 20, 40],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1,1]),
            createListFromArray([2,4])
          ],
          out: [1,1,2,4],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([]),
            createListFromArray([1, 1, 2, 2, 4, 7, 7, 8])
          ],
          out: [1, 1, 2, 2, 4, 7, 7, 8],
        },{
          cxt: 'returns an empty list if given empty lists as input',
          in: [
            createListFromArray([]),
            createListFromArray([])
          ],
          out: [],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1,1,4]),
            createListFromArray([])
          ],
          out: [1,1,4],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1,1]),
            createListFromArray([0])
          ],
          out: [0,1,1],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([0]),
            createListFromArray([2])
          ],
          out: [0,2],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1]),
            createListFromArray([-1000000000, 1000000000])
          ],
          out: [-1000000000, 1, 1000000000],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([-1, -1, 0, 1]),
            createListFromArray([-1, 0, 0, 1, 1])
          ],
          out: [-1, -1, -1, 0, 0, 0, 1, 1, 1],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([-780990573, -670826849, -404817961, 242026249, 731519938]),
            createListFromArray([-815817641, -426491047, 437929670, 520408640])
          ],
          out: [-815817641, -780990573, -670826849, -426491047, -404817961, 242026249, 437929670, 520408640, 731519938],
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
