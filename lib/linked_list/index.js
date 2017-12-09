"use strict";
// A singly linked list
class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
    this.tail = null;
  }

  getSize() {
    return this._size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  isEmpty() {
    return !!this._size;
  }

  get(index) {
    if (index < 0) {
      return null;
    }

    if (index > this._size - 1) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this._size - 1) {
      return this.tail;
    }  

    let i = 1;
    let tmpNode = this.head.next;

    while (i < index) {
      tmpNode = tmpNode.next;
      ++i;
    }

    return tmpNode;
    
  }

  contains(data) {
    let tmpNode = this.head;

    while (tmpNode) {
      if (data === node.data) {
        return true;
      }
      tmpNode = tmpNode.next;
    }

    return false;
  }

  // Inserts the specified element at the specified position in this list. Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices).
  add(data, position) {
    if(isNaN(position)) {
      throw new Error('can not add at index NaN');
    }

    if (position < 0) {
      throw new RangeError('index can not be negative')
    }

    if (position > this._size) {
      throw new RangeError('index is out of bound');
    }

    if (position > this._size) {
      return false;
    }

    if (this._size === 0 || position === 0) {
      this.addFirst(data);
    } else if (position === this._size) {
      this.addLast(data);
    } else {
      const prevNode = this.get(position - 1);
      const newNode = new Node(data);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      ++this._size;
    }
  }

  addLast(data) {
    const newNode = new Node(data);
    if (this._size === 0) {
      this.head = newNode;
      this.tail = this.head;
      ++this._size;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      ++this._size;
    }
  }

  addFirst(data) {
    const newNode = new Node(data);
  
    if (this._size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.head.next = this.tail;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this._size++;
  }

  removeAt(position) {
    if(isNaN(position)) {
      throw new Error('can not add at position NaN');
    }

    if (position < 0) {
      throw new RangeError('position can not be negative')
    }

    if (position >= this._size) {
      throw new RangeError('position is out of bound');
    }
    
    if (position === 0) {
      return this.removeFirst();
    } else if (position === this._size) {
      return this.removeLast();
    } else {
      const nodeAtPosition = this.get(position - 1);
      let nextNode = nodeAtPosition.next;
      nodeAtPosition.next = nextNode.next;
      nextNode = null;
    }

    this._size--;
    return true;
  }

  removeFirst() {
    if (this.head === null) {
      return false;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this._size--;

    return true;
  }

  removeLast() {
    if (this.head === null) {
      return false;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.get(this._size - 2);
      this.tail.next = null;
    }

    this._size--;

    return true;
  }

  toArray() {
    const resultArray = [];
    let tmpIndex = 0;
    let tmpNode = this.head;
    while (tmpIndex++ < this._size) {
      resultArray.push(tmpNode.data);
      tmpNode = tmpNode.next;
    }

    return resultArray;
  }

}

class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

export { LinkedList };
