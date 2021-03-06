function insert(arr) {
  // 准备一个新数组，用来存储抓到手里的牌
  let handle = [];
  handle.push(arr[0]);
  //从第二项开始依次抓牌,直到抓完
  for (let i = 1; i < arr.length; i++) {
    // A是新抓的牌
    let A = arr[i];
    // 和handle手里的牌依次比较，从后向前
    for (let j = handle.length - 1; j >= 0; j--) {
      let B = handle[j];
      if (A > B) {
        handle.splice(j + 1, 0, A);
        break;
      }
      if (j === 0) {
        handle.unshift(A);
      }
    }
  }
  return handle;
}

arr = [2, 5, 3, 66, 55];
console.log(insert(arr));
