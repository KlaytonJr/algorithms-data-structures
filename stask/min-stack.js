class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length > 0) {
      val = Math.min(val, this.minStack[this.minStack.length - 1]);
    }
    this.minStack.push(val);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2
