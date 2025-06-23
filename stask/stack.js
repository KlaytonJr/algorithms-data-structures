class Stack {
  constructor(maxLength = 1000) {
    this.items = new Array(maxLength).fill(0);
    this.maxLength = maxLength;
    this.pointer = 0;
  }

  push(item) {
    if (this.pointer >= this.maxLength) {
      throw new Error("Stack overflow");
    }
    this.items[this.pointer] = item;
    this.pointer++;
  }

  pop() {
    if (this.pointer === 0) {
      throw new Error("Empty stack");
    }
    this.pointer--;
    return this.items[this.pointer];
  }

  peek() {
    if (this.pointer === 0) {
      throw new Error("Empty stack");
    }
    return this.items[this.pointer - 1];
  }

  size() {
    return this.pointer;
  }
}

const stack = new Stack(3);

stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop()); // 20
console.log(stack.size()); // 1

// stack.pop(); stack.pop(); stack.pop(); // -> lançará erro "Empty stack"
