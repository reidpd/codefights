const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // validTime()
      ins_and_outs: [
        {
          cxt: 'returns true for two strings joined by a semi-colon that are respectively between 0-23 & 00-59',
          in: ["13:58"],
          out: true,
        },{
          cxt: 'returns false for strings with hours that go beyond 23',
          in: ["25:51"],
          out: false,
        },{
          cxt: 'returns false for minutes that go beyond 59',
          in: ["02:76"],
          out: false,
        },{
          cxt: 'returns false for 24:00',
          in: ["24:00"],
          out: false,
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
