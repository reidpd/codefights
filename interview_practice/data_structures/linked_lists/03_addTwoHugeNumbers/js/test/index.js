const expect = require('chai').expect;
const fns = require('..').fns;
const createListFromArray = require('../../../00_basic/lists/single/js').createListFromArray;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // addTwoHugeNumbers(a,b)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            createListFromArray([9876, 5432, 1999]),
            createListFromArray([1, 8001]),
          ],
          out: createListFromArray([9876, 5434, 0]),
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([123, 4, 5]),
            createListFromArray([100, 100, 100]),
          ],
          out: createListFromArray([223, 104, 105]),
        },{
          cxt: 'arrs filled with only a single 0 returns the input given',
          in: [
            createListFromArray([0]),
            createListFromArray([0]),
          ],
          out: createListFromArray([0]),
        },{
          cxt: 'adding 0 to the first num given returns the first num',
          in: [
            createListFromArray([1234, 1234, 0]),
            createListFromArray([0]),
          ],
          out: createListFromArray([1234, 1234, 0]),
        },{
          cxt: 'adding the second num to 0 returns the second num',
          in: [
            createListFromArray([0]),
            createListFromArray([1234, 123, 0]),
          ],
          out: createListFromArray([1234, 123, 0]),
        },{
          cxt: 'adding one to a very long num that only needs one to shorten itself, will return the shorter num with following zeros',
          in: [
            createListFromArray([1]),
            createListFromArray([9998, 9999, 9999, 9999, 9999, 9999]),
          ],
          out: createListFromArray([9999, 0, 0, 0, 0, 0]),
        },{
          cxt: 'adding one to a very long num that only needs one to shorten itself, will return the shorter num with following zeros',
          in: [
            createListFromArray([1]),
            createListFromArray([9999, 9999, 9999, 9999, 9999, 9999]),
          ],
          out: createListFromArray([1, 0, 0, 0, 0, 0, 0]),
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([8339, 4510]),
            createListFromArray([2309]),
          ],
          out: createListFromArray([8339, 6819]),
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
