const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

const createBoard = require('../../../09_dark_wilderness/042_bishopAndPawn').fns[1];

describe("testing ", () => {
  const tests = [
    {
      fn: '', // chessKnight()
      ins_and_outs: [
        {
          cxt: 'returns 2 if only two moves are possible',
          in: ["a1"],
          out: 2,
        },{
          cxt: 'returns 6 if only six moves are possible',
          in: ["c2"],
          out: 6,
        },{
          cxt: 'returns 8 if all moves are possible',
          in: ["d4"],
          out: 8,
        },{
          cxt: 'returns 6 if only 6 moves are possible',
          in: ["g6"],
          out: 6,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // getCoords()
      ins_and_outs: [
        {
          cxt: 'should return an object containing y & x indices for a given search item on a given board',
          in: ["a1", createBoard()],
          out: { y: 7, x: 0 },
        },{
          cxt: 'should return an object containing y & x indices for a given search item on a given board',
          in: ["h8", createBoard()],
          out: { y: 0, x: 7 },
        },{
          cxt: 'should return an object containing y & x indices for a given search item on a given board',
          in: ["c5", createBoard()],
          out: { y: 3, x: 2 },
        },{
          cxt: 'should return return undefined if the search item cannot be found',
          in: ["j6", createBoard()],
          out: undefined,
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
