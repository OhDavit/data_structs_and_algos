"use strict";

const LinkedList = requre('../linked_list');

class Vertex {
  constructor() {
    this.adjacentVertexes = [];
    this.data = null;
  }

  addAdjacentVertex(vertex) {
  	if(!this.adjacentVertexes.includes(vertex)) {
  	   this.adjacentVertexes.push(vertex);	
       return true;
  	}

    return false;
  }
}

class DirectedGraph {
  constructor() {
  	this.size = 0;
  	this.vertices = [];
  }	

  addVertex(vertex) {
  	if(vertex && vertex instanceof Vertex) {
  	   this.vertices.push(vertex);
  	}
  }

  addEdge(vertex, adjacentVertex) {
  	return vertex.addAdjacentVertex(adjacentVertex);
  }

  deleteVertex(vertex) {

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
  	if( u === d) {
  	   return; 
  	}

  	u.adjacentVertexes.forEach((vertex) => {
  		if(visitedVertexes)
  	});
  }

  findPath(vertexA, vertexB) {

  }
}
