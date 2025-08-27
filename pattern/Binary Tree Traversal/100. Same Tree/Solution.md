# 100. Same Tree

## Problem

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.  
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

**Example 1:**  
Input: p = [1,2,3], q = [1,2,3]  
Output: true

**Example 2:**  
Input: p = [1,2], q = [1,null,2]  
Output: false

**Constraints:**

- The number of nodes in both trees is in the range [0, 100].
- `-10^4 <= Node.val <= 10^4`

---

# Intuition

To determine if two binary trees are the same:

- Both must have identical structure (same arrangement of left and right children).
- Corresponding nodes must have the same values.

This naturally suggests a **recursive approach** where we compare nodes in parallel.

---

# Approach

1. If both nodes are `null`, return `true` (both are empty at this point).
2. If one is `null` and the other is not, return `false` (different structure).
3. If both are non-null:
   - Check if their values are equal.
   - Recursively check their left children.
   - Recursively check their right children.
4. Return `true` only if **all checks pass**.

---

# Complexity

- **Time complexity:**  
  $$O(n)$$ — where `n` is the number of nodes in the smaller tree (or both if same size), since each node is visited once.
- **Space complexity:**  
  $$O(h)$$ — where `h` is the height of the tree (due to recursive call stack).  
  In the worst case (skewed tree), $$h = n$$.

---

# Code

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
    // preorder or dfs
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if(p==null && q == null) return true;
        if( p == null || q == null) return false;

        return (p.val == q.val) && isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
    }
}
```

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  return (
    p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  );
};
```

```Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if p == None and q == None:
            return True
        if p == None or q == None:
            return False
        return (p.val == q.val) and self.isSameTree(p.left,q.left) and self.isSameTree(p.right,q.right)
```
