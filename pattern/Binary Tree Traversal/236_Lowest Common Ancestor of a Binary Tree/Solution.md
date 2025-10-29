# Intuition

In a binary tree, the **Lowest Common Ancestor (LCA)** of two nodes `p` and `q` is the lowest node that has both `p` and `q` as descendants (a node can be a descendant of itself).  
We can use **recursion** to explore both subtrees and find where `p` and `q` exist.

---

# Approach

1. If the current node (`root`) is `null`, or matches either `p` or `q`, return it — because we’ve either reached the end or found one of the target nodes.
2. Recursively search for `p` and `q` in the **left** and **right** subtrees.
3. If both subtrees return a non-null value, it means `p` is in one subtree and `q` in the other — hence the current `root` is the **LCA**.
4. Otherwise, return the non-null result — whichever subtree contains `p` or `q`.

---

# Complexity

- **Time complexity:** `O(n)` — we visit every node once.
- **Space complexity:** `O(h)` — recursion stack space, where `h` is the height of the tree.

---

# Code

```javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
};
```
