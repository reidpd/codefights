const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // firstReverseTry(arr)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [1,2,3,4,5],
          out: [5,2,3,4,1],
        },{
          cxt: 'empty array input returns an empty array',
          in: [],
          out: [],
        },{
          cxt: 'an input of an array with a size of one means returning the input array',
          in: [239],
          out: [239],
        },{
          cxt: 'simple test',
          in: [23, 54, 12, 3, 4, 56, 23, 12, 5, 324],
          out: [324, 54, 12, 3, 4, 56, 23, 12, 5, 23],
        },{
          cxt: 'an input of an array with a size of two means return the input array reversed',
          in: [-1,1],
          out: [1,-1],
        },{
          cxt: 'complicated test',
          in: [88, -101, -310, 818, 747, -888, -183, -687, -723, 188, -611, 677, -597, 293, -295, -162, -265, 368, 346, 81, -831, 198, -94, 685, -434, -241, -566, -397, 501, -183, 366, -669, 96, -592, 358, 598, 444, -929, 769, -361, -754, 218, -464, 332, 893, 422, -192, -287, -850, 543],
          out: [543, -101, -310, 818, 747, -888, -183, -687, -723, 188, -611, 677, -597, 293, -295, -162, -265, 368, 346, 81, -831, 198, -94, 685, -434, -241, -566, -397, 501, -183, 366, -669, 96, -592, 358, 598, 444, -929, 769, -361, -754, 218, -464, 332, 893, 422, -192, -287, -850, 88],
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
