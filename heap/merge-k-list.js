class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node, order) {
    this.heap.push({ val: node.val, order, node });
    this._heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 0) throw new Error("Heap is empty");
    if (this.heap.length === 1) return this.heap.pop().node;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min.node;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    const current = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (
        parent.val < current.val ||
        (parent.val === current.val && parent.order < current.order)
      )
        break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = current;
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const current = this.heap[0];

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (
        left < length &&
        (this.heap[left].val < this.heap[smallest].val ||
          (this.heap[left].val === this.heap[smallest].val &&
            this.heap[left].order < this.heap[smallest].order))
      ) {
        smallest = left;
      }

      if (
        right < length &&
        (this.heap[right].val < this.heap[smallest].val ||
          (this.heap[right].val === this.heap[smallest].val &&
            this.heap[right].order < this.heap[smallest].order))
      ) {
        smallest = right;
      }

      if (smallest === index) break;

      this.heap[index] = this.heap[smallest];
      index = smallest;
    }

    this.heap[index] = current;
  }

  size() {
    return this.heap.length;
  }
}

class Solution {
  mergeKLists(lists) {
    const heap = new MinHeap();
    let order = 0;

    const pushNode = (node) => {
      if (node) {
        heap.insert(node, order++);
      }
    };

    for (const node of lists) {
      pushNode(node);
    }

    const dummy = new ListNode();
    let current = dummy;

    while (heap.size() > 0) {
      const node = heap.extractMin();
      current.next = node;
      current = current.next;
      pushNode(node.next);
    }

    return dummy.next;
  }
}
