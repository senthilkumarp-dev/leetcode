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
var countNodes = function (root) {
  if (!root) return 0;

  function getLeftHeight(node) {
    let count = 0;
    while (node) {
      node = node.left;
      count++;
    }
    return count;
  }

  function getRightHeight(node) {
    let count = 0;
    while (node) {
      node = node.right;
      count++;
    }
    return count;
  }

  let leftHeight = getLeftHeight(root);
  let rightHeight = getRightHeight(root);

  if (leftHeight === rightHeight) {
    return 2 ** leftHeight - 1;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
};
