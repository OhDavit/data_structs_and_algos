"use strict";

const should = require('should');

const {Queue} = require('../lib/queue');

describe('Queue', () => {
	let queue = null;

	beforeEach(() => {
		queue = new Queue();
	});

	describe('enqueue', () => {
		it('should increment the size', () => {
			queue.enqueue('test element');
			queue.size().should.equal(1);
		});
	});
  
  describe('dequeue', () => {
		it('should return the head of the queue', () => {
			queue.enqueue('test1');
			queue.enqueue('test2');
			queue.dequeue().should.equal('test1');
		});

		it('should decrement the size', () => {
			queue.enqueue('test1');
			queue.enqueue('test2');
			queue.dequeue();
			queue.size().should.equal(1);
		});

		it('should remove the head of the queue', () => {
			queue.enqueue('test1');
			queue.enqueue('test2');
			queue.dequeue();
			queue.peek().should.equal('test2');
		});

		it('should return null if queue is empty', () => {
			should.not.exist(queue.dequeue());
		});
	});

	describe('peek', () => {
		it('should return the head of the queue', () => {
			queue.enqueue('test1');
			queue.enqueue('test2');
			queue.peek().should.equal('test1');
		});

		it('should not decrement the size', () => {
			queue.enqueue('test1');
			queue.enqueue('test2');
			queue.peek();
			queue.size().should.equal(2);
		});

		it('should return null if queue is empty', () => {
			should.not.exist(queue.peek());
		});
	});

	describe('clear', () => {
		it('should delete all elements', () => {
			queue.enqueue('test1');
			queue.enqueue('test2');
			queue.clear();
			queue.isEmpty().should.be.true();
		});
	});

	describe('size', () => {
		it('should return number of elements in the queue', () => {
			queue.enqueue('test1');
			queue.enqueue('test2');
			queue.size().should.equal(2);
		});
	});

	describe('isEmpty', () => {
		it('should return true if there is no element in the queue', () => {
			queue.isEmpty().should.be.true();
		});

		it('should return true if there is no element in the queue', () => {
			queue.enqueue('test1');
			queue.isEmpty().should.be.false();
		});
	});
});