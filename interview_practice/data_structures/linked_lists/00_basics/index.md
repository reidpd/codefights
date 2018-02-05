This directory holds boilerplate code for basic CRUD functions related to linked lists. For a fuller tutorial on linked lists, check out '../tutorial/index.md'.

// Table of Contents

A. Simple Nodes
  1. CREATE
    - a blank node
    - a node with only this.val
    - a node with this.val && this.next
    - a node with this.val, this.next && this.prev
  2. READ
  3. UPDATE
  4. DELETE

B. Singly-Linked Lists
  1. CREATE
    a. from array
    b. from obj
  2. DELETE
    a. at beginning
    b. at end
    c. in the middle (known-index)
    d. in the middle (unknown-index)
  3. UPDATE
    a. at beginning
    b. at end
    c. in the middle (known-index)
    d. in the middle (unknown-index)
  4. DELETE
    a. at beginning
    b. at end
    c. in the middle (known-index)
    d. in the middle (unknown-index)

C. Doubly-Linked Lists
  1. CREATE
    a. from array
    b. from obj
  2. DELETE
    a. at beginning
    b. at end
    c. in the middle (known-index)
    d. in the middle (unknown-index)
  3. UPDATE
    a. at beginning
    b. at end
    c. in the middle (known-index)
    d. in the middle (unknown-index)
  4. DELETE
    a. at beginning
    b. at end
    c. in the middle (known-index)
    d. in the middle (unknown-index)

////////////////////

A. Simple Nodes



B. Singly Linked Lists;

Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

1a. Create a singly linked list from
