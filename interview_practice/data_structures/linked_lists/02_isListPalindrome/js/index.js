// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function isListPalindrome(l) {
  const list = [];
  let node = l.head; // l
  while (node) { list.push(node.value); node = node.next; }
  let reversal = list.slice(0).reverse();
  return reversal.every((item, idx) => list[idx] === item);
}

module.exports = { fns: [ isListPalindrome ] };
