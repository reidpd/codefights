const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // killKthBit(n,k)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [37,3],
          out: 33,
        },{
          cxt: 'simple test',
          in: [37,4],
          out: 37,
        },{
          cxt: 'simple test',
          in: [37,2],
          out: 37,
        },{
          cxt: 'simple test',
          in: [0,4],
          out: 0,
        },{
          cxt: 'simple test',
          in: [2147483647,16],
          out: 2147450879,
        },{
          cxt: 'simple test',
          in: [374823748,13],
          out: 374819652,
        },{
          cxt: 'simple test',
          in: [2734827,4],
          out: 2734819,
        },{
          cxt: 'simple test',
          in: [1084197039,15],
          out: 1084197039,
        },{
          cxt: 'simple test',
          in: [1160825071,3],
          out: 1160825067,
        },{
          cxt: 'simple test',
          in: [2039063284,4],
          out: 2039063284,
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
