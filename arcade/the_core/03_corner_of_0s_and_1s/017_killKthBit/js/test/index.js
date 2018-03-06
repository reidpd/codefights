const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // killKthBit(n,k)
      ins_and_outs: [
        {
          cxt: '37 to base 2 needs to be decrement, so the new number 33 should be returned after conversion',
          in: [37,3],
          out: 33,
        },{
          cxt: 'the xth-from-right bit is already 0, so return n',
          in: [37,4],
          out: 37,
        },{
          cxt: 'the xth-from-right bit is already 0, so return n',
          in: [37,2],
          out: 37,
        },{
          cxt: 'input of n === 0 should return 0',
          in: [0,4],
          out: 0,
        },{
          cxt: 'the xth-from-right bit equals 1, so kill the bit then return the new number after conversion',
          in: [2147483647,16],
          out: 2147450879,
        },{
          cxt: 'the xth-from-right bit equals 1, so kill the bit then return the new number after conversion',
          in: [374823748,13],
          out: 374819652,
        },{
          cxt: 'the xth-from-right bit equals 1, so kill the bit then return the new number after conversion',
          in: [2734827,4],
          out: 2734819,
        },{
          cxt: 'the xth-from-right bit is already 0, so return n',
          in: [1084197039,15],
          out: 1084197039,
        },{
          cxt: 'the xth-from-right bit equals 1, so kill the bit then return the new number after conversion',
          in: [1160825071,3],
          out: 1160825067,
        },{
          cxt: 'the xth-from-right bit is already 0, so return n',
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
    }, {
      fn: '', // convertToBase2
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [37],
          out: "100101",
        },{
          cxt: 'simple test',
          in: [33],
          out: "100001",
        }/*,{
          cxt: 'simple test',
          in: [],
          out: "",
        },*/
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // convertToBase10
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ["100101"],
          out: 37,
        },{
          cxt: 'simple test',
          in: ["100001"],
          out: 33,
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
