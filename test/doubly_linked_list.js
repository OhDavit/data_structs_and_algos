"use strict";

const should = require('should');
const dslight = require('../index').dslight;
const DoublyLinkedList = dslight.DoublyLinkedList;

describe('Doubly linked list', () => {
	let list = null;

	describe('get', () => {
		beforeEach(() => {
			list = new DoublyLinkedList();
		});

		it('should return null if list is empty', () => {
			should.not.exist(list.get(0))
		});

		it('should return null if index is out of bounds', () => {
			list.addFirst('test');
			should.not.exist(list.get(2))
		});

		it('should return null if index is negative', () => {
			list.addFirst('test');
			should.not.exist(list.get(-1))
		});

		it('should return the head if index is equal 0', () => {
			list.addFirst('test');
			should.exist(list.get(0));
			list.get(0).data.should.equal('test');
		});

		it('should return node at position index', () => {
			list.addLast('0');
			list.addLast('1');
			list.addLast('2');
			list.addLast('3');
			should.exist(list.get(2));
			list.get(2).data.should.equal('2');
		});
	});

	// describe('contains', () => {
	// 	beforeEach(() => {
	// 		list = new DoublyLinkedList();
	// 	});

	// 	it('should return true if list contains element with input data', () => {
	// 		list.addFirst('elem1');
	// 		list.addFirst('elem2');
	// 		list.addFirst('elem3');
	// 		list.addFirst('elem4');
	// 		list.contains('elem3').should.be.true();
	// 	});

	// 	it('should return false if list does not contain element with input data', () => {
	// 		list.addFirst('elem1');
	// 		list.addFirst('elem2');
	// 		list.addFirst('elem3');
	// 		list.addFirst('elem4');
	// 		list.contains('elem0').should.be.false();
//	// 	});
	//});

	describe('add', () => {

	});

	describe('addLast', () => {
		beforeEach(() => {
			list = new DoublyLinkedList();
		});

		it('should increment the size', () => {
			list.addLast('test');
			list.getSize().should.equal(1);
		});

		it('should make tail = head = new node, when list is empty', () => {
			list.addLast('test');
			list.head.data.should.equal('test');
			list.head.data.should.equal(list.tail.data);
		});

		it('should head and tail point correct objects in case of multiple elements', () => {
			list.addLast('1');
			list.addLast('2');
			list.addLast('3');
			list.head.data.should.equal('1');
			list.tail.data.should.equal(list.tail.data);
			list.getSize().should.equal(3);
		});

		it('should tail previous point to old head, in case size is one', () => {
			list.addFirst('0');
			list.addLast('1');
			list.getLast().previous.data.should.equal('0');
		});
	});

	describe('addFirst', () => {
		beforeEach(() => {
			list = new DoublyLinkedList();
		})

		it('should increment the size', () => {
			list.addFirst('test');
			list.getSize().should.equal(1);
		});

		it('should head point to added node', () => {
			list.addLast('1');
			list.addLast('2');
			list.addFirst('0');
			list.getFirst().data.should.equal('0');
		});

		it('should shift existig first element', () => {
			list.addLast('1');
			list.addLast('2');
			list.addFirst('0');
			list.get(1).data.should.equal('1');
		});

		it('should tail previous point to old head, in case size is one', () => {
			list.addLast('1');
			list.addFirst('0');
			list.getLast().previous.data.should.equal('0');
		});
	});

	describe('removeFirst', () => {
		beforeEach(() => {
			list = new DoublyLinkedList();
		});

		it('should return false when list is empty', () => {
			list.removeFirst().should.be.false();
		});

		it('should set both head and tail to null if there is one element only', () => {
      list.addLast('test');
      list.removeFirst();
      should.not.exist(list.head);
      should.not.exist(list.tail);
		});

		it('should decrease the size if element is removed', () => {
			list.addLast('test');
      list.removeFirst();
      list.getSize().should.equal(0);
		});

		it('should return true if element is removed', () => {
			list.addLast('test');
      list.removeFirst().should.be.true();
		});

		it('should set head to next element', () => {
			list.addLast('elem1');
			list.addLast('elem2');
			list.addLast('elem3');
			list.removeFirst()
			list.head.data.should.equal('elem2');
		});

		it('should set previous of head be null', () => {
			list.addLast('elem1');
			list.addLast('elem2');
			list.addLast('elem3');
			list.removeFirst()
			should.not.exist(list.head.previous);
			list.head.next.data.should.equal('elem3');
		});
	});

	describe('removeLast', () => {
		beforeEach(() => {
			list = new DoublyLinkedList();
		});

		it('should return false when list is empty', () => {
			list.removeLast().should.be.false();
		});

		it('should set both head and tail to null if there is one element only', () => {
      list.addLast('test');
      list.removeLast();
      should.not.exist(list.head);
      should.not.exist(list.tail);
		});

		it('should decrease the size if element is removed', () => {
			list.addLast('test');
      list.removeLast();
      list.getSize().should.equal(0);
		});

		it('should return true if element is removed', () => {
			list.addLast('test');
      list.removeLast().should.be.true();
		});

		it('should set tail to previous', () => {
			list.addLast('elem1');
			list.addLast('elem2');
			list.addLast('elem3');
			list.removeLast();
			list.tail.data.should.equal('elem2');
		});

		it('should next of tail be null', () => {
			list.addLast('elem1');
			list.addLast('elem2');
			list.addLast('elem3');
			list.removeLast();
			should.not.exist(list.tail.next);
			list.tail.previous.data.should.equal('elem1');
		});
	});

	describe('removeAt', () => {
		beforeEach(() => {
			list = new DoublyLinkedList();
		});

		it('should throw an exception if position is negative', () => {
			(function(){ list.removeAt(-1) }).should.throw(RangeError, {message: 'position can not be negative'});
		});

		it('should throw an exception if position is NaN', () => {
	    list.addLast('test');
			(function(){ list.removeAt(NaN) }).should.throw(Error, {message: 'can not remove at position NaN'});
		});

		it('should throw an exception if position is bigger than number of elements', () => {
			(function(){ list.removeAt(0) }).should.throw(RangeError, {message: 'position is out of bound'});
		});

		it('should decrease the size', () => {
			list.addLast('1');
			list.addLast('2');
			list.addLast('3');
			list.removeAt(1);
			list.getSize().should.equal(2);
		});

		it('should remove and update the head if position is 0', () => {
			list.addLast('1');
			list.addLast('2');
			list.addLast('3');
			list.removeAt(0).should.be.true();
			list.head.data.should.equal('2');
			list.head.next.data.should.equal('3');
			should.not.exist(list.head.previous);
			list.tail.previous.data.should.equal('2');
			should.not.exist(list.tail.next);
			list.tail.data.should.equal('3');
		});

		it('should remove and update the tail if position is equal to size - 1', () => {
			list.addLast('1');
			list.addLast('2');
			list.addLast('3');
			list.addLast('4');
			list.removeAt(3).should.be.true();
			list.tail.data.should.equal('3');
			list.tail.previous.data.should.equal('2');
			should.not.exist(list.tail.next);
		});

		it('should remove and update next previous', () => {
			list.addLast('1');
			list.addLast('2');
			list.addLast('3');
			list.addLast('4');
			list.removeAt(1).should.be.true();
			list.head.data.should.equal('1');
			list.head.next.data.should.equal('3');
			list.tail.data.should.equal('4');
			list.getSize().should.equal(3);
		});
	});
});