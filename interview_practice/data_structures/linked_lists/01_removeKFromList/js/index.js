// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

const List = require('../../00_basic/lists/single/js/').List;

const removeKFromList = (l, k) => {
  const returnList = new List();
  let node = l;
  while (node.next) {
    if (node.value !== k) { returnList.push() }
    node = node.next;
  }
  return returnList; // still not quite right
};

const listNode = x => {
  this.value = x;
  this.next = null;
}

module.exports = { fns: [ removeKFromList ] };
