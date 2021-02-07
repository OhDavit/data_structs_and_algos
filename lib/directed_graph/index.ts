import { Queue } from '../queue/index';
import { Stack } from '../stack/index';
import uuid from 'uuid';

export class Vertex {
  adjacentVertexes: Vertex[];
  data: any;
  id: string;
  constructor(data) {
    this.adjacentVertexes = [];
    this.data = data;
    this.id = uuid.v4();
  }
}

type CompareType = (x: any, y: any) => boolean;

export class DirectedGraph {
  numberOfEdges: number;
  vertices: Vertex[];
  constructor(public compare: CompareType | null = null) {
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
    const index = this._findIndex(vertices, vertex);
    if (index > -1) {
      vertices.splice(index, 1);

      return true;
    }

    return false;
  }

  removeEdge(vertex, adjacentVertex) {
    if (vertex && adjacentVertex) {
      const index = this._findIndex(vertex.adjacentVertexes, adjacentVertex);
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

  isReachable_2(s, d) {
    if (s.compare(d)) {
      return true;
    }

    // Consider to to use stack set
    const stack = new Stack();
    stack.push(s);
    const visitedVertices = {};

    while(!stack.isEmpty()) {
      const tmpVertex = stack.pop();

      for (let i = 0; i < tmpVertex.adjacentVertexes.length; ++i) {
        const adjacentV = tmpVertex.adjacentVertexes[i];
        
        if (!visitedVertices[adjacentV.id]) {
          if (this.compare(adjacentV, s)) {
            return true;
          }
          visitedVertices[adjacentV.id] = true;
          stack.push(adjacentV);
        }
      }
    }
  }

  _findIndex(array, obj) {
    for(let i = 0; i < array.length; ++i) {
      if (this.compare(array[i], obj) === true) {
        return i;
      }
    }

    return -1;
  }
}