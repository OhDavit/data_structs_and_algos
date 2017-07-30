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

      it.only('should set size to two', () => {
        linkedList.insert('secondTestData');
        console.log(linkedList);
        linkedList.size.should.equal(2);
        linkedList.get(1).data.should.equal(data);
        linkedList.get(2).data.should.equal('secondTestData');
      });
    });

  });

});
