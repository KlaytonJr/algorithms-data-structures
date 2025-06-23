class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 0) throw new Error("Heap is empty");
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  peek() {
    if (this.heap.length === 0) throw new Error("Heap is empty");
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    const value = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (value >= parent) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = value;
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const value = this.heap[0];

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      this.heap[index] = this.heap[smallest];
      index = smallest;
    }

    this.heap[index] = value;
  }
}

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinHeap();

    for (const num of nums) {
      this.minHeap.insert(num);
      if (this.minHeap.size() > k) {
        this.minHeap.extractMin();
      }
    }
  }

  add(val) {
    this.minHeap.insert(val);
    if (this.minHeap.size() > this.k) {
      this.minHeap.extractMin();
    }
    return this.minHeap.peek();
  }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

console.log(kthLargest.add(3)); // 4
console.log(kthLargest.add(5)); // 5
console.log(kthLargest.add(10)); // 5
console.log(kthLargest.add(9)); // 8
console.log(kthLargest.add(4)); // 8
