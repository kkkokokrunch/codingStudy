/**
 * @param {number[]} nums
 * @return {number}
 */
//利用哈希表记录
var findRepeatNumber = function(nums) {
  let map = {}
  for(let i of nums) { //for of遍历的是值
    if(!map[i]) {
      map[i] = true
    }else {
      return i
    }
  }
};