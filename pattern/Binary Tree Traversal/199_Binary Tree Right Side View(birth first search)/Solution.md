# Intuition

The problem asks us to return the nodes visible from the **right side** of a binary tree.  
If you look at the tree level by level (like a BFS traversal), the **last node at each level** will be visible from the right side.  
So, we need to collect the **last node value** from every level of the tree.

---

# Approach

1. Use **Level Order Traversal (BFS)** with a queue.
2. For each level:
   - Iterate through all nodes in that level.
   - Keep track of the **last node** in that level (the one processed last).
   - Add its value to the result array.
3. For each node, push its **left and right children** into the queue for the next level.
4. Continue until all levels are processed.

---

# Complexity

- **Time complexity:** `O(n)` — every node is visited once.
- **Space complexity:** `O(n)` — due to the queue storing nodes at each level.

---

# Code

```javascript []
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

      // The last node in each level (rightmost)
      if (i == len - 1) {
        res.push(node.val);
      }

      // Enqueue children
      if (node.left !== null) q.push(node.left);
      if (node.right !== null) q.push(node.right);
    }
  }

  return res;
};
```
