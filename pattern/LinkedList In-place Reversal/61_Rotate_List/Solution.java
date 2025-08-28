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
    public ListNode rotateRight(ListNode head, int k) {
        if(k ==0 || head == null || head.next == null){
            return head;
        }
        ListNode dummy = head;
        int n = 1 ;
        while(dummy.next != null){
            dummy = dummy.next;
            n++; 
        }
        k = k%n;
        if(k == 0){
            return head;
        }
        ListNode current = head;
        for(int i = 0 ; i < n - k - 1 ; i++){
            current = current.next;
        }
        ListNode newHead = current.next;
        current.next = null;
        dummy.next = head;
        return newHead;

    }
}
