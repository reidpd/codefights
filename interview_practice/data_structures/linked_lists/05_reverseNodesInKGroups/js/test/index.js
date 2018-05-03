const expect = require('chai').expect;
const createListFromArray = require('../../../00_basic/lists/single/js').createListFromArray;
const fns = require('..').fns;
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // reverseNodesInKGroups(l,k)
      ins_and_outs: [
        {
          cxt: 'simple test',
          in: [
            createListFromArray([1, 2, 3, 4, 5]),
            2
          ],
          out: [2, 1, 4, 3, 5],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1, 2, 3, 4, 5]),
            1
          ],
          out: [1, 2, 3, 4, 5],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
            3
          ],
          out: [3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([239]),
            1
          ],
          out: [239],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1, 2, 3, 4]),
            2
          ],
          out: [2, 1, 4, 3],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
            3
          ],
          out: [3, 2, 1, 6, 5, 4, 9, 8, 7, 12, 11, 10],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
            4
          ],
          out: [4, 3, 2, 1, 8, 7, 6, 5, 12, 11, 10, 9],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([1000000000, -849483855, -1000000000, 376365554, -847904832]),
            4
          ],
          out: [376365554, -1000000000, -849483855, 1000000000, -847904832],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([376365554, -340557143, -849483855, 810952169, -847904832]),
            4
          ],
          out: [810952169, -849483855, -340557143, 376365554, -847904832],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([810952169, -849483855, -340557143, 376365554, -847904832]),
            2
          ],
          out: [-849483855, 810952169, 376365554, -340557143, -847904832],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([-503549928, -526666356, 262916773, -508129645, 992040586, 867794712, 24042453, -540165420, -417669299, 766910780]),
            2
          ],
          out: [-526666356, -503549928, -508129645, 262916773, 867794712, 992040586, -540165420, 24042453, 766910780, -417669299],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([-526666356, -503549928, -508129645, 262916773, 867794712, 992040586, -540165420, 24042453, 766910780, -417669299]),
            8
          ],
          out: [24042453, -540165420, 992040586, 867794712, 262916773, -508129645, -503549928, -526666356, 766910780, -417669299],
        },{
          cxt: 'simple test',
          in: [
            createListFromArray([24042453, -540165420, 992040586, 867794712, 262916773, -508129645, -503549928, -526666356, 766910780, -417669299]),
            6
          ],
          out: [-508129645, 262916773, 867794712, 992040586, -540165420, 24042453, -503549928, -526666356, 766910780, -417669299],
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
