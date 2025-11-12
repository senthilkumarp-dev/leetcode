# Intuition

The goal is to return the values of a binary tree in **level order traversal** — meaning we visit all nodes level by level, from top to bottom and left to right.

This can be naturally done using a **Breadth-First Search (BFS)** approach with a **queue**.  
Each level in the tree corresponds to one iteration of BFS.

---

# Approach

1. **Base Case:**

   - If the tree is empty (`root == null`), return an empty array.

2. **Initialization:**

   - Use a **queue** to keep track of nodes at each level.
   - Start by pushing the `root` node into the queue.

3. **Process Each Level:**

   - While the queue is not empty:
     - Find the number of nodes in the current level (`n = queue.length`).
     - Create an empty array `currLevelVal` to store node values of this level.
     - For each node in this level:
       - Remove the node from the queue.
       - Add its value to `currLevelVal`.
       - Push its left and right children into the queue (if they exist).
     - After finishing the level, push `currLevelVal` into the final result `res`.

4. **Return the Result:**
   - After all levels are processed, return `res`.

---

# Complexity

- **Time complexity:** `O(n)` — every node is visited once.
- **Space complexity:** `O(n)` — space used by the queue and the result array.

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
```
