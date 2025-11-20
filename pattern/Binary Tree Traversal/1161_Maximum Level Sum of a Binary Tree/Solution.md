# Intuition

Each level of the binary tree contains some nodes, and each node has a value.  
We need to find **which level has the maximum total sum of values**.

Since levels are naturally processed using **Breadth-First Search (BFS)**, we can easily traverse level by level and track the sum for each one.

---

# Approach

1. Use a **queue** to perform level-order traversal (BFS).
2. Maintain:
   - `currentLevel` → tracks which level we are on.
   - `max` → highest sum encountered so far.
   - `ans` → the level number with the highest sum.
3. For each level:
   - Compute the sum of all node values in that level.
   - If this sum is greater than `max`, update `max` and record the level number in `ans`.
4. Continue BFS until all levels are processed.
5. Return `ans`.

---

# Complexity

- **Time complexity:** `O(n)` — every node is processed exactly once.
- **Space complexity:** `O(n)` — queue may store up to one entire level of the tree.

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
 * @return {number}
 */
var maxLevelSum = function (root) {
  let ans = 1;
  let max = Number.MIN_SAFE_INTEGER;
  let queue = [root];
  let currentLevel = 0;

  while (queue.length > 0) {
    currentLevel++;
    let n = queue.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (sum > max) {
      max = sum;
      ans = currentLevel;
    }
  }

  return ans;
};
```
