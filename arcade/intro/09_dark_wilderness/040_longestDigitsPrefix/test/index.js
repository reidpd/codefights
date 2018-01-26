const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // longestDigitsPrefix()
      ins_and_outs: [
        {
          cxt: 'returns only digit prefix to string',
          in: ['123aa1'],
          out: '123',
        }, {
          cxt: 'returns entire string if all digits',
          in: ['0123456789'],
          out: '0123456789',
        }, {
          cxt: 'white space proof',
          in: ['  3) always check for whitespaces'],
          out: '',
        }, {
          cxt: 'simple test',
          in: ['12abc34'],
          out: '12',
        }, {
          cxt: 'returns empty string if no digits prefix',
          in: ['the output is 42'],
          out: '',
        }/*, {
          cxt: '',
          in: [],
          out: ,
        }, */
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
          cxt: '',
          in: [],
          out: ,
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
