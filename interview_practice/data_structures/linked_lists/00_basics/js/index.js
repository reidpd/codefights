// A1 - Simple Nodes: CREATE

const blankNode = () => Object.assign({});

const nodeWithVal = val => {
  const node = { val };
  return Object.assign(node, {});
};

const createSingleDirNode = (val, next) => {
  let node = nodeWithVal(val);
  if (next) { node.next = next } else { node.next = null }
  return node;
}

const createFlexDirNode = (val, next, prev) => {
  let node = nodeWithVal(val);
  if (next) { node.next = next } else { node.next = null }
  if (prev) { node.prev = prev } else { node.prev = null }
  return node;
}

module.exports = {
  fns: [
    blankNode,
    nodeWithVal,
    createSingleDirNode,
    createFlexDirNode,
  ],
  nodeWithVal,
  createSingleDirNode,
  createFlexDirNode,
};
