const expect = require('chai').expect;
const fns = require('..').fns;
const node = require('..');
console.log('fns === ', fns);

describe("testing ", () => {
  const tests = [
    {
      fn: '', // blankNode()
      ins_and_outs: [
        {
          cxt: 'should return a blank object',
          in: [],
          out: {},
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          console.log(param.fn());
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // node.withVal()
      ins_and_outs: [
        {
          cxt: 'should return an object with this.val equal to the input provided (string)',
          in: ['string'],
          out: { val: 'string' },
        },{
          cxt: 'should return an object with this.val equal to the input provided (integer)',
          in: [1],
          out: { val: 1 },
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // node.createSingleDir()
      ins_and_outs: [
        {
          cxt: 'should return a node with a val && a next if provided',
          in: [1, node.withVal(2)],
          out: { val: 1, next: node.withVal(2) },
        },{
          cxt: 'should return a node with a val && a next prop with val of null if no next input is provided',
          in: [1],
          out: { val: 1, next: null },
        }
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // node.createFlex()
      ins_and_outs: [
        {
          cxt: 'should return an obj with the val, and a next && prev props if input is provided for them',
          in: [
            2,
            node.withVal(3),
            node.withVal(1)
          ],
          out: { val: 2, next: node.withVal(3), prev: node.withVal(1) },
        },{
          cxt: 'should return an obj with the val, and a next prop if input is provided for it, and a prev prop of null if that is not provided',
          in: [
            1,
            node.withVal(2)
          ],
          out: { val: 1, next: node.withVal(2), prev: null },
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // node.readProp()
      ins_and_outs: [
        {
          cxt: 'should return the contents of the given nodes *prop* property',
          in: [ // node, prop
            { val: 1 },
            'val'
          ],
          out: 1,
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          expect(param.fn(...param.in)).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // updateNodePropReadNode()
      ins_and_outs: [
        {
          cxt: 'should update the given prop of the given node & return the node',
          in: [
            node.withVal('foo'),
            'val',
            'bar'
          ],
          out: node.withVal('bar'),
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          const result = param.fn(...param.in);
          expect(result).to.deep.equal(param.out);
        });
      }
    }, {
      fn: '', // updateAndReadNodeProp()
      ins_and_outs: [
        {
          cxt: 'should update the given prop of the given node && return the newly updated prop of the given node',
          in: [
            node.withVal('foo'),
            'val',
            'bar'
          ],
          out: 'bar',
        },{
          cxt: 'should return an updated prop on second reference',
          in: [
            node.withVal('foo'),
            'val',
            'bar'
          ],
          out: 'bar',
          test_cxt: 'testing second reference'
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          const result = param.fn(...param.in);
          if (param.test_cxt !== 'testing second reference') {
            expect(result).to.deep.equal(param.out);
          } else {
            let refNode = node.withVal('foo');
            let update = node.updatePropReadNode(refNode, 'val', 'bar');
            expect(node.readProp(update, 'val')).to.deep.equal(param.out);
          }
        });
      }
    }, {
      fn: '', // deleteNodePropReadNode()
      ins_and_outs: [
        {
          cxt: 'should return a node in which the given prop for deletion is now *undefined*',
          in: [
            node.withVal(1),
            'val'
          ],
          out: node.blank(),
        },
      ],
      run: param => {
        const cxt = param.fn.name + '() ' + param.cxt;
        it(cxt, () => {
          const result = param.fn(...param.in);

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
