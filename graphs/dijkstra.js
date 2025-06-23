class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this.heap.sort((a, b) => a[0] - b[0]); // Ordena pelo menor custo
  }

  pop() {
    return this.heap.shift();
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstra(graph, start) {
  const minHeap = new MinHeap();
  minHeap.push([0, start]);

  const distances = {};
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (!minHeap.isEmpty()) {
    const [currentDistance, currentNode] = minHeap.pop();

    if (currentDistance > distances[currentNode]) continue;

    for (let neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const distance = currentDistance + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        minHeap.push([distance, neighbor]);
      }
    }
  }

  return distances;
}

// Exemplo de uso
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const startNode = "A";
const distances = dijkstra(graph, startNode);
console.log(`Distances from ${startNode}:`, distances);
