# Intuition

The goal is to perform an **inorder traversal** of a binary tree — that is, visit nodes in the order:  
**Left → Root → Right**.

This traversal can be implemented either **recursively** (simpler and more intuitive) or **iteratively** (using a stack to simulate recursion).

---

# Approach

### 🧠 Recursive Approach (Java)

1. If the current node is `null`, simply return.
2. Recursively visit the left subtree.
3. Add the node’s value to the result list.
4. Recursively visit the right subtree.

This uses the natural call stack to keep track of traversal order.

---

### ⚙️ Iterative Approach (JavaScript)

1. Use an explicit **stack** to simulate recursion.
2. Start from the root node:
   - Go as deep as possible into the left subtree, pushing nodes onto the stack.
   - When there’s no more left child, pop from the stack, visit the node, and move to its right subtree.
3. Repeat until all nodes are processed.

This avoids recursion and works efficiently for large trees.

---

# Complexity

- **Time complexity:** `O(n)` — Every node is visited once.
- **Space complexity:** `O(n)` — Due to the stack (explicit or implicit through recursion).

---

# Code (JavaScript - Iterative)

```javascript
var inorderTraversal = function (root) {
  let stack = [];
  let ans = [];
  let curr = root;

  while (curr != null || stack.length > 0) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }

  return ans;
};
```

# Code (Java - Recursive)

```java

class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> answer = new ArrayList<>();
        helper(root, answer);
        return answer;
    }
    public void helper(TreeNode node , List<Integer> answer){
        if(node == null){
            return;
        }
        helper(node.left,answer);
        answer.add(node.val);
        helper(node.right,answer);

    }
}
```
