const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // newNumeralSystem
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: 'G',
          out: ["A + G", "B + F", "C + E", "D + D"],
        },{
          cxt: 'simple test',
          in: 'A',
          out: ['A + A'],
        },{
          cxt: 'simple test',
          in: 'D',
          out: ["A + D", "B + C"],
        },{
          cxt: 'simple test',
          in: 'E',
          out: ["A + E", "B + D", "C + C"],
        },{
          cxt: 'simple test',
          in: 'F',
          out: ["A + F", "B + E", "C + D"],
        },{
          cxt: 'simple test',
          in: 'I',
          out: ["A + I", "B + H", "C + G", "D + F", "E + E"],
        },{
          cxt: 'simple test',
          in: 'K',
          out: ["A + K", "B + J", "C + I", "D + H", "E + G", "F + F"],
        },{
          cxt: 'simple test',
          in: 'L',
          out: ["A + L", "B + K", "C + J", "D + I", "E + H", "F + G"],
        },{
          cxt: 'simple test',
          in: 'O',
          out: ["A + O", "B + N", "C + M", "D + L", "E + K", "F + J", "G + I", "H + H"],
        },{
          cxt: 'simple test',
          in: 'P',
          out: ["A + P", "B + O", "C + N", "D + M", "E + L", "F + K", "G + J", "H + I"],
        },{
          cxt: 'simple test',
          in: 'S',
          out: ["A + S", "B + R", "C + Q", "D + P", "E + O", "F + N", "G + M", "H + L", "I + K", "J + J"],
        },{
          cxt: 'simple test',
          in: 'T',
          out: ["A + T", "B + S", "C + R", "D + Q", "E + P", "F + O", "G + N", "H + M", "I + L", "J + K"],
        },{
          cxt: 'simple test',
          in: 'W',
          out: ["A + W", "B + V", "C + U", "D + T", "E + S", "F + R", "G + Q", "H + P", "I + O", "J + N", "K + M", "L + L"],
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
