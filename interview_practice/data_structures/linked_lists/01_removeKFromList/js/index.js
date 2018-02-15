// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

// This codefights challenge asks in the explanation for a linked list, but the tests are asking for arrays.

const List = require('../../00_basic/lists/single/js/').List;

const removeKFromList = (l, k) => {
  const returnList = new List('value'); // []
  let node = l;
  while (node) {
    if (node.value !== k) { returnList.push(node.value) }
    node = node.next;
  }
  return returnList.head; // returnList
};

module.exports = { fns: [ removeKFromList ] };
