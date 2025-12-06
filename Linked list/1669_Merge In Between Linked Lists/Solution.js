/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let dummy = new ListNode(0);
    dummy.next = list1;
    // Find node just before index a
    let prevA = dummy;
    for (let i = 0; i < a; i++) {
        prevA = prevA.next;
    }

    // Find node at index b
    let afterB = prevA;
    for (let i = a; i <= b; i++) {
        afterB = afterB.next;
    }

    // Connect prevA to list2
    prevA.next = list2;

    // Traverse to end of list2
    while (list2.next) {
        list2 = list2.next;
    }

    // Connect tail of list2 to node after b
    list2.next = afterB.next;
    return dummy.next;
};
