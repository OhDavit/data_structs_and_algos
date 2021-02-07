
// A singly linked list
class LinkedList {
  head: any;
  tail: any;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  getSize() {
    return this.size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  isEmpty() {
    return !!this.size;
  }

  get(index) {
    if (index < 0) {
      return null;
    }

    if (index > this.size - 1) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.size - 1) {
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
      if (data === tmpNode.data) {
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

    if (position > this.size) {
      throw new RangeError('index is out of bound');
    }

    if (position > this.size) {
      return false;
    }

    if (this.size === 0 || position === 0) {
      this.addFirst(data);
    } else if (position === this.size) {
      this.addLast(data);
    } else {
      const prevNode = this.get(position - 1);
      const newNode = new DataNode(data);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      ++this.size;
    }
  }

  addLast(data) {
    const newNode = new DataNode(data);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = this.head;
      ++this.size;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      ++this.size;
    }
  }

  addFirst(data) {
    const newNode = new DataNode(data);
  
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.head.next = this.tail;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  removeAt(position) {
    if(isNaN(position)) {
      throw new Error('can not add at position NaN');
    }

    if (position < 0) {
      throw new RangeError('position can not be negative')
    }

    if (position >= this.size) {
      throw new RangeError('position is out of bound');
    }
    
    if (position === 0) {
      return this.removeFirst();
    } else if (position === this.size) {
      return this.removeLast();
    } else {
      const nodeAtPosition = this.get(position - 1);
      let nextNode = nodeAtPosition.next;
      nodeAtPosition.next = nextNode.next;
      nextNode = null;
    }

    this.size--;
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

    this.size--;

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
      this.tail = this.get(this.size - 2);
      this.tail.next = null;
    }

    this.size--;

    return true;
  }

  toArray() {
    const resultArray = [];
    let tmpIndex = 0;
    let tmpNode = this.head;
    while (tmpIndex++ < this.size) {
      resultArray.push(tmpNode.data);
      tmpNode = tmpNode.next;
    }

    return resultArray;
  }

}

class DataNode {
  next: DataNode | null;
  data: any;
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}
