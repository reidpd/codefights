const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // decipher(cipher)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: "10197115121",
          out: "easy",
        },{
          cxt: 'simple test',
          in: "98",
          out: "b",
        },{
          cxt: 'simple test',
          in: "122",
          out: "z",
        },{
          cxt: 'simple test',
          in: "1229897",
          out: "zba",
        },{
          cxt: 'simple test',
          in: "97989910010110210310410510610710810911011111211311411511611711811912012112297",
          out: "abcdefghijklmnopqrstuvwxyza",
        },{
          cxt: 'simple test',
          in: "10297115106108102108971061151041029897107106115981001029710711510010298",
          out: "fasjlflajshfbakjsbdfaksdfb",
        },{
          cxt: 'simple test',
          in: "11211111911310110810910097107108115111112119113101106107971101021101061021041149710511411497",
          out: "powqelmdaklsopwqejkanfnjfhrairra",
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
