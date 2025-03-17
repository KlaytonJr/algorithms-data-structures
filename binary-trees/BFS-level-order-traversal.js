function levelOrder(root) {
  if (!root) return [];

  const res = new Map();
  const queue = [{ node: root, level: 0 }];

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (!res.has(level)) {
      res.set(level, []);
    }
    res.get(level).push(node.val);

    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }

  return Array.from(res.values());
}

