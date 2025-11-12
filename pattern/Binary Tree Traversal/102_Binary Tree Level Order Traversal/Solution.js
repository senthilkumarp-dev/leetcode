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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [];
  let res = [];
  queue.push(root);
  while (queue.length > 0) {
    let n = queue.length;
    let currLevelVal = [];
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      currLevelVal.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(currLevelVal);
  }
  return res;
};
