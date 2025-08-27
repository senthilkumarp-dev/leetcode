# 61. Rotate List

## Problem
Given the `head` of a linked list, rotate the list to the right by `k` places.

---

**Example 1:**  
Input: head = [1,2,3,4,5], k = 2  
Output: [4,5,1,2,3]  

**Example 2:**  
Input: head = [0,1,2], k = 4  
Output: [2,0,1]  

---

# Intuition
Rotating a linked list by `k` steps means shifting nodes to the right so that the last `k` nodes become the first part of the list.  
Instead of performing `k` separate rotations (which would be inefficient), we can calculate the **effective rotation** using the length of the list.

---

# Approach
1. If the list is empty, has one node, or `k = 0`, simply return `head`.  
2. Traverse the list to find its length `n` and keep a reference to the tail node.  
3. Compute `k = k % n` to handle cases where `k ≥ n` (full rotations).  
   - If `k == 0`, no rotation is needed.  
4. Traverse again to the `(n - k - 1)`th node.  
   - This node’s `next` will become the new head after rotation.  
5. Break the list at `(n - k - 1)` and connect the old tail to the old head.  
6. Return the new head.  

---

# Complexity
- **Time complexity:**  
  $$O(n)$$ — two traversals of the list.  
- **Space complexity:**  
  $$O(1)$$ — only a few pointers used.  

---

# Code
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) {
        return head;
    }

    // Step 1: Find length and tail
    let dummy = head;
    let n = 1;
    while (dummy.next) {
        dummy = dummy.next;
        n++;
    }

    // Step 2: Adjust k
    k = k % n;
    if (k === 0) return head;

    // Step 3: Find new head
    let current = head;
    for (let i = 0; i < n - k - 1; i++) {
        current = current.next;
    }

    // Step 4: Rearrange links
    let newHead = current.next;
    current.next = null;
    dummy.next = head;

    return newHead;
};

