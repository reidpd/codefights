const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // swapLexOrder(str, pairs)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            "abdc", // str
            [
              [1,4], [3,4]
            ] // pairs
          ],
          out: "dbca",
        },{
          cxt: 'simple test',
          in: [
            "abcdefgh", // str
            [
              [1,4], [7,8]
            ] // pairs
          ],
          out: "dbcaefhg",
        },{
          cxt: 'simple test',
          in: [
            "acxrabdz", // str
            [
              [1,3], [6,8], [3,8], [2,7]
            ] // pairs
          ],
          out: "zdxrabca",
        },{
          cxt: 'simple test',
          in: [
            "z", // str
            [

            ] // pairs
          ],
          out: "z",
        },{
          cxt: 'simple test',
          in: [
            "dznsxamwoj", // str
            [
              [1,2], [3,4], [6,5], [8,10]
            ] // pairs
          ],
          out: "zdsnxamwoj",
        },{
          cxt: 'simple test',
          in: [
            "fixmfbhyutghwbyezkveyameoamqoi", // str
            [
              [8,5], [10,8], [4,18], [20,12], [5,2], [17,2], [13,25], [29,12],[22,2], [17,11]
            ] // pairs
          ],
          out: "fzxmybhtuigowbyefkvhyameoamqei",
        },{
          cxt: 'simple test',
          in: [
            "lvvyfrbhgiyexoirhunnuejzhesylojwbyatfkrv", // str
            [
              [13,23], [13,28], [15,20], [24,29], [6,7],
              [3,4], [21,30], [2,13], [12,15],
              [19,23], [10,19], [13,14], [6,16],
              [17,25], [6,21], [17,26], [5,6], [12,24]
            ] // pairs
          ],
          out: "lyyvurrhgxyzvonohunlfejihesiebjwbyatfkrv",
        },{
          cxt: 'simple test',
          in: [
            "a", // str
            [

            ] // pairs
          ],
          out: "a",
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
