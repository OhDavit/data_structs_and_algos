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

	add(index, data) {
		if(index < 0) throw new Error('index can not be negative value');

		if(index > this._size) throw new Error('index is out of bounds');

		if(index === 0) {
			this.addFirst(data);
		} else if (index === this._size) {
			this.addLast(data);
		} else {
			let tmpIndex = 1;
			let tmpNode = this.head.next;
			while(tmpIndex < index) {
				tmpNode = tmpNode.next;
			}

			let tmpPrevious = tmpNode.previous;
			const newNode = new Node(data);
			newNode.next = tmpNode;
			tmpPrevious.next = newNode;
			newNode.previous = tmpPrevious;
		}
	}

	addFirst(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode; 
		thi._size++;
	}

	addLast(data) {
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

	remove(data) {

	}

	removeAtPosition(position) {

	}

	removeFirst() {
	   if(this._size === 1) {
	   	this.tail = this.head = null;
	   } else if(this._size > 1){
	   	  const currentHeadNext = this.head.next;
	   	  currentHeadNext.previous = null;
	   	  this.head = currentHeadNext;
	   }
	}

	removeLast(){

	}

	toArray() {
		const resultArray = [];
		let tmpIndex = 0;
		let tmpNode = this.head;
		while(tmpIndex < index) {
			resultArray.push(tmpNode.data);
			tmpNode = tmpNode.next;
		}

		return resultArray;
	}
}

class Node {
	constructor(value) {
		this.next = null;
		this.previous = null;
		this.data = value || null;
	}
}