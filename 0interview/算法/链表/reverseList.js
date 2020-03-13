var reverseList  = function(head) {
    let cur = head
    let pre = null
    while(cur != null) {
        let next = cur.next
        pre = cur.next
        pre = cur
        cur = next
    }
    return pre
}