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
var rightSideView = function (root) {
  let q = [];
  let res = [];
  if (root != null) {
    q.push(root);
  }

  while (q.length > 0) {
    let len = q.length;

    for (let i = 0; i < len; i++) {
      let node = q.shift();
      if (i == len - 1) {
        res.push(node.val);
      }

      // Enqueue left child
      if (node.left !== null) q.push(node.left);

      // Enqueue right child
      if (node.right !== null) q.push(node.right);
    }
  }
  return res;
};
