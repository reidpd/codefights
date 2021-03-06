const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // name
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [1, 2, 3, 4, 5],
            2
          ],
          out: [2,3,0],
        },{
          cxt: 'simple test',
          in: [
            [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8],
            1
          ],
          out: [2,8,2],
        },{
          cxt: 'simple test',
          in: [
            [1],
            1
          ],
          out: [1,0,0],
        },{
          cxt: 'simple test',
          in: [
            [8],
            1
          ],
          out: [0,1,0],
        },{
          cxt: 'simple test',
          in: [
            [4, 14, 16],
            7
          ],
          out: [1,1,1],
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
