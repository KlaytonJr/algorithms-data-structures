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

  preorderTraversal() {
    const result = [];
    this.preorderTraversalRecursive(this.root, result);
    return result;
  }

  preorderTraversalRecursive(node, result) {
    if (node) {
      result.push(node.data);
      this.preorderTraversalRecursive(node.left, result);
      this.preorderTraversalRecursive(node.right, result);
    }
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(1);
tree.insert(10);
tree.insert(15);
tree.insert(7);

const result = tree.preorderTraversal(); // [5, 3, 1, 10, 7, 15]
console.log('👉 result => ', result);