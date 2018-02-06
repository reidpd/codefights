const node = require('../../../nodes/js');

// B1: Singly-Linked Lists: CREATE from array

const createSingleElElFromArray = (arr) => {
  let newNode = node.createSingle(arr.shift());
  console.log(newNode);
  while (arr.length > 0) {
    newNode = traverseDownAndUpdate(newNode, 'next', null, createSingle(arr.shift()));
  }
  return newNode;
};

const traverseDownAndUpdate = (node, searchProp, searchVal, updateVal) => {
  let newNode = node;
  if (searchVal) {
    while (!node[searchProp] || node[searchProp] !== searchVal) { console.log('!searchVal', newNode.next);newNode = newNode.next; }
  } else {
    while (!node[searchProp] || node[searchProp] !== searchVal) { console.log('searchVal');newNode = newNode.next; }
  }
  const nextVal = node.readProp(newNode, 'next') !== null ? newNode.next: null;
  node.updateReadProp(newNode, 'next', node.createSingle(updateVal, nextVal))
  return node;
}

module.exports = {
  fns: [
    createSingleElElFromArray,
    traverseDownAndUpdate
  ],
  createFromArr: createSingleElElFromArray,
  traverseDownAndUpdate,

};
