class Node {
  constructor(data, propName, nextVal, prevVal) {
    this.dataPropName = propName || 'data';
    this[this.dataPropName] = data;
    this.next = nextVal || null;
    this.prev = prevVal || null;
  }
}

module.exports = { Node };
