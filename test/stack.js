"use strict";

const should = require('should');
const dslight = require('../index').dslight;
const Stack = dslight.Stack;

describe('Stack', () => {
	let stack = null

	beforeEach(() => {
		stack = new Stack();
	});

	describe('Constructor', () => {
		it('should create list property as an empty array', () => {
			const ownKeys = Reflect.ownKeys(stack);
			ownKeys.length.should.equal(1);
			stack.should.have.ownProperty('list');
			stack.list.length.should.equal(0);
		});
	});

	describe('getLength', () => {
		it('should return number of elements in stack', () => {
			stack.push('1');
			stack.push('2');
			stack.getLength().should.equal(2);
		});
	});

	describe('push', () => {
		it('should create list property as an empty array', () => {
			const stack = new Stack();
			const ownKeys = Reflect.ownKeys(stack);
			ownKeys.length.should.equal(1);
			stack.should.have.ownProperty('list');
			stack.list.length.should.equal(0);
		});

		it('should push element to the top of the stack', () => {
			stack.push('davit');
			stack.peek().should.equal('davit');
		});
	});

	describe('pop', () => {
		it('should pop element from the top of the stack', () => {
			stack.push('davit');
			stack.pop().should.equal('davit');
			stack.getLength().should.equal(0);
		});
	});

	describe('peek', () => {
		it('should get element from the top of the stack', () => {
			stack.push('davit');
			stack.peek().should.equal('davit');
			stack.getLength().should.equal(1);
		});
	});

	describe('clear', () => {
		it('should clear the stack', () => {
			stack.push('davit');
			stack.clear();
			stack.getLength().should.equal(0);
		});
	});

	describe('isEmpty', () => {
		it('should return true if there is no element in the stack', () => {
			stack.isEmpty().should.be.true();
		});

		it('should return false if there is element in the stack', () => {
			stack.push('davit');
			stack.isEmpty().should.be.false();
		});
	});
});