# Intuition

We are given a linked list and an array of numbers.  
We need to **remove all nodes from the linked list whose values exist in the given array**.

The simplest way to check efficiently if a node’s value should be deleted is to store the array elements in a **Set** — since lookup in a set takes `O(1)` time.

---

# Approach

1. Convert the array `nums` into a **Set** for fast value lookup.
2. Use a **dummy node** before the head to handle edge cases (like deleting the first node).
3. Traverse the linked list using two pointers:
   - `curr` → current node we’re checking.
   - `prev` → the node before `curr`.
4. For each node:
   - If `curr.val` is in the set, **skip** it by linking `prev.next` to `curr.next`.
   - Otherwise, **move `prev` forward**.
5. Continue until the end of the list.
6. Return `dummy.next` as the new head of the modified list.

---

# Complexity

- **Time complexity:** `O(n + m)`
  - `n` → number of nodes in the linked list
  - `m` → number of elements in `nums`  
    (We convert `nums` to a set and traverse the list once)
- **Space complexity:** `O(m)` — space used by the set.

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
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  const dummy = new ListNode(0, head);
  let curr = head;
  let prev = dummy;
  let removeSet = new Set(nums);

  while (curr) {
    if (removeSet.has(curr.val)) {
      prev.next = curr.next; // Skip current node
    } else {
      prev = prev.next; // Move forward
    }
    curr = curr.next;
  }

  return dummy.next;
};
```
