const expect = require('chai').expect;
const Node = require('..').Node;

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
});
