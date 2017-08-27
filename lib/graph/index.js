"use strict";

const {Queue} = require('../queue');
const uuidv4 = require('uuid/v4');

class Vertex {
  constructor(data) {
    this.adjacentVertexes = [];
    this.data = data;
    this.id = uuidv4();
  }
}

class DirectedGraph {
  constructor(compare = null) {
    this.numberOfEdges = 0;
    this.vertices = [];
    this.compare = (v1, v2) => {
      if (v1.data === v2.data) {
        return true;
      }

      return false
    };
  }

  getNumberOfVertices() {
    return this.vertices.length;
  }

  addVertex(vertex) {
    if (vertex) {
      if (!this.vertices.some((_v) => this.compare(vertex, _v) === true)) {
        this.vertices.push(vertex);
        return true;
      }
    }

    return false;
  }

  addEdge(vertex, adjacentVertex) {
    let obj = null;
    if (!vertex.adjacentVertexes.some((_v) => this.compare(adjacentVertex, _v) === true)) {
      vertex.adjacentVertexes.push(adjacentVertex);
      ++this.numberOfEdges;

      return true;
    }

    return false;
  }

  clear() {
    this.numberOfEdges = 0;
    this.vertices.length = 0;
  }

  removeVertex(vertex) {
    if (vertex) {
      const isRemoved = this._removeVertex(this.vertices, vertex);

      if (isRemoved) {
        this.vertices.forEach((_v) => {
          if (this._removeVertex(_v.adjacentVertexes, vertex)) {
            --this.numberOfEdges;
          }
        });

        return true;
      }
    }
    return false;
  }

  _removeVertex(vertices, vertex) {
    const index = vertices.findIndex((_v) => this.compare(vertex, _v) === true);
    if (index > -1) {
      vertices.splice(index, 1);

      return true;
    }

    return false;
  }

  removeEdge(vertex, adjacentVertex) {
    if (vertex && adjacentVertex) {
      const index = vertex.adjacentVertexes.findIndex((_v) => this.compare(adjacentVertex, _v) === true);
      if (index > -1) {
        vertex.adjacentVertexes.splice(index, 1);
        --this.numberOfEdges;

        return true;
      }
    }

    return false;
  }

  isReachable(s, d) {
    if (this.compare(s, d) === true) {
      return true;
    } 

    const queue = new Queue();

    const visitedVertices = {};
    visitedVertices[s.id] = true;

    queue.enqueue(s);

    while(!queue.isEmpty()) {
      const currentV = queue.dequeue();

      const adjacentVertexesLength = currentV.adjacentVertexes.length;
      for(let i = 0; i < adjacentVertexesLength; ++i) {
        const adjacentV = currentV.adjacentVertexes[i];
        if (this.compare(d, adjacentV)) {
          return true;
        }

        if(!visitedVertices[adjacentV.id]) {
          visitedVertices[adjacentV.id] = true;
          queue.enqueue(adjacentV);
        }
      }
    }

    return false;
  }
}

exports.DirectedGraph = DirectedGraph;
exports.Vertex = Vertex;