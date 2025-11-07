var lowestCommonAncestor = function (root, p, q) {
  // Base case
  if (!root || root === p || root === q) return root;

  // Recursive search in left and right subtrees
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // If both sides found a node, current root is the LCA
  if (left && right) return root;

  // Otherwise, return the non-null node (either left or right)
  return left ?? right;
};
