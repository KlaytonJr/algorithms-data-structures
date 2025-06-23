class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this._size = 0;
  }

  push(item) {
    const newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
    this._size++;
  }

  pop() {
    if (this.top === null) {
      throw new Error("Empty stack");
    }
    const poppedNode = this.top;
    this.top = poppedNode.next;
    this._size--;
    return poppedNode.value;
  }

  peek() {
    if (this.top === null) {
      throw new Error("Empty stack");
    }
    return this.top.value;
  }

  size() {
    return this._size;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop()); // 20
console.log(stack.size()); // 1

// stack.pop(); stack.pop(); stack.pop(); // -> lança erro "Empty stack"
