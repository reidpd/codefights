const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // isCryptSolution()
      ins_and_outs: [
        {
          cxt: 'returns true if the given key/val legend creates a correct & valid arithmetic equation out of the crypt words',
          in: [ // crypt, solution
            ["SEND", "MORE", "MONEY"],
            [
              ['O', '0'],
              ['M', '1'],
              ['Y', '2'],
              ['E', '5'],
              ['N', '6'],
              ['D', '7'],
              ['R', '8'],
              ['S', '9']
            ]
          ],
          out: true,
        },{
          cxt: 'first two numbers have leading zeroes, making the fn return false',
          in: [
            ["TEN", "TWO", "ONE"],
            [
              ['O', '1'],
              ['T', '0'],
              ['W', '9'],
              ['E', '5'],
              ['N', '4']
            ]
          ],
          out: false,
        },{
          cxt: 'simple test',
          in: [
            ["ONE", "ONE", "TWO"],
            [
              ["O","2"],
              ["T","4"],
              ["W","6"],
              ["E","1"],
              ["N","3"]
            ]
          ],
          out: true,
        },{
          cxt: 'leading zeroes return false',
          in: [
            ["ONE", "ONE", "TWO"],
            [
              ["O","0"],
              ["T","1"],
              ["W","2"],
              ["E","5"],
              ["N","6"]
            ]
          ],
          out: false,
        },{
          cxt: '0 + 0 === 0 is acceptable & returns true',
          in: [
            ["A", "A", "A"],
            [
              ["A", "0"]
            ]
          ],
          out: true,
        },{
          cxt: 'returns false if the resulting equation is not valid (5 + 6 !== 1)',
          in: [
            ["A", "B", "C"],
            [
              ["A","5"],
              ["B","6"],
              ["C","1"]
            ]
          ],
          out: false,
        },{
          cxt: '00 is not an acceptable due to leading zeros',
          in: [
            ["AA","AA","AA"],
            [
              ["A", "0"]
            ]
          ],
          out: false,
        },{
          cxt: '1 + 1 !== 1; return false',
          in: [
            ["A", "A", "A"],
            [
              ["A", "1"]
            ]
          ],
          out: false,
        },{
          cxt: '11 + 11 === 22',
          in: [
            ["AA", "AA", "BB"],
            [
              ["A", "1"],
              ["B", "2"]
            ]
          ],
          out: true,
        },{
          cxt: '100 + 201 !== 401; return false',
          in: [
            ["BAA","CAB","DAB"],
            [
              ["A","0"],
              ["B","1"],
              ["C","2"],
              ["D","4"]
            ]
          ],
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
