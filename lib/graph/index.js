"use strict";

class Vertex {
  constructor(data) {
    this.adjacentVertexes = [];
    this.data = data;
  }

  addAdjacentVertex(vertex) {
    if (!this.adjacentVertexes.some((adjcVertex) => adjcVertex.data === vertex.data)) {
      this.adjacentVertexes.push(vertex);
      return true;
    }
    return false;
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
    if (vertex.addAdjacentVertex(adjacentVertex)) {
      ++this.numberOfEdges;

      return true;
    }

    return false;
  }

  clear() {
    this.numberOfEdges = 0;
    this.vertices.length = 0;
  }

  deleteVertex(vertex) {
    if (vertex) {
      const index = this.vertices.findIndex(this.compare);
      if (index > -1) {
        this.vertices.splice(index, 1);
        return true;
      }
    }
    return false;
  }


  findByData() {

  }

  breathFirstSearch(start, destination) {
    let visitedVertexes = [];

    vertices.forEach((vertex, index) => visitedVertexes[index] = false);
    this._util(u, d, [], 0, visitedVertexes);
  }

  _util(u, d, path, pathIndex, visitedVertexes) {

    visitedVertexes[u] = true;
    path[path_index] = u;
    path_index++;
    if (u === d) {
      return;
    }

    u.adjacentVertexes.forEach((vertex) => {
      //if(visitedVertexes)
    });
  }

  findPath(vertexA, vertexB) {

  }
}

exports.DirectedGraph = DirectedGraph;
exports.Vertex = Vertex;