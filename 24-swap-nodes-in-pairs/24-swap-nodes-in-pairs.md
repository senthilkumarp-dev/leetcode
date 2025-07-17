# 24. Swap Nodes in Pairs

**Difficulty:** Medium  
[LeetCode Problem Link](https://leetcode.com/problems/swap-nodes-in-pairs/)

---

## 🧠 Intuition

The problem asks to swap every two adjacent nodes in a linked list **without modifying the node values**.  
A direct way to solve this is by **manipulating the `next` pointers** of the nodes.

To handle the edge cases (like swapping at the head), we can use a **dummy node** that points to the head of the list. This simplifies the pointer manipulation.

---

## 🛠️ Approach

1. **Create a dummy node** pointing to the head of the list to simplify pointer handling at the beginning.
2. Use two pointers:
   - `prev`: Points to the node before the current pair.
   - `curr`: Points to the first node in the current pair.
3. Iterate through the list while `curr` and `curr.next` exist:
   - Save `curr.next.next` in `temp` (next pair's starting node).
   - Swap the current pair:
     - Point `curr.next` to `temp`.
     - Point `prev.next` to `curr.next` (second node in the pair).
     - Set `curr.next.next` to `curr` (first node becomes second).
4. Move `prev` to `curr` (which is now the second node after the swap).
5. Move `curr` to `temp` to process the next pair.
6. Return `dummy.next` as the new head.

---

## ⏱️ Complexity

- **Time Complexity:**  
  $$O(n)$$ — Each node is visited exactly once.

- **Space Complexity:**  
  $$O(1)$$ — Constant extra space (no recursion or additional data structures used).

---

## Solution

```python []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not (head and head.next):
            return head

        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        curr = head

        while curr and curr.next:
            temp = curr.next.next

            second = curr.next
            curr.next = temp
            second.next = curr
            prev.next = second

            prev = curr
            curr = temp

        return dummy.next

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
    public ListNode swapPairs(ListNode head) {
        if(head==null || head.next == null) return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        ListNode curr = head;

        while(curr!=null && curr.next !=null){
           ListNode npn = curr.next.next;
           ListNode second = curr.next;

           second.next = curr;

           prev.next = second ;
           curr.next = npn;
           prev = curr;

           curr = npn;
        }

        return dummy.next;
    }
}
```
