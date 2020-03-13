/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let right = head
    for(let i = 0;i < k;i++) {
        if(right == null) return null
        right = right.next
    }
    let left = head
    while(right) {
        left = left.next
        right = right.next
    }
    return left
};
