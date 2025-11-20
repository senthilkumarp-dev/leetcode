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
var maxLevelSum = function (root) {
  let ans = 1;
  let max = Number.MIN_SAFE_INTEGER;
  let queue = [];
  let currentLevel = 0;
  queue.push(root);
  while (queue.length > 0) {
    currentLevel++;
    let n = queue.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      sum += node.val;
    }
    if (sum > max) {
      max = sum;
      ans = currentLevel;
    }
  }
  return ans;
};
