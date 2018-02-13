const node = require('../../../nodes/js');

// B1: Singly-Linked Lists: CREATE from array

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  fill(arr) {
    while (arr.length !== 0) { this.push(arr.shift()); }
    return this;
  }

  push(item) {
    const newTail = node.createFlex(item));
    if (this._length === 0) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) { currentNode = currentNode.next; }
      currentNode.next = newTail;
      this.tail = newTail;
    }
    this._length += 1;
    return this;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this._length = 0;
    return this;
  }

  pop() {
    if (!this.head) { return null; }
    if (this._length === 1) {
      let returnValue = this.tail.val;
      this._length = 0;
      this.head = this.tail = null;
      return returnValue;
    }
    let currentNode = this.head;
    let oldNode, popVal;
    while (currentNode !== this.tail) {
      let oldNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode === this.tail) {
        popVal = currentNode.val;
        this.tail = oldNode;
        this.tail.next = null;
        break;
      }
    }
    this._length--;
    return popVal;
  }

  unshift(val) {
    let tailValue;
    if (this._length === 0) { tailValue = { val: val, next: null } }
    else { tailValue = this.tail; }
    let newThis = {
      head: {
        val: val,
        next: this.head
      },
      tail: this.tail,
      length: this._length += 1
    }
    this.head = newThis.head;
    this.tail = tailValue;
    this._length = newthis._length;
    return this;
  }

  shift() {
    if (this._length === 0) { return null; }
    let shiftValue = this.head.val;
    if (this._length === 1) {
      this.head = null;
      this.tail = null;
      this._length = 0;
    } else {
      let newThis = {
        head: {
          val: this.head.next.val,
          next: this.head.next.next
        },
        tail: this.tail,
        length: this._length - 1
      }

      this.head = newThis.head;
      this.tail = newThis.tail;
      this._length = newthis._length;
    }
    return shiftValue;
  }

  get(index) {
    if (this.head === null || index >= this._length) { return null; }
    let currentNode = this.head;
    let indexCounter = 0;
    while (indexCounter !== index) {
      currentNode = currentNode.next;
      indexCounter++;
    }
    return currentNode.val;
  }

  set(index, val) {
    let indexCounter = 0;
    let currentNode = this.head;
    while (indexCounter !== index) {
      currentNode = currentNode.next;
      indexCounter++;
    }
    currentNode.val = val;
    return this;
  }

  remove(index) {
    let removeValue;
    if (this._length === 1) {
      removeValue = this.head.val;
      this.head = null;
    } else if (index === this._length - 1) {
      removeValue = this.tail.val;
      let newTailValue = this.__getNodeAt(index-1);
      this.tail = { val: newTailValue, next: null }
    } else {
      // let indexCounter = 0;
      // let currentNode = this.head;
      // while (indexCounter !== index) {
      //   currentNode = currentNode.next;
      //   indexCounter++;
      // }
      // removeValue = currentNode.val;
      // currentNode.val = currentNode.next.val;
      // currentNode.next = currentNode.next.next;
      let previous = this.__getNodeAt(index-1);
      removeValue = previous.next.val;
      previous.next = previous.next.next;
    }
    this._length--;
    return removeValue;
  }

  reverse() {
    let indexCounter = 0;
    let currentNode = this.__getNodeAt(indexCounter);
    while (indexCounter < this._length - 1) {
      let oldNode = currentNode;
      indexCounter++;
      let newNode = {
        val: this.__getNodeAt(indexCounter).val,
        next: oldNode
      }
      currentNode = newNode;
    }
    this.head = currentNode;
    let finalNode = this.__getNodeAt(this._length - 1);
    finalNode.next = null;
    this.tail = finalNode;
    return this;
  }
}
//
// const createSingleElElFromArray = (arr) => {
//   let newNode = node.createSingle(arr.shift());
//   console.log(newNode);
//   while (arr.length > 0) {
//     newNode = traverseDownAndUpdate(newNode, 'next', null, createSingle(arr.shift()));
//   }
//   return newNode;
// };
//
// const traverseDownAndUpdate = (node, searchProp, searchVal, updateVal) => {
//   let newNode = node;
//   if (searchVal) {
//     while (!node[searchProp] || node[searchProp] !== searchVal) { console.log('!searchVal', newNode.next);newNode = newNode.next; }
//   } else {
//     while (!node[searchProp] || node[searchProp] !== searchVal) { console.log('searchVal');newNode = newNode.next; }
//   }
//   const nextVal = node.readProp(newNode, 'next') !== null ? newNode.next: null;
//   node.updateReadProp(newNode, 'next', node.createSingle(updateVal, nextVal))
//   return node;
// }

module.exports = { List, node };
