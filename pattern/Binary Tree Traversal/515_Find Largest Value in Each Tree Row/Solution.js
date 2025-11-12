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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];

  let queue = [root];
  let res = [];

  while (queue.length > 0) {
    let n = queue.length;
    let currMax = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      currMax = Math.max(currMax, node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(currMax);
  }

  return res;
};
