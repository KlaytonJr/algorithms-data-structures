class MinHeap {
  constructor() {
    this.heap = [];
  }

  push([dist, node]) {
    this.heap.push([dist, node]);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p][0] <= this.heap[i][0]) break;
      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      i = p;
    }
  }

  bubbleDown() {
    let i = 0;
    const len = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < len && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < len && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function networkDelayTime(times, n, k) {
  const table = {};

  for (const [u, v, w] of times) {
    if (!table[u]) {
      table[u] = { [v]: w };
    } else {
      table[u][v] = w;
    }
  }

  const distances = { [k]: 0 };
  const minHeap = new MinHeap();
  minHeap.push([0, k]);

  while (!minHeap.isEmpty()) {
    const [dist, node] = minHeap.pop();

    const neighbors = table[node];
    if (neighbors) {
      for (const [neighbor, weight] of Object.entries(neighbors)) {
        const newDist = dist + weight;
        if (newDist < (distances[neighbor] ?? Infinity)) {
          distances[neighbor] = newDist;
          minHeap.push([newDist, parseInt(neighbor)]);
        }
      }
    }
  }

  if (Object.keys(distances).length < n) return -1;

  let maxDist = Math.max(...Object.values(distances));
  return maxDist === 0 ? -1 : maxDist;
}
