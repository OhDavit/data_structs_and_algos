"use strict";

class DoublyLinkedList {
	constructor() {
		this.head = null;
		ths.tail = null;
		this._size = 0;
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

	get(index) {
	  if(this._size - 1 < index) {
	  	return null;
	  }	

	  if(index === 0) {
	  	return this.head;
	  }

	  if(index === this._size - 1) {
	  	return this.tail;
	  }

	  let tmpIndex = 1;
	  let tmpNode = this.head.next;
	  while(tmpIndex < index) {
	  	tmpNode = tmpNode.next;
	  	tmpIndex++;
	  }

	  return tmpNode;
	}

	add(data) {
		if(this._size === 0) {
			const newNode = new Node(data);
			this.tail.next = newNode;
			newNode.previous = tail.tail;
			this.tail = newNode;
		} else {
			const newNode = new Node(data);
			this.head = this.tail = newNode;
		}
		this._size++;
	}

	add(index, data) {

	}

	addFirst(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode; 
	}

	addLast(data) {

	}

	remove(data) {

	}

	removeAtPosition(position) {

	}

	removeFirst() {

	}

	removeLast(){

	}

	toArray() {

	}
}

class Node {
	constructor(value) {
		this.next = null;
		this.previous = null;
		this.data = value || null;
	}
}