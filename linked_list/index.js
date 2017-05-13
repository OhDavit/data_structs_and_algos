"use strict";
// A singly linked list 
class LinkedList {
	constructor() {
		this.root = null;
		this.size = 0;
		this.tail = null;
	}

	insert(position, data) {
		if (this.size === 0) {
			this.root = new Node(data);
			this.tail = this.root;
			++this.size;
		} else if (position > size) {
			throw new Error('desired position is out of bound');
		} else if (position === size){
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

	get(position) {
		if(position > this.size || this.size === 0) {
			return null;
		}

		let index = 1;
		let currentNode = this.root;

		do() {
	    currentNode = currentNode.next;  
	    ++index;
		} while(index < position)

		return currentNode;
	}

class Node() {
	constructor(data) {
		this.next = null;
		this.data = data;
	}
}