"use strict";

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }

  isLeaf() {
    return !this.left && !this.right;
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

  find(data, compare) {
    if (typeof compare !== 'function') {
      throw new TypeError('compare must be a function');
    }
    return this._findRecursively(this.root, data, compare);
  }

  _findRecursively(node, data, compare) {

    if (!node) {
      return null;
    }

    if (compare(node.data, data) === 0) {
      return node;
    }

    if (compare(node.data, data) > 0) {
      return this._findRecursively(node.left, data, compare);
    }

    return this._findRecursively(node.right, data, compare);
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

  delete(data, compare) {
    if (typeof compare !== 'function') {
      throw new TypeError('compare must be a function');
    }

    if (!this.root) {
      return false;
    }

    if (this.root.isLeaf() && this.root.compare(this.root.data, data) === 0) {
      this.root = null;
      this.numberOfNodes = 0;
      return true;
    }

    if (compare(this.root.data, data) > 0) {
      return this._deleteRecursively(this.root, this.root.left, data, compare);
    } else {
      return this._deleteRecursively(this.root, this.root.right, data, compare);
    }
  }

  _deleteRecursively(previous, currentNode, data, compare) {
    if (!currentNode) {
      return false;
    }

    if (compare(currentNode.data, data) === 0) {
      if (currentNode.isLeaf()) {
        if (compare(previous.left.data, currentNode.data) === 0) {
          previous.left = null;
        } else {
          previous.right = null;
        }

        currentNode = null;
        --this.numberOfNodes;
        return true;
      } else {

        if (!currentNode.right) {
          if (previous.right && compare(previous.right.data, currentNode.data) === 0) {
            previous.right = currentNode.left;
          } else {
            previous.left = currentNode.left;
          }
          currentNode = null;
        } else if (!currentNode.left) {
          if (previous.right && compare(previous.right.data, currentNode.data) === 0) {
            previous.right = currentNode.right;
          } else {
            previous.left = currentNode.right;
          }
          currentNode = null;
        } else { // find the minimum in right subtree
          const data = this._findMinimum(currentNode.right, currentNode, currentNode.data);
          currentNode.data = data;
        }
      }

      --this.numberOfNodes;

      return true;
    }
    previous = currentNode;
    if (compare(currentNode.data, data) > 0) {
      return this._deleteRecursively(previous, currentNode.left, data, compare);
    }
    return this._deleteRecursively(previous, currentNode.right, data, compare);
  }

  _findMinimum(node, previous) {
    if (!node.left) {
      const data = node.data;
      previous.left = null;
      node = null;

      return data;
    }

    return this._findMinimum(node.left, node);

  }
}

export {BinaryTree};
