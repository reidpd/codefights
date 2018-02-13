const node = require('../../../nodes/js');

// B1: Singly-Linked Lists: CREATE from array

class List {
  constructor() {
    this.head = null;
    // this.tail = null;
    this._length = 0;
  }

  fill(arr) {
    while (arr.length !== 0) { this.push(arr.shift()); }
    return this;
  }

  push(item) {
    const newTail = node.createSingle(item);
    if (this._length === 0) {
      this.head = newTail;
      // this.tail = newTail;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) { currentNode = currentNode.next; }
      currentNode.next = newTail;
      // this.tail = newTail;
    }
    this._length += 1;
    return this;
  }

  clear() {
    this.head = null;
    // this.tail = null;
    this._length = 0;
    return this;
  }

  pop() {
    if (!this.head) { return null; }
    if (this._length === 1) {
      const returnValue = this.head;
      this._length = 0;
      this.head = null;
      return returnValue;
    }
    let oldTail, currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    oldTail = currentNode.next;
    currentNode.next = null;
    this._length--;
    return oldTail;
  }

  unshift(data) {
    const originalHead = this.head;
    this.head = node.createSingle(data, originalHead);
    this._length++;
    return this._length;
  }

  shift() {
    if (this._length === 0) { return undefined } else { this._length--; }
    const shiftValue = this.head.data;
    this.head = this.head.next;
    return shiftValue;
  }

  get(index) {
    if (index >= this._length || index <= this._length * -1) { return undefined }
    if (index < 0) { index = this._length + index }
    let idx = 0, currentNode = this.head;
    while (idx !== index) {
      currentNode = currentNode.next
      idx++;
    }
    return currentNode.data;
  }

  set(index, val) {
    if (index >= this._length || index <= this._length*-1) { return undefined }
    if (index < 0) { index = this._length + index }
    let idx = 0, currentNode = this.head;
    while (idx !== index) {
      currentNode = currentNode.next
      idx++;
    }
    currentNode.data = val;
    return this;
  }

  remove(index) {
    if (index >= this._length || index <= this._length * -1) { return undefined }
    if (index < 0) { index = this._length + index }
    let removed_data, x = 0, currentNode = this.head;
    if (index === 0) {
      removed_data = this.head.data;
      this.head = this.head.next;
    } else {
      while (x !== index - 1) { currentNode = currentNode.next; x++; }
      removed_data = currentNode.next.data;
      currentNode.next = index === this._length-1 ? null : currentNode.next.next;
    }
    this._length--;
    return removed_data;
  }

  reverse() {
    if (this._length === 0) { return null }
    const originalLength = this._length;
    const reversal = new List();
    reversal.head = node.createSingle(this.pop().data);
    reversal._length++;
    let currentNode = reversal.head;
    while (this._length !== 0) {
      const lastItem = this.pop();
      currentNode.next = this.length === 0 ? null : node.createSingle(lastItem.data);
      reversal._length++;
      currentNode = currentNode.next;
    }
    this.head = reversal.head;
    this._length = reversal._length;
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
