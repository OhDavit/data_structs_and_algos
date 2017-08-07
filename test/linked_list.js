"use strict";

const should = require('should');
const {LinkedList} = require('../lib/linked_list');

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
      linkedList.should.have.ownProperty('root');
    });

    it('should create property root', () => {
      linkedList.should.have.ownProperty('size');
    });

    it('should create property tail', () => {
      linkedList.should.have.ownProperty('tail');
    });
  });

  describe('get method', () => {
    beforeEach(() => {
      const node1 = {data: 1, next: null};
      const node2 = {data: 2, next: null};
      const node3 = {data: 3, next: null};
      const node4 = {data: 4, next: null};
      node1.next = node2;
      node2.next = node3;
      node3.next = node4;
      linkedList = new LinkedList();
      linkedList.root = node1;
      linkedList.tail = node4;
      linkedList.size = 4;
    });

    it('should return correct elements at corresponding position', () => {
      for (let i = 0; i < 4; ++i) {
        linkedList.get(i).data.should.equal(i + 1);
      }

      should.not.exist(linkedList.get(4).next);
    });
  });

  describe('insert method', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
    });
    describe('in case of empty list', () => {
      let data = null;

      beforeEach(() => {
        data = 'testData';
        linkedList.insert(data);
      });

      it('should set size to one', () => {
        linkedList.size.should.equal(1);
      });

      it('should root be eqaul to tail', () => {
        linkedList.root.data.should.equal(data);
        linkedList.root.data.should.equal(linkedList.tail.data);
      });
    });

    describe('in case of non empty list', () => {
      let data = null;

      beforeEach(() => {
        data = 'testData';
        linkedList.insert(data);
      });

      it('should set size to two', () => {
        linkedList.insert('secondTestData');
        linkedList.size.should.equal(2);
        linkedList.get(0).data.should.equal(data);
        linkedList.get(1).data.should.equal('secondTestData');
      });
    });
  });

  describe('insertAt method', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
    });
    describe('in case of empty list', () => {
      let data = null;

      beforeEach(() => {
        data = 'testData';
      });

      it('should do nothing if postion is not 0', () => {
        linkedList.insertAt(data, 1);
        linkedList.size.should.equal(0);
        should.not.exist(linkedList.root);
        should.not.exist(linkedList.tail);
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
        linkedList.root = node1;
        linkedList.tail = node4;
        linkedList.size = 4;
      });

      it('should set root to new node when postion is equal to 0', () => {
        const testData = 'testData';
        linkedList.insertAt(testData, 0);
        linkedList.get(0).data.should.equal(testData);
        linkedList.root.data.should.equal(testData);
      });

      it('should set size to two', () => {
        const testData = 'testData';
        linkedList.insertAt(testData, 2);
        linkedList.get(2).data.should.equal(testData);
        linkedList.get(3).data.should.equal(3);
      });
    });
  });

  describe('contains method', () => {

  });

});
