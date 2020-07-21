/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  const len = nums.length
  let arr = []
  let min = len + 1
  let sum = 0
  for (let i = 0; i < len; i++) {
    arr.push(nums[i])
    sum += nums[i]
    while (sum >= s) {
      min = Math.min(arr.length, min) //数组的和大于s时，计算此时的最小个数
      sum -= arr[0] //开始滑动窗口，和减去数组内第一个值
      arr.shift() //删除数组第一个值
    }
  }
  return min == len + 1 ? 0 : min //如果不存在符合条件的子数组，返回 0，如果最小个数大于原数组长度，说明肯定不存在，就返回0
};