class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node) {
  if (node === null) {
    return null;
  }

  const queue = [node];
  const clones = {}
  clones[node.val] = new Node(node.val, []);

  while (queue.length > 0) {
    const curr = queue.shift();
    const currClone = clones[curr.val];

    for (let neighbor of curr.neighbors) {
      if (!clones[neighbor.val]) {
        clones[neighbor.val] = new Node(neighbor.val, []);
        queue.push(neighbor);
      }
      currClone.neighbors.push(clones[neighbor.val]);
    }
  }

  return clones[node.val];
}

function printGraph(node) {
  if (!node) return "null";

  const visited = new Set();
  const queue = [node];
  const result = {};

  while (queue.length > 0) {
    const curr = queue.shift();

    if (!visited.has(curr.val)) {
      visited.add(curr.val);
      result[curr.val] = curr.neighbors?.map((n) => n.val);
      curr.neighbors && queue.push(...curr.neighbors);
    }
  }

  return result;
}

// Construção do grafo corretamente
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

const clone = cloneGraph(node1);
console.log(printGraph(clone));