const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isBeautifulString()
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ['bbbaacdafe'],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['aabbb'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ['bbc'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ['bbbaa'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ['abcdefghijklmnopqrstuvwxyzz'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ['abcdefghijklmnopqrstuvwxyz'],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['abcdefghijklmnopqrstuvwxyzqwertuiopasdfghjklxcvbnm'],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['fyudhrygiuhdfeis'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ['zza'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ['zyy'],
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
