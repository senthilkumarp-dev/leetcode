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
