var isUnivalTree = function (root) {
  if (!root) return true;

  let val = root.val;
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.val !== val) return false;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return true;
};
