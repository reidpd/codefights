const expect = require('chai').expect;
const fns = require('..').fns;
const Node = require('..').Node;
console.log(Node);
console.log('fns === ', fns);

describe("testing ", () => {
  let node;

  describe('Node instantiation testing', () => {
    it('should return a blank node with the input data provided', () => {
      node = new Node('string');
      expect(node.data).to.deep.equal('string');
    });

    it('should set the name of the data property to the specified string, if provided', () => {
      node = new Node('string', 'value');
      expect(node.data).to.deep.equal(undefined);
      expect(node.value).to.deep.equal('string');
    });

    it('should set the next parameter to the node, if provided', () => {
      node = new Node('string', 'value', 'nextNodeHere');
      expect(node.next).to.deep.equal('nextNodeHere');
    });

    it('should set the prev parameter to the node, if provided', () => {
      node = new Node('string', 'value', 'nextNodeHere', 'prevNodeHere');
      expect(node.prev).to.deep.equal('prevNodeHere');
    });

  });





  // const tests = [
  //   {
  //     fn: '', // blankNode()
  //     ins_and_outs: [
  //       {
  //         cxt: 'should return a blank object',
  //         in: [],
  //         out: {},
  //       },
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         expect(param.fn(...param.in)).to.deep.equal(param.out);
  //       });
  //     }
  //   }, {
  //     fn: '', // node.withData()
  //     ins_and_outs: [
  //       {
  //         cxt: 'should return an object with this.data equal to the object provided',
  //         in: [{ val: 'string' }],
  //         out: { data: { val: 'string' } },
  //       },{
  //         cxt: 'should return an object with this[propName] equal to the data obj provided, if a propName was provided as well',
  //         in: ['str', 'value'],
  //         out: { value: 'str' },
  //       }
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         expect(param.fn(...param.in)).to.deep.equal(param.out);
  //       });
  //     }
  //   }, {
  //     fn: '', // node.createSingleDir()
  //     ins_and_outs: [
  //       {
  //         cxt: 'should return a node with a data && a next if provided',
  //         in: [{val:1}, node.withData(2)],
  //         out: { data: { val: 1 }, next: node.withData(2) },
  //       },{
  //         cxt: 'should return a node with a data && a next prop with val of null if no next input is provided',
  //         in: [{val:1}],
  //         out: { data: { val: 1 }, next: null },
  //       },{
  //         cxt: 'should return node with a property named propName whose value is the data object provided as the first parameter',
  //         in: [1, null, 'value'],
  //         out: { value: 1, next: null },
  //       }
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         expect(param.fn(...param.in)).to.deep.equal(param.out);
  //       });
  //     }
  //   }, {
  //     fn: '', // node.createFlex()
  //     ins_and_outs: [
  //       {
  //         cxt: 'should return an obj with the data, and a next && prev props if input is provided for them',
  //         in: [
  //           {val:2},
  //           node.withData(3),
  //           node.withData(1)
  //         ],
  //         out: { data: { val: 2  }, next: node.withData(3), prev: node.withData(1) },
  //       },{
  //         cxt: 'should return an obj with the val, and a next prop if input is provided for it, and a prev prop of null if that is not provided',
  //         in: [
  //           {val:1},
  //           node.withData(2)
  //         ],
  //         out: { data: { val: 1 }, next: node.withData(2), prev: null },
  //       },{
  //         cxt: 'should return an obj with the data set to a property named propName, and a next && prev props if input is provided for them',
  //         in: [
  //           {val:2},
  //           node.withData(3),
  //           node.withData(1),
  //           'value',
  //         ],
  //         out: { value: { val: 2  }, next: node.withData(3), prev: node.withData(1) },
  //       },
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         expect(param.fn(...param.in)).to.deep.equal(param.out);
  //       });
  //     }
  //   }, {
  //     fn: '', // node.readProp()
  //     ins_and_outs: [
  //       {
  //         cxt: 'should return the contents of the given nodes *prop* property',
  //         in: [ // node, prop
  //           { val: 1 },
  //           'val'
  //         ],
  //         out: 1,
  //       },
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         expect(param.fn(...param.in)).to.deep.equal(param.out);
  //       });
  //     }
  //   }, {
  //     fn: '', // updateNodePropReadNode()
  //     ins_and_outs: [
  //       {
  //         cxt: 'should update the given prop of the given node & return the node',
  //         in: [
  //           node.withData('foo'),
  //           'data',
  //           'bar'
  //         ],
  //         out: node.withData('bar'),
  //       },
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         const result = param.fn(...param.in);
  //         expect(result).to.deep.equal(param.out);
  //       });
  //     }
  //   }, {
  //     fn: '', // updateAndReadNodeProp()
  //     ins_and_outs: [
  //       {
  //         cxt: 'should update the given prop of the given node && return the newly updated prop of the given node',
  //         in: [
  //           node.withData('foo'),
  //           'data',
  //           'bar'
  //         ],
  //         out: 'bar',
  //       },{
  //         cxt: 'should return an updated prop on second reference',
  //         in: [
  //           node.withData('foo'),
  //           'data',
  //           'bar'
  //         ],
  //         out: 'bar',
  //         test_cxt: 'testing second reference'
  //       },
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         const result = param.fn(...param.in);
  //         if (param.test_cxt !== 'testing second reference') {
  //           expect(result).to.deep.equal(param.out);
  //         } else {
  //           let refNode = node.withData('foo');
  //           let update = node.updatePropReadNode(refNode, 'data', 'bar');
  //           expect(node.readProp(update, 'data')).to.deep.equal(param.out);
  //         }
  //       });
  //     }
  //   }, {
  //     fn: '', // deleteNodePropReadNode()
  //     ins_and_outs: [
  //       {
  //         cxt: 'should return a node in which the given prop for deletion is now *undefined*',
  //         in: [
  //           node.withData(1),
  //           'data'
  //         ],
  //         out: node.blank(),
  //       },
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         const result = param.fn(...param.in);
  //
  //         expect(param.fn(...param.in)).to.deep.equal(param.out);
  //       });
  //     }
  //   }/*, {
  //     fn: '', // name
  //     ins_and_outs: [
  //       {
  //         cxt: 'simple test',
  //         in: [],
  //         out: true,
  //       },
  //     ],
  //     run: param => {
  //       const cxt = param.fn.name + '() ' + param.cxt;
  //       it(cxt, () => {
  //         expect(param.fn(...param.in)).to.deep.equal(param.out);
  //       });
  //     }
  //   }
  //   */
  // ];
  // tests.forEach((test, testIdx) => {
  //   test.fn = fns[testIdx]; // sets functions according to order set in index.js
  //   test.ins_and_outs.forEach(params => {
  //     params.fn = test.fn;
  //     test.run(params);
  //   });
  // });
});
