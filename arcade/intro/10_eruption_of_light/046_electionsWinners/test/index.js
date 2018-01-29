const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // electionsWinners()
      ins_and_outs: [
        {
          cxt: 'returns number of potential candidates who can get a clear majority of votes over the rest',
          in: [[2, 3, 5, 2], 3],
          out: 2,
        }, {
          cxt: 'returns 0 if there is a tie && no one is left to cast new votes',
          in: [[1, 3, 3, 1, 1], 0],
          out: 0,
        }, {
          cxt: 'returns 1 if one candidate has a clear majority and no more votes are left',
          in: [[5, 1, 3, 4, 1], 0],
          out: 1,
        }, {
          cxt: 'returns the length of candidates if everyone is tied and only one vote is left',
          in: [[1, 1, 1, 1], 1],
          out: 4,
        }, {
          cxt: 'returns 0 if all candidates are tied and no votes are left',
          in: [[1,1,1,1], 0],
          out: 0,
        }, {
          cxt: 'returns 2 if two candidates are tied and no one else can top them with remaining votes',
          in: [[3, 1, 1, 3, 1], 2],
          out: 2,
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
