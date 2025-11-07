# Intuition

In a binary tree, the **Lowest Common Ancestor (LCA)** of two nodes `p` and `q` is the **deepest node** that has both `p` and `q` as descendants.  
To find this, we can use recursion to traverse the tree and check where both nodes exist.

---

# Approach

1. **Base case:**

   - If the current node (`root`) is `null`, there’s no ancestor here → return `null`.
   - If `root` is equal to `p` or `q`, then we’ve found one of the nodes → return `root`.

2. **Recursive case:**

   - Recursively search for `p` and `q` in the **left** and **right** subtrees.
   - Let `left` and `right` store the returned nodes.

3. **Decision logic:**
   - If both `left` and `right` are not `null`, it means `p` and `q` are found in **different subtrees**, so `root` is their **lowest common ancestor**.
   - If only one side returns a node (non-null), return that side — it means both `p` and `q` are in that subtree.
   - If both are `null`, return `null`.

---

# Complexity

- **Time complexity:** `O(n)` — we visit each node once.
- **Space complexity:** `O(h)` — recursion stack height, where `h` is the tree height.

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
  // Base case
  if (!root || root === p || root === q) return root;

  // Recursive search in left and right subtrees
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // If both sides found a node, current root is the LCA
  if (left && right) return root;

  // Otherwise, return the non-null node (either left or right)
  return left ?? right;
};
```
