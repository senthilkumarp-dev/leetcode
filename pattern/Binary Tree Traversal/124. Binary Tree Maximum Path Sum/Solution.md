# 124. Binary Tree Maximum Path Sum

## 🧾 Problem Statement

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can appear **only once** in the sequence.

> 🔸 The path **does not need to pass through the root**.  
> 🔸 The path **must contain at least one node**.

**Each path sum** is the sum of all node values in that path.

### ✅ You are given the `root` of a binary tree. Return the **maximum path sum** of any **non-empty** path.

---

## 💡 Intuition

At each node, we have two choices:

- Extend the path through **one** child (left or right) and return it to the parent.
- Or, form a **"V" shaped path** including both left and right children and **stop the path here**.

The key idea:

- At each node, compute the **max gain from the left** and **right**, but ignore any negative paths (i.e., use `Math.max(..., 0)`).
- Then, compute the **max path** using both sides and the current node:  
  `node.val + leftGain + rightGain`
- Keep track of the **maximum value globally**.

---

## 🚀 Approach

1. Perform **post-order DFS traversal** using a helper function.
2. At each node:
   - Recursively compute the max gain from the left and right child.
   - Discard negative gains.
   - Calculate the local max path sum using both left and right child + current node.
   - Update a global `result` if this local path sum is the new maximum.
   - Return to parent only the **max single path** (i.e., `node + max(left, right)`).

---

## ⏱️ Complexity

- **Time Complexity:**  
  $$O(n)$$  
  We visit each node once.

- **Space Complexity:**  
  $$O(h)$$  
  Where `h` is the height of the tree (due to recursion stack). In worst-case (skewed tree), $$O(n)$$.

---

## ✅ Code

```java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int result = Integer.MIN_VALUE;

    public int maxPathSum(TreeNode root) {
        helper(root);
        return result;
    }

    private int helper(TreeNode node) {
        if (node == null) return 0;

        // Recursively get the max gain from left and right subtrees
        int leftGain = Math.max(helper(node.left), 0);
        int rightGain = Math.max(helper(node.right), 0);

        // Path sum that includes the current node and both children
        int currentPathSum = node.val + leftGain + rightGain;

        // Update result if this path is the new maximum
        result = Math.max(result, currentPathSum);

        // Return the maximum gain to parent (only one side)
        return node.val + Math.max(leftGain, rightGain);
    }
}
```

```Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        res = root.val
        def helper( node) :
            nonlocal res
            if not node :
                return 0
            leftGain  = max(0,helper(node.left))
            rightGain = max(0 , helper(node.right))
            res =  max(res , node.val + leftGain + rightGain)
            return max(leftGain , rightGain) + node.val
        helper(root)
        return res
```

```Javascript []
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
var maxPathSum = function (root) {
  let result = root.val;
  function helper(node) {
    if (!node) {
      return 0;
    }
    let leftGain = Math.max(helper(node.left), 0);
    let rightGain = Math.max(helper(node.right), 0);
    let currentPathSum = node.val + leftGain + rightGain;
    result = Math.max(result, currentPathSum);
    return node.val + Math.max(leftGain, rightGain);
  }
  helper(root);
  return result;
};

```
