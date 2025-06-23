class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  heapifyUp(index) {
    while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
      [this.heap[this.parent(index)], this.heap[index]] = [
        this.heap[index],
        this.heap[this.parent(index)],
      ];
      index = this.parent(index);
    }
  }

  heapifyDown(index) {
    let smallest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapifyDown(smallest);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  peek() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const heap = new MinHeap();

heap.insert(5);
heap.insert(3);
heap.insert(8);
heap.insert(1);

console.log(heap.peek()); // 1
console.log(heap.extractMin()); // 1
console.log(heap.extractMin()); // 3
console.log(heap.size()); // 2
console.log(heap.isEmpty()); // false
