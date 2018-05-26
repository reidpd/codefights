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
            [
              [1, 0, 0, 2],
              [0, 5, 0, 1],
              [0, 0, 3, 5]
            ],
            [1],
            [0, 2]
          ],
          out: [
            [0, 2],
            [0, 5]
          ],
        },{
          cxt: 'removes row 1',
          in: [
            [
              [1,2,3],
              [4,5,6],
              [7,8,9]
            ],
            [0],
            []
          ],
          out: [
            [4,5,6],
            [7,8,9]
          ],
        },{
          cxt: 'removes row 2',
          in: [
            [
              [1,2,3],
              [4,5,6],
              [7,8,9]
            ],
            [1],
            []
          ],
          out: [
            [1,2,3],
            [7,8,9]
          ],
        },{
          cxt: 'removes row 3',
          in: [
            [
              [1,2,3],
              [4,5,6],
              [7,8,9]
            ],
            [2],
            []
          ],
          out: [
            [1,2,3],
            [4,5,6]
          ],
        },{
          cxt: 'removes column 1',
          in: [
            [
              [1,2,3],
              [4,5,6],
              [7,8,9]
            ],
            [],
            [0]
          ],
          out: [
            [2,3],
            [5,6],
            [8,9]
          ],
        },{
          cxt: 'removes column 2',
          in: [
            [
              [1,2,3],
              [4,5,6],
              [7,8,9]
            ],
            [],
            [1]
          ],
          out: [
            [1,3],
            [4,6],
            [7,9]
          ],
        },{
          cxt: 'removes column 3',
          in: [
            [
              [1,2,3],
              [4,5,6],
              [7,8,9]
            ],
            [],
            [2]
          ],
          out: [
            [1,2],
            [4,5],
            [7,8]
          ],
        },{
          cxt: 'removes multiple rows',
          in: [
            [
              [1,2,3],
              [4,5,6],
              [7,8,9]
            ],
            [0,2],
            []
          ],
          out: [
            [4,5,6]
          ],
        },{
          cxt: 'removes multiple columns',
          in: [
            [
              [1,2,3],
              [4,5,6],
              [7,8,9]
            ],
            [],
            [0,2]
          ],
          out: [
            [2],
            [5],
            [8]
          ],
        }
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
