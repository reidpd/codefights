const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // knapsackLight()
      ins_and_outs: [
        {
          cxt: 'returns value1 if either weight can be lifted with maxW but value1 is greater than value2',
          in: [10,5,6,4,8],
          out: 10,
        }, {
          cxt: 'returns value1 + value2 if both weights are equal to (or less than) maxW',
          in: [10,5,6,4,9],
          out: 16,
        }, {
          cxt: 'returns value2 if either weight can be lifted with maxW but value2 is higher than value1',
          in: [5,3,7,4,6],
          out: 7,
        }, {
          cxt: 'returns 0 if you cannot take anything because your maxW is lower than either item',
          in: [10,2,11,3,1],
          out: 0,
        }, {
          cxt: 'returns value1 if only weight1 can be lifted with maxW, despite value2 being higher',
          in: [15,2,20,3,2],
          out: 15,
        }, {
          cxt: 'returns value2 if either weight can be lifted with maxW but value2 is higher ',
          in: [2,5,3,4,5],
          out: 3,
        }, {
          cxt: 'returns value1 if either weight can be lifted but value1 is higher than value2',
          in: [4,3,3,4,4],
          out: 4,
        }, {
          cxt: 'returns value1 if either weight can be lifted but value1 is higher than value2, despite value1 being lighter',
          in: [3,5,3,8,10],
          out: 3,
        }
        /*
        {
          cxt: '',
          in: [],
          out: ,
        }
        */
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
