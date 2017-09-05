"use strict";

const should = require('should');
const DoublyLinkedList = require('../lib/doubly_linked_list').DoublyLinkedList;

describe.only('Doubly linked list', () => {
	let list = null;

	describe('get', () => {
		beforeEach(() => {
			list = new DoublyLinkedList();
		})

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

	describe('addLast', () => {
		beforeEach(() => {
			list = new DoublyLinkedList();
		})

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
});