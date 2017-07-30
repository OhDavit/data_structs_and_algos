"use strict";
// A singly linked list
class LinkedList {
	constructor() {
		this.root = null;
		this.size = 0;
		this.tail = null;
	}
	
	isEmpty() {
		return !!this.size;
	}

  contains(node) {
    let tmpNode = this.root;

    while(tmpNode) {
      if(tmpNode.data === node.data) {
        return true;
      }
      tmpNode = tmpNode.next;
    }

    return false;
  }

  insert(position, data) {
    if (this.size === 0) {
      this.root = new Node(data);
      this.tail = this.root;
      ++this.size;
    } else if (position > this.size) {
      throw new Error('desired position is out of bound');
    } else if (position === this.size) {
      const newNode = new Node(data);
      this.tail.next = newNode;
      this.tail = newNode;
      ++this.size;
    } else {
      const prevNode = this.get(position);
      const newNode = new Node(data);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      ++this.size;
    }
  }

  removeAt(position) {
    if (position > this.size) {
      return false;
    } else if (position === 0) {
      const next = this.root.next;
      this.root = null;//just in case
      this.root = next;
    } else if (position === this.size) {
      this.tail = null; // just in case
      this.tail = this.get(this.size - 1);
      this.tail.next = null;
    } else {
      const nodeAtPosition = this.get(position - 1);
      let nextNode = nodeAtPosition.next;
      nodeAtPosition.next = nextNode.next;
      nextNode = null;
    }

    this.size--;
    return true;
  }

  get(position) {
    if (position > this.size || this.size === 0) {
      return null;
    } else if (position === this.size) {
      return this.tail;
    } else {
      let index = 0;
      let currentNode = this.root;

      while (index < position) {
        currentNode = currentNode.next;
        ++index;
      }

      return currentNode;
    }
  }
}

class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

const list = new LinkedList();

list.insert(0, 4);
list.insert(1, 3);
list.insert(2, 2);
console.log(list.size);
list.removeAt(0);
list.removeAt(2);
console.log(list.size);
