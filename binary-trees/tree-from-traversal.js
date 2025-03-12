class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(inorder, postorder) {
  if (!inorder || inorder.length === 0) return null;
  if (!postorder || postorder.length === 0) return null;

  const rootVal = postorder.pop();
  const root = new TreeNode(rootVal);
  const inorder_idx = inorder.indexOf(rootVal);

  root.right = buildTree(
    inorder.slice(inorder_idx + 1, inorder.length),
    postorder
  );

  root.left = buildTree(
    inorder.slice(0, inorder_idx),
    postorder
  );

  return root;
}

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
