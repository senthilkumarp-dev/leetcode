/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  preOrder(root);
};

function preOrder(node) {
  if (!node) {
    return null;
  }
  let temp = node.right;
  let leftLastNode = preOrder(node.left);
  let rightLastNode = preOrder(node.right);

  if (!leftLastNode && !rightLastNode) return node;
  if (leftLastNode) {
    node.right = node.left;
    node.left = null;
    leftLastNode.right = temp;
  }
  return rightLastNode ? rightLastNode : leftLastNode;
}
