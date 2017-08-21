"use strict";

const {DirectedGraph} = require('../lib/graph');
const {Vertex} = require('../lib/graph');

describe('DirectedGraph', () => {
  let graph = null;

  describe('addVertex', () => {
    beforeEach(() => {
      graph = new DirectedGraph();
    });

    it('should return true if vertex has been added', () => {
      const a = new Vertex('a');
      graph.addVertex(a).should.be.true();
    });

    it('should update the number of vertices', () => {
      const a = new Vertex('a');
      graph.addVertex(a);
      graph.getNumberOfVertices().should.equal(1);
    });

    it('should return false if vertex is already added', () => {
      const a = new Vertex('a');
      const b = new Vertex('a');
      graph.addVertex(a).should.be.true();
      graph.addVertex(b).should.be.false();
    });
  });

  describe('removeVertex', () => {
    beforeEach(() => {
      graph = new DirectedGraph();
    });

    it('should return true if vertex has been added', () => {
      const a = new Vertex('a');
      graph.addVertex(a);
      graph.removeVertex(a).should.be.true();
    });

    it('should return false if vertex does not exist', () => {
      const a = new Vertex('a');
      const b = new Vertex('b');
      graph.addVertex(a);
      graph.removeVertex(b).should.be.false();
    });

    it('should decrease number of vertices', () => {
      const a = new Vertex('a');
      graph.addVertex(a);
      graph.removeVertex(a);
      graph.getNumberOfVertices().should.equal(0);
    });

    it('should delete incoming edges', () => {
      const a = new Vertex('a');
      const b = new Vertex('b');
      const c = new Vertex('c');
      graph.addVertex(a);
      graph.addVertex(b);
      graph.addVertex(c);
      graph.addEdge(a, b);
      graph.addEdge(c, b);
      graph.removeVertex(b);
      a.adjacentVertexes.length.should.equal(0);
      c.adjacentVertexes.length.should.equal(0);
    });

    it('should decrease numberOfEdges', () => {
      const a = new Vertex('a');
      const b = new Vertex('b');
      const c = new Vertex('c');
      graph.addVertex(a);
      graph.addVertex(b);
      graph.addVertex(c);
      graph.addEdge(a, b);
      graph.addEdge(c, b);
      // precondition
      graph.numberOfEdges.should.equal(2);
      graph.removeVertex(b);
      graph.numberOfEdges.should.equal(0);
    });
  });

  describe('addEdge', () => {
    beforeEach(() => {
      graph = new DirectedGraph();
    });

    it('should return true if edge has been added', () => {
      const a = new Vertex('a');
      const b = new Vertex('b');
      graph.addVertex(a);
      graph.addVertex(b);
      graph.addEdge(a, b).should.be.true();
    });

    it('should increase the numberOfEdges if edge has been added', () => {
      const a = new Vertex('a');
      const b = new Vertex('b');
      graph.addVertex(a);
      graph.addVertex(b);
      graph.addEdge(a, b);
      graph.numberOfEdges.should.equal(1);
    });

    it('should add into adjacentVertexes list', () => {
      const a = new Vertex('a');
      const b = new Vertex('b');
      const c = new Vertex('c');
      graph.addVertex(a);
      graph.addVertex(b);
      graph.addVertex(c);
      graph.addEdge(a, b);
      graph.addEdge(a, c);
      a.adjacentVertexes.length.should.equal(2);
      a.adjacentVertexes[0].data.should.equal('b');
      a.adjacentVertexes[1].data.should.equal('c');
    });

    it('should return false if edge already exists', () =>{
      const a = new Vertex('a');
      const b = new Vertex('b');
      graph.addVertex(a);
      graph.addVertex(b);
      graph.addEdge(a, b).should.be.true();
      graph.addEdge(a, b).should.be.false();
    });
  });
});