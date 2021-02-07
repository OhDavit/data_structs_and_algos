// As array shift operation is expensive http://code.stephenmorley.org/javascript/queues/ approach is adopted

export class Queue {
  list: any[];
  private offset: number;

  constructor() {
    this.list = [];
    this.offset = 0;
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

    const item = this.list[this.offset];
    this.offset++;

    if (this.offset * 2 >= this.list.length) {
      this.list = this.list.slice(this.offset);
      this.offset = 0;
    }

    return item;
  }

  // Retrieves the head of this queue
  peek() {
    return (this.list.length > 0 ? this.list[this.offset] : null);
  }

  size() {
    return this.list.length;
  }
}
