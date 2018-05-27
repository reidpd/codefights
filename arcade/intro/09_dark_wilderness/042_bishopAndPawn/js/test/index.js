const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // bishopAndPawn()
      ins_and_outs: [
        { // a -> h === W -> E, 1 -> 8 === S -> N
          cxt: 'returns true for pawn that is two diagonals NE of bishop',
          in: ['a1', 'c3'], // bishop, pawn
          out: true,
        }, {
          cxt: '',
          in: ['h1', 'h3'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ['a5', 'c3'],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['g1', 'f3'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ['e7', 'd6'],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['e7', 'a3'],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['e3', 'a7'],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['a1', 'h8'],
          out: true,
        }, {
          cxt: 'simple test',
          in: ['a1', 'h7'],
          out: false,
        }, {
          cxt: 'simple test',
          in: ['h1', 'a8'],
          out: true,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // createBoard()
      ins_and_outs: [
        {
          cxt: 'should create an array of arrays of strings representing spaces on a chessboard',
          in: [],
          out: [
            ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
            ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
            ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
            ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
            ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
            ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
            ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
            ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1']
          ],
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          const result = param.fn();
          param.out.forEach((row, i) => row.forEach((col, j) => {
            expect(result[i][j]).to.deep.equal(col);
          }));
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
