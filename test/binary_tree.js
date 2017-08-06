"use strict";
const should = require('should');

const BinaryTree = require('../lib/binary_tree').BinaryTree;

describe('BinaryTree:', () => {
  let bTree = null;

  beforeEach(() => {
	bTree = new BinaryTree();
  });

  describe('maxDepth method', () => {
	it('should return 2', () => {
	  	bTree.insert(23);
		bTree.insert(10);
		bTree.insert(44);
		bTree.insert(5);
		bTree.insert(3);
		bTree.insert(31);
		bTree.insert(55);
		bTree.insert(46);
	    bTree.maxDepth().should.equal(3);
	  });

	it('should return 0 in case of one node', () => {
	  	bTree.insert(30);
	    bTree.maxDepth().should.equal(0);
	});

	it('should return 0 in case of empty tree', () => {
	  bTree.maxDepth().should.equal(0);
	});
  });

  describe('insert method', () => {
	it('should set root if the tree is empty', () => {
	  	bTree.insert(23);
		bTree.root.data.should.equal(23)
	  });
  });

  describe('find method', () => {

	it('should return node if data matches', () => {
		bTree.insert(23);
		bTree.insert(10);
		bTree.insert(44);
		bTree.insert(5);
		const node = bTree.find(44, (a, b) => {
			if(a === b) return 0;
			if(a < b) return -1;
			return 1;

		});
	  	should.exist(node);
	  	node.data.should.equal(44);
	});

	it('should return null in case data does not match', () => {
		bTree.insert(10);
		bTree.insert(44);
		bTree.insert(5);
	  	should.not.exist(bTree.find(33, (a, b) => {
			if(a === b) return 0;
			if(a < b) return -1;
			return 1;
		}));
	});
  });

  describe('delete method', () => {
  	let compare = null;

  	before(() => {
  		compare = (a, b) => {
			if(a === b) return 0;
			if(a < b) return -1;
			return 1;
		}
  	});

	it('should delete and return true if node is a leaf', () => {
		bTree.insert(23);
		bTree.insert(10);
		bTree.insert(44);
		bTree.delete(44, compare).should.be.true();
	  	should.not.exist(bTree.find(44, compare));
	  	bTree.numberOfNodes.should.equal(2);
	});

	it('should return false if node is not found', () => {
		bTree.insert(23);
		bTree.insert(10);
		bTree.insert(44);
		bTree.delete(11, compare).should.be.false();
	});

	it('should return true when the right of the target node does not exist', () => {
		bTree.insert(23);
		bTree.insert(10);
		bTree.insert(40);
		bTree.insert(44);
		bTree.insert(46);
		bTree.insert(51);
		bTree.insert(47);
		bTree.delete(51, compare).should.be.true();
		should.not.exist(bTree.find(51, compare));
		bTree.numberOfNodes.should.equal(6);
	});

	it('should return true when the left of the target node does not exist', () => {
		bTree.insert(23);
		bTree.insert(10);
		bTree.insert(40);
		bTree.insert(44);
		bTree.insert(46);
		bTree.insert(51);
		bTree.insert(47);
		bTree.insert(48);
		bTree.delete(47, compare).should.be.true();
		bTree.numberOfNodes.should.equal(7);
	});

	it('should return true when the left and right of the target node are set', () => {
		bTree.insert(23);
		bTree.insert(10);
		bTree.insert(40);
		bTree.insert(44);
		bTree.insert(52);
		bTree.insert(43);
		bTree.insert(42);
		bTree.insert(32);
		bTree.delete(44, compare).should.be.true();
		bTree.numberOfNodes.should.equal(7);
		should.not.exist(bTree.find(44, compare));
	});
  });
});

