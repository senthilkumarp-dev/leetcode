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
