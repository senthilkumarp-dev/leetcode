/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return helper(root.left, root.right);
};

var helper = function (leftNode, rightNode) {
  if (!leftNode && !rightNode) return true;
  if (!leftNode || !rightNode) return false;
  return (
    leftNode.val === rightNode.val &&
    helper(leftNode.left, rightNode.right) &&
    helper(leftNode.right, rightNode.left)
  );
};