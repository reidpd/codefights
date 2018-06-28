const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // minimalNumberOfCoins(coins, price)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [1,2,10],
            28
          ],
          out: 6,
        },{
          cxt: 'simple test',
          in: [
            [1,5,10,100],
            239
          ],
          out: 10,
        },{
          cxt: 'simple test',
          in: [
            [1],
            8
          ],
          out: 8,
        },{
          cxt: 'simple test',
          in: [
            [1,2,20,60,120],
            150
          ],
          out: 7,
        },{
          cxt: 'simple test',
          in: [
            [1,3,6,30],
            45
          ],
          out: 4,
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
