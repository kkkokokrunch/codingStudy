/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let cur = head
    let arr = []
    while(cur) {
        arr.push(cur.val)
        cur = cur.next
    }
    for(let i = 0;i < arr.length;i++) {
        arr1.push(arr[i])
    }
    if(arr.reverse().join('') == arr1.join('')) {
        return true
    }else {
        return false
    }
};

