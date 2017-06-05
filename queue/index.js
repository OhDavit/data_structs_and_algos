"use strict";

// As array shift operation is expensive http://code.stephenmorley.org/javascript/queues/ approach is adopted
class Queue {

  constructor() {
    this.list = [];
    this.offset = 0;
  }

  clear() {
    this.list.length = 0;
  }

  getLength() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  enqueue(elem) {
    this.list.push(elem);
  }

  dequeue() {
    if (this.list.length === 0) return undefined;

    const item = this.list[this.offset];
    this.offset++;

    if (this.offset * 2 >= this.list.length) {
      this.list = this.list.slice(this.offset);
      this.offset = 0;
    }

    return item;
  }

  peek() {
    return (this.list.length > 0 ? this.list[this.offset] : undefined);
  }
}
