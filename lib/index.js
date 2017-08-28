"use strict";

const DS = {};

const {Stack} = require('./stack');
const {Queue} = require('./queue');
const {BinaryTree} = require('./binary_tree');
const {LinkedList} = require('./linked_list');
const {DoublyLinkedList} = require('./doubly_linked_list');
const {DirectedGraph} = require('./graph');

DS.Stack = Stack;
DS.Queue = Queue;
DS.BinaryTree = BinaryTree;
DS.LinkedList = LinkedList;
DS.DoublyLinkedList = DoublyLinkedList;
DS.DirectedGraph = DirectedGraph;

module.exports = DS;
