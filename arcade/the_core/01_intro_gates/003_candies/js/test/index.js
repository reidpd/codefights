const expect = require('chai').expect;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // candies()
      ins_and_outs: [
        {
          cxt: 'if 3 children have 10 candies, they can each have 3, so the fn should return 9 candies total',
          in: [3,10],
          out: 9,
        },{
          cxt: 'if only one child has two candies, he can eat both of them',
          in: [1,2],
          out: 2,
        },{
          cxt: 'return 0 if there are not enough candies for all the children to eat at least one',
          in: [10,5],
          out: 0,
        },{
          cxt: 'four children with four candies means each can have one, so the fn should return a total of 4',
          in: [4,4],
          out: 4,
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
