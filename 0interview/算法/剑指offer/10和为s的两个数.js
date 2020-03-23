/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 碰撞指针
var twoSum = function(nums, target) {
  let l = 0,r = nums.length-1
  let res = []
  while (l < r) {
    let sum = nums[l]+nums[r]
    if(sum === target) {
      res.push(nums[l])
      res.push(nums[r])
      break
    }else if(sum < target) {
      l++
    }else {
      r--
    }
  }
  return res
};

arr = [1,2,3,5,6]
console.log(twoSum(arr,7))