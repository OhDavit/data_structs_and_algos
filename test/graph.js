"use strict";

const {
  DirectedGraph
} = require('../lib/graph');
const {
  Vertex
} = require('../lib/graph');

describe.only('DirectedGraph', () => {
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
      graph.addEdge(a, b)
      graph.numberOfEdges.should.equal(1);
    });
  });
});