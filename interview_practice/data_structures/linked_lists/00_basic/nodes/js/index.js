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

// A2 - Simple Nodes: READ

const readNodeProp = (node, prop) => node[prop];

// A3 - Simple Nodes: UPDATE

const updateNodePropReadNode = (node, prop, newVal) => { node[prop] = newVal; return node; };

const updateAndReadNodeProp = (node, prop, newVal) => { node[prop] = newVal; return node[prop]; }

// A4 - Simple Nodes: DELETE

const deleteNodePropReadNode = (node, prop) => { delete node[prop]; return node; }

module.exports = {
  fns: [
    blankNode,
    nodeWithVal,
    createSingleDirNode,
    createFlexDirNode,
    readNodeProp,
    updateNodePropReadNode,
    updateAndReadNodeProp,
    deleteNodePropReadNode,
  ],
  blank: blankNode,
  withVal: nodeWithVal,
  createSingle: createSingleDirNode,
  createFlex: createFlexDirNode,
  readProp: readNodeProp,
  updatePropReadNode: updateNodePropReadNode,
  updateReadProp: updateAndReadNodeProp,
  deleteProp: deleteNodePropReadNode,
};
