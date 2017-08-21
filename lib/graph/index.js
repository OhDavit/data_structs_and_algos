"use strict";

class Vertex {
  constructor(data) {
    this.adjacentVertexes = [];
    this.data = data;
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
          if(this._removeVertex(_v.adjacentVertexes, vertex)) {
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