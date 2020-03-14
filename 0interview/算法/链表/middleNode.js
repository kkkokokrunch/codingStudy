/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let arr = []
    let cur = head
    while(cur) {
        arr.push(cur.val)
        cur = cur.next
    }
    return arr[Math.floor(arr.length/2)]
};