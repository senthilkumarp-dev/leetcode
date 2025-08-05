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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let result = 0;
  let count = k;
  function inorder(node) {
    if (node === null) {
      return;
    }
    inorder(node.left);
    count--;
    if (count == 0) {
      result = node.val;
      return;
    }
    inorder(node.right);
  }
  inorder(root);
  return result;
};
