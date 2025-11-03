# Intuition

The problem represents two non-negative integers where each digit is stored in **reverse order** in a linked list.  
We need to simulate **digit-by-digit addition**, similar to how we add numbers by hand — from **least significant digit to most significant digit**, carrying over any overflow.

---

# Approach

1. Create a dummy node (`dummy`) to make list construction easier.
2. Initialize a variable `carry = 0` to hold the carry value during addition.
3. Traverse both linked lists (`l1` and `l2`) simultaneously:
   - Extract values from current nodes (use `0` if a list is shorter).
   - Compute `sum = carry + val1 + val2`.
   - Update `carry = Math.floor(sum / 10)`.
   - Create a new node with value `sum % 10` and link it to the result list.
4. Move both list pointers (`l1` and `l2`) forward.
5. After the loop, if a carry remains (e.g., 1 in 999 + 1), add an extra node.
6. Return `dummy.next` (head of the new list).

---

# Complexity

- **Time complexity:** `O(max(m, n))` — where `m` and `n` are the lengths of the two linked lists.  
  Each node is visited once.
- **Space complexity:** `O(max(m, n))` — for the output linked list.

---

# Code

```javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};
```
