# Intuition

In a **complete binary tree**, every level except possibly the last is completely filled, and all nodes in the last level are as far left as possible.  
Instead of counting all nodes one by one, we can use the **structure of the tree** to count faster:

- If the **left and right subtree heights** are equal, the subtree is a **perfect binary tree**, and we can directly calculate its node count using the formula `2^height - 1`.
- Otherwise, we recursively count the nodes in the left and right subtrees.

---

# Approach

1. Define two helper functions:
   - `getLeftHeight(node)` — counts how deep the leftmost path goes.
   - `getRightHeight(node)` — counts how deep the rightmost path goes.
2. If both heights are equal:
   - The subtree is perfect, so return `(2^height) - 1`.
3. If not:
   - Recursively count nodes in the left and right subtrees and add `1` for the current node.
4. This avoids traversing every single node in perfect subtrees, making it faster than a simple DFS.

---

# Complexity

- **Time complexity:** `O((log n)^2)` — each level computes heights in `O(log n)` and recurses for `O(log n)` levels.
- **Space complexity:** `O(log n)` — due to recursive stack depth in a balanced tree.

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
var countNodes = function (root) {
  if (!root) return 0;

  function getLeftHeight(node) {
    let count = 0;
    while (node) {
      node = node.left;
      count++;
    }
    return count;
  }

  function getRightHeight(node) {
    let count = 0;
    while (node) {
      node = node.right;
      count++;
    }
    return count;
  }

  let leftHeight = getLeftHeight(root);
  let rightHeight = getRightHeight(root);

  if (leftHeight === rightHeight) {
    return 2 ** leftHeight - 1;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
};
```
