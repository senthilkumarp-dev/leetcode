/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let k = lists.length;
  let dummyNode = new ListNode(0);
  let head = dummyNode;
  while (k) {
    let curr = Number.MAX_SAFE_INTEGER;
    let idx = -1;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i]) {
        if (lists[i].val < curr) {
          curr = lists[i].val;
          idx = i;
        }
      }
    }
    if (idx == -1) break;

    head.next = lists[idx];
    head = head.next;
    lists[idx] = lists[idx].next;
    if (!lists[idx]) {
      k--;
    }
  }
  return dummyNode.next;
};
