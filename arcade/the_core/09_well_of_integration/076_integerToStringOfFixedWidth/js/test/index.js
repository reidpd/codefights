const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // integerToStringOfFixedWidth(number, width)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            1234,
            2
          ],
          out: "34",
        },{
          cxt: 'simple test',
          in: [
            1234,
            4
          ],
          out: "1234",
        },{
          cxt: 'simple test',
          in: [
            1234,
            5
          ],
          out: "01234",
        },{
          cxt: 'simple test',
          in: [
            0,
            1
          ],
          out: "0",
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
