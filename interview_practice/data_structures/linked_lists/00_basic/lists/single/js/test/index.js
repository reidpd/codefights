const expect = require('chai').expect;
const fns = require('..').fns;
const node = require('../../../../nodes/js');
const list = require('..');
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // list.createFromArr(array)
      ins_and_outs: [
        {
          cxt: 'returns a singly-linked list from an array',
          in: [
            [1,2,3]
          ],
          out: node.createSingle(1, node.createSingle(2, node.createSingle(3))),
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // traverseHeadToProp()
      ins_and_outs: [
        {
          cxt: 'should traverse the node down the tree & return that portion',
          in: [
            node.createSingle(1, node.createSingle(2, node.createSingle(3))),
            'val',
            3,
          ],
          out: node.createSingle(3),
        },
      ],
      run: param => {
        console.log(param);
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
