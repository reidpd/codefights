const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // replaceMiddle(arr)
      ins_and_outs: [
        {
          cxt: 'with an array with an even length, the input should be returned with the two middle elements should be summed together',
          in: [7, 2, 2, 5, 10, 7],
          out: [7, 2, 7, 10, 7],
        },{
          cxt: 'with an array with an odd length, the input array should be returned',
          in: [-5, -5, 10],
          out: [-5, -5, 10],
        },{
          cxt: 'with an array with an even length, the input should be returned with the two middle elements should be summed together',
          in: [45, 23, 12, 33, 12, 453, -234, -45],
          out: [45, 23, 12, 45, 453, -234, -45],
        },{
          cxt: 'with an array with an even length, the input should be returned with the two middle elements should be summed together',
          in: [2,8],
          out: [10],
        },{
          cxt: 'with an array with an odd length, the input array should be returned',
          in: [-12, 34, 40, -5, -12, 4, 0, 0, -12],
          out: [-12, 34, 40, -5, -12, 4, 0, 0, -12],
        },{
          cxt: 'with an array with an even length, the input should be returned with the two middle elements should be summed together',
          in: [9, 0, 15, 9],
          out: [9, 15, 9],
        },{
          cxt: 'with an array with an odd length, the input array should be returned',
          in: [-6, 6, -6],
          out: [-6, 6, -6],
        },{
          cxt: 'with an array with an odd length, the input array should be returned',
          in: [26, 26, -17],
          out: [26, 26, -17],
        },{
          cxt: 'with an array with an even length, the input should be returned with the two middle elements should be summed together',
          in: [-7, 5, 5, 10],
          out: [-7, 10, 10],
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
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
