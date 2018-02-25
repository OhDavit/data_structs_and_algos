"use strict";

const should = require('should');
const DS = require('../index').dslight;

describe('Index:', () => {
	it('should have Queue as a type of function', () => {
		should.exist(DS.Queue);
		DS.Queue.should.be.type('function');
	});

	it('should have Stack as a type of function', () => {
		should.exist(DS.Stack);
		DS.Stack.should.be.type('function');
	});

	it('should have BinaryTree as a type of function', () => {
		should.exist(DS.BinaryTree);
		DS.BinaryTree.should.be.type('function');
	});

	it('should have LinkedList as a type of function', () => {
		should.exist(DS.LinkedList);
		DS.LinkedList.should.be.type('function');
	});

	it('should have DoublyLinkedList as a type of function', () => {
		should.exist(DS.DoublyLinkedList);
		DS.DoublyLinkedList.should.be.type('function');
	});

	it('should have DirectedGraph as a type of function', () => {
		should.exist(DS.DirectedGraph);
		DS.DirectedGraph.should.be.type('function');
	});
});

