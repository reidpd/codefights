const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // launchSequenceChecker(systemNames, stepNumbers)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
            [1, 10, 11, 2, 12, 111]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            ["stage_1", "stage_1", "stage_2", "dragon"],
            [2, 1, 12, 111]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            ["", "", ""],
            [00, 01, 02]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            ["", "", ""],
            [00, 01, 02]
          ],
          out: true,
        },{
          cxt: 'simple test',
          in: [
            ["", "", ""],
            [00, 01, 02]
          ],
          out: true,
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
