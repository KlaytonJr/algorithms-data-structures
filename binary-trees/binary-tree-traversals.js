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

  inorderTraversal() {
    const result = [];
    this.inorderTraversalRecursive(this.root, result);
    return result;
  }

  inorderTraversalRecursive(node, result) {
    if (node) {
      this.inorderTraversalRecursive(node.left, result);
      result.push(node.data);
      this.inorderTraversalRecursive(node.right, result);
    }
  }

  postorderTraversal() {
    const result = [];
    this.postorderTraversalRecursive(this.root, result);
    return result;
  }

  postorderTraversalRecursive(node, result) {
    if (node) {
      this.postorderTraversalRecursive(node.left, result);
      this.postorderTraversalRecursive(node.right, result);
      result.push(node.data);
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

const result_preorder = tree.preorderTraversal(); // [5, 3, 1, 10, 7, 15]
console.log('👉 result_preorder => ', result_preorder);

const result_inorder = tree.inorderTraversal(); // [1, 3, 5, 7, 10, 15]
console.log('👉 result_inorder => ', result_inorder);

const result_postorder = tree.postorderTraversal(); // [1, 3, 7, 15, 10, 5]
console.log('👉 result_postorder => ', result_postorder);