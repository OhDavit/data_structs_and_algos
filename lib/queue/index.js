"use strict";

// As array shift operation is expensive http://code.stephenmorley.org/javascript/queues/ approach is adopted
class Queue {

  constructor() {
    this.list = [];
    this._offset = 0;
  }

  clear() {
    this.list.length = 0;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  enqueue(elem) {
    this.list.push(elem);
  }

  // Retrieves and removes the head of this queue
  dequeue() {
    if (this.list.length === 0) {
      return null;
    } 

    const item = this.list[this._offset];
    this._offset++;

    if (this._offset * 2 >= this.list.length) {
      this.list = this.list.slice(this._offset);
      this._offset = 0;
    }

    return item;
  }

  // Retrieves the head of this queue
  peek() {
    return (this.list.length > 0 ? this.list[this._offset] : null);
  }

  size() {
    return this.list.length;
  }
}

module.exports.Queue = Queue;