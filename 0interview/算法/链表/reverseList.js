var reverseList = function (head) {
    let cur = head //cur==1
    let pre = null //pre==null
    while (cur != null) {
        let next = cur.next
        cur.next = pre
        pre = cur //这一步和下面一步是三个指针往后移动的过程
        cur = next
    }
    return pre
}

//null<-1  next=2->3