//二分查找，适用于有序数组查找

//1.递归
function binarySearch(arr, flag, Start, End) {
  let end = End || arr.length - 1
  let start = Start || 0
  let m = Math.floor((start + end) / 2)
  if (arr[m] == flag) {
    return m
  }
  if (flag < arr[m]) {
    return binarySearch(arr, flag, 0, m - 1)
  } else {
    return binarySearch(arr, flag, m + 1, end)
  }
  return false
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
};