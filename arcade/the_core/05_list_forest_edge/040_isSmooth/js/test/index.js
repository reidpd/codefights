const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isSmooth(arr)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [7, 2, 2, 5, 10, 7],
          out: true,
        },{
          cxt: 'simple test',
          in: [-5, -5, 10],
          out: false,
        },{
          cxt: 'simple test',
          in: [4,2],
          out: false,
        },{
          cxt: 'simple test',
          in: [45, 23, 12, 33, 12, 453, -234, -45],
          out: false,
        },{
          cxt: 'simple test',
          in: [-12, 34, 40, -5, -12, 4, 0, 0, -12],
          out: true,
        },{
          cxt: 'simple test',
          in: [9, 0, 15, 9],
          out: false,
        },{
          cxt: 'simple test',
          in: [-6, 6, -6],
          out: false,
        },{
          cxt: 'simple test',
          in: [26, 26, -17],
          out: false,
        },{
          cxt: 'simple test',
          in: [-7, 5, 5, 10],
          out: false,
        },{
          cxt: 'simple test',
          in: [3, 4, 5],
          out: false,
        },{
          cxt: 'simple test',
          in: [-5, 3, -1, 9],
          out: false,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // findMiddle(arr)
      ins_and_outs: [
        {
          cxt: 'with an odd # of els, the fn should return the element whose index # is the same when counting from beginning & end of arr',
          in: [1,2,3,4,5,4,3,2,1], // odd # of els
          out: 5, // return the middle element
        },{
          cxt: 'with an even # of els, the fn should return sum of two els whose idx #s when counting from beginning & end only differ by 1',
          in: [1,2,3,4,5,5,4,3,2,1], // even # of els
          out: 10, // returns the sum of the two middle els
        }
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
