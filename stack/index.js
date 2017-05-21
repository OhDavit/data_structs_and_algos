"use strict";

class Stack {
  constructor() {
    this.list = [];
  }

  push(element) {
    this.list.push(element);
  }

  pop() {
    return this.list.pop();
  }

  isEmpty() {
    return !!this.list.length;
  }

  peek() {
    return this.list[0];
  }

  clear() {
    this.list.length = 0;
  }
}
