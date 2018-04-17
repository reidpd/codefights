const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isTandemRepeat()
      ins_and_outs: [
        {
          cxt: 'returns true for strings that are double concats',
          in: 'tandemtandem',
          out: true,
        },{
          cxt: 'returns false for strings that are triple concats',
          in: 'qqq',
          out: false,
        },{
          cxt: 'returns false for imperfect concats w/ extra chars',
          in: '2w2ww',
          out: false,
        },{
          cxt: 'returns false for non-matching strings',
          in: 'hophey',
          out: false,
        },{
          cxt: 'returns true for double concat strings',
          in: 'CodeFightsCodeFights',
          out: true,
        },{
          cxt: 'returns true for double concat strings',
          in: 'interestinterest',
          out: true,
        },{
          cxt: 'returns true for double concat strings',
          in: 'aa',
          out: true,
        },{
          cxt: 'returns false for non-matching strings',
          in: 'ab',
          out: false,
        },{
          cxt: 'returns false for strings that differ by capitalization',
          in: 'stringString',
          out: false,
        },{
          cxt: 'returns false for more than 2 concatenations',
          in: 'truetruetrue',
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
