const Node = require('../../../nodes/js').Node;

// B1: Singly-Linked Lists: CREATE from array

class List {
  constructor(dataPropName) {
    this.head = null;
    this.dataPropName = dataPropName || 'data';
    // this.tail = null;
    this._length = 0;
  }

  fill(arr) {
    while (arr.length !== 0) { this.push(arr.shift()); }
    return this;
  }

  push(item) {
    const newTail = new Node(item, this.dataPropName, null);
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
    this.head = new Node(data, this.dataPropName, originalHead);
    this._length++;
    return this._length;
  }

  shift() {
    if (this._length === 0) { return undefined } else { this._length--; }
    const shiftValue = this.head[this.dataPropName];
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
    return currentNode[this.dataPropName];
  }

  set(index, val) {
    if (index >= this._length || index <= this._length*-1) { return undefined }
    if (index < 0) { index = this._length + index }
    let idx = 0, currentNode = this.head;
    while (idx !== index) {
      currentNode = currentNode.next
      idx++;
    }
    currentNode[this.dataPropName] = val;
    return this;
  }

  remove(index) {
    if (index >= this._length || index <= this._length * -1) { return undefined }
    if (index < 0) { index = this._length + index }
    let removed_data, x = 0, currentNode = this.head;
    if (index === 0) {
      removed_data = this.head[this.dataPropName];
      this.head = this.head.next;
    } else {
      while (x !== index - 1) { currentNode = currentNode.next; x++; }
      removed_data = currentNode.next[this.dataPropName];
      currentNode.next = index === this._length-1 ? null : currentNode.next.next;
    }
    this._length--;
    return removed_data;
  }

  reverse() {
    if (this._length === 0) { return null }
    const originalLength = this._length;
    const reversal = new List(this.dataPropName);
    reversal.head = new Node(this.pop()[this.dataPropName], this.dataPropName, null);
    reversal._length++;
    let currentNode = reversal.head;
    while (this._length !== 0) {
      const lastItem = this.pop();
      currentNode.next = this.length === 0 ? null : new Node(lastItem[this.dataPropName], this.dataPropName, null);
      reversal._length++;
      currentNode = currentNode.next;
    }
    this.head = reversal.head;
    this._length = reversal._length;
    return this;
  }

  indexOf(val, key) {
    if (!this.head) { return null }
    let currentNode = this.head, currentIdx = 0;
    while (currentNode.next) {
      if (currentNode[this.dataPropName] === val || currentNode[this.dataPropName][key] === val) {
        return currentIdx;
      }
      currentIdx++;
      currentNode = currentNode.next;
    }
    return null;
  }

}

const createListFromArray = (arr, list = {}, index = 0) => {
  if (arr.length === 0) { return null; } else {
    list.value = arr.shift();
    list.index = index++;
    list.next = createListFromArray(arr, {}, index);
  }
  return list;
}

module.exports = { List, Node, createListFromArray };
