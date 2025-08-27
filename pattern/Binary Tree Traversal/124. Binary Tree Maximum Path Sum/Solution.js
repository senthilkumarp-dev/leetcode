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
 * @return {number}
 */
var maxPathSum = function (root) {
  let result = root.val;
  function helper(node) {
    if (!node) {
      return 0;
    }
    let leftGain = Math.max(helper(node.left), 0);
    let rightGain = Math.max(helper(node.right), 0);
    let currentPathSum = node.val + leftGain + rightGain;
    result = Math.max(result, currentPathSum);
    return node.val + Math.max(leftGain, rightGain);
  }
  helper(root);
  return result;
};
