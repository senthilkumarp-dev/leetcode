# Intuition

A binary tree is called **univalued** if **every node contains the same value**.  
Since we need to check _all_ nodes, the simplest idea is to traverse the entire tree and compare every node's value with the root’s value.

---

# Approach

1. If the tree is empty, it is trivially univalued → return `true`.
2. Store the root value (`val = root.val`), since all other nodes must match this.
3. Perform a **level order traversal (BFS)**:
   - Use a queue to process nodes.
   - For each node:
     - If `node.val` does **not** equal `val`, return `false` immediately.
     - Otherwise, continue adding its children to the queue.
4. If we finish BFS without any mismatch, return `true`.

---

# Complexity

- **Time complexity:** `O(n)` — we visit every node in the tree once.
- **Space complexity:** `O(n)` — queue can store nodes of the largest level.

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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true;

  let val = root.val;
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.val !== val) return false;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return true;
};
```
