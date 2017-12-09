"use strict";

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
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

	isEmpty() {
		return !!this._size;
	}

	get(index) {
		if (index < 0) {
			return null;
		}

		if (this._size - 1 < index) {
			return null;
		}

		if (index === 0) {
			return this.head;
		}

		if (index === this._size - 1) {
			return this.tail;
		}

		let tmpIndex = 1;
		let tmpNode = this.head.next;
		while (tmpIndex < index) {
			tmpNode = tmpNode.next;
			tmpIndex++;
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

	add(data, index) {
		if (isNaN(index)) {
			throw new Error('can not add at index NaN');
		}

		if (index < 0) {
			throw new RangeError('index can not be negative')
		}

		if (index > this._size) {
			throw new RangeError('index is out of bound');
		}

		if (index === 0) {
			this.addFirst(data);
		} else if (index === this._size) {
			this.addLast(data);
		} else {
			let tmpIndex = 1;
			let tmpNode = this.head.next;
			while (tmpIndex < index) {
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
		if (this._size === 0) {
			this.head = newNode;
			this.tail = newNode;
			this.head.next = this.tail;
			this.tail.previous = this.head;
		} else {
			newNode.next = this.head;
			this.head.previous = newNode;
			this.head = newNode;

			if (this._size === 1) {
				this.tail.previous = this.head;
			}
		}

		this._size++;
	}

	addLast(data) {
		if (this._size === 0) {
			const newNode = new Node(data);
			this.tail = newNode;
			this.head = newNode;
		} else {
			const newNode = new Node(data);
			newNode.previous = this.tail;
			newNode.previous = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this._size++;
	}

	removeAt(position) {
		if (isNaN(position)) {
			throw new Error('can not remove at position NaN');
		}

		if (position < 0) {
			throw new RangeError('position can not be negative')
		}

		if (position >= this._size) {
			throw new RangeError('position is out of bound');
		}

		if (position === 0) {
			return this.removeFirst();
		} else if (position === this._size - 1) {
			return this.removeLast();
		} else {
			let nodeAtPosition = this.get(position);
			const nextNode = nodeAtPosition.next;
			const previous = nodeAtPosition.previous;
			nodeAtPosition = null;
			previous.next = nextNode;
			nextNode.previous = previous;
			this._size--;
		}

		return true;
	}

	//TODO: consider throwing an exception when list is empty
	removeFirst() {
		if (this.head === null) {
			return false;
		}

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.previous = null;
		}

		this._size--;

		return true;
	}

	//TODO: consider throwing an exception when list is empty
	removeLast() {
		if (this.head === null) {
			return false;
		}

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.previous;
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

	printData() {
		console.log(this.toArray().toString());
	}
}

class Node {
	constructor(value) {
		this.next = null;
		this.previous = null;
		this.data = value || null;
	}
}

export { DoublyLinkedList };