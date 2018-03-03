class Stack {
  constructor() {
    this.pile = [];
    this.length = this.pile.length;
    this.top = this.pile[this.length - 1];
    this.isEmpty = true;
  }

  add(item) {
    this.pile.push(item);
    this.length++;
    if (this.length > 0) { this.isEmpty = false }
    return this.top;
  }

  popTop() {
    const removed_item = this.pile.pop();
    this.length--;
    if (this.length === 0) { this.isEmpty = true }
    return removed_item;
  }
}

module.exports = { Stack }
