const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // areSimilar(a, b)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [1,2,3],
            [1,2,3]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [1,2,3],
            [2,1,3]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [1,2,2],
            [2,1,1]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            [1,1,4],
            [1,2,3]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            [1,2,3],
            [1,10,2]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            [2,3,1],
            [1,3,2]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [2,3,9],
            [10,3,2]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            [4,6,3],
            [3,4,6]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
            [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
            [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
          ],
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
