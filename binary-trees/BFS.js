class Deque {
  constructor() {
    this.front = this.back = undefined;
  }
  addFront(value) {
    if (!this.front) this.front = this.back = { value };
    else this.front = this.front.next = { value, prev: this.front };
  }
  removeFront() {
    let value = this.peekFront();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.front = this.front.prev).next = undefined;
    return value;
  }
  peekFront() {
    return this.front && this.front.value;
  }
  addBack(value) {
    if (!this.front) this.front = this.back = { value };
    else this.back = this.back.prev = { value, next: this.back };
  }
  removeBack() {
    let value = this.peekBack();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.back = this.back.next).back = undefined;
    return value;
  }
  peekBack() {
    return this.back && this.back.value;
  }
  isEmpty() {
    return this.front === undefined;
  }
}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (!this.root) {
      this.root = new TreeNode(data);
    } else {
      this.insertRecursive(data, this.root);
    }
  }

  insertRecursive(data, node) {
    if (data < node.data) {
      if (!node.left) {
        node.left = new TreeNode(data);
      } else {
        this.insertRecursive(data, node.left);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(data);
      } else {
        this.insertRecursive(data, node.right);
      }
    }
  }

  search(data) {
    return this.searchRecursive(data, this.root);
  }

  searchRecursive(data, node) {
    if (!node) {
      return false;
    }

    if (node.data === data) {
      return true;
    } else if (data < node.data) {
      return this.searchRecursive(data, node.left);
    } else {
      return this.searchRecursive(data, node.right);
    }
  }

  bfs(data) {
    if (this.root === null) return false;

    const queue = new Deque();
    queue.addBack(this.root);

    while (!queue.isEmpty()) {
      const node = queue.removeFront();
      if (node.data === data) {
        return true;
      }

      if (node.left) {
        queue.addBack(node.left);
      }

      if (node.right) {
        queue.addBack(node.right);
      }
    }

    return false;
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(1);
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(20);

console.log(tree.bfs(20));
console.log(tree.bfs(22));
