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