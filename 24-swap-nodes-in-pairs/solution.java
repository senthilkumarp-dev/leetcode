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