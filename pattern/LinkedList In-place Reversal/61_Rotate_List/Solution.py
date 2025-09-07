# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:

        if not head or not head.next or  k==0:
            return head
        dummy = head;
        l = 1;
        while dummy.next:
            dummy = dummy.next
            l=l+1
        k = k%l
        print(k)
        if k==0:
            return head
        current = head
        for i in range (0 , l-k-1):
            current = current.next
        newHead = current.next
        current.next =None
        dummy.next = head
        return newHead