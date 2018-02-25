"use strict";

const should = require('should');
const dslight = require('../index').dslight;
const LinkedList = dslight.LinkedList;

describe('Linked list', () => {
  let linkedList = null;

  describe('Constructor', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
    });

    it('should create 3 properties', () => {
      Reflect.ownKeys(linkedList).length.should.equal(3);
    });

    it('should create property size', () => {
      linkedList.should.have.ownProperty('_size');
    });

    it('should create property head', () => {
      linkedList.should.have.ownProperty('head');
    });

    it('should create property tail', () => {
      linkedList.should.have.ownProperty('tail');
    });
  });

  describe('get method', () => {
    beforeEach(() => {
      
    });

    it('should return head for element at 0 position', () => {
      const node1 = {data: 1, next: null};
      const node2 = {data: 2, next: null};
      node1.next = node2;
      linkedList = new LinkedList();
      linkedList.head = node1;
      linkedList.tail = node2;
      linkedList._size = 2;
      linkedList.get(0).data.should.equal(1);
      linkedList.get(0).should.equal(linkedList.head);
    });

    it('should return correct elements at corresponding position', () => {
      const node1 = {data: 1, next: null};
      const node2 = {data: 2, next: null};
      const node3 = {data: 3, next: null};
      const node4 = {data: 4, next: null};
      node1.next = node2;
      node2.next = node3;
      node3.next = node4;
      linkedList = new LinkedList();
      linkedList.head = node1;
      linkedList.tail = node4;
      linkedList._size = 4;
      for (let i = 0; i < 4; ++i) {
        linkedList.get(i).data.should.equal(i + 1);
      }

      should.not.exist(linkedList.get(4));
    });
  });

  describe('addFirst method', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
    });

    describe('in case of empty list', () => {
      it('should increase the size', () => {
        linkedList.addFirst(1);
        linkedList.getSize().should.equal(1);
      });

      it('should create head & tail with equal data value', () => {
        linkedList.addFirst(1);
        linkedList.head.data.should.equal(1);
        linkedList.tail.data.should.equal(1);
      });
    });

    describe('in case of non empty list', () => {
      beforeEach(() => {
        const node1 = {data: 1, next: null};
        const node2 = {data: 2, next: null};
        linkedList = new LinkedList();
        linkedList.head = node1;
        linkedList.tail = node2;
        linkedList._size = 2;
      });

      it('should increase the size', () => {
        linkedList.addFirst(1);
        linkedList.getSize().should.equal(3);
      });

      it('should head data be equal to new added value', () => {
        linkedList.addFirst(3);
        linkedList.head.data.should.equal(3);
      });

      it('should keep correct order', () => {
        linkedList.addFirst(3);
        linkedList.head.next.data.should.equal(1);
      });
    });
  });

  describe('addLast method', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
    });

    describe('in case of empty list', () => {
      let data = null;

      beforeEach(() => {
        data = 'testData';
        linkedList.addLast(data);
      });

      it('should set size to one', () => {
        linkedList._size.should.equal(1);
      });

      it('should head be eqaul to tail', () => {
        linkedList.head.data.should.equal(data);
        linkedList.head.data.should.equal(linkedList.tail.data);
      });
    });

    describe('in case of non empty list', () => {
      let data = null;

      beforeEach(() => {
        data = 'testData';
        linkedList.addLast(data);
      });

      it('should set size to two', () => {
        linkedList.addLast('secondTestData');
        linkedList._size.should.equal(2);
        linkedList.get(0).data.should.equal(data);
        linkedList.get(1).data.should.equal('secondTestData');
      });
    });
  });

  describe('add method', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
    });
    describe('in case of empty list', () => {
      let data = null;

      beforeEach(() => {
        data = 'testData';
      });

      it('should do nothing if postion is not 0', () => { 
        (function(){ linkedList.add(data, 1) }).should.throw(RangeError, {message: 'index is out of bound'});
      });
    });

    describe('in case of non empty list', () => {
      let data = null;

      beforeEach(() => {
        const node1 = {data: 1, next: null};
        const node2 = {data: 2, next: null};
        const node3 = {data: 3, next: null};
        const node4 = {data: 4, next: null};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        linkedList = new LinkedList();
        linkedList.head = node1;
        linkedList.tail = node4;
        linkedList._size = 4;
      });

      it('should set head to new node when postion is equal to 0', () => {
        const testData = 'testData';
        linkedList.add(testData, 0);
        linkedList.get(0).data.should.equal(testData);
        linkedList.head.data.should.equal(testData);
      });

      it('should set size to two', () => {
        const testData = 'testData';
        linkedList.add(testData, 2);
        linkedList.get(2).data.should.equal(testData);
        linkedList.get(3).data.should.equal(3);
      });
    });
  });

  describe('contains method', () => {

  });

});
