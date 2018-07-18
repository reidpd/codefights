const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // stringsCrossover(inputArray, result)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            [
              "abc",
              "aaa",
              "aba",
              "bab"
            ],
            "bbb"
          ],
          out: 2,
        },{
          cxt: 'simple test',
          in: [
            [
              "aacccc",
              "bbcccc"
            ],
            "abdddd"
          ],
          out: 0,
        },{
          cxt: 'simple test',
          in: [
            [
              "a",
              "b",
              "c",
              "d",
              "e"
            ],
            "c"
          ],
          out: 4,
        },{
          cxt: 'simple test',
          in: [
            [
              "aa",
              "ab",
              "ba"
            ],
            "bb"
          ],
          out: 1,
        },{
          cxt: 'simple test',
          in: [
            [
              "a",
              "b",
              "c",
              "d",
              "e"
            ],
            "f"
          ],
          out: 0,
        },{
          cxt: 'simple test',
          in: [
            [
              "aaa",
              "aaa"
            ],
            "aaa"
          ],
          out: 1,
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
