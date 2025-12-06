/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let curr =  dummy;
    while(list1 && list2){
        let l1 = list1.val;
        let l2 = list2.val;
        if(l1<l2){
            let temp1 =  list1.next;
            curr.next = list1;
            curr = curr.next;
             list1 = temp1;
        }else{
            let temp2 =  list2.next;
            curr.next = list2;
            curr = curr.next;
            list2 = temp2;
        }

    }
    while(list1){
        let temp = list1.next;
        curr.next = list1
        curr = curr.next;
        list1 = temp
    }
    while(list2){
        let temp = list2.next;
        curr.next = list2;
        curr = curr.next;
        list2 = temp
    }
    return dummy.next
};
