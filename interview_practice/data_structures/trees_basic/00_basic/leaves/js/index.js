class TreeNode {
  /*

  */
  constructor(parent, children = [], level = 0, props, vals) {
    this.parent = parent;
    this.children = this.formChildren(children);
    this.siblings = this.parent.children.filter((node, idx, arr) => arr.indexOf(this) !== idx);
    this.isRoot = !this.parent;
    this.isLeaf = this.children.length === 0;
    this.level = level;
    this.data = {};
    props.forEach((propName, idx) => this.data[propName] = vals[idx]);
  }

  formChildren(nodes) => nodes.map((node, idx) => new TreeNode(this, node.children, this.level+1, node.props, node.vals);

  addChildren(nodes) => nodes.forEach(node => this.children.push(new TreeNode(this, node.children, this.level+1, node.props, node.vals)));

  // nodeA_isSiblingOf_NodeB_by_compareFunc(nodeA, nodeB, compareFunc) {
  //   this.siblings.some(otherNode => compareFunc(nodeA, otherNode))
  // }

  isSiblingOf(nodeB) { return this.siblings.some(otherNode => otherNode === nodeB); }

  isDescendantOf(thisNode, searchNode, firstCall = true) {
    let nodeA = firstCall ? this : thisNode;
    if (nodeA) {
      if (nodeA === searchNode) { return true }
      else { return nodeA.isDescendantOf(nodeA.parent, searchNode, false) }
    }
    return false;
  }

  isAncestorOf(thisNode, searchNode, firstCall = true) {
    let node = firstCall ? this : thisNode;
    if (node) {
      if (node === searchNode) { return true }
      else {
        node.children.forEach(childNode => {
          return node.isAncestorOf(childNode, searchNode, false);
        })
      }
    }
    return false;
  }
}

module.exports = { TreeNode }
