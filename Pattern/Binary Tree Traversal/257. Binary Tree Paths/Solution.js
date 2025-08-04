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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let path = "";
  let result = [];
  helper(root, path, result);
  return result;
};

function helper(node, path, result) {
  path += node.val;
  if (node.left == null && node.right == null) {
    result.push(path);
    return;
  }
  path += "->";
  if (node.left) {
    helper(node.left, path, result);
  }
  if (node.right) {
    helper(node.right, path, result);
  }
}
