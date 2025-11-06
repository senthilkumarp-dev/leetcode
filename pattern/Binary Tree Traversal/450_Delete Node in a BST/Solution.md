# Intuition

In a Binary Search Tree (BST), all nodes in the left subtree are smaller, and all nodes in the right subtree are larger than the root.  
To delete a node, we need to find the node with the given key and then adjust the tree to maintain BST properties.

---

# Approach

1. **Search for the node**:

   - If `key < root.val`, go to the **left** subtree.
   - If `key > root.val`, go to the **right** subtree.
   - If `key == root.val`, we’ve found the node to delete.

2. **Handle the deletion**:

   - **Case 1:** Node has **no left child** → return `root.right`.
   - **Case 2:** Node has **no right child** → return `root.left`.
   - **Case 3:** Node has **two children**:
     - Find the **smallest node** in the right subtree (inorder successor).
     - Replace the current node’s value with that minimum value.
     - Recursively delete that minimum node from the right subtree.

3. Return the (possibly updated) `root`.

---

# Complexity

- **Time complexity:** `O(h)` — where `h` is the height of the tree.  
  In a balanced BST, this is `O(log n)`. In the worst case (skewed tree), it becomes `O(n)`.
- **Space complexity:** `O(h)` — due to recursive call stack.

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Node found
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Find inorder successor (minimum in right subtree)
    let minNode = findRightMin(root.right);
    root.val = minNode.val;

    // Delete the inorder successor
    root.right = deleteNode(root.right, minNode.val);
  }

  return root;
};

// Helper to find minimum node in right subtree
function findRightMin(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
```
