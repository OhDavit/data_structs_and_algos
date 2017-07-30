"use strict";
const should = require('should');

const BinaryTree = require('../lib/binary_tree').BinaryTree;

describe('BinaryTree:', () => {
  let bTree = null;

  beforeEach(() => {
	bTree = new BinaryTree();
  });

  describe('maxDepth', () => {
	it('should return 2', () => {
	  	bTree.insert(23);
		bTree.insert(10);
		bTree.insert(44);
		bTree.insert(5);
		bTree.insert(3);
		bTree.insert(31);
		bTree.insert(55);
		bTree.insert(46);
	    bTree.maxDepth().should.equal(2);
	  });

	it('should return 0 in case of one node', () => {
	  	bTree.insert(30);
	    bTree.maxDepth().should.equal(0);
	  });
  });


  describe('findKthSmallest', () => {
	it.only('should return 2', () => {
	  	bTree.insert(23);
		bTree.insert(10);
		bTree.insert(44);
		bTree.insert(5);
		bTree.insert(3);
		bTree.insert(31);
		bTree.insert(55);
		bTree.insert(46);
		bTree.print();
	    
	  });

	it('should return 0 in case of one node', () => {
	  	bTree.insert(30);
	    bTree.maxDepth().should.equal(0);
	  });
  });



});

