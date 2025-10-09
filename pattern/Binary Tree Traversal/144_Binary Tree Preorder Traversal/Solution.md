# Intuition
In preorder traversal, we visit nodes in the order:  
**Root → Left → Right**.  
So, for each node, we first record its value, then traverse its left subtree, and finally the right subtree.

---

# Approach
1. Create an empty result array `res` to store the traversal order.  
2. Use a recursive helper function that:  
   - Returns if the current node is `null`.  
   - Pushes the node’s value to `res`.  
   - Recursively calls itself for the left child and then the right child.  
3. Return the `res` array after the traversal completes.

---

# Complexity
- **Time complexity:** $$O(n)$$ — each node is visited once.  
- **Space complexity:** $$O(h)$$ — recursion stack space (where `h` is tree height).

---

# Code
```javascript []
var preorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
};

var helper = function(node, arr) {
    if (node == null) return;
    arr.push(node.val);
    helper(node.left, arr);
    helper(node.right, arr);
};
