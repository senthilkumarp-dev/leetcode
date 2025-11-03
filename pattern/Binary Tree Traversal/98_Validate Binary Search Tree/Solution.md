# Intuition

A **Binary Search Tree (BST)** has a strict property:

- The value of every node must be **greater than all values in its left subtree** and **smaller than all values in its right subtree**.

So, to validate a BST, we need to ensure that **each node** satisfies this property.  
This can be done by recursively checking whether every node's value lies within a valid range (`min`, `max`).

---

# Approach

1. Use a recursive helper function `isValid(node, min, max)` that:

   - Returns `true` if the current node is `null` (base case).
   - Checks if `node.val` is within the valid range `(min, max)`.
   - Recursively validates:
     - Left subtree with range `(min, node.val)`
     - Right subtree with range `(node.val, max)`

2. Initialize recursion with the range `(-Infinity, Infinity)` for the root node.

3. If all nodes satisfy their valid range, the tree is a valid BST.

---

# Complexity

- **Time complexity:** `O(n)` — each node is visited once.
- **Space complexity:** `O(h)` — recursive call stack, where `h` is the height of the tree.

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
var isValidBST = function (root) {
  if (!root) return true;

  function isValid(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    );
  }

  return isValid(root, -Infinity, Infinity);
};
```
