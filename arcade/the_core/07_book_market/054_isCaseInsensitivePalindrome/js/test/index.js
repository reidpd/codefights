const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isCaseInsensitivePalindrome()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: 'AaBaa',
          out: true,
        },{
          cxt: 'simple test',
          in: 'abac',
          out: false,
        },{
          cxt: 'simple test',
          in: 'aBACaba',
          out: true,
        },{
          cxt: 'simple test',
          in: 'opOP',
          out: false,
        },{
          cxt: 'simple test',
          in: 'ZZzzazZzz',
          out: true,
        },{
          cxt: 'simple test',
          in: 'zzzzazzzz',
          out: true,
        },{
          cxt: 'simple test',
          in: 'ZZzzabzZzz',
          out: false,
        },{
          cxt: 'simple test',
          in: 'abcdcbA',
          out: true,
        },{
          cxt: 'simple test',
          in: 'abracabra',
          out: false,
        },{
          cxt: 'simple test',
          in: 'abcd',
          out: false,
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
