# Intuition

In this problem, we need to find the **largest value in each row (level)** of a binary tree.  
This is a classic **level order traversal (BFS)** problem — where we process nodes level by level.  
At each level, we track the **maximum value** among all nodes.

---

# Approach

1. **Base Case:**

   - If the root is `null`, return an empty array (no levels to process).

2. **Use a Queue (BFS):**

   - Initialize a queue and push the root node.
   - For every level:
     - Determine the number of nodes (`n`) in that level (queue size).
     - Initialize `currMax` as the smallest possible number.
     - For each node in that level:
       - Update `currMax` with the maximum of `currMax` and `node.val`.
       - Add its children (if any) to the queue.
     - After processing all nodes in that level, push `currMax` to the result array.

3. **Return the result array** after processing all levels.

---

# Complexity

- **Time complexity:** `O(n)` — each node is visited once.
- **Space complexity:** `O(w)` — where `w` is the maximum width of the tree (queue size at the widest level).

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
```
