# 206. Reverse Linked List

**Difficulty:** Easy  
[LeetCode Problem Link](https://leetcode.com/problems/reverse-linked-list/)

---

## 🧠 Intuition

Reversing a linked list means changing the direction of the `next` pointers so that each node points to its previous node instead of the next.

A **recursive approach** handles this problem elegantly by reversing the list as we return from recursive calls.

---

## 🛠️ Approach

1. Define a helper function that takes two parameters:

   - `curr`: The current node being processed.
   - `prev`: The previous node (used to reverse the pointer).

2. **Base case:**  
   If `curr` is `None`, return `prev` because the recursion has reached the end of the list.

3. **Recursive case:**

   - Save `curr.next` in `nextNode`.
   - Reverse the link: set `curr.next` to `prev`.
   - Move `prev` and `curr` forward by calling `helper(nextNode, curr)`.

4. The initial call starts with `curr = head` and `prev = None`.

---

## ⏱️ Complexity

- **Time Complexity:**  
  $$O(n)$$ — Each node is visited exactly once.

- **Space Complexity:**  
  $$O(n)$$ — Due to recursion stack.

---

## ✅ Solution

```python []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        return self.helper(head, None)

    def helper(self, curr, prev):
        if curr is None:
            return prev

        nextNode = curr.next   # Save next node
        curr.next = prev       # Reverse the pointer
        return self.helper(nextNode, curr)
```

```java []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
     return helper(head,null);
    }
   public static ListNode helper(ListNode curr,ListNode prev){

     if(curr==null){
        return prev;
     }
     ListNode next = curr.next;
     curr.next=prev;
     prev = curr;
     return helper(next,prev);
   }
}
```

```javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  return helper(head, null);
};

helper = (curr, prev) => {
  if (curr == null) {
    return prev;
  }
  let next = curr.next;
  curr.next = prev;
  prev = curr;
  return helper(next, prev);
};
```
