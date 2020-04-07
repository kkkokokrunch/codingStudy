function quick(arr) {
  // 递归结束
  if (arr.length <= 1) {
    return arr;
  }

  // 找到数组中间项，在原数组中把他移除
  let middleIndex = Math.floor(arr.length / 2);
  let middleValue = arr.splice(middleIndex, 1)[0];
  // 准备左右两个数组,循环剩下数组中的每一项，比middleValue小的放在左边数组，大的放在右边数组
  let arrLeft = [],
    arrRight = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    item < middleValue ? arrLeft.push(item) : arrRight.push(item);
  }
  return quick(arrLeft).concat(middleValue, quick(arrRight));
}

arr = [2, 5, 3, 88, 55];
console.log(quick(arr));
