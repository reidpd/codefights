const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // name
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: ['prettyandsimple@example.com'],
          out: 'example.com',
        }, {
          cxt: 'simple test',
          in: ['<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'],
          out: 'example.org',
        }, {
          cxt: 'simple test',
          in: ['someaddress@yandex.ru'],
          out: 'yandex.ru',
        }, {
          cxt: 'simple test',
          in: ["\" \"@xample.org"],
          out: 'xample.org',
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
