"use strict";

class Node {
  constructor(data) {
    this.left = null; 
    this.right = null;
    this.data = data;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.numberOfNodes = 0;
  }

  print() {
    this._printRecursively(this.root);
  }

  _printRecursively(node) {
    if (!node) {
      return;
    }

    console.log(node.data)
    this._printRecursively(node.left);
    this._printRecursively(node.right);
  }

  /*
   Returns the max root-to-leaf depth of the tree. 
   */
  maxDepth() {
    return this._maxDepthRecursively(this.root);
  }

  _maxDepthRecursively(node) {
    if (!node || (!node.left && !node.right)) {
      return 0;
    }

    return 1 + Math.max(this._maxDepthRecursively(node.left), this._maxDepthRecursively(node.right));
  }

  lookup(data) {
    this._lookupRecursively(this.root, data);
  }

  _lookupRecursively(node, data) {
    if (node.data === data) {
      return true;
    }

    if (node.data > data) {
      return this._lookupRecursively(this.left, data);
    }

    return this._lookupRecursively(this.right, data);
  }

  insert(data) {
    this.root = this._insertRecursively(this.root, data);
    this.numberOfNodes++;
  }

  /**
   Recursive insert -- given a node pointer, recur down and
   insert the given data into the tree. Returns the new
   node pointer (the standard way to communicate
   a changed pointer back to the caller).
   */
  _insertRecursively(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (data <= node.data) {
      node.left = this._insertRecursively(node.left, data);
    } else {
      node.right = this._insertRecursively(node.right, data);
    }

    return node;
  }

  findKthSmallest(k) {
    if (k > numberOfNodes) {
      return null;
    }
  }
}

exports.BinaryTree = BinaryTree;